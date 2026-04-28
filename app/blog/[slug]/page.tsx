import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!supabase) {
    notFound();
  }

  const { data: article } = await supabase
    .from("articles")
    .select("title,content,created_at")
    .eq("slug", slug)
    .eq("domain", "comparateur-internet.fr")
    .single();

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {article.title}
      </h1>
      {article.created_at && (
        <p className="mt-2 text-sm text-[#64748b]">
          Publié le{" "}
          {new Date(article.created_at).toLocaleDateString("fr-FR")}
        </p>
      )}
      <div className="mt-8 whitespace-pre-line text-[#0f172a]">
        {article.content || ""}
      </div>
    </div>
  );
}
