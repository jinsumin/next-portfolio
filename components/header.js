import DarkModeToggleButton from "./dark-mode-toggle-button";
import Animation from "./animation";
import { useEffect } from "react";

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
      <header className="md:hidden flex sticky top-0 z-50 text-gray-600 body-font shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#main-section"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Animation width={30} height={30} />
            <span className="ml-3 text-xl">진수민의 포트폴리오</span>
          </a>
          <button>
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
          </button>
        </div>
      </header>
    </>
  );
}
