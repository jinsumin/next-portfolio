import DarkModeToggleButton from "./dark-mode-toggle-button";
import Animation from "./animation";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font shadow-2xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Animation width={30} height={30}/>
            <span className="ml-3 text-xl">진수민의 포트폴리오</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Skills</a>
            <a className="mr-5 hover:text-gray-900">Education</a>
            <a className="mr-5 hover:text-gray-900">Projects</a>
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
