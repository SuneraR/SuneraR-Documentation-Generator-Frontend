export async function downloadReadme(docs) {
  const res = await fetch("http://localhost:3000/download-readme", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ docs }),
  });

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "README.md";
  a.click();

  window.URL.revokeObjectURL(url);
}
