import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/server/withhandler";
import { withApiSession } from "../../../../lib/server/withSession";
import db from "../../../../lib/db";
import tweets from "..";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const alreadyExists = await db.like.findFirst({
    where: {
      tweetId: +id.toString(),
      authorId: user?.id,
    },
  });
  if (alreadyExists) {
    await db.like.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await db.like.create({
      data: {
        author: {
          connect: {
            id: user?.id,
          },
        },
        tweet: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }

  res.json({ ok: true });
}

export default withApiSession(withHandler(["POST"], handler, true));
