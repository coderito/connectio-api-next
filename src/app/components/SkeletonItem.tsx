export default function SkeletonItem() {
  return (
    <>
      <div
        role="status"
        className="w-full animate-pulse h-16 text-md flex items-center px-6 py-5"
      >
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div>
        <div className="flex justify-between px-6">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4"></div>
        </div>
      </div>
    </>
  );
}
