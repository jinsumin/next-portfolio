import Image from "next/image";
import TypingEffect from "../components/typing-effect";

export default function Main() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <TypingEffect
                text={"안녕하세요! 진수민의 <br> 포트폴리오 페이지 입니다."}
              />
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              저는 새로운 지식과 기술을 배우는 것을 좋아하며 경험을 공유하고{" "}
              <br />
              함께 성장하는 가치를 중요시합니다. 혼자만의 역량만이 아니라 내
              주변, <br />
              그리고 함께하는 팀의 성장을 도울 수 있는 개발자가 되기 위해
              노력하고 있습니다. <br />

            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                더 알아보기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              // className="object-cover object-center rounded"
              alt="hero"
              src="/profile.png"
              width={680}
              height={700}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-indigo-500"></span>
        </div>
      </section>
    </>
  );
}
