import { notFound } from "next/navigation";

import { getBlogPostBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {article.h1 || article.seo_title || article.slug}
      </h1>
      {article.published_at && (
        <p className="mt-2 text-sm text-[#64748b]">
          Publié le{" "}
          {new Date(article.published_at).toLocaleDateString("fr-FR")}
        </p>
      )}
      {article.meta_description && (
        <p className="mt-6 text-lg leading-8 text-[#475569]">
          {article.meta_description}
        </p>
      )}
      <div className="mt-8 whitespace-pre-wrap leading-8 text-[#0f172a]">
        {article.body_md || article.excerpt || ""}
      </div>
    </div>
  );
}
