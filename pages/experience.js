import Image from "next/image";
import image01 from "/public/graduate.png";
import image02 from "/public/idea.png";
import image03 from "/public/intern.png";
import image04 from "/public/developer.png";
import image05 from "/public/hanati.svg";
import image06 from "/public/sangsangin.png";
import image07 from "/public/fintech-removebg-preview.png";

export default function Experience() {
  return (
    <div id="experience-section">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Education | Experience
          </h1>
        </div>

        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* 공통 섹션 스타일 */}
          {[
            {
              id: 1,
              image: image01,
              title: "인하대학교 학사 졸업",
              subtitle: "정보통신공학과 전공",
            },
            {
              id: 2,
              image: image02,
              title: "스마트시민랩 창업공모전 커뮤니티 활동",
              subtitle: "ReactNative 모바일 앱 개발 10개월",
            },
            {
              id: 3,
              image: image03,
              title: "서울시청 재무과 인턴 웹 개발 3개월",
              subtitle: "리액트 기반 화면 개발 및 API 연동 업무",
            },
            {
              id: 4,
              image: image04,
              title: "시리즈 D 개발자 과정",
              subtitle: "Node 기반 API 서버 구축 교육 60시간 수료",
            },
            {
              id: 5,
              image: image05,
              title: "하나금융티아이 금융IT 개발자 교육",
              subtitle:
                "채용연계형 금융IT 개발자 교육과정 1200시간 수료, 금융SW 웹 서비스 기술 교육",
            },
            {
              id: 6,
              image: image06,
              title: "상상인증권 (재직중)",
              subtitle:
                "2023. 01. 16 ~ 2024. 01. 15 / IT개발팀 MTS 개발자\n2024. 01. 16 ~ 2024. 09. 01 / CX기획팀 프론트엔드 개발자\n2024. 09. 01 ~ 2024. 12. 02/ IT개발팀 MTS 개발자\n2024. 12. 02 ~ present / IT운영팀 서버 관리자",
            },
            {
              id: 7,
              image: image07,
              title: "2024 핀테크 아카데미 10기 수료",
              subtitle: `- 파이썬을 활용한 금융빅데이터 분석\n- 블록체인 기술과 응용 서비스\n- 마이데이터 활용\n- 퀀트투자 전략\n- 기업가치평가\n- 로보어드바이저`,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto"
            >
              {/* 타임라인 라인 및 번호 */}
              <div className="invisible lg:visible xl:visible 2xl:visible">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm">
                  {item.id}
                </div>
              </div>

              {/* 이미지와 텍스트 */}
              <div className="flex-grow px-4 sm:px-4 md:px-8 flex items-center flex-col sm:flex-row text-center sm:text-left">
                {/* 이미지 */}
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-cyan-500 rounded-full inline-flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={`section-${item.id}`}
                    width={65}
                    height={65}
                  />
                </div>

                {/* 텍스트 */}
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 flex flex-col items-center sm:items-start">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    {item.title}
                  </h2>
                  <p className="pt-1 text-base whitespace-pre-line">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-cyan-500"></span>
        </div>
      </section>
    </div>
  );
}
