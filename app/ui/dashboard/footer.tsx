import { Mail} from 'lucide-react';


export function Footer() {
    return (
      <footer id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden bg-paper-50 text-ink-950 transition-colors dark:bg-ink-950 dark:text-paper-50">
          <h2 className="font-mono mt-2 font-display text-xl tracking-tight md:text-2xl">
            Maybe there is something we can do together?
          </h2>
          <div>
          <form className="flex h-fit flex-col gap-4 focus:outline-none focus:ring-0">
  <textarea
    name="message"
    rows={10}
    placeholder="Whats on your mind?"
    className="w-full resize-none bg-black/10 dark:bg-white/15 rounded-xl border-ink-950/10  p-4 outline-none transition dark:border-paper-50/10 dark:bg-ink-900/50 "
  />

  <button
    type="submit"
    className="cursor-pointer self-end rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold transition hover:bg-accent-600"
  >
   Send Message
  </button>
</form>
          </div>
        
        </div>
        <p className="mt-8 text-center font-mono text-xs text-ink-950/40 dark:text-paper-50/40">
          © {new Date().getFullYear()} — Built with Next.js, Tailwind, and Postgres for analytics
        </p>
        {/* <a
            href="mailto:ilari.koik@gmail.com"
            className="mt-2  rounded-full bg-accent-500 px-8 py-3 font-body text-sm transition-transform hover:scale-105 flex flex-row items-center justify-center font-bold w-2/5 bg-white/50"
            >
            <Mail/>
            ilari.koik@gmail.com
          </a> */}
      </footer>
    );
  }
  