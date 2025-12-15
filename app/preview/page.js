"use client";

import DocsPreview from "@/components/DocsPreview";
import EditForm from "@/components/editForm";
import { usePreview } from "@/context/PreviewContext";
import { downloadReadme } from "@/utils/downloadHelper";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PreviewPage() {
  const [isEditing, setIsEditing] = useState(false);
  const { content, setContent } = usePreview();
  const router = useRouter();
  if (!content) {
    return router.push("/");
  }

  function downloadReadmeFile() {
    downloadReadme(content);
  }

  const handleSave = (newContent) => {
    setContent(newContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  const navigateBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-effect rounded-2xl p-6 sticky top-4 z-10">
          <div className="flex flex-row items-center justify-center gap-4">
            <ArrowLeft
              onClick={navigateBack}
              className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-all duration-200"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
              Generated Documentation
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
            )}
            <button
              onClick={downloadReadmeFile}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold whitespace-nowrap"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download README
            </button>
          </div>
        </div>
        <div className="glass-effect rounded-2xl p-8 overflow-hidden">
          {isEditing ? (
            <EditForm
              initialContent={content}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <DocsPreview docs={content} />
          )}
        </div>
      </div>
    </div>
  );
}
