"use server";

const TIMEOUT = 180000; // 3 minutes timeout for documentation generation

function createTimeoutPromise(timeout) {
  return new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error("Request timeout: Documentation generation took too long")),
      timeout
    )
  );
}

export async function sendRepoUrl(prevState, formData) {
  const link = formData.get("link");
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const response = await fetch("http://localhost:3000/generate-docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      return { error: `Backend error: ${response.status}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    
    if (error.name === "AbortError") {
      return { 
        error: "Request timeout: Documentation generation is taking longer than expected. Your backend might be processing a large repository or experiencing issues." 
      };
    }
    
    return { 
      error: error.message || "Failed to generate documentation" 
    };
  }
}

export async function sendProjectZip(prevState, formData) {
  const zipFile = formData.get("zipFile");

  if (!zipFile || zipFile.size === 0) {
    return { error: "No file selected" };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const uploadFormData = new FormData();
    uploadFormData.append("file", zipFile);

    const response = await fetch("http://localhost:3000/generate-zip-docs", {
      method: "POST",
      body: uploadFormData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      return { error: `Backend error: ${response.status}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    
    if (error.name === "AbortError") {
      return { 
        error: "Request timeout: Documentation generation is taking longer than expected. Your backend might be processing a large project or experiencing issues." 
      };
    }
    
    return { 
      error: error.message || "Failed to process zip file" 
    };
  }
}
