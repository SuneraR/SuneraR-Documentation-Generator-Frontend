"use client";

import { SaveIcon } from "lucide-react";
import { useState } from "react";

export default function EditForm({ initialContent, onSave, onCancel }) {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Edit Documentation
        </h2>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold flex items-center gap-2"
          >
            <SaveIcon className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-[600px] px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 font-mono text-sm resize-none"
        placeholder="Enter your markdown content here..."
      />
      <p className="text-sm text-gray-500">
        Tip: You can use Markdown syntax to format your documentation.
      </p>
    </div>
  );
}
