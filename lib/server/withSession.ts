import { withIronSessionApiRoute } from "iron-session/next";

const cookieOpts = {
  cookieName: "session",
  password:
    "asdfffffffffalsdfjaslkfjlkasdfjkasdjkfasdlkjfsljadflasdkflkjsflkjfljk",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOpts);
}
