'use client';

import { LoaderCircleIcon, Zap } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const formStatus = useFormStatus();
  return (
    <button
      disabled={formStatus.pending}
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {formStatus.pending ? (
        <>
          {/* <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> */}
          <LoaderCircleIcon className="animate-spin h-5 w-5"/>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Zap className="w-5 h-5"/>
          <span>Generate Documentation</span>
        </>
      )}
    </button>
  );
}
