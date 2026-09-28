import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">Data On Demand</p>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-powered analytics for smarter business decisions.
          </p>

          <address className="mt-4 not-italic text-sm text-muted-foreground space-y-1">
            <p>Data On Demand | Humanli AI</p>
            <p>MIIC (MNIT), Jaipur, Rajasthan — 302017</p>
            <p>
              ✉️{" "}
              <a
                href="mailto:contact@humanli.ai"
                className="hover:text-foreground transition-colors"
              >
                contact@humanli.ai
              </a>
            </p>
          </address>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/company/humanli-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/dod_humanli/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@HumanliAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}