"use client";
import { ArrowRight, Home, Lightbulb, Shield, Thermometer } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { productsData } from "@/data/products/productsData";
import Link from "next/link";

const CategoriesCollection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCollectionClick = (collectionName: string) => {
    const params = new URLSearchParams(searchParams || "");
    params.set("category", collectionName);
    router.push(`shop?${params.toString()}`);
  };

  const smartHomeHubs = productsData.filter(
    (item) => item.category.toLowerCase() === "smart home hubs"
  );

  const smartLighting = productsData.filter(
    (item) => item.category.toLowerCase() === "smart lighting"
  );

  const securitySystems = productsData.filter(
    (item) => item.category.toLowerCase() === "security systems"
  );

  return (
    <section className="py-16 bg-blue-100 dark:bg-blue-900">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
        {/* Smart Home Hubs Collection */}
        <div
          onClick={() => handleCollectionClick("Smart Home Hubs")}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2">
            <Home className="text-indigo-600" size={24} />
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              Smart Home Hubs
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Central control systems for your entire smart home ecosystem.
          </p>
          {/* <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {smartHomeHubs?.slice(0, 4)?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-indigo-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {product.discount}% off
                  </p>
                  <Link
                    href={`/shop/${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold hover:text-indigo-500"
                  >
                    {product.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full bg-indigo-600 hover:bg-indigo-700"
            variant={"default"}
            size={"lg"}
          >
            <ArrowRight /> Explore Hubs
          </Button>
        </div>

        {/* Smart Lighting Collection */}
        <div
          onClick={() => handleCollectionClick("Smart Lighting")}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="text-yellow-500" size={24} />
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              Smart Lighting
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Intelligent lighting solutions for ambiance and energy efficiency.
          </p>
          {/* <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {smartLighting?.slice(0, 4)?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-yellow-500 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {product.discount}% off
                  </p>
                  <Link
                    href={`/shop/${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold hover:text-yellow-500"
                  >
                    {product.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full bg-yellow-500 hover:bg-yellow-600 text-white"
            variant={"default"}
            size={"lg"}
          >
            <ArrowRight /> Light Up Your Home
          </Button>
        </div>

        {/* Security Systems Collection */}
        <div
          onClick={() => handleCollectionClick("Security Systems")}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2">
            <Shield className="text-green-600" size={24} />
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              Security Systems
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Complete home security with smart cameras, sensors, and monitoring.
          </p>
          {/* <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {securitySystems?.slice(0, 4)?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-green-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {product.discount}% off
                  </p>
                  <Link
                    href={`/shop/${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold hover:text-green-500"
                  >
                    {product.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full bg-green-600 hover:bg-green-700"
            variant={"default"}
            size={"lg"}
          >
            <ArrowRight /> Secure Your Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCollection;