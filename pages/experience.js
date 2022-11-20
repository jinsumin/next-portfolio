import Image from "next/image";
import image01 from "/public/graduate.png";
import image02 from "/public/idea.png";
import image03 from "/public/intern.png";
import image04 from "/public/developer.png";
import image05 from "/public/rising.png";

export default function Experience() {
  return (
    <div id="experience-section">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Experience
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* 1. 인하대학교 */}
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="invisible lg:visible xl:visible 2xl:visible">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image src={image01} alt="school" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  인하대학교 정보통신공학 전공 4년 학사 졸업
                </h2>
                <p className="leading-relaxed"></p>
              </div>
            </div>
          </div>
          {/* 2. 스마트시민랩 창업 공모전 */}
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="invisible lg:visible xl:visible 2xl:visible">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image src={image02} alt="school" width={65} height={65}/>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  스마트시민랩 창업공모전 모바일 앱 개발 10개월
                </h2>
              </div>
            </div>
          </div>
          {/* 3. 서울시청 인턴 */}
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="invisible lg:visible xl:visible 2xl:visible">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image src={image03} alt="school" width={65} height={65}/>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  서울시청 재무과 인턴 웹 개발 3개월
                </h2>
              </div>
            </div>
          </div>
          {/* 4. 시리즈 D 개발자 과정 */}
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="invisible lg:visible xl:visible 2xl:visible">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image src={image04} alt="school" width={50} height={50}/>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  시리즈 D 개발자 과정 60시간 수료
                </h2>
              </div>
            </div>
          </div>
          {/* 5. 하나금융티아이 채용연계 교육과정 */}
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="invisible lg:visible xl:visible 2xl:visible">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                5
              </div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image src={image05} alt="school" width={55} height={55}/>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  하나금융티아이 채용연계 교육과정 1200시간 수료
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-indigo-500"></span>
        </div>
      </section>
    </div>
  );
}
