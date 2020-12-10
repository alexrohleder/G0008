import cors from "cors";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(cors({ methods: ["GET", "HEAD"] }));

export default handler;
