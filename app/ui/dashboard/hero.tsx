// import { Mail , CodeXml} from 'lucide-react';


// export function Hero() {
//   return (
//     <section>
//       <div 
//       id="hero"
//       className="brelative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">

//         <div>
//           {/* <p className="mb-4 font-mono text-sm text-accent-300">
//             <span className="animate-pulse">👋</span>
//           </p> */}

//           <h1 
//           className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl text-black/60 dark:text-white/80">
//             Full-stack
//             <br />
//             <span className="text-accent-100">Developer</span>
//           </h1>

//           <p className=" text-black/40 mt-6 max-w-md font-body text-lg dark:text-white/70">
//            Building  applications with React, Next.js, TypeScript, Java, Spring Boot, and SQL.
//            <br/>
//            <br/>
//            About to graduate, only thesis left and its time to start my career as a software developer.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex items-center gap-4">
//             <a
//               href="#projects"
//               className="rounded-full border border-ink-950/20 px-6 py-3 font-body text-sm font-semibold transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-paper-50/20 dark:hover:text-accent-300"
//             >
//               Projects
//             </a>

//             {/* <a
//               href="#contact"
//               className="rounded-full border border-ink-950/20 px-6 py-3 font-body text-sm font-semibold transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-paper-50/20 dark:hover:text-accent-300"
//             >
//               Ota yhteyttä
//             </a> */}
//           </div>

//           <div className="mt-10 flex gap-4">
//             {[
//               {
//                 icon: CodeXml,
//                 href: "https://github.com/ilarikoik",
//               },
//               {
//                 icon: Mail,
//                 href: "mailto:ilari.koik@gmail..com",
//               },
//             ].map(({ icon: Icon, href }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/10 transition-colors hover:bg-accent-500 hover:text-white dark:bg-paper-50/10"
//               >
//                 <Icon size={16} />
//               </a>
//             ))}
           
//             </div>
//             </div>

//         <div className="hidden md:flex relative mx-auto w-full max-w-md justify-end">
//           <div className="overflow-hidden rounded-2xl border border-paper-50/10 bg-ink-900 text-paper-50 shadow-2xl shadow-accent-500/10">

//             <div className="flex items-center gap-2 border-b border-paper-50/10 bg-ink-800/60 px-4 py-3">
//               <span className="h-3 w-3 rounded-full bg-red-400/70" />
//               <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
//               <span className="h-3 w-3 rounded-full bg-green-400/70" />

//               <span className="ml-2 font-mono text-xs text-paper-50/40">
//                 details.ts
//               </span>
//             </div>

//             <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
//               <code>
//               <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
//   <code>
//     {"\n"}
//     <span className="text-green-600 dark:text-green-300">Ilari</span>
//     {"\n\n"}
//     <span className="text-paper-50/70">React · Next.js · TypeScript</span>
//     {"\n"}
//     <span className="text-paper-50/70">Java · Spring Boot · PostgreSQL</span>
//     {"\n\n"}
//     <span className="text-green-600 dark:text-green-300">● open to work</span>
//   </code>
// </pre>
//               </code>
//             </pre>
//           </div>
//         </div>
//       </div>

//       <div className="relative overflow-hidden border-t border-ink-950/10 bg-paper-100/60 dark:border-paper-50/10 dark:bg-ink-900/60">
//   <div className="flex w-max animate-marquee gap-12 py-6" >
//     {[
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Java",
//       "Spring",
//       "SQL",
//       "Tailwind",
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Java",
//       "Spring",
//       "SQL",
//       "Tailwind",
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Java",
//       "Spring",
//       "SQL",
//       "Tailwind",
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Java",
//       "Spring",
//       "SQL",
//       "Tailwind",
//     ].map((tech, index) => (
//       <span
//         key={`${tech}-${index}`}
//         className="rounded-full text-center border w-26  px-3 py-1 font-mono text-xs"
//       >
//         {tech}
//       </span>
//     ))}
//   </div>
// </div>
//     </section>
//   );
// }


import { Mail, CodeXml } from "lucide-react";
import CopyEmail from "./copyEmail";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      {/* Left */}
      <div>
        <p className="font-mono text-sm text-accent-500">
          SOFTWARE DEVELOPER
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-black/70 dark:text-white/80 md:text-6xl">
          Full-stack
          <br />
          <span className="text-accent-500">Developer</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-black/40 dark:text-white/60">
          Building applications with React, Next.js, TypeScript, Java,
          Spring Boot, and SQL.
        </p>

        <p className="mt-4 max-w-lg text-lg leading-8 text-black/40 dark:text-white/60">
          About to graduate. Only the thesis remains before starting my
          career as a software developer.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full border border-black/10 bg-black/5 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-white"
            
          >
            Projects
          </a>
        </div>

        <div className="mt-10 flex gap-3">
          <a
            href="https://github.com/ilarikoik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 transition hover:-translate-y-1 hover:bg-accent-500 hover:text-white dark:border-white/10 dark:bg-white/5"
            aria-label="GitHub"
          >
            <CodeXml size={17} />
          </a>

    <CopyEmail/>
          
        </div>
      </div>

      {/* Right */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-2xl  bg-black/30 dark:bg-white/10 text-white shadow-2xl shadow-black/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />

            <span className="ml-2 font-mono text-xs text-white/40">
              developer.ts
            </span>
          </div>

          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
          <code>
     {"\n"}
     <span className="text-green-400 dark:text-green-300">Ilari</span>
     {"\n\n"}
     <span className="text-paper-50/70">React · Next.js · TypeScript</span>
     {"\n"}
     <span className="text-paper-50/70">Java · Spring Boot · PostgreSQL</span>
     {"\n\n"}
     <span className="text-green-400 dark:text-green-300">● open to work</span>
   </code>
                      </pre>
        </div>
      </div>
    </section>
  );
}
