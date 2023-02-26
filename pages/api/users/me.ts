import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withhandler";
import { withApiSession } from "../../../lib/server/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await db.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(withHandler(["GET"], handler, true));
