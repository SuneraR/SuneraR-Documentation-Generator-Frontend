import { sendRepoUrl } from "@/actions/documentation";
import RepoLinkForm from "@/components/RepoForm/repoLinkForm";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <RepoLinkForm action={sendRepoUrl} />
    </div>
  );
}
