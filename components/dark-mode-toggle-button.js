import { useTheme } from "next-themes";

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        classNameName="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* 라이트모드 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        {/* 다크모드 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0 text-yellow-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </>
  );
}
