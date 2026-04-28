import { supabase } from "@/lib/supabase";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  created_at: string;
}

export default async function BlogPage() {
  let safeArticles: Article[] = [];

  if (supabase) {
    const { data: articles } = await supabase
      .from("articles")
      .select("id,slug,title,excerpt,created_at")
      .eq("domain", "comparateur-internet.fr")
      .order("created_at", { ascending: false });
    safeArticles = (articles as Article[]) || [];
  }

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
        {safeArticles.length === 0 ? (
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
            {safeArticles.map((article) => (
              <a
                key={article.id}
                href={`/blog/${article.slug}`}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h2 className="text-lg font-bold text-[#0f172a]">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-[#64748b]">
                  {article.excerpt || ""}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#0ea5e9]">
                  Lire l’article
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
