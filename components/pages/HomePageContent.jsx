'use client';

import { sendProjectZip, sendRepoUrl } from "@/actions/documentation";
import RepoLinkForm from "../RepoForm/repoLinkForm";
import ZipFileForm from "../ZipFileForm/zipfileForm";
import { useState } from "react";

export default function HomePageContent() {

    const [activeTab, setActiveTab] = useState('repo');
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
              onClick={() => setActiveTab('repo')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'repo'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Repository Link
              </div>
            </button>
            <button
              onClick={() => setActiveTab('zip')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'zip'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Zip File
              </div>
            </button>
          </div>
        </div>
         <div className="transition-all duration-300">
            {activeTab === 'repo' ? (
              <RepoLinkForm action={sendRepoUrl} />
            ) : (
              <ZipFileForm action={sendProjectZip} />
            )}
          </div>
      </div>
    </div>
  );
}
