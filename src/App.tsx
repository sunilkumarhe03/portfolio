import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Cpu, 
  Code, 
  Wrench, 
  GraduationCap, 
  Languages as LanguagesIcon, 
  ChevronRight,
  User,
  Lightbulb,
  FileText,
  Download
} from "lucide-react";
import { PROFILE, EDUCATION, SKILLS, PROJECTS, INTERESTS, LANGUAGES } from "./constants";

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">{title}</h2>
  </div>
);

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors block"
      >
        <ExternalLink size={18} />
      </a>
    </div>
    <div className="mb-4">
      <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2 block">
        {project.subtitle}
      </span>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {project.title}
      </h3>
    </div>
    <ul className="space-y-3">
      {project.description.map((item, i) => (
        <li key={i} className="text-gray-600 text-sm flex gap-2">
          <ChevronRight size={16} className="text-indigo-400 shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-6 pt-6 border-t border-gray-50">
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm font-semibold text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all"
      >
        View on GitHub <ChevronRight size={16} />
      </a>
    </div>
  </motion.div>
);

const SkillBadge = ({ skill }: { skill: string; key?: any }) => (
  <span className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default">
    {skill}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-indigo-600">SK.</span>
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#resume" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Resume</a>
            <a href="#contact" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold tracking-widest uppercase mb-6">
              Available for hire
            </span>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-8">
              SUNIL <br /> KUMAR <span className="text-indigo-600">H.E</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              {PROFILE.title} specializing in <span className="text-gray-900 font-semibold">Embedded Systems, Python, and IoT.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
              >
                <Mail size={20} /> Get in touch
              </a>
              <a 
                href="/Sunil_Kumar_Resume.pdf"
                download="Sunil_Kumar_Resume.pdf"
                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center gap-2"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-indigo-100 relative z-10 shadow-2xl">
              <img 
                src={PROFILE.profilePic} 
                alt={PROFILE.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-indigo-600 rounded-full -z-0 blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-indigo-400 rounded-full -z-0 blur-3xl opacity-20 animate-pulse delay-700"></div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-32">
          <SectionHeader title="Profile" icon={User} />
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                {PROFILE.profileSummary}
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-indigo-600" />
                    <span className="text-sm font-medium">{PROFILE.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="text-indigo-600" />
                    <span className="text-sm font-medium">{PROFILE.phone}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100 text-white">
                <h4 className="text-sm font-bold text-indigo-200 uppercase tracking-widest mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest, i) => (
                    <span key={i} className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <SectionHeader title="Featured Projects" icon={Code} />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 scroll-mt-32">
          <SectionHeader title="Technical Arsenal" icon={Wrench} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Code size={20} className="text-indigo-600" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.languages.map((s, i) => <SkillBadge key={i} skill={s} />)}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Cpu size={20} className="text-indigo-600" /> Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.core.map((s, i) => <SkillBadge key={i} skill={s} />)}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Wrench size={20} className="text-indigo-600" /> Software Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((s, i) => <SkillBadge key={i} skill={s} />)}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Lightbulb size={20} className="text-indigo-600" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.soft.map((s, i) => <SkillBadge key={i} skill={s} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <section className="scroll-mt-32">
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-mt-32">
            <SectionHeader title="Languages" icon={LanguagesIcon} />
            <div className="grid gap-4">
              {LANGUAGES.map((lang, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center justify-between group hover:border-indigo-200 transition-all">
                  <span className="text-lg font-bold text-gray-900">{lang.split(' (')[0]}</span>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                    {lang.split(' (')[1].replace(')', '')}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Resume Section */}
        <section id="resume" className="py-24 border-t border-gray-100">
          <SectionHeader title="Resume" icon={FileText} />
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">{PROFILE.name}</h3>
                <p className="text-indigo-600 font-bold text-lg">{PROFILE.title}</p>
              </div>
              <div className="md:text-right space-y-1 text-gray-600 font-medium">
                <p className="flex items-center md:justify-end gap-2"><Mail size={16} /> {PROFILE.email}</p>
                <p className="flex items-center md:justify-end gap-2"><Phone size={16} /> {PROFILE.phone}</p>
                <p className="flex items-center md:justify-end gap-2"><Linkedin size={16} /> {PROFILE.linkedin.split('/').pop()}</p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Summary</h4>
                <p className="text-gray-700 leading-relaxed text-lg">{PROFILE.profileSummary}</p>
              </div>

              <div>
                <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-6">Education</h4>
                <div className="space-y-8">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-indigo-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h5 className="text-xl font-bold text-gray-900">{edu.degree}</h5>
                        <span className="text-indigo-600 font-bold">{edu.period}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-6">Key Projects</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {PROJECTS.map((project, i) => (
                    <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                      <h5 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative rounded-[3rem] overflow-hidden bg-gray-900 p-12 lg:p-24 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-8">
              LET'S BUILD SOMETHING <br /> <span className="text-indigo-400">EXTRAORDINARY</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-3"
              >
                <Mail size={20} /> {PROFILE.email}
              </a>
              <div className="flex gap-4">
                <a 
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/sunilkumarhe03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo)'); }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-indigo-400 outline-none transition-all"
                  required
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-indigo-400 outline-none transition-all resize-none"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Sunil Kumar H.E. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
