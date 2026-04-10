const previews = Array.from({ length: 6 }, (_, i) => ({
  title: `Atividade ${i + 1}`,
}));

const PreviewSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Prévia do Produto</h2>
          <p className="text-muted-foreground mt-3">Veja algumas das atividades incluídas</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {previews.map((p, i) => (
            <div key={i} className="aspect-[3/4] bg-card rounded-xl border border-border flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-sm text-muted-foreground">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
