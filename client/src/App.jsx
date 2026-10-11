import { useState } from "react";
import axios from "axios";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Braces,
  CheckCircle2, Code2, Github, Linkedin, Mail, Menu, MessageSquare,
  Rocket, ShieldCheck, Sparkles, X, Database, Workflow
} from "lucide-react";
import { profile, skills, projects, experience } from "./data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};
const reveal = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function SectionHeading({ eyebrow, title, accent, description }) {
  return <motion.div className="section-heading" variants={fadeUp}>
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title} <span className="gradient-text">{accent}</span></h2>
    {description && <p>{description}</p>}
  </motion.div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];
  return <header className="navbar">
    <a className="brand" href="#home" aria-label="Abhinav Raskar home"><span className="brand-mark">AR</span><span>Abhinav<span className="brand-period">.</span></span></a>
    <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
  </header>;
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-grid" />
    <div className="hero-copy">
      <motion.div initial="hidden" animate="visible" variants={reveal}>
        <motion.div className="availability" variants={fadeUp}><span className="availability-dot"/> Open to opportunities <span className="availability-line"/></motion.div>
        <motion.p className="hero-kicker" variants={fadeUp}>HELLO, I'M ABHINAV RASKAR</motion.p>
        <motion.p className="hero-kicker" variants={fadeUp}>MERN Stack Developer </motion.p>
        <motion.h1 variants={fadeUp}>Building digital<br/>products with<br/><span className="gradient-text">code &amp; AI.</span></motion.h1>
        <motion.p className="hero-description" variants={fadeUp}>{profile.summary}</motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
          <a className="button button-secondary" href="#contact">Let's connect <ArrowUpRight size={17}/></a>
        </motion.div>
        <motion.div className="social-row" variants={fadeUp}>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
          <span className="social-divider"/>
          <span className="location"><span>↗</span> {profile.location}</span>
        </motion.div>
      </motion.div>
    </div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
      <div className="profile-photo-card"><img src="/abhinav-raskar.jpg" alt="Portrait of Abhinav Raskar wearing a navy blazer and glasses" /><div className="profile-photo-caption"><span className="photo-status-dot" /><span><b>Abhinav Raskar</b><small>Full Stack Developer · MERN + AI</small></span></div></div>
      <div className="orb orb-one"/><div className="orb orb-two"/>
      <div className="visual-topline"><span className="window-dots"><i/><i/><i/></span><span>developer.tsx</span><span className="live-tag">LIVE IDEAS</span></div>
      <div className="code-window">
        <div className="code-line"><span className="line-no">01</span><span><b className="syntax-purple">const</b> <b className="syntax-blue">developer</b> = {'{'}</span></div>
        <div className="code-line"><span className="line-no">02</span><span className="indent"><b className="syntax-cyan">name</b>: <b className="syntax-green">'Abhinav Raskar'</b>,</span></div>
        <div className="code-line"><span className="line-no">03</span><span className="indent"><b className="syntax-cyan">stack</b>: [<b className="syntax-green">'MERN'</b>, <b className="syntax-green">'AI'</b>],</span></div>
        <div className="code-line"><span className="line-no">04</span><span className="indent"><b className="syntax-cyan">mindset</b>: <b className="syntax-green">'Build. Learn. Ship.'</b>,</span></div>
        <div className="code-line"><span className="line-no">05</span><span className="indent"><b className="syntax-cyan">curiosity</b>: <b className="syntax-orange">Infinity</b></span></div>
        <div className="code-line"><span className="line-no">06</span><span>{'}'}<span className="cursor">▍</span></span></div>
        <div className="code-divider"/>
        <div className="code-footer"><span><span className="status-dot"/> Ready to build</span><span>JavaScript · JSX</span></div>
      </div>
      <div className="float-card float-card-top"><span className="float-icon purple"><Braces size={17}/></span><span><b>Full Stack</b><small>End-to-end products</small></span></div>
      <div className="float-card float-card-bottom"><span className="float-icon blue"><Bot size={17}/></span><span><b>AI Integrations</b><small>Useful, human-first AI</small></span><Sparkles className="float-spark" size={15}/></div>
      <div className="visual-caption"><span>01 / BUILDING THE FUTURE</span><span className="caption-rule"/></div>
    </motion.div>
    <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={15}/></span> SCROLL TO EXPLORE</a>
  </section>;
}

