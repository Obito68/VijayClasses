import { image } from "framer-motion/client";
import { useState, useEffect, useRef } from "react";
import sandeep from "./assets/sandeep.jpeg";
import raj from "./assets/raj.jpeg";

// ─── CONFIG (edit here) ───────────────────────────────────────────────────────
const SITE = {
  name: "Vijay Classes",
  tagline: "Where Every Student Shines",
  phone: "+91 98765 43210",
  email: "info@vijayclasses.in",
  whatsapp: "919876543210",
  address: "123, Knowledge Hub, Near City Mall, Pune – 411001",
  estYear: 2005,
};

const NAV_LINKS = ["Home","About","Courses","Gallery","Results","Branches","Contact"];

const COURSES = [
  { id:1, grade:"SSC – 8th", tag:"Foundation", color:"from-sky-400 to-cyan-300", bg:"bg-sky-50",
    desc:"Build a rock-solid base in Maths, Science & Languages. Small batches, personal attention.", icon:"📐" },
  { id:2, grade:"SSC – 9th", tag:"Growth", color:"from-violet-400 to-purple-300", bg:"bg-violet-50",
    desc:"Deepen concepts, sharpen problem-solving and prepare confidently for Board Year.", icon:"🔬" },
  { id:3, grade:"SSC – 10th", tag:"Board Mastery", color:"from-fuchsia-400 to-pink-300", bg:"bg-fuchsia-50",
    desc:"Intensive Board prep with mock tests, revision series and expert mentorship.", icon:"🏆" },
  { id:4, grade:"11th Commerce", tag:"Commerce", color:"from-amber-400 to-orange-300", bg:"bg-amber-50",
    desc:"Accounts, Economics & Business Studies taught with real-world examples.", icon:"📊" },
  { id:5, grade:"12th Commerce", tag:"Commerce", color:"from-emerald-400 to-teal-300", bg:"bg-emerald-50",
    desc:"Board + competitive exam prep. Career guidance for CA, MBA & more.", icon:"💼" },
  { id:6, grade:"11th Science", tag:"Science", color:"from-blue-500 to-indigo-400", bg:"bg-blue-50",
    desc:"Physics, Chemistry & Maths/Biology. JEE/NEET foundation from Day 1.", icon:"⚗️" },
  { id:7, grade:"12th Science", tag:"Science", color:"from-rose-500 to-red-400", bg:"bg-rose-50",
    desc:"Board excellence + JEE/NEET cracker batches with All-India rank holders.", icon:"🧬" },
];

const STATS = [
  { label:"Students Taught", value:12000, suffix:"+" },
  { label:"Years of Excellence", value:19, suffix:"+" },
  { label:"Board Toppers", value:340, suffix:"+" },
  { label:"Success Rate", value:98, suffix:"%" },
];

const TESTIMONIALS = [
  { name:"Ananya Sharma", grade:"12th Science – AIR 47 JEE", text:"Vijay Classes gave me the perfect blend of concept clarity and practice. The faculty felt like family.", avatar:"🎓" },
  { name:"Rohan Patil", grade:"10th SSC – 97.8%", text:"The mock test series is incredible. I walked into the Board exam feeling fully prepared.", avatar:"🌟" },
  { name:"Priya Desai", grade:"12th Commerce – CA Aspirant", text:"Best Accounts faculty in the city. The way sir explains ledger entries made everything click!", avatar:"✨" },
  { name:"Arjun Mehta", grade:"11th Science – JEE Dropper saved", text:"I was lost after failing JEE once. Vijay Classes rebuilt my confidence from scratch.", avatar:"🚀" },
];

const FAQS = [
  { q:"When do new batches start?", a:"New batches start every June and January. Mid-year admissions are available based on seat availability." },
  { q:"What is the batch size?", a:"We keep batches intentionally small — max 25 students — to ensure personal attention for every child." },
  { q:"Are study materials included?", a:"Yes! Comprehensive printed notes, question banks, and online digital content are included in the fee." },
  { q:"Do you provide doubt-clearing sessions?", a:"Absolutely. Daily doubt sessions are held after every lecture, and students can also reach teachers on WhatsApp." },
  { q:"Is there an online learning option?", a:"Yes, we offer a hybrid model with live online classes, recorded lectures, and in-person tests." },
];

