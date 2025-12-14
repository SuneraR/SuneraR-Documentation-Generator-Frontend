'use client';

import { useFormStatus } from "react-dom";

export default function FormButton() {
  const formStatus = useFormStatus();
  return (
    <button
      disabled={formStatus.pending}
      type="submit"
      className="bg-gray-600 hover:bg-black text-white w-3xs px-2.5 py-2 font-semibold rounded-sm"
    >
      {formStatus.pending ? "Generating..." : "Generate Documentation"}
    </button>
  );
}
