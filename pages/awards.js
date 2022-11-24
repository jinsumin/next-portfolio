import Image from "next/image";
import React from "react";
import image from "/public/medal.png";

const Awards = () => {
  return (
    <div id="awards-section">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Awards
            </h1>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image src={image} alt="school" width={65} height={65} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                고용노동부장관상
              </h2>
              <p className="leading-relaxed text-base">
                KOPO STARTUP 벤처창업아이템경진대회 1위 대상 고용노동부장관상
                <br />
                금융 플랫폼, 하나1Q웨딩 3인 프로젝트
              </p>
              <p className="mt-3 text-indigo-500 inline-flex items-center">
                2022.11.23
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                매체개발 및 학술논문대회 장려상
              </h2>
              <p className="leading-relaxed text-base">
                한국실천공학교육학회 매체개발 및 학술논문발표대회 장려상
                <br />
                미디어 기술을 접목시킨 금융 결제 플랫폼 개발 논문
              </p>
              <p className="mt-3 text-indigo-500 inline-flex items-center">
                2022.11.04
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image src={image} alt="school" width={65} height={65} />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image src={image} alt="school" width={65} height={65} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                시민연구원 위촉장
              </h2>
              <p className="leading-relaxed text-base">
                스마트시민랩 창업 공모전 500만원 지원, 모바일 앱 개발 프로젝트
                팀장 시민연구원 위촉
                <br />
                지역공동체 활성화를 위한 온오프라인 모임 플랫폼, 그루핑 5~7인
                프로젝트
              </p>
              <p className="mt-3 text-indigo-500 inline-flex items-center">
                2020.12.28
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-cyan-500"></span>
        </div>
      </section>
    </div>
  );
};

export default Awards;