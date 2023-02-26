import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withhandler";
import { withApiSession } from "../../../lib/server/withSession";
import db from "../../../lib/db";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  try {
    if (email) {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (user && user.password === password) {
        req.session.user = {
          id: user?.id,
        };
        await req.session.save();
        return res.json({ ok: true });
      } else {
        return res.json({
          ok: false,
          message: "⛔ 아이디 혹은 비밀번호가 일치하지 않습니다.",
        });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

export default withApiSession(withHandler(["POST"], handler, false));
