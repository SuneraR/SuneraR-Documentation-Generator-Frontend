"use server";

export async function sendRepoUrl(prevState, formData) {
  const link = formData.get("link");
  try {
    const response = await fetch("http://localhost:3000/generate-docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function sendProjectZip(prevState, formData) {
  const zipFile = formData.get("zipFile");

  if (!zipFile || zipFile.size === 0) {
    return { error: "No file selected" };
  }

  try {
    const uploadFormData = new FormData();
    uploadFormData.append("file", zipFile); 

    const response = await fetch("http://localhost:3000/generate-zip-docs", {
      method: "POST",
      body: uploadFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message || "Failed to process zip file" };
  }
}
