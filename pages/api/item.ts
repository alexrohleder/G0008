import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../lib/handler";

const prisma = new PrismaClient();

export default handler.get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const id = parseInt(req.query.id as string, 10);

    if (isNaN(id)) {
      return res
        .status(400)
        .end(`query parameter "id" is required and must be a number`);
    }

    const item = await prisma.item.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        parentId: true,
        content: true,
        children: {
          select: {
            id: true,
            title: true,
            style: true,
          },
        },
      },
    });

    if (item) {
      res.setHeader("cache-control", "public, max-age=60");
      res.json(item);

      return;
    }

    res.status(404).end("not found");
  }
);