function About() {
  const points = [
    { icon: <Code2/>, title: "Full-stack thinking", text: "Building interfaces and backend systems that work together." },
    { icon: <Workflow/>, title: "API integrations", text: "Connecting services into practical, cohesive product experiences." },
    { icon: <Bot/>, title: "AI-enabled products", text: "Integrating language models where they can make workflows more useful." }
  ];
  return <section className="section-wrap section-block" id="about">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature." accent="Builder by choice." description="I enjoy turning complex problems into clear, useful digital experiences."/>
    <div className="about-layout">
      <motion.div className="about-main glass-panel" variants={fadeUp}>
        <span className="panel-index">01 — THE APPROACH</span>
        <h3>Good software is more than code.<br/><span className="muted">It's how people solve problems.</span></h3>
        <p>I'm a 2026 Computer Engineering graduate focused on the MERN stack and Generative AI integrations. I like understanding the problem first, choosing straightforward tools, and building in small, testable steps.</p>
        <p>From responsive interfaces to REST APIs and database-backed workflows, I aim to make products intuitive, maintainable, and reliable.</p>
        <div className="about-signature"><span className="signature-mark">AR</span><span><b>Abhinav Raskar</b><small>Full Stack Developer · Pune, India</small></span></div>
      </motion.div>
      <div className="about-points">{points.map((p, i) => <motion.div className="about-point" key={p.title} variants={fadeUp}><span className="point-icon">{p.icon}</span><div><span className="point-number">0{i+1}</span><h4>{p.title}</h4><p>{p.text}</p></div><ArrowDownRight className="point-arrow" size={19}/></motion.div>)}</div>
    </div>
  </section>;
}

function Skills() {
  const icons = [<Code2/>, <Braces/>, <Database/>, <Bot/>, <Rocket/>];
  return <section className="section-wrap section-block" id="skills">
    <SectionHeading eyebrow="MY TOOLKIT" title="Tools for turning" accent="ideas into products." description="A practical set of technologies I use to build, connect, and ship applications."/>
    <motion.div className="skills-grid" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
      {skills.map((group, i) => <motion.article className="skill-card" key={group.title} variants={fadeUp} whileHover={{ y: -5 }}>
        <div className="skill-card-top"><span className="skill-icon">{icons[i]}</span><span className="skill-index">0{i+1}</span></div>
        <h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
      </motion.article>)}
    </motion.div>
  </section>;
}

function Projects() {
  return <section className="section-wrap section-block" id="projects">
    <SectionHeading eyebrow="SELECTED WORK" title="Projects built to" accent="solve real problems." description="A selection of applications exploring full-stack workflows, SaaS features, and AI-powered experiences."/>
    <motion.div className="projects-grid" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      {projects.map((project, i) => <motion.article className="project-card" key={project.name} variants={fadeUp} whileHover={{ y: -6 }}>
        <div className={`project-art project-art-${i+1}`}>
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
          <span className="project-art-number">0{i+1}</span>
          <div className="art-symbol">{i === 0 ? <Database size={42}/> : i === 1 ? <MessageSquare size={42}/> : i === 2 ? <Sparkles size={42}/> : <ShieldCheck size={42}/>}</div>
          <span className="art-label">{project.status}</span>
        </div>
        <div className="project-content">
          <div className="project-category">{project.category}</div>
          <h3>{project.name}</h3><p>{project.description}</p>
          <div className="project-features">{project.features.map(feature => <span key={feature}><CheckCircle2 size={13}/>{feature}</span>)}</div>
          <div className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> Source code <ArrowUpRight size={14}/></a>
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}
          </div>
        </div>
      </motion.article>)}
    </motion.div>
    <div className="more-projects"><span>More experiments, code, and learning in progress.</span><a href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a></div>
  </section>;
}

