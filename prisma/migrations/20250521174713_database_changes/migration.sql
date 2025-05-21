-- CreateTable
CREATE TABLE "user" (
    "uid" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "levelId" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_level" (
    "uid" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "prevScore" INTEGER NOT NULL DEFAULT 0,
    "prevOpponent" TEXT,
    "highScore" INTEGER NOT NULL DEFAULT 0,
    "levelComp" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_level_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_levelId_key" ON "user"("levelId");

-- CreateIndex
CREATE UNIQUE INDEX "user_firstName_email_key" ON "user"("firstName", "email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "user_level"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
