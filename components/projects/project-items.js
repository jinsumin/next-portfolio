import Image from "next/image";

export default function ProjectItems({ data }) {
  const title = data.properties.name.title[0].plain_text;
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(title);
  // const github = data.properties.github.url;
  // const youtube = data.properties.youtube.url;
  // const description = data.properties.desc.rich_text[0].plain_text;
  // const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.tag.multi_select;
  // const start = data.properties.period.date.start;
  // const end = data.properties.period.date.end;

  const calculatePeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate : ${startDate}`);
    console.log(`endDate : ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src="/kindred.webp"
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">description</h3>
        {/* <a href={github}>깃허브 바로가기</a>
        <a href={youtube}>유튜브 바로가기</a> */}
        <p className="my-1">
          {/* 프로젝트 기간 : {start} ~ {end} ({calculatePeriod(start, end)}일) */}
          프로젝트 기간 : XX일
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