const BRANCHES = [
  { name:"Pune – Main Branch", address:"123 Knowledge Hub, Deccan, Pune 411004", timing:"7 AM – 9 PM", phone:"+91 98765 43210" },
  { name:"Pune – Kothrud", address:"45 Sunrise Plaza, Kothrud, Pune 411038", timing:"8 AM – 8 PM", phone:"+91 98765 43211" },
  { name:"Nashik Branch", address:"12 Success Tower, College Road, Nashik 422005", timing:"7 AM – 9 PM", phone:"+91 98765 43212" },
];

const FOUNDERS = [
  {
    name: "Sandeep Vishwakarma",
    role: "Co-Founder & Director | Mathematics & Science",
    image: sandeep,
    exp: "15+ Years Teaching",
    subject: "Mathematics & Physics",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    gradient: "from-indigo-500 to-violet-500",
    badges: ["M.Sc. Mathematics", "B.Ed.", "JEE Mentor"],
    quote: "A student who understands the 'why' behind every concept will never fear any exam. My job is to make sure they always know the why.",
    bio: "With over One decades in education, Sandeep Sir is the mathematical backbone of Vijay Classes. His unique visual-first approach to Algebra, Geometry and Calculus has helped hundreds of students crack JEE, NEET and Board exams with top ranks. He founded Vijay Classes in 2005 with a single batch of 18 students and a conviction that small-batch, concept-driven teaching would outperform any rote method.",
  },
  {
    name: "Raj Yadav",
    role: "Mathematics & Science",
    image: raj,
    exp: "5+ Years Teaching",
    subject: "Chemistry & Biology",
    bg: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-100",
    gradient: "from-fuchsia-500 to-pink-500",
    badges: ["B.E(I.T)", "Software Engineer", "JEE Mentor",],
    quote: "Confidence is a skill, not a gift. Every child who walks into our classroom leaves knowing they are capable of more than they imagined.",
    bio: "Raj Sir brings warmth, structure and academic rigor to Vijay Classes.e has guided hundreds of students toward success in Board exams, JEE, and competitive entrance tests. His ability to simplify complex mathematical concepts into easy, visual explanations makes learning both engaging and effective for every student.His dedication to small-batch personalized mentoring ensures that every student receives individual attention and strong conceptual clarity.",
  },
];

const GALLERY_ITEMS = [
  { id:1, label:"Science Lab Session", emoji:"⚗️", color:"bg-blue-100", tall:true },
  { id:2, label:"Annual Felicitation", emoji:"🏅", color:"bg-violet-100", tall:false },
  { id:3, label:"Maths Olympiad Prep", emoji:"📐", color:"bg-sky-100", tall:false },
  { id:4, label:"Board Result Celebration", emoji:"🎉", color:"bg-pink-100", tall:true },
  { id:5, label:"Commerce Workshop", emoji:"📊", color:"bg-amber-100", tall:false },
  { id:6, label:"Parent-Teacher Meet", emoji:"🤝", color:"bg-emerald-100", tall:false },
  { id:7, label:"Study Hall", emoji:"📚", color:"bg-purple-100", tall:true },
  { id:8, label:"Batch 2024 Toppers", emoji:"🌟", color:"bg-rose-100", tall:false },
];

const TOPPERS = [
  { name:"Sneha Kulkarni", score:"99.2%", subject:"SSC Board", rank:"District Topper" },
  { name:"Vikram Joshi", score:"AIR 89", subject:"JEE Advanced", rank:"City Topper" },
  { name:"Meera Nair", score:"NEET 680", subject:"NEET UG", rank:"State Rank 12" },
  { name:"Aditya Rane", score:"98.4%", subject:"12th Commerce", rank:"School Topper" },
];


// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── ANIMATED SECTION WRAPPER ────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

