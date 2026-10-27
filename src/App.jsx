
import { Code2, Monitor, Wrench, Mail, Phone } from "lucide-react";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative isolate min-h-screen overflow-hidden bg-[#05050B] text-white">
        {/* Purple ambient lighting */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-64 top-40 h-150 w-150 rounded-full bg-purple-700/15 blur-[150px]" />
          <div className="absolute -right-64 top-225 h-175 w-175 rounded-full bg-violet-600/10 blur-[160px]" />
          <div className="absolute -left-72 top-[2200px] h-162.5 w-162.5 rounded-full bg-fuchsia-700/10 blur-[160px]" />
        </div>
        <nav className="sticky top-0 z-50  border-b border-white/10 bg-[#05050B]/90 backdrop-blur-xl  ">

          <div className="relative flex items-center justify-between px-8 py-5">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-purple-500">&lt;/&gt;</span>

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold leading-none text-white">
                  Ansh<span className="text-purple-500">Dev</span>
                </h2>
                <span className="pl-1 text-[10px] tracking-[4px] text-gray-400">
                  STUDIO
                </span>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#home" className="relative text-white transition-colors duration-300 hover:text-purple-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">Home </a>

              <a href="#services" className="relative text-white transition-colors duration-300 hover:text-purple-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">Services</a>


              <a href="#projects" className="relative text-white transition-colors duration-300 hover:text-purple-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">Projects</a>


              <a href="#about" className="relative text-white transition-colors duration-300 hover:text-purple-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">About</a>


              <a href="#contact" className="relative text-white transition-colors duration-300 hover:text-purple-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
            </div>
            <a href="#contact" className="hidden items-center gap-2 rounded-full border border-purple-500/80 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300 hover:bg-purple-600/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] md:inline-flex" > Let's Talk</a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            {menuOpen && (
              <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#05050B] p-6 text-white md:hidden">
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-full border border-purple-500/70 px-5 py-3 text-center text-purple-300">
                  Let's Talk
                </a>
              </div>
            )}
          </div>
        </nav>
        <section id="home" className="relative">
          <div className="grid grid-cols-1 items-center gap-12 px-8 py-20 md:grid-cols-2 md:px-16 lg:px-24">
            {/*left side*/}
            <div>
              <p className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium tracking-[2px] text-purple-300">
                BUILDING DIGITAL EXPERIENCES
              </p>
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Turning Ideas
                <br />
                Into Powerful
                <br />
                <span className="bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                I create modern, responsive, and user-friendly websites
                that help businesses build their online presence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                >
                  View My Work →
                </a>

                <a href="#intro"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-500/10 hover:text-white">
                  ▶ Watch Intro
                </a>
              </div>

            </div>



            {/* RIGHT SIDE: LAPTOP VISUAL */}
            <div className="relative flex min-h-120 items-center justify-center overflow-hidden md:min-h-140">

              {/* 1. Purple glow behind everything */}
              <div className="absolute h-72 w-72 rounded-full bg-purple-700/40 blur-[100px] md:h-96 md:w-96"></div>

              {/* 2. Large background circle */}
              <div className="absolute h-72 w-72 rounded-full border border-purple-500/20 bg-purple-600/5 shadow-[0_0_80px_rgba(124,58,237,0.2)] md:h-96 md:w-96"></div>

              {/* 3. Orbital rings */}
              <div className="absolute h-40 w-[90%] rotate-[-20deg] rounded-[50%] border-2 border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.5)] md:h-52"></div>

              <div className="absolute h-64 w-[95%] rotate-25de rounded-[50%] border border-violet-400/40 md:h-80"></div>

              {/* 4. Laptop image */}
              <img
                src="/laptop3d.png"
                alt="Laptop displaying code"
                className="relative z-10 w-full max-w-155 rotate-[-8deg] object-contain drop-shadow-[0_20px_45px_rgba(124,58,237,0.45)]"
              />

              {/* 5. Floating code card */}
              <div className="absolute left-0 top-[12%] z-20 w-44 -rotate-6deg rounded-xl border border-purple-500 bg-[#080812]/95 p-4 shadow-[0_0_25px_rgba(147,51,234,0.2)] md:left-[2%] md:w-48">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-gray-400">WEB DEVELOPMENT</span>
                  <span className="text-purple-400">↗</span>
                </div>

                <p className="text-sm leading-6 text-white">
                  Clean Code<br />
                  Better Websites<br />
                  Greater Impact
                </p>

                <div className="mt-3 h-px w-8 bg-purple-500"></div>
              </div>

              {/* 6. Bottom feature badge */}
              <div className="absolute bottom-[12%] right-0 z-20 flex items-center gap-2 rounded-full border border-purple-500 bg-[#080812]/95 px-4 py-3 shadow-[0_0_25px_rgba(147,51,234,0.25)] md:right md:gap-3 md:px-5">
                <span className="text-lg text-purple-400">ϟ</span>
                <span className="whitespace-nowrap text-xs text-white md:text-sm">
                  Fast <span className="text-purple-500">•</span> Modern <span className="text-purple-500">•</span> Responsive
                </span>
              </div>



            </div>

          </div>
        </section>
        <div className="h-px w-full bg-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

        {/* SERVICES SECTION */}
        <section id="services" className="relative bg-[#080812] px-8 py-24 text-white md:px-16 lg:px-24">
          <h2 className="text-center text-4xl font-bold md:text-5xl">
            What I Do
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            I build modern digital experiences that help businesses grow.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

            <div className="group rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-400/70 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <Code2 size={28} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                Web Development
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                I build modern, responsive, and user-friendly websites
                that help businesses grow online.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  React
                </span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  JavaScript
                </span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Tailwind CSS
                </span>
              </div>

              <a
                href="#projects"
                className="mt-8 inline-block font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                View Projects →
              </a>

            </div>

            <div className="group rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-400/70 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <Monitor size={28} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                Responsive Design
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                I build responsive website layouts that adapt to
                mobile phones, tablets, and desktop screens.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  HTML
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  CSS
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="group rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-400/70 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <Wrench size={28} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                Website Maintenance
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                I help maintain websites by fixing layout issues,
                updating content, and improving usability.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Bug Fixes
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Content Updates
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  UI Fixes
                </span>
              </div>
            </div>



          </div>

        </section>

        <div className="h-px w-full bg-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>



        {/*projects section*/}

        <section id="projects" className="relative bg-[#080812] px-8 py-24 text-white md:px-16 lg:px-24">
          <h2 className="text-center text-4xl font-bold md:text-5xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            A selection of projects I've built while learning and creating
            modern web experiences.
          </p>
          <div className="mx-auto mt-16 max-w-md rounded-2xl border border-purple-500/30 bg-[#0D0D18] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-3xl">
              🚀
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Projects Coming Soon
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              I'm currently building exciting web projects.
              Check back soon to explore my work.
            </p>

            <span className="mt-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
              Work in Progress
            </span>
          </div>
        </section>
        <div className="h-px w-full bg-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

        {/* ABOUT SECTION */}
        <section id="about" className="relative bg-[#080812] px-8 py-24 text-white md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                About Me
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Building Digital
                <span className="block text-purple-400">Experiences</span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-gray-400">
                I'm Ansh, a web developer focused on creating modern,
                responsive, and user-friendly websites. I enjoy turning
                ideas into clean digital experiences using web technologies.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                My goal is to build websites that look great, work smoothly,
                and help businesses establish their online presence.
              </p>
              <div className="mt-8 rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Education
                </h3>

                <div className="border-l-2 border-purple-500/50 pl-4">
                  <h4 className="font-medium text-purple-300">
                    Bachelor of Computer Applications (BCA)
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">
                    Currently pursuing
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Computer Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="relative bg-[#080812] px-8 py-24 text-white md:px-16 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Let's Work <span className="text-purple-400">Together</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                Have a website idea or a project in mind? Let's discuss
                how I can help bring it to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">

              {/* Email Card */}
              <a
                href="mailto:tyagiansh1675@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  <Mail size={26} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    Email Me
                  </h3>

                  <p className="mt-2 break-all text-sm text-gray-400">
                    tyagiansh1675@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:8191961836"
                className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-[#0D0D18] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  <Phone size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Call Me
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    8191961836
                  </p>
                </div>
              </a>

            </div>

            {/* Bottom Message */}
            <p className="mt-10 text-center text-sm text-gray-500">
              Available for freelance web development projects.
            </p>

          </div>
        </section>
        <div className="h-px w-full bg-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>


        {/* FOOTER SECTION */}
        <footer className="border-t border-purple-500/20 bg-[#080812] px-8 py-8 text-white md:px-16 lg:px-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

            {/* Logo */}
            <a href="#home" className="text-xl font-bold">
              AnshDev<span className="text-purple-400">.</span>
            </a>

            {/* Copyright */}
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} AnshDev Studio. All rights reserved.
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
            >
              Back to top ↑
            </a>

          </div>
        </footer>

      </div >
    </>
  )

}
export default App
