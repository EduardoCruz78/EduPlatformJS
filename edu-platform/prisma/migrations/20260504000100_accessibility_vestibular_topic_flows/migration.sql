-- AlterTable
ALTER TABLE "vestibular_contents" ADD COLUMN "vestibularTopicId" INTEGER;

-- AlterTable
ALTER TABLE "vestibular_topics" ADD COLUMN "subjectId" INTEGER;

-- CreateTable
CREATE TABLE "accessibility_theme_materials" (
    "id" SERIAL NOT NULL,
    "accessibilityThemeId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accessibility_theme_materials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "vestibular_contents_vestibularId_vestibularTopicId_idx" ON "vestibular_contents"("vestibularId", "vestibularTopicId");

-- CreateIndex
CREATE INDEX "vestibular_topics_vestibularId_subjectId_idx" ON "vestibular_topics"("vestibularId", "subjectId");

-- CreateIndex
CREATE INDEX "accessibility_theme_materials_accessibilityThemeId_order_title_idx" ON "accessibility_theme_materials"("accessibilityThemeId", "order", "title");

-- AddForeignKey
ALTER TABLE "vestibular_contents" ADD CONSTRAINT "vestibular_contents_vestibularTopicId_fkey" FOREIGN KEY ("vestibularTopicId") REFERENCES "vestibular_topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vestibular_topics" ADD CONSTRAINT "vestibular_topics_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vestibular_topics" ADD CONSTRAINT "vestibular_topics_originalTopicId_fkey" FOREIGN KEY ("originalTopicId") REFERENCES "topics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accessibility_theme_materials" ADD CONSTRAINT "accessibility_theme_materials_accessibilityThemeId_fkey" FOREIGN KEY ("accessibilityThemeId") REFERENCES "accessibility_themes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
