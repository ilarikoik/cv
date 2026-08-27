import BackButton from "@/app/ui/dashboard/backButton";
import GitHubButton from "@/app/ui/dashboard/githubButton";

export default function Page() {
  return (
    <main className="min-h-screen bg-background pt-16 text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 ">
          <div className="w-full flex flex-row justify-between">

  <BackButton />
  <GitHubButton url="https://github.com/ilarikoik/QuickApply"/>
          </div>

        <section className="max-w-3xl ">

        <div className="flex flex-col gap-3">
  <p className="font-mono text-sm text-accent-500">
    THESIS PROJECT / 01
  </p>
</div>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Smart Job Application Autofill
          </h1>

          <p className="mt-6 text-lg leading-relaxed opacity-60">
            Chrome extension prototype that automatically fills job
            application forms using the user's saved profile data.
            The goal is to reduce repetitive manual work while keeping
            the user in control of the final application.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Chrome Extension",
              "React",
              "TypeScript",
              "Spring Boot",
              "PostgreSQL",
              "JWT",
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

        {/* Thesis question */}
        <section className="mt-12 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-8">
          <p className="font-mono text-xs text-accent-500">
            RESEARCH QUESTION
          </p>

          <h2 className="mt-4 max-w-4xl text-2xl font-semibold leading-relaxed md:text-3xl">
            How can reliable form autofill be implemented across
            different website layouts when complete automation cannot
            be guaranteed?
          </h2>
        </section>

        {/* Problem */}
        <section className="mt-24 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-sm text-accent-500">
              01 / PROBLEM
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Repetitive applications
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 opacity-60">
            <p>
              Applying for multiple jobs often requires entering the
              same personal information repeatedly. Name, address,
              phone number, salary expectations and application texts
              are frequently requested by different recruitment
              platforms.
            </p>

            <p>
              The problem becomes more difficult because every website
              can use different field names, structures and form
              implementations.
            </p>

            <p>
              The extension aims to automate the repetitive parts
              without assuming that every form can be identified
              perfectly.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-24">
          <p className="font-mono text-sm text-accent-500">
            02 / HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            From profile to application
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Create profile",
                text: "Save personal information and application-specific data.",
              },
              {
                number: "02",
                title: "Open application",
                text: "The extension detects available form fields on the page.",
              },
              {
                number: "03",
                title: "Autofill",
                text: "Matching fields are populated using the selected profile.",
              },
              {
                number: "04",
                title: "Review",
                text: "The user checks, corrects and confirms the information.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
              >
                <span className="font-mono text-xs text-accent-500">
                  {step.number}
                </span>

                <h3 className="mt-4 font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Profiles */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-accent-500">
              03 / PROFILES
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Multiple application profiles
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-60">
              Users can create different profiles for different types
              of positions and select the appropriate profile before
              filling an application.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ["Full-stack Developer", "€3,200", "Backend + frontend"],
              ["Frontend Developer", "€3,000", "React / TypeScript"],
              ["Junior Developer", "€2,700", "General profile"],
            ].map(([title, salary, description]) => (
              <div
                key={title}
                className="rounded-xl border border-black/10 p-5 dark:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    {title}
                  </h3>

                  <span className="font-mono text-xs text-accent-500">
                    {salary}
                  </span>
                </div>

                <p className="mt-2 text-sm opacity-50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Confidence */}
        <section className="mt-24">
          <p className="font-mono text-sm text-accent-500">
            04 / RELIABILITY
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Automation with a safety net
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 opacity-60">
            Complete form recognition cannot be guaranteed because
            recruitment websites use different structures and naming
            conventions. Instead of hiding this uncertainty, the
            extension makes it visible to the user.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Confidence scoring",
                text: "Show how confidently a detected field was matched to profile data.",
              },
              {
                title: "Highlighted fields",
                text: "Visually indicate which fields were automatically filled.",
              },
              {
                title: "Not found",
                text: "Show a list of fields that could not be identified automatically.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mt-24">
          <p className="font-mono text-sm text-accent-500">
            05 / ARCHITECTURE
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            System architecture
          </h2>

          <div className="mt-10 rounded-2xl border border-black/10 bg-black/5 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col items-center gap-4 text-center font-mono text-sm">

              <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                Job application website
              </div>

              <span className="opacity-30">↓</span>

              <div className="rounded-xl border border-accent-500/30 bg-accent-500/10 px-6 py-4">
                Chrome Extension
              </div>

              <span className="opacity-30">↓</span>

              <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                Spring Boot REST API
              </div>

              <span className="opacity-30">↓</span>

              <div className="rounded-xl border border-black/10 px-6 py-4 dark:border-white/10">
                PostgreSQL
              </div>

            </div>
          </div>
        </section>

        {/* Data */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-accent-500">
              06 / PROFILE DATA
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              One profile, multiple applications
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-60">
              Profile information is stored centrally so the same
              information does not need to be entered manually for
              every application.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Name",
              "Address",
              "Postal code",
              "Phone number",
              "Salary expectation",
              "Why I am a good fit",
              "CV / documents",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-black/10 px-5 py-4 text-sm dark:border-white/10"
              >
                <span className="mr-3 text-accent-500">
                  →
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation */}
        <section className="mt-24">
          <p className="font-mono text-sm text-accent-500">
            07 / EVALUATION
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Measuring reliability
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Correct", "Fields filled with the intended value."],
              ["Incorrect", "Fields matched to the wrong information."],
              ["Not found", "Fields that required manual input."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
              >
                <h3 className="font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 opacity-60">
            The prototype can be evaluated across different
            recruitment websites by measuring how many fields are
            filled correctly, incorrectly or not at all. A small
            usability test can also be used to evaluate whether
            highlighting and manual correction improve user
            confidence.
          </p>
        </section>

        {/* Security */}
        <section className="mt-24 rounded-2xl border border-black/10 bg-black/5 p-8 dark:border-white/10 dark:bg-white/5">
          <p className="font-mono text-sm text-accent-500">
            08 / SECURITY
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Personal data & privacy
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 opacity-60">
            The system handles personal information such as names,
            addresses and phone numbers. Security and privacy are
            therefore important parts of the project, including
            authentication, access control, secure storage and the
            ability to delete stored personal data.
          </p>
        </section>

        {/* Stack */}
        <section className="mt-24">
          <p className="font-mono text-sm text-accent-500">
            09 / STACK
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Extension", "React / TypeScript"],
              ["Backend", "Java / Spring Boot"],
              ["Database", "PostgreSQL"],
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

        <section className="mt-24 border-t border-black/10 pt-12 dark:border-white/10 flex flex-row justify-between">
          <p className="max-w-3xl text-sm leading-7 opacity-50 ">
            The project combines full-stack development with a
            practical usability problem: how to automate repetitive
            work without removing the user from the decision-making
            process when the automation is uncertain.
          </p>
          <GitHubButton url="https://github.com/ilarikoik/QuickApply"/>
        </section>

      </div>
      
    </main>
  );
}