"use client";

import { useActionState, useEffect, useState } from "react";
import FormButton from "./formButton";
import { useRouter } from "next/navigation";
import { usePreview } from "@/context/PreviewContext";
import { useDropzone } from "react-dropzone";

export default function ZipFileForm({ action }) {
  const [state, formAction] = useActionState(action, {});
  const [selectedFile, setSelectedFile] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/zip": [".zip"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
      }
    },
  });
  const router = useRouter();
  const { setContent } = usePreview();

  useEffect(() => {
    if (state.docs) {
      setContent(state.docs);
      router.push("/preview");
    }
  }, [state.docs, setContent, router]);

  const handleSubmit = (formData) => {
    if (selectedFile) {
      formData.set("zipFile", selectedFile);
    }
    formAction(formData);
  };

  return (
    <div className="w-full">
      <form
        action={handleSubmit}
        className="glass-effect rounded-2xl p-8 space-y-6 w-full"
      >
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Upload Project Zip File
          </label>
          <div
            {...getRootProps()}
            className={`w-full px-4 py-12 border-2 border-dashed rounded-xl transition-all outline-none bg-white/50 backdrop-blur-sm cursor-pointer flex flex-col items-center justify-center gap-3 group ${
              isDragActive
                ? "border-indigo-500 bg-indigo-50/50"
                : "border-gray-300 hover:border-indigo-400"
            }`}
          >
            <input {...getInputProps({ name: "zipFile" })} />
            <svg
              className={`w-12 h-12 transition-colors ${
                isDragActive
                  ? "text-indigo-500"
                  : "text-gray-400 group-hover:text-indigo-500"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            {isDragActive ? (
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600">
                  Drop the file here...
                </p>
              </div>
            ) : selectedFile ? (
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Click or drag to change file
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm text-gray-600 font-semibold">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  ZIP files only (Max 50MB)
                </p>
              </div>
            )}
          </div>
          {state.error && <p className="text-sm text-red-500">{state.error}</p>}
        </div>
        <FormButton hasFile={!!selectedFile} />
        <p className="text-sm text-amber-600 flex items-start gap-2">
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            AI can generate wrong or incomplete documentation. Please review
            carefully.
          </span>
        </p>
      </form>
    </div>
  );
}
