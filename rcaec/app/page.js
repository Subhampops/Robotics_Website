import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 py-2">
        <h1 className="font-bold text-5xl flex gap-2 text-center">Welcome To AEC Robotics Club</h1>
        <p>First club of AEC </p>
        <img width={365} src="Robot.gif" alt="" />
        <div className="gap-4">
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>

      </div>
    </>
  );
}
