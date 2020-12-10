-- CreateTable
CREATE TABLE "Item" (
"id" SERIAL,
    "parentId" INTEGER,
    "title" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "content" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY("parentId")REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
