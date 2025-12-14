'use client';

import DocsPreview from "@/components/DocsPreview";
import { usePreview } from "@/context/PreviewContext";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const { content } = usePreview();
  const router = useRouter();
  if (!content) {
    return router.push("/");
  }
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <DocsPreview docs={content} />
    </div>
  );
}
