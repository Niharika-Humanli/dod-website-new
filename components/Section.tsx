type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">{title}</h2>

          {description && (
            <p className="mt-4 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}