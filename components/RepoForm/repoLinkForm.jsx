'use client';

import { useActionState } from "react";
import FormButton from "./formButton";

export default function RepoLinkForm({ action }) {
  const [state, formAction] = useActionState(action, {});
  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center gap-3 border w-[500px] py-7 px-5 rounded-md shadow-md"
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
     {state.docs&&(
      <p>{state.docs}</p>
     )}
    </form>
  );
}
