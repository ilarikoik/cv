export default function AdminPage() {
    return (
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-md px-6 py-12">
          <h1 className="text-3xl font-bold">Admin Login</h1>
  
          <form className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="rounded-xl border border-black/10 bg-white/50 px-4 py-3 outline-none focus:border-accent-500 dark:border-white/10 dark:bg-white/5"
            />
  
            <input
              type="password"
              placeholder="Password"
              className="rounded-xl border border-black/10 bg-white/50 px-4 py-3 outline-none focus:border-accent-500 dark:border-white/10 dark:bg-white/5"
            />
  
            <button
              type="submit"
              className="rounded-xl bg-accent-500 px-4 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }