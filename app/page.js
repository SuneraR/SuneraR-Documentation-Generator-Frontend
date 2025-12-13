import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center gap-3 border w-[500px] py-7 px-5 rounded-md shadow-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="repoUrl">GitHub Repository URL:</label>
          <input type="text" className="border rounded-sm p-1" name="repoUrl" id="repoUrl" />
        </div>
        <button
          type="submit"
          className="bg-gray-600 hover:bg-black text-white w-3xs px-2.5 py-2 font-semibold rounded-sm"
        >
          Generate Documentation
        </button>
      </form>
    </div>
  );
}
