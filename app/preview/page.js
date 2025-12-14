"use client";


import DocsPreview from "@/components/DocsPreview";
import { usePreview } from "@/context/PreviewContext";
import { downloadReadme } from "@/utils/downloadHelper";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const { content } = usePreview();
  const router = useRouter();
  if (!content) {
    return router.push("/");
  }

  function downloadReadmeFile() {
    downloadReadme(content);
  }

  return (
    <div className="flex flex-col gap-5 bg-white max-w-7xl mx-auto">
      <DocsPreview docs={content} />
      <button
        onClick={downloadReadmeFile}
        className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Download README
      </button>
    </div>
  );
}
