import { sendProjectZip, sendRepoUrl } from "@/actions/documentation";
import RepoLinkForm from "@/components/RepoForm/repoLinkForm";
import ZipFileForm from "@/components/ZipFileForm/zipfileForm";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Documentation Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Transform your GitHub repository or project ZIP file into comprehensive, beautiful documentation instantly.
          </p>
        </div>
        <RepoLinkForm action={sendRepoUrl} />
        <ZipFileForm action={sendProjectZip} />
      </div>
    </div>
  );
}
