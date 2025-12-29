import { pictures } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "图片",
  description: "Home page description",
};

export default function PicturePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-3xl lg:px-8">
        <h2 className="font-bold text-2xl p-5 text-center">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pictures.map((pic) => (
            <Link key={pic.src} href={`/picture/${pic.id}`} className="group">
              <Image
                width={200}
                height={200}
                src={pic.src}
                alt={pic.alt}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="truncate mt-4 text-xs text-gray-700">
                {pic.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${pic.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/" className="block text-center mt-4 hover:text-blue-500">
        &rarr; Go to Home
      </Link>
    </div>
  );
}
