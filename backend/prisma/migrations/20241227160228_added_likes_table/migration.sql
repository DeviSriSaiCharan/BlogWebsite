-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "BlogId" TEXT NOT NULL,
    "LikedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_BlogId_fkey" FOREIGN KEY ("BlogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
