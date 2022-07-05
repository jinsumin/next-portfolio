// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TOKEN_FOR_USERS, DATABASE_ID_FOR_USERS } from "../../config";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: TOKEN_FOR_USERS,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { name, email, message } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: DATABASE_ID_FOR_USERS,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: "Sucess!!!" });
  } catch (error) {
    res.status(500).json({ msg: "there was an error" });
  }
}
