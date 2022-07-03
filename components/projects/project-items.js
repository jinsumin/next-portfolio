import Image from "next/image";

export default function ProjectItems({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const link = data.properties.Link.url;
  const desc = data.properties.Description.rich_text[0].plain_text;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.Period.date.start;
  const end = data.properties.Period.date.end;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

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
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{desc}</h3>
        <a href={link}>링크 바로가기</a>
        <p className="my-1">
          프로젝트 기간 : {start} ~ {end} ({calculatePeriod(start, end)}일)
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
