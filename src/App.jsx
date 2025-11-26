import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Languages,
  Database,
  Brain,
  Zap,
  Globe,
  Award,
  ChevronDown,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react'

// Componente de efecto de escritura
const TypeWriter = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{displayText}<span className="animate-pulse">|</span></span>
}

// Componente de tarjeta con efecto glow
const GlowCard = ({ children, className = "", gradient = "from-cyan-500/10 to-violet-500/10" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-xl border border-white/10 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.15), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  )
}

// Componente Hero
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Code2 className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Raúl Soriano
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 h-20 flex items-center justify-center"
        >
          <TypeWriter
            text="Desarrollador Web & Multiplataforma"
            delay={80}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg text-gray-400 mb-2 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-violet-400" />
          Especialista en Interfaces Intuitivas & Automatización con IA
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-gray-500 mb-8 flex items-center justify-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Sevilla, España
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105"
          >
            Contáctame
          </a>
          <a
            href="#experiencia"
            className="px-8 py-4 border border-cyan-500/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            Ver Proyectos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Componente Sobre Mí
const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <GlowCard className="p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              Desarrollador enfocado en la <span className="text-cyan-400 font-semibold">mejora continua</span> y
              la adopción de <span className="text-violet-400 font-semibold">nuevas tecnologías</span>. Fusiono código
              robusto con soluciones de <span className="text-fuchsia-400 font-semibold">IA</span> para resolver problemas
              reales y crear experiencias digitales que marcan la diferencia.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Code2, label: "Clean Code" },
                { icon: Zap, label: "Performance" },
                { icon: Brain, label: "IA & Automation" },
                { icon: Globe, label: "Web & Mobile" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <item.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-sm text-gray-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Skills Bento Grid
const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "PHP", "SQL", "Python"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      size: "md:col-span-2"
    },
    {
      title: "Frameworks",
      icon: Database,
      skills: [".NET (C#)", "WordPress", "Dart"],
      gradient: "from-violet-500/20 to-purple-500/20",
      size: "md:col-span-1"
    },
    {
      title: "Automatización IA",
      icon: Brain,
      skills: ["n8n", "Workflow Automation", "Process Optimization"],
      gradient: "from-fuchsia-500/20 to-pink-500/20",
      size: "md:col-span-1",
      featured: true
    },
    {
      title: "Herramientas",
      icon: Zap,
      skills: ["Jira", "Slack", "Excel", "Git"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      size: "md:col-span-2"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <GlowCard
                key={idx}
                className={`p-6 ${category.size} ${category.featured ? 'ring-2 ring-fuchsia-500/50' : ''}`}
                gradient={category.gradient}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${category.featured ? 'bg-fuchsia-500/20' : 'bg-white/10'}`}>
                    <category.icon className={`w-6 h-6 ${category.featured ? 'text-fuchsia-400' : 'text-cyan-400'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                    {category.featured && (
                      <Sparkles className="inline-block w-5 h-5 ml-2 text-fuchsia-400 animate-pulse" />
                    )}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        category.featured
                          ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                          : 'bg-white/10 text-gray-300 border border-white/20'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Experiencia Timeline
const Experience = () => {
  const experiences = [
    {
      company: "Agencia Mamá Pato",
      role: "Desarrollador Web",
      description: "Creación de proyectos desde cero, diseño, maquetación y prototipado. Mantenimiento para clientes finales.",
      highlights: ["Diseño UI/UX", "Desarrollo Full-Stack", "Gestión de Clientes"],
      color: "cyan"
    },
    {
      company: "Media Interactiva",
      role: "Desarrollador de Software",
      description: "Mantenimiento en C# (.NET). Reuniones técnicas en inglés con clientes multinacionales. Auditoría de datos.",
      highlights: ["C# / .NET", "Inglés Profesional", "Clientes Internacionales"],
      color: "violet"
    },
    {
      company: "Braun & Hotel Casa del Poeta",
      role: "Atención al Cliente & Logística",
      description: "Experiencias que demuestran versatilidad, trato humano y capacidad de adaptación a diferentes entornos.",
      highlights: ["Soft Skills", "Atención al Cliente", "Trabajo en Equipo"],
      color: "fuchsia"
    }
  ]

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Punto en la línea */}
                  <div className={`absolute left-5 top-6 w-7 h-7 rounded-full bg-gradient-to-br from-${exp.color}-400 to-${exp.color}-600 border-4 border-black shadow-lg shadow-${exp.color}-500/50`}></div>

                  <GlowCard className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className={`w-6 h-6 text-${exp.color}-400 mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        <p className={`text-${exp.color}-400 font-semibold`}>{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Formación
const Education = () => {
  const education = [
    {
      title: "Desarrollo de Aplicaciones Web",
      institution: "CoreNetworks Sevilla",
      year: "2025",
      icon: Code2
    },
    {
      title: "Desarrollo de Aplicaciones Multiplataforma",
      institution: "CoreNetworks Sevilla",
      year: "2023",
      icon: Globe
    },
    {
      title: "Curso Java Oracle",
      institution: "Certificación Oficial",
      year: "Completado",
      icon: Award
    },
    {
      title: "Automatización con n8n",
      institution: "Especialización IA",
      year: "Completado",
      icon: Brain
    }
  ]

  return (
    <section id="formacion" className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Formación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <GlowCard key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                    <edu.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                    <p className="text-violet-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Idiomas
const LanguagesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Idiomas
          </h2>

          <GlowCard className="p-8 md:p-12 text-center" gradient="from-emerald-500/20 to-teal-500/20">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="p-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400">
                  <Languages className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Award className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Inglés - Nivel C1</h3>
                <p className="text-emerald-400 text-xl font-semibold mb-4">Alto / Profesional</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {["Reuniones Internacionales", "Documentación Técnica", "Comunicación Fluida"].map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium border border-emerald-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Contacto
const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Hablemos
          </h2>

          <GlowCard className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300">
                ¿Tienes un proyecto en mente? Me encantaría escucharte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:raulsorgo@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">raulsorgo@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+34608408970"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                  <Phone className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="text-white font-semibold">+34 608 40 89 70</p>
                </div>
              </motion.a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 mb-4">También en redes</p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Github className="w-6 h-6 text-gray-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-gray-300" />
                </motion.a>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500">
          Desarrollado con <span className="text-cyan-400">React</span>, <span className="text-violet-400">Tailwind</span> y <span className="text-fuchsia-400">Framer Motion</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          © 2025 Raúl Soriano. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

// Componente App Principal
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <LanguagesSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
