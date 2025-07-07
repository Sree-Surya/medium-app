export default function Loading() {
  return (
    <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex items-center">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

      <div role="status" className="max-w-sm animate-pulse">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  // return (

  // );
}
