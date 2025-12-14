"use client";

import { useActionState, useEffect } from "react";
import FormButton from "./formButton";
import { useRouter } from "next/navigation";
import { usePreview } from "@/context/PreviewContext";

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
    <div className="flex flex-col gap-6">
      <form
        action={formAction}
        className="flex flex-col justify-center items-center gap-3 border w-125 py-7 px-5 rounded-md shadow-md"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="repoUrl">GitHub Repository URL:</label>
          <input
            type="text"
            className="border rounded-sm p-1"
            name="link"
            id="repoUrl"
          />
        </div>
        <FormButton />
      </form>
    </div>
  );
}
