CREATE TABLE "practical_categories" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "slug" TEXT NOT NULL,
  "icon" TEXT,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "practical_categories_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "practical_guides" (
  "id" SERIAL NOT NULL,
  "practicalCategoryId" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "summary" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "practical_guides_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "practical_guide_links" (
  "id" SERIAL NOT NULL,
  "practicalGuideId" INTEGER NOT NULL,
  "label" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,

  CONSTRAINT "practical_guide_links_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "practical_categories_name_key" ON "practical_categories"("name");
CREATE UNIQUE INDEX "practical_categories_slug_key" ON "practical_categories"("slug");
CREATE INDEX "practical_categories_order_name_idx" ON "practical_categories"("order", "name");

CREATE UNIQUE INDEX "practical_guides_slug_key" ON "practical_guides"("slug");
CREATE INDEX "practical_guides_practicalCategoryId_order_title_idx" ON "practical_guides"("practicalCategoryId", "order", "title");
CREATE INDEX "practical_guides_isPublished_order_idx" ON "practical_guides"("isPublished", "order");

CREATE INDEX "practical_guide_links_practicalGuideId_order_label_idx" ON "practical_guide_links"("practicalGuideId", "order", "label");

ALTER TABLE "practical_guides"
ADD CONSTRAINT "practical_guides_practicalCategoryId_fkey"
FOREIGN KEY ("practicalCategoryId") REFERENCES "practical_categories"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "practical_guide_links"
ADD CONSTRAINT "practical_guide_links_practicalGuideId_fkey"
FOREIGN KEY ("practicalGuideId") REFERENCES "practical_guides"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
