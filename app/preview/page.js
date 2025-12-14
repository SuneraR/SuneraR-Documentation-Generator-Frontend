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
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-effect rounded-2xl p-6 sticky top-4 z-10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
            Generated Documentation
          </h1>
          <button
            onClick={downloadReadmeFile}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download README
          </button>
        </div>
        <div className="glass-effect rounded-2xl p-8 overflow-hidden">
          <DocsPreview docs={content} />
        </div>
      </div>
    </div>
  );
}
