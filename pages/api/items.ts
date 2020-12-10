import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../lib/handler";

const prisma = new PrismaClient();

export default handler.get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const items = await prisma.item.findMany({
      where: {
        parentId: null,
      },
      select: {
        id: true,
        title: true,
      },
    });

    res.setHeader("cache-control", "public, max-age=60");
    res.json({ items });
  }
);
