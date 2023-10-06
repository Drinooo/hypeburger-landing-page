import React from "react";
import NewsletterSection from "./NewsletterSection";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../public/icons/SvgIcons";

const FooterSection = () => {
  return (
    <footer className=" bg-primary md:py-20 sm:py-10">
      <NewsletterSection />
      <div className="mx-auto max-w-full">
        <div className="container mx-auto">
          <div className="md:flex md:justify-between sm:justify-center text-white mx-auto">
            <div className="mb-6 md:mb-0">
              <img src="/logo/Navbar/HYPEBURGER.png" className="" />
            </div>
            <div className="grid md:grid-cols-5 gap-8 sm:gap-8 sm:text-center md:text-start">
              <div>
                <h2 className="mb-6 text-sm font-normal font-heading text-fHeader">
                  About
                </h2>
                <ul className="text-white font-body">
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com"
                      className="hover:underline text-footer"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline text-footer"
                    >
                      Our Values
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline text-footer"
                    >
                      Our Story
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 font-normal font-heading text-fHeader">
                  Menu
                </h2>
                <ul className="font-body">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline text-footer"
                    >
                      Beef Burgers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-footer"
                    >
                      Vegan Burgers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-footer"
                    >
                      Sides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-footer"
                    >
                      Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-footer"
                    >
                      New Concepts
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 font-normal font-heading text-fHeader">
                  Locations
                </h2>
                <ul className="font-body">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-footer">
                      Los Angeles
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-footer">
                      Miami
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-footer">
                      New York
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-footer">
                      Vancouver
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-footer">
                      Toronto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-normal font-heading text-fHeader">
                  Company
                </h2>
                <ul className="text-white font-body">
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com"
                      className="hover:underline text-footer"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline text-footer"
                    >
                      Become an Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-normal font-heading text-fHeader">
                  Learn
                </h2>
                <ul className="text-white font-body">
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com"
                      className="hover:underline text-footer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline text-footer"
                    >
                      Recipe Books
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline text-footer"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between sm:flex-col sm:gap-y-5 md:flex-row">
              <span className="text-white sm:text-center font-body text-footer">
                2022{" "}
                <a href="#" className="hover:underline">
                  Hypeburger
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" className="text-white hover:text-gray-900">
                  <FacebookIcon />
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                  <InstagramIcon />
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                  <TwitterIcon />
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
