'use server';

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
