import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function AdditionalRecourses() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">Additional resources</h1>
      <p className="mx-2  text-sm text-gray-500">
        Check out other places for helpful information to learn more about X
        products and services.
      </p>
      <div className="flex flex-col gap-2">
        <section className="mb-2">
          <h2 className="mx-2 my-2 text-[20px] font-bold">Release notes</h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/i/release_notes" target="_blank">
                Release notes
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-2">
          <h2 className="mx-2 my-2 text-[20px] font-bold">Legal</h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://business.x.com/en/help/troubleshooting/how-x-ads-work"
                target="_blank"
              >
                Ads info
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/rules-and-policies/x-cookies"
                target="_blank"
              >
                Cookie Policy
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/en/privacy" target="_blank">
                Privacy policy
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/en/tos" target="_blank">
                Terms of Service
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-4">
          <h2 className="mx-2 my-2 text-[20px] font-bold">Miscellaneous</h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://about.x.com/en" target="_blank">
                About
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/resources/accessibility"
                target="_blank"
              >
                Accessibility
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://ads.x.com/onboarding/18ce55qax5p/welcome?ref=gl-tw-tw-twitter-advertise"
                target="_blank"
              >
                Advertising
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://blog.x.com/" target="_blank">
                Blog
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://about.x.com/en/who-we-are/brand-toolkit"
                target="_blank"
              >
                Brand Resources
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://careers.x.com/en" target="_blank">
                Careers
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://developer.x.com/en" target="_blank">
                Developers
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="#" target="_blank">
                Directory
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/using-x/download-the-x-app"
                target="_blank"
              >
                Download the X app
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://help.x.com/en" target="_blank">
                Help Center
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://marketing.x.com/" target="_blank">
                Marketing
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
                target="_blank"
              >
                X for Business
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
