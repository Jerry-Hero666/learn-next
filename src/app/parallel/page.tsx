import Link from "next/link";

const ParallelPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-6 p-6 bg-gray-500 flex-1 text-white rounded-lg">
        children
      </div>
      <Link href="/" className="block text-center mt-4 hover:text-blue-500">
       &rarr; Go to Home
      </Link>
    </div>
  );
};
export default ParallelPage;
