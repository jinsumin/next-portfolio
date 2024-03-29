// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TOKEN_FOR_VISITORS, DATABASE_ID_FOR_VISITORS } from "../../config";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: TOKEN_FOR_VISITORS,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { visitedTime } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: DATABASE_ID_FOR_VISITORS,
      },
      properties: {
        VisitedTime: {
          rich_text: [
            {
              text: {
                content: visitedTime,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: "방문시간 성공적으로 기록!!!" });
  } catch (error) {
    res.status(500).json({ msg: "방문시간 기록 실패!!!" });
  }
}