// ─── BLOB BACKGROUND ─────────────────────────────────────────────────────────
function Blobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background:"radial-gradient(circle, #a78bfa, transparent)", animation:"blob1 8s ease-in-out infinite" }} />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background:"radial-gradient(circle, #38bdf8, transparent)", animation:"blob2 10s ease-in-out infinite" }} />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full opacity-15"
        style={{ background:"radial-gradient(circle, #818cf8, transparent)", animation:"blob3 9s ease-in-out infinite" }} />
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 shadow-lg" : "py-4"}`}
      style={{ background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)", backdropFilter:"blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.15)" : "none" }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scroll("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md"
            style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>V</div>
          <span className="font-black text-xl tracking-tight" style={{ fontFamily:"Georgia,serif",
            background:"linear-gradient(90deg,#4f46e5,#7c3aed)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            {SITE.name}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scroll(l.toLowerCase())}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200">
              {l}
            </button>
          ))}
          <button onClick={() => scroll("contact")}
            className="ml-3 px-5 py-2 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
            Online Admission
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 rounded-lg" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-0.5 bg-violet-600 rounded transition-all" />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 flex flex-col gap-2 bg-white/95">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scroll(l.toLowerCase())}
              className="text-left px-4 py-2 rounded-lg text-slate-700 font-semibold hover:bg-violet-50 hover:text-violet-600 transition-all">
              {l}
            </button>
          ))}
          <button onClick={() => scroll("contact")}
            className="px-5 py-2.5 rounded-xl text-white font-bold text-sm"
            style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
            Online Admission
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background:"linear-gradient(135deg,#f0f4ff 0%,#ede9fe 40%,#e0f2fe 100%)" }}>
      <Blobs />
      <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-violet-600 mb-6"
            style={{ background:"rgba(139,92,246,0.12)", border:"1px solid rgba(139,92,246,0.25)", animation:"fadeSlideUp 0.6s ease both" }}>
            ✨ Trusted by 12,000+ Students Since {SITE.estYear}
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-slate-800"
            style={{ fontFamily:"Georgia,serif", animation:"fadeSlideUp 0.7s 0.1s ease both" }}>
            Learn. Grow.<br />
            <span style={{ background:"linear-gradient(90deg,#4f46e5,#7c3aed,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Excel.
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
            style={{ animation:"fadeSlideUp 0.7s 0.2s ease both" }}>
            {SITE.name} — where curiosity meets clarity. From 8th standard to 12th Board & competitive exams, we turn potential into performance.
          </p>
          <div className="flex flex-wrap gap-3" style={{ animation:"fadeSlideUp 0.7s 0.3s ease both" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
              className="px-8 py-3.5 rounded-2xl text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
              Enroll Now →
            </button>
            <button onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior:"smooth" })}
              className="px-8 py-3.5 rounded-2xl font-bold text-base border-2 border-violet-200 text-violet-700 bg-white/70 hover:bg-violet-50 hover:scale-105 transition-all duration-300">
              Explore Courses
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-10" style={{ animation:"fadeSlideUp 0.7s 0.4s ease both" }}>
            {[["🏆","Board Toppers"],["👨‍🏫","Expert Faculty"],["📱","Hybrid Learning"]].map(([e,l]) => (
              <div key={l} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 shadow-sm text-sm font-semibold text-slate-700 border border-white/80">
                <span>{e}</span>{l}
              </div>
            ))}
          </div>
        </div>

        {/* Right – Floating card illustration */}
        <div className="relative flex justify-center" style={{ animation:"fadeSlideUp 0.8s 0.2s ease both" }}>
          {/* Main card */}
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center gap-4"
              style={{ background:"linear-gradient(145deg,rgba(255,255,255,0.9),rgba(237,233,254,0.8))", backdropFilter:"blur(12px)", border:"1.5px solid rgba(255,255,255,0.9)" }}>
              <div className="text-8xl" style={{ animation:"float 4s ease-in-out infinite" }}>🎓</div>
              <div className="text-center px-6">
                <p className="font-black text-slate-800 text-xl">{SITE.name}</p>
                <p className="text-slate-500 text-sm mt-1">{SITE.tagline}</p>
              </div>
              <div className="w-36 h-1.5 rounded-full" style={{ background:"linear-gradient(90deg,#6366f1,#8b5cf6,#0ea5e9)" }} />
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -right-6 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg"
              style={{ background:"linear-gradient(135deg,#10b981,#059669)", animation:"float 3s 0.5s ease-in-out infinite" }}>
              98% Success Rate ✨
            </div>
            <div className="absolute -bottom-4 -left-6 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg"
              style={{ background:"linear-gradient(135deg,#f59e0b,#d97706)", animation:"float 3.5s 1s ease-in-out infinite" }}>
              340+ Toppers 🏅
            </div>
            <div className="absolute top-1/2 -left-10 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg"
              style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)", animation:"float 4s 1.5s ease-in-out infinite" }}>
              12K+ Alumni 🎓
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs"
        style={{ animation:"bounce 2s infinite" }}>
        <span>scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}

