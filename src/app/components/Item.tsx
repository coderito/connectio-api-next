'use client';
import { usePathname } from 'next/navigation';

export default function Item({
  id,
  title,
  text,
  by,
}: {
  id: number;
  title: string;
  text: string;
  by: string;
}) {
  const pathname = usePathname();

  const isSpecificRoute = pathname === `/${id}`;
  console.log(by);

  return (
    <div
      className={
        isSpecificRoute
          ? ' text-md flex items-center px-6 py-3 bg-yellow-400'
          : ' text-md flex items-center px-6 py-3 hover:bg-yellow-400 hover:text-black'
      }
    >
      <div>
        <p className="truncate w-72">{title || text}</p>
        <div className="flex text-gray-400 justify-between pt-4">
          <p className="capitalize">{by}</p>
          <p className="hover:text-white">Visit page {`>>`}</p>
        </div>
      </div>
    </div>
  );
}
