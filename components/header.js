import DarkModeToggleButton from "./dark-mode-toggle-button";
import Animation from "./animation";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <header className="hidden md:flex sticky top-0 z-50 text-gray-600 body-font shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#main-section"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Animation width={30} height={30} />
            <span className="ml-3 text-xl">진수민의 포트폴리오</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#main-section" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="#about-section" className="mr-5 hover:text-gray-900">
              About
            </a>
            <a href="#awards-section" className="mr-5 hover:text-gray-900">
              Awards
            </a>
            <a href="#skills-section" className="mr-5 hover:text-gray-900">
              Skills
            </a>
            <a href="#experience-section" className="mr-5 hover:text-gray-900">
              Experience
            </a>
            <a href="#projects-section" className="mr-5 hover:text-gray-900">
              Projects
            </a>
            <a href="#contacts-section" className="mr-5 hover:text-gray-900">
              Contacts
            </a>
          </nav>
          {/**
           * 다크모드 토글 버튼
           */}
          <DarkModeToggleButton />
        </div>
      </header>
      <header className="md:hidden sticky top-0 z-50 text-gray-600 body-font shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center pt-4">
          <a
            href="#main-section"
            className="flex order-first lg:order-none items-center justify-center lg:items-center lg:justify-center title-font font-medium text-gray-900 mb-4 md:mb-0"
          >
            <Animation width={30} height={30} />
            <span className="ml-3 text-xl">진수민의 포트폴리오</span>
          </a>
          {/* <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button onClick={() => setMenuToggle(!menuToggle)} className="inline-flex items-center">
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div> */}
        </div>
      </header>
    </>
  );
}
