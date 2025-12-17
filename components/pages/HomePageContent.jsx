"use client";

import { sendProjectZip, sendRepoUrl } from "@/actions/documentation";
import RepoLinkForm from "../RepoForm/repoLinkForm";
import ZipFileForm from "../ZipFileForm/zipfileForm";
import { useState } from "react";
import { Link, UploadCloudIcon } from "lucide-react";

export default function HomePageContent() {
  const [activeTab, setActiveTab] = useState("repo");
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Documentation Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Transform your GitHub repository or project ZIP file into
            comprehensive, beautiful documentation instantly.
          </p>
          <div className="flex gap-2 mb-6 bg-gray-100 p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab("repo")}
              disabled={isProcessing}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "repo"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center justify-center gap-2">
                <Link className="w-5 h-5" />
                Repository Link
              </div>
            </button>
            <button
              onClick={() => setActiveTab("zip")}
              disabled={isProcessing}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "zip"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center justify-center gap-2">
                <UploadCloudIcon className="w-5 h-5"/>
                Upload Zip File
              </div>
            </button>
          </div>
        </div>
        <div className="transition-all duration-300">
          {activeTab === "repo" ? (
            <RepoLinkForm action={sendRepoUrl} setIsProcessing={setIsProcessing} />
          ) : (
            <ZipFileForm action={sendProjectZip} setIsProcessing={setIsProcessing} />
          )}
        </div>
      </div>
    </div>
  );
}
