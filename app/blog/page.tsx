import Link from "next/link";

import { getPublishedBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-[#0f172a]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Actualités télécom
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
          Les dernières nouvelles du marché des télécoms : promotions, nouvelles offres, couverture réseau et analyses.
        </p>
      </div>

      <div className="mt-12">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-[#e2e8f0] bg-white py-20 text-center">
            <p className="text-lg text-[#64748b]">
              Aucun article pour le moment.
            </p>
            <p className="mt-2 text-sm text-[#64748b]">
              Revenez bientôt pour découvrir nos actualités.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h2 className="text-lg font-bold text-[#0f172a]">
                  {post.h1 || post.seo_title || post.slug}
                </h2>
                {(post.excerpt || post.meta_description) && (
                  <p className="mt-2 text-sm text-[#64748b]">
                    {post.excerpt || post.meta_description}
                  </p>
                )}
                {post.published_at && (
                  <p className="mt-4 text-xs text-[#64748b]">
                    Publié le {new Date(post.published_at).toLocaleDateString("fr-FR")}
                  </p>
                )}
                <span className="mt-4 inline-block text-sm font-medium text-[#0ea5e9]">
                  Lire l’article
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
