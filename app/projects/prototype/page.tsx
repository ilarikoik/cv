export default function Page() {
    return (
      <main className="min-h-screen bg-background pt-16 text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
  
          {/* Header */}
          <section className="max-w-3xl">
            <p className="font-mono text-sm text-accent-500">
              CLIENT PROJECT / 03
            </p>
  
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
              Production Order Processing System
            </h1>
  
            <p className="mt-6 text-lg leading-relaxed opacity-60">
              Production backend developed for a Finnish manufacturing
              company to streamline sheet-metal order processing and
              connect incoming order data with internal production
              workflows.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "Flask",
                "PostgreSQL",
                "SQLAlchemy",
                "Alembic",
                "Docker",
                "OpenShift",
                "pytest",
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
  
          {/* Confidential notice */}
          <section className="mt-12 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
            <p className="font-mono text-xs text-accent-500">
              CONFIDENTIAL CLIENT PROJECT
            </p>
  
            <p className="mt-3 max-w-3xl text-sm leading-6 opacity-60">
              This project was developed for a real client. The source
              code, client identity, production URLs, credentials and
              business-specific implementation details are private and
              are therefore not included here.
            </p>
          </section>
  
          {/* Overview */}
          <section className="mt-24 grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-accent-500">
                01 / OVERVIEW
              </p>
  
              <h2 className="mt-3 text-3xl font-semibold">
                Order processing backend
              </h2>
            </div>
  
            <div className="space-y-5 text-sm leading-7 opacity-60">
              <p>
                The application is a Python-based backend service that
                receives order data through an API and processes it into
                structured database records.
              </p>
  
              <p>
                The system was designed to reduce manual processing and
                provide a reliable connection between incoming orders
                and internal production workflows.
              </p>
  
              <p>
                The backend handles incoming payloads, persistence,
                order status management and service health monitoring.
              </p>
            </div>
          </section>
  
          {/* Architecture */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              02 / ARCHITECTURE
            </p>
  
            <h2 className="mt-3 text-3xl font-semibold">
              Backend architecture
            </h2>
  
            <div className="mt-8 rounded-2xl border border-black/10 bg-black/5 p-8 dark:border-white/10 dark:bg-white/5">
              <div className="flex flex-col items-center gap-4 text-center font-mono text-sm">
  
                <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                  External system
                </div>
  
                <span className="opacity-30">↓</span>
  
                <div className="rounded-xl border border-accent-500/30 bg-accent-500/10 px-6 py-4">
                  REST API / Flask
                </div>
  
                <span className="opacity-30">↓</span>
  
                <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                  SQLAlchemy
                </div>
  
                <span className="opacity-30">↓</span>
  
                <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                  PostgreSQL
                </div>
  
              </div>
            </div>
          </section>
  
          {/* Responsibilities */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              03 / CONTRIBUTION
            </p>
  
            <h2 className="mt-3 text-3xl font-semibold">
              My contribution
            </h2>
  
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Designed and implemented API endpoints",
                "Processed incoming webhook payloads",
                "Created database models and persistence logic",
                "Implemented order status handling",
                "Worked with PostgreSQL and SQLAlchemy",
                "Created database migrations with Alembic",
                "Wrote automated API and persistence tests",
                "Containerized the application with Docker",
                "Supported deployment to OpenShift",
                "Implemented health-check endpoints",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-black/5 px-5 py-4 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="mr-3 text-accent-500">
                    →
                  </span>
  
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          {/* API */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              04 / API
            </p>
  
            <h2 className="mt-3 text-3xl font-semibold">
              API-driven workflow
            </h2>
  
            <p className="mt-5 max-w-2xl text-sm leading-7 opacity-60">
              Incoming orders are received through a REST API and
              transformed into structured records. The backend exposes
              functionality for monitoring the service, retrieving
              orders and updating their processing state.
            </p>
  
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Receive",
                  text: "Accept and validate incoming order payloads.",
                },
                {
                  title: "Process",
                  text: "Transform and persist the order data.",
                },
                {
                  title: "Complete",
                  text: "Update the order state when processing is finished.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
                >
                  <p className="font-mono text-sm text-accent-500">
                    {item.title}
                  </p>
  
                  <p className="mt-3 text-sm leading-6 opacity-60">
                    {item.text}
                  </p>
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
                PostgreSQL is used as the production database.
                SQLAlchemy provides the ORM layer while Alembic is used
                to manage database schema migrations.
              </p>
            </div>
  
            <div className="space-y-3">
              {[
                "Order data",
                "Order items",
                "Item metadata",
                "Processing status",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 px-5 py-4 text-sm dark:border-white/10"
                >
                  <span className="mr-3 font-mono text-xs text-accent-500">
                    DATA
                  </span>
  
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          {/* Testing */}
          <section className="mt-24 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-black/5 p-8 dark:border-white/10 dark:bg-white/5">
              <p className="font-mono text-sm text-accent-500">
                06 / TESTING
              </p>
  
              <h2 className="mt-3 text-2xl font-semibold">
                Automated testing
              </h2>
  
              <p className="mt-4 text-sm leading-7 opacity-60">
                The project includes automated tests covering API
                functionality, database persistence and core data
                processing functionality.
              </p>
  
              <div className="mt-6 rounded-xl bg-black/10 p-4 font-mono text-sm dark:bg-white/10">
                pytest
              </div>
            </div>
  
            {/* Deployment */}
            <div className="rounded-2xl border border-black/10 bg-black/5 p-8 dark:border-white/10 dark:bg-white/5">
              <p className="font-mono text-sm text-accent-500">
                07 / DEPLOYMENT
              </p>
  
              <h2 className="mt-3 text-2xl font-semibold">
                Docker + OpenShift
              </h2>
  
              <p className="mt-4 text-sm leading-7 opacity-60">
                The application is packaged into a Docker image and
                deployed to an OpenShift environment. CI/CD automation
                is used to build and publish container images.
              </p>
  
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Docker",
                  "OpenShift",
                  "GitHub Actions",
                  "GHCR",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
  
          {/* Stack */}
          <section className="mt-24">
            <p className="font-mono text-sm text-accent-500">
              08 / STACK
            </p>
  
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["Backend", "Python / Flask"],
                ["Database", "PostgreSQL"],
                ["Infrastructure", "Docker / OpenShift"],
                ["Testing", "pytest"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
                >
                  <p className="font-mono text-xs opacity-40">
                    {title}
                  </p>
  
                  <p className="mt-3 font-semibold">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Closing */}
          <section className="mt-24 border-t border-black/10 pt-12 dark:border-white/10">
            <p className="max-w-3xl text-sm leading-7 opacity-50">
              This project gave me hands-on experience building a
              backend for a real production environment, including API
              design, relational databases, automated testing,
              containerization and cloud deployment.
            </p>
          </section>
  
        </div>
      </main>
    );
  }