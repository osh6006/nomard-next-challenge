import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withhandler";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  let user;
  if (email) {
    user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      console.log("find");
    }
    if (!user) {
      console.log("create!");
      user = await db.user.create({
        data: {
          email,
          password,
        },
      });
    }
    console.log(user);
  }

  return res.json({ ok: true });
}

export default withHandler(["POST"], handler, false);
