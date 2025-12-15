"use client";

import { useActionState, useEffect } from "react";
import FormButton from "./formButton";
import { useRouter } from "next/navigation";
import { usePreview } from "@/context/PreviewContext";
import { AlertCircle } from "lucide-react";

export default function RepoLinkForm({ action }) {
  const [state, formAction] = useActionState(action, {});
  const router=useRouter();
  const {setContent}=usePreview();

  useEffect(() => {
    if (state.docs) {
      setContent(state.docs);
      router.push('/preview');
    }
  }, [state.docs, setContent, router]);
  return (
    <div className="w-full">
      <form
        action={formAction}
        className="glass-effect rounded-2xl p-8 space-y-6 w-full"
      >
        <div className="space-y-3">
          <label 
            htmlFor="repoUrl" 
            className="block text-sm font-semibold text-gray-700"
          >
            GitHub Repository URL
          </label>
          <input
            type="text"
            placeholder="https://github.com/username/repository"
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 placeholder:text-gray-400"
            name="link"
            id="repoUrl"
          />
        </div>
        <FormButton />
        <p className="flex items-center gap-2 justify-center text-sm text-red-500"><AlertCircle />AI can be generate wrong or incomplete documentation. Please review carefully.</p>
      </form>
    </div>
  );
}