// ─── STATS BAR ───────────────────────────────────────────────────────────────
function StatsBar() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="py-12 relative overflow-hidden"
      style={{ background:"linear-gradient(135deg,#4f46e5,#7c3aed,#0ea5e9)" }}>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map(s => {
          const count = useCountUp(s.value, 2000, inView);
          return (
            <div key={s.label} className="text-center text-white">
              <div className="text-4xl font-black">{count}{s.suffix}</div>
              <div className="text-sm font-medium opacity-80 mt-1">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── COURSES ─────────────────────────────────────────────────────────────────
function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 mb-4">OUR PROGRAMS</span>
          <h2 className="text-4xl font-black text-slate-800" style={{ fontFamily:"Georgia,serif" }}>Find Your Perfect Course</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">Expertly crafted programs for every grade and stream — from foundational to board-level mastery.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COURSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <div className={`group rounded-3xl ${c.bg} p-6 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${c.color} shadow-md`}>
                  {c.icon}
                </div>
                <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-white/70 text-slate-500 mb-2">{c.tag}</span>
                <h3 className="font-black text-slate-800 text-lg mb-2">{c.grade}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{c.desc}</p>
                <button className="mt-5 text-sm font-bold text-violet-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const features = [
    {
      icon: "🎯",
      title: "Mission",
      desc: "Empower every student with clarity, confidence, and the skills to achieve their dreams.",
    },
    {
      icon: "🔭",
      title: "Vision",
      desc: "To be Maharashtra's most student-centric coaching institute — modern, warm, and results-driven.",
    },
    {
      icon: "🧠",
      title: "Methodology",
      desc: "Concept-first teaching with structured practice and real mentorship.",
    },
    {
      icon: "❤️",
      title: "Care-First",
      desc: "Small batches, personal attention, and daily doubt-solving sessions.",
    },
    {
      icon: "📈",
      title: "Track Record",
      desc: "19+ years, 12,000+ students, and hundreds of board toppers.",
    },
    {
      icon: "📱",
      title: "Hybrid Learning",
      desc: "Offline excellence blended with digital learning tools and recorded lectures.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#f8faff 0%,#f4f0ff 45%,#eef4ff 100%)",
      }}
    >
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="inline-block px-5 py-1.5 rounded-full text-xs font-black tracking-wide text-indigo-600 bg-white border border-indigo-100 shadow-sm mb-5">
            ABOUT US
          </span>

          <h2
            className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Built on Trust.
            <br />
            Driven by Results.
          </h2>

          <p className="text-slate-500 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Since {SITE.estYear}, {SITE.name} has helped thousands of
            students unlock their academic potential through mentorship,
            discipline, and modern learning.
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-28">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="group bg-white/80 backdrop-blur-xl rounded-[30px] p-7 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-3xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>

                <h3 className="font-black text-xl text-slate-800 mb-3">
                  {f.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founders section */}
        <Reveal className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 rounded-full text-xs font-black tracking-wide text-fuchsia-600 bg-white border border-fuchsia-100 shadow-sm mb-5">
            THE PEOPLE BEHIND IT ALL
          </span>

          <h3
            className="text-4xl md:text-5xl font-black text-slate-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Meet Our Founders
          </h3>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate educators who transformed a dream into one of the
            most trusted learning spaces for students.
          </p>
        </Reveal>

        {/* Founder cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="group relative rounded-[36px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                {/* Image section */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-black text-slate-700 shadow-lg">
                    ⭐ Founder
                  </div>

                  {/* Name content on image */}
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h4 className="text-3xl font-black leading-tight">
                      {f.name}
                    </h4>

                    <p className="text-fuchsia-200 font-semibold mt-2">
                      {f.role}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {f.badges.map((b) => (
                        <span
                          key={b}
                          className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="p-8">
                  {/* Quote */}
                  <div className="relative rounded-3xl p-6 bg-gradient-to-r from-indigo-600 to-fuchsia-600 overflow-hidden mb-6">
                    <div className="absolute top-0 left-4 text-white/10 text-7xl font-serif">
                      "
                    </div>

                    <p className="relative text-white italic text-sm leading-relaxed font-medium z-10">
                      {f.quote}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {f.bio}
                  </p>

                  {/* Bottom info */}
                  <div className="flex flex-wrap gap-4 mt-7 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-lg">
                        ⏳
                      </div>

                      <div>
                        <p className="text-xs text-slate-400 font-medium">
                          Experience
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {f.exp}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-fuchsia-50 flex items-center justify-center text-lg">
                        📚
                      </div>

                      <div>
                        <p className="text-xs text-slate-400 font-medium">
                          Expertise
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {f.subject}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom banner */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[36px] p-12 text-center bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 shadow-2xl">

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10">
              <div className="text-5xl mb-6">🌟</div>

              <p className="text-white text-xl md:text-2xl font-bold italic leading-relaxed max-w-4xl mx-auto">
                “We didn’t just build a coaching institute.
                <br />
                We built a second home for students.”
              </p>

              <div className="w-24 h-1 bg-white/30 rounded-full mx-auto my-7" />

              <p className="text-indigo-100 font-semibold tracking-wide">
                — Vijay & Sunita Patil, Founders of {SITE.name}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────
function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-sky-600 bg-sky-50 border border-sky-100 mb-4">GALLERY</span>
          <h2 className="text-4xl font-black text-slate-800" style={{ fontFamily:"Georgia,serif" }}>Life at {SITE.name}</h2>
          <p className="text-slate-500 mt-3">A glimpse into our vibrant classrooms, celebrations and milestones.</p>
        </Reveal>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_ITEMS.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.06}>
              <div onClick={() => setSelected(g)} className={`group relative ${g.color} rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-xl ${g.tall ? "h-64" : "h-40"} flex flex-col items-center justify-center gap-3 break-inside-avoid mb-4`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{g.emoji}</span>
                <span className="text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{g.label}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-3xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}>
          <div className={`${selected.color} rounded-3xl w-80 h-80 flex flex-col items-center justify-center gap-4 shadow-2xl relative`}
            onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 text-xl" onClick={() => setSelected(null)}>✕</button>
            <span className="text-8xl">{selected.emoji}</span>
            <p className="font-bold text-slate-700">{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── RESULTS / TOPPERS ───────────────────────────────────────────────────────
function Results() {
  return (
    <section id="results" className="py-24" style={{ background:"linear-gradient(135deg,#1e1b4b,#312e81,#0c4a6e)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">HALL OF FAME</span>
          <h2 className="text-4xl font-black text-white" style={{ fontFamily:"Georgia,serif" }}>Our Champions</h2>
          <p className="text-slate-300 mt-3">Real students, real results. Every score a story of dedication.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TOPPERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-xl"
                style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background:"linear-gradient(135deg,#f59e0b,#d97706)" }}>🏆</div>
                <h3 className="font-black text-white text-base mb-1">{t.name}</h3>
                <div className="text-3xl font-black mb-1" style={{ color:"#fbbf24" }}>{t.score}</div>
                <p className="text-slate-300 text-xs">{t.subject}</p>
                <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-bold text-white" style={{ background:"rgba(99,102,241,0.5)" }}>{t.rank}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Achievement timeline */}
        <Reveal>
          <div className="rounded-3xl p-8" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
            <h3 className="text-white font-black text-xl mb-6 text-center">Achievement Milestones</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[["2010","First Batch of 50 Students"],["2015","1000+ Alumni"],["2018","JEE AIR Under 100"],["2020","Went Hybrid Online"],["2024","12,000+ Family"]].map(([y,m]) => (
                <div key={y} className="text-center">
                  <div className="text-2xl font-black" style={{ color:"#818cf8" }}>{y}</div>
                  <div className="text-xs text-slate-300 mt-1 max-w-24">{m}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section className="py-24" style={{ background:"linear-gradient(135deg,#f0f4ff,#ede9fe)" }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 mb-8">STUDENT VOICES</span>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-white relative overflow-hidden"
            style={{ minHeight:220 }}>
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
              style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
            <div className="text-5xl mb-4">{t.avatar}</div>
            <p className="text-slate-600 text-lg italic leading-relaxed mb-6">"{t.text}"</p>
            <p className="font-black text-slate-800">{t.name}</p>
            <p className="text-sm text-violet-500 font-semibold">{t.grade}</p>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-violet-600" : "w-2 h-2 bg-violet-200"}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── BRANCHES ────────────────────────────────────────────────────────────────
function Branches() {
  return (
    <section id="branches" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 mb-4">OUR BRANCHES</span>
          <h2 className="text-4xl font-black text-slate-800" style={{ fontFamily:"Georgia,serif" }}>Find Us Near You</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {BRANCHES.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <div className="rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>📍</div>
                <h3 className="font-black text-slate-800 text-lg mb-2">{b.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{b.address}</p>
                <div className="flex flex-col gap-1.5 text-sm">
                  <span className="flex items-center gap-2 text-slate-600"><span>🕐</span>{b.timing}</span>
                  <span className="flex items-center gap-2 text-slate-600"><span>📞</span>{b.phone}</span>
                </div>
                {/* Map placeholder */}
                <div className="mt-5 h-28 rounded-2xl bg-indigo-50 flex items-center justify-center text-slate-400 text-sm border border-indigo-100">
                  🗺️ Map View
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24" style={{ background:"linear-gradient(135deg,#f8faff,#f3f0ff)" }}>
      <div className="max-w-3xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 mb-4">FAQ</span>
          <h2 className="text-4xl font-black text-slate-800" style={{ fontFamily:"Georgia,serif" }}>Got Questions?</h2>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-slate-800 hover:text-violet-600 transition-colors">
                  {f.q}
                  <span className="ml-3 text-violet-400 transition-transform duration-300" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow:"hidden", transition:"max-height 0.35s ease" }}>
                  <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", grade:"", msg:"" });
  const [sent, setSent] = useState(false);
  const handle = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-sky-600 bg-sky-50 border border-sky-100 mb-4">CONTACT US</span>
          <h2 className="text-4xl font-black text-slate-800 mb-4" style={{ fontFamily:"Georgia,serif" }}>Ready to Start Your Journey?</h2>
          <p className="text-slate-500 mb-8">Fill out the form and our team will reach you within 24 hours. Or reach us directly:</p>
          <div className="space-y-4">
            {[["📞",SITE.phone,"Call us anytime"],["📧",SITE.email,"Email support"],["📍",SITE.address,"Main Branch"]].map(([e,v,l]) => (
              <div key={l} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                <span className="text-2xl">{e}</span>
                <div>
                  <p className="text-xs text-slate-400 font-semibold">{l}</p>
                  <p className="text-slate-700 font-semibold text-sm">{v}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ background:"linear-gradient(135deg,#25d366,#128c7e)" }}>
            💬 Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="rounded-3xl p-12 text-center bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-black text-slate-800 text-xl mb-2">Application Received!</h3>
              <p className="text-slate-500">Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handle} className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-violet-50 border border-violet-100 space-y-4 shadow-sm">
              <h3 className="font-black text-slate-800 text-xl mb-2">Online Admission Form</h3>
              {[["name","Full Name","text"],["email","Email Address","email"],["phone","Phone Number","tel"]].map(([k,p,t]) => (
                <input key={k} type={t} placeholder={p} required
                  value={form[k]} onChange={e => setForm({...form,[k]:e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 bg-white transition-all" />
              ))}
              <select value={form.grade} onChange={e => setForm({...form,grade:e.target.value})} required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-violet-400 bg-white">
                <option value="">Select Grade / Course</option>
                {COURSES.map(c => <option key={c.id}>{c.grade}</option>)}
              </select>
              <textarea placeholder="Your message (optional)" rows={3} value={form.msg} onChange={e => setForm({...form,msg:e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-violet-400 bg-white resize-none" />
              <button type="submit"
                className="w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                Submit Application →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-16" style={{ background:"linear-gradient(135deg,#4f46e5,#7c3aed)" }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily:"Georgia,serif" }}>Stay Updated</h2>
          <p className="text-indigo-200 mb-6">Get exam tips, result announcements and batch schedules directly to your inbox.</p>
          {done ? (
            <p className="text-white font-bold text-lg">✅ Subscribed! Watch your inbox.</p>
          ) : (
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50" />
              <button onClick={() => email && setDone(true)}
                className="px-6 py-3 rounded-2xl bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-all">
                Subscribe
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-20" style={{ background:"linear-gradient(135deg,#f0f4ff,#ede9fe)" }}>
      <Reveal className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-5xl mb-4">🚀</div>
        <h2 className="text-4xl font-black text-slate-800 mb-4" style={{ fontFamily:"Georgia,serif" }}>
          Your Success Story Starts Here
        </h2>
        <p className="text-slate-500 mb-8">Join thousands of students who transformed their academic journey with {SITE.name}.</p>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
          className="px-10 py-4 rounded-2xl text-white font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
          Enroll Today – Free Counselling 🎓
        </button>
      </Reveal>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
              style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>V</div>
            <span className="font-black text-white text-xl" style={{ fontFamily:"Georgia,serif" }}>{SITE.name}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{SITE.tagline}. Premium coaching for 8th–12th standard students.</p>
          <div className="flex gap-3 mt-5">
            {["📘","📸","🐦","▶️"].map((icon, i) => (
              <button key={i} className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-sm hover:bg-violet-600 transition-colors">{icon}</button>
            ))}
          </div>
        </div>
        {[
          { title:"Courses", items:["SSC 8th","SSC 9th","SSC 10th","11th Commerce","12th Commerce","11th Science","12th Science"] },
          { title:"Quick Links", items:["About Us","Gallery","Results","Branches","FAQ","Online Admission"] },
          { title:"Contact", items:[SITE.phone, SITE.email, "Mon–Sat: 7 AM–9 PM"] },
        ].map(col => (
          <div key={col.title}>
            <h4 className="text-white font-black text-sm mb-4 uppercase tracking-wider">{col.title}</h4>
            <ul className="space-y-2">
              {col.items.map(item => (
                <li key={item} className="text-slate-400 text-sm hover:text-violet-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span>Made with ❤️ for students of Maharashtra</span>
      </div>
    </footer>
  );
}

// ─── FLOATING BUTTONS ─────────────────────────────────────────────────────────
function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      {/* WhatsApp */}
      <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-110 transition-all duration-300"
        style={{ background:"linear-gradient(135deg,#25d366,#128c7e)" }}>
        💬
      </a>
      {/* Scroll to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-xl hover:scale-110 transition-all duration-300"
          style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
          ↑
        </button>
      )}
    </>
  );
}

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #fff; color: #1e293b; }
  @keyframes fadeSlideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
  @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
  @keyframes blob1 { 0%,100% { transform:translate(0,0) scale(1); } 33% { transform:translate(40px,-30px) scale(1.1); } 66% { transform:translate(-20px,20px) scale(0.95); } }
  @keyframes blob2 { 0%,100% { transform:translate(0,0) scale(1); } 33% { transform:translate(-40px,30px) scale(0.9); } 66% { transform:translate(30px,-20px) scale(1.05); } }
  @keyframes blob3 { 0%,100% { transform:translate(0,0) scale(1); } 33% { transform:translate(20px,-40px) scale(1.08); } 66% { transform:translate(-30px,10px) scale(0.95); } }
  @keyframes bounce { 0%,100% { transform:translateY(0) translateX(-50%); } 50% { transform:translateY(-8px) translateX(-50%); } }
  ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#f1f5f9; } ::-webkit-scrollbar-thumb { background:linear-gradient(#6366f1,#8b5cf6); border-radius:3px; }
`;

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Navbar />
      <Hero />
      <StatsBar />
      <Courses />
      <About />
      <Gallery />
      <Results />
      <Testimonials />
      <Branches />
      <FAQ />
      <Contact />
      <Newsletter />
      <CTABanner />
      <Footer />
      <FloatingButtons />
    </>
  );
}