function Journey() {
  return <section className="section-wrap section-block" id="journey">
    <SectionHeading eyebrow="THE JOURNEY" title="Learning by" accent="building." description="A snapshot of my education and development journey. Internship dates and responsibilities should be verified before publishing."/>
    <div className="timeline">{experience.map((item, i) => <motion.div className="timeline-item" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="timeline-marker"><span/></div><div className="timeline-date">{item.period}</div>
      <div className="timeline-card"><span className="timeline-type">{item.type}</span><h3>{item.title}</h3><h4>{item.organization}</h4><p>{item.description}</p></div>
    </motion.div>)}</div>
    <div className="process-strip"><span className="process-label">HOW I BUILD</span>{["Discover", "Design", "Develop", "Test", "Deploy"].map((step, i) => <div className="process-step" key={step}><span>0{i+1}</span><b>{step}</b>{i < 4 && <ArrowRight size={15}/>}</div>)}</div>
  </section>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState({ loading: false, message: "", error: false });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, message: "", error: false });
    try {
      const base = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await axios.post(`${base}/contact`, form);
      setState({ loading: false, message: response.data.message || "Message sent successfully.", error: false });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setState({ loading: false, message: error.response?.data?.message || "Could not send the message. Please contact me through LinkedIn instead.", error: true });
    }
  }
  return <section className="section-wrap section-block contact-section" id="contact">
    <SectionHeading eyebrow="LET'S TALK" title="Have an idea?" accent="Let's build it." description="Interested in a role, collaboration, or a useful product idea? Send me a message."/>
    <div className="contact-layout">
      <motion.div className="contact-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="contact-orb"><Mail size={31}/><span/></div>
        <h3>Let's make something<br/><span className="gradient-text">meaningful.</span></h3>
        <p>I'm interested in opportunities where I can keep learning, contribute to a team, and build thoughtful software.</p>
        <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={19}/></span><span><small>CONNECT ON</small><b>LinkedIn</b></span><ArrowUpRight size={17}/></a>
        <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={19}/></span><span><small>VIEW MY CODE</small><b>GitHub</b></span><ArrowUpRight size={17}/></a>
        {profile.email && <a className="contact-link" href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={19}/></span><span><small>EMAIL ME</small><b>{profile.email}</b></span><ArrowUpRight size={17}/></a>}
      </motion.div>
      <motion.form className="contact-form glass-panel" onSubmit={submit} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="form-heading"><h3>Send a message</h3><span><span className="availability-dot"/> Typically replies via email/LinkedIn</span></div>
        <div className="form-row">
          <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" minLength="2" maxLength="80" required /></label>
          <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@example.com" maxLength="254" required /></label>
        </div>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" maxLength="120" required /></label>
        <label>Message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." rows="5" minLength="10" maxLength="3000" required /></label>
        <button className="button button-primary submit-button" disabled={state.loading} type="submit">{state.loading ? "Sending..." : "Send message"} <ArrowUpRight size={16}/></button>
        {state.message && <p className={state.error ? "form-feedback error" : "form-feedback"} role="status">{state.message}</p>}
        <p className="form-note">Your message is sent to the configured backend. Configure MongoDB and the API server to enable submissions.</p>
      </motion.form>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">AR</span><span>Abhinav<span className="brand-period">.</span></span></a><p>Designed with intent. Built with code.</p><div className="footer-right"><span>© {new Date().getFullYear()} Abhinav Raskar</span><a href="#home" aria-label="Back to top"><ArrowUpRight size={16}/></a></div></footer>;
}

export default function App() {
  const reduceMotion = useReducedMotion();
  return <div className={reduceMotion ? "app reduce-motion" : "app"}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <Navbar/><main><Hero/><About/><Skills/><Projects/><Journey/><Contact/></main><Footer/>
  </div>;
}
