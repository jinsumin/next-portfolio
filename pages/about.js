import Link from "next/link";

export default function About() {
  return (
    <div id="about-section">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              C와 Java 언어를 통해 프로그래밍을 시작하였고 CS, 운영체제,
              자료구조와 알고리즘 <br />
              OOP와 클린코드 관련 책을 읽고 그룹 스터디를 통해 학습해왔습니다.{" "}
              <br />
              개발자는 비즈니스 도메인에 대한 지식과 함께 좋은 퍼포먼스와
              가독성이 좋고 확장에 유연한 <br />
              코드를 작성해야 한다고 생각하며 이를 위해 계속 고민하고 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link
                href="https://github.com/jinsumin"
                target="_blank"
                rel="noopener noreferrer">

                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                  <div className="text-cyan-500 w-12 h-12 mb-3 inline-block">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-cyan-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    깃허브
                  </h2>
                  <p className="leading-relaxed">바로가기</p>
                </div>

              </Link>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link
                href="https://devlog-soomin.tistory.com"
                target="_blank"
                rel="noopener noreferrer">

                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                    className="text-cyan-500 w-12 h-12 mb-3 inline-block"
                  >
                    <title>티스토리 로고</title>
                    <g>
                      <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                    </g>
                  </svg>

                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    블로그
                  </h2>
                  <p className="leading-relaxed">바로가기</p>
                </div>

              </Link>
            </div>

            {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link
                href="https://www.youtube.com/channel/UCEu1FY-1dmOMGOrx03EwSTQ"
                target="_blank"
                rel="noopener noreferrer">

                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    className="text-cyan-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    유튜브
                  </h2>
                  <p className="leading-relaxed">바로가기</p>
                </div>

              </Link>
            </div> */}

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link
                href="https://www.acmicpc.net/user/smjin031"
                target="_blank"
                rel="noopener noreferrer">

                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3"
                    className="text-cyan-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    알고리즘
                  </h2>
                  <p className="leading-relaxed">바로가기</p>
                </div>

              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-cyan-500"></span>
        </div>
      </section>
    </div>
  );
}
