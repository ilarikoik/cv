import BackButton from "@/app/ui/dashboard/backButton";
import GitHubButton from "@/app/ui/dashboard/githubButton";
import Image from "next/image";

export default function Page() {
    return (
      <main className="min-h-screen bg-background pt-16 text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 ">
        <div className="w-full flex flex-row justify-between">

<BackButton />
<GitHubButton url="https://github.com/ilarikoik/t-journal"/>
        </div>
          <section className="max-w-3xl">

   
    <p className="font-mono text-sm text-accent-500 mt-5">
      PROJECT / 02
    </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
              Trading Journal
            </h1>
  
            <p className="mt-6 text-lg leading-relaxed opacity-60">
              Full-stack swing trading journal for tracking trades,
              performance and post-trade analysis. Built with React,
              TypeScript, Spring Boot and PostgreSQL.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Spring Boot",
                "Java",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 px-3 py-1 font-mono text-xs dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
  
          <section className="mt-16">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/5 dark:border-white/10 dark:bg-black">
  <Image
    src="/tj-dashboard.png"
    alt="Trading Journal Dashboard"
    fill
    className="object-cover scale-[1.02]"
    // skaalaa kuvaa hieman isommaksi niin että reunat eivät näy (joku bugi object-coverissa+fill)
  />
</div>
            {/* <div className="flex min-h-105 items-center justify-center rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <div className="text-center">
                <p className="font-mono text-sm opacity-40">
                  PROJECT PREVIEW
                </p>
                <p className="mt-2 text-sm opacity-30">
                  Trading Journal Dashboard
                </p>
              </div>
            </div> */}
          </section>
  
          {/* About */}
          <section className="mt-24 grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-accent-500">
                01 / ABOUT
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Built for real trade analysis
              </h2>
            </div>
  
            <div className="space-y-5 text-sm leading-7 opacity-60">
              <p>
                Trading Journal is a full-stack application designed to
                document and analyse swing trades in one place.
              </p>
  
              <p>
                Users can record entries and exits, position direction,
                share count, setup tags, notes and trade outcomes.
              </p>
  
              <p>
                The application automatically calculates P&L and
                provides statistics such as win rate, total P&L and
                profit factor.
              </p>
  
              <p>
                Each trade also has a dedicated detail view where the
                trade can be reviewed afterwards, including what went
                well, what went wrong and what could be improved.
              </p>
            </div>
          </section>
  
          {/* Features */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              02 / FEATURES
            </p>
  
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Trade management",
                  description:
                    "Create, edit and delete trades with entry, exit, ticker, direction and position size.",
                },
                {
                  title: "Automatic P&L",
                  description:
                    "Calculates profit and loss automatically for both long and short positions.",
                },
                {
                  title: "Performance dashboard",
                  description:
                    "Track win rate, total P&L, profit factor and overall performance.",
                },
                {
                  title: "Trade review",
                  description:
                    "Review individual trades and document what happened and what could be improved.",
                },
                {
                  title: "Setup tags",
                  description:
                    "Tag trades by setup and strategy to analyse which setups perform best.",
                },
                {
                  title: "Chart screenshots",
                  description:
                    "Trade screenshots can be attached to individual trades for visual review.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="font-semibold">
                    {feature.title}
                  </h3>
  
                  <p className="mt-3 text-sm leading-6 opacity-60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Architecture */}
          <section className="mt-24 grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-accent-500">
                03 / ARCHITECTURE
              </p>
  
              <h2 className="mt-3 text-3xl font-semibold">
                Full-stack architecture
              </h2>
  
              <p className="mt-5 text-sm leading-7 opacity-60">
                The frontend communicates with a REST API provided by
                the Spring Boot backend. Trade data is persisted in
                PostgreSQL using Spring Data JPA.
              </p>
            </div>
  
            <pre className="overflow-x-auto rounded-2xl border border-black/10 bg-black/5 p-6 font-mono text-sm leading-7 dark:border-white/10 dark:bg-white/5">
              <code>
  {`frontend/
    React
    TypeScript
    Tailwind
    Recharts
  
          ↓ REST API
  
  backend/
    Spring Boot
    Spring Data JPA
    Java 17
  
          ↓
  
  database/
    PostgreSQL`}
              </code>
            </pre>
          </section>
  
          {/* API */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              04 / API
            </p>
  
            <h2 className="mt-3 text-3xl font-semibold">
              REST API
            </h2>
  
            <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              {[
                ["GET", "/api/trades", "All trades"],
                ["GET", "/api/trades/stats", "Trading statistics"],
                ["GET", "/api/trades/:id", "Single trade"],
                ["POST", "/api/trades", "Create trade"],
                ["PUT", "/api/trades/:id", "Update trade"],
                ["DELETE", "/api/trades/:id", "Delete trade"],
              ].map(([method, path, description]) => (
                <div
                  key={`${method}-${path}`}
                  className="grid grid-cols-[80px_1fr_1fr] border-b border-black/10 px-5 py-4 text-sm last:border-0 dark:border-white/10"
                >
                  <span className="font-mono text-accent-500">
                    {method}
                  </span>
  
                  <span className="font-mono">
                    {path}
                  </span>
  
                  <span className="opacity-50">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </section>
  
          {/* Database */}
          <section className="mt-24 grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-accent-500">
                05 / DATABASE
              </p>
  
              <h2 className="mt-3 text-3xl font-semibold">
                PostgreSQL
              </h2>
  
              <p className="mt-5 text-sm leading-7 opacity-60">
                The application stores users, trades and trading notes
                in a relational PostgreSQL database.
              </p>
            </div>
  
            <div className="space-y-3">
              {["users", "trades", "ideas_and_notes"].map((table) => (
                <div
                  key={table}
                  className="rounded-xl border border-black/10 px-5 py-4 font-mono text-sm dark:border-white/10"
                >
                  <span className="text-accent-500">
                    TABLE
                  </span>{" "}
                  {table}
                </div>
              ))}
            </div>
          </section>
  
          {/* Stack */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              06 / STACK
            </p>
  
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
                <h3 className="font-semibold">Frontend</h3>
                <p className="mt-3 text-sm opacity-60">
                  React 18, TypeScript, Tailwind CSS v4,
                  Vite, Recharts, React Router and Axios.
                </p>
              </div>
  
              <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
                <h3 className="font-semibold">Backend</h3>
                <p className="mt-3 text-sm opacity-60">
                  Java 17, Spring Boot 3.3, Spring Data JPA
                  and Lombok.
                </p>
              </div>
  
              <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
                <h3 className="font-semibold">Database</h3>
                <p className="mt-3 text-sm opacity-60">
                  PostgreSQL with relational data models
                  for users, trades and notes.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mt-24 border-t border-black/10 pt-12 dark:border-white/10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-sm text-accent-500">
                  PROJECT / TRADING JOURNAL
                </p>
  
                <h2 className="mt-2 text-2xl font-semibold">
                  Built with React & Spring Boot
                </h2>
              </div>
              
              <div className="flex flex-col">

              <a
                href="https://t-journal-gr7l.vercel.app/login"
                className="w-fit rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                View Site →
              </a>
              <a
                href="https://github.com/ilarikoik/t-journal"
                className="w-fit rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                View on GitHub →
              </a>
                  </div>
            </div>
          </section>
  
        </div>
      </main>
    );
  }