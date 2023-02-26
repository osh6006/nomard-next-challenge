import { NextApiRequest, NextApiResponse } from "next";
type method = "GET" | "POST" | "DELETE";

export default function withHandler(
  methods: method[],
  fn: (req: NextApiRequest, res: NextApiResponse) => void,
  isPrivate: boolean
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "plz login" });
    }
    try {
      fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
