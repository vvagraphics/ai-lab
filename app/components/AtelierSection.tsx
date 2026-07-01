export function AtelierSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="my-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-4xl font-light italic mb-10 tracking-widest text-neutral-400 dark:text-neutral-600">
        {title}
      </h3>
      <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-700 hover:shadow-blue-500/10">
        {children}
      </div>
    </section>
  );
}