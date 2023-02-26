import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/server/withhandler";
import { withApiSession } from "../../../../lib/server/withSession";
import db from "../../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const tweet = await db.tweet.findUnique({
    where: {
      id: +id.toString(),
    },
  });

  const isLiked = Boolean(
    await db.like.findFirst({
      where: {
        tweetId: tweet?.id,
        authorId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({ ok: true, tweet, isLiked });
}

export default withApiSession(withHandler(["GET"], handler, true));
