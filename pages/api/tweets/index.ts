import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withhandler";
import { withApiSession } from "../../../lib/server/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tweet } = req.body;
  const { user } = req.session;

  if (req.method === "GET") {
    const products = await db.tweet.findMany({});
    res.json({
      ok: true,
      products,
    });
  }
  if (req.method === "POST") {
    await db.tweet.create({
      data: {
        content: tweet,
        author: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
    });
  }
}

export default withApiSession(withHandler(["GET", "POST"], handler, true));
