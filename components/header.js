import DarkModeToggleButton from "./dark-mode-toggle-button";
import Animation from "./animation";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 text-gray-600 body-font shadow-2xl">
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
            <a href="#education-section" className="mr-5 hover:text-gray-900">
              Education
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
    </>
  );
}
