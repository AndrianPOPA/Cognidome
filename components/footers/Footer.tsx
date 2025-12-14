import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex md:flex-row flex-wrap gap-4 md:gap-2 justify-between">
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <Logo />
          <p>Your smart home solutions partner.</p>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61583888163120"
              className=""
            >
              <FaFacebook size={30}/>
            </Link>
            <Link
              href="https://www.instagram.com/cognidome?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className=""
            >
              <FaInstagramSquare size={30}/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Solutions</h3>
          <ul className="space-y-2">
            {dummyCategories.map(category => (
              <li key={category.name}>
              <Link
                href={`/shop?category=${category.name}`}
                className=""
              >
                {category.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=""
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=""
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className=""
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/help"
                className=""
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/consultation"
                className=""
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-white" />
      <div className="text-center mt-8">
        <p>&copy; 2024 Cognidome. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;