'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Code2, MapPin, Calendar } from 'lucide-react';

// ── Count-up hook ──────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'Sabaragamuwa University',
    sub: 'BSc (Hons) in Computer Science and Information Technology',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    numeric: null,
  },
  {
    icon: Code2,
    label: 'Projects',
    value: '20+',
    sub: 'Projects Completed',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.07)',
    border: 'rgba(34,211,238,0.18)',
    numeric: 20,
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '3+',
    sub: 'Years of Industry Experience',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    numeric: 3,
  },
];

const highlights = [
  'Full Stack Web Development',
  'Mobile App Development',
  'AI/ML Integrations',
  'Cloud Architecture',
  'System Design',
  'Open Source Contributor',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

// ── Animated stat card ─────────────────────────────────────────
function StatCard({ stat, triggerCount }: { stat: (typeof stats)[number]; triggerCount: boolean }) {
  const count = useCountUp(stat.numeric ?? 0, 1600, triggerCount && !!stat.numeric);
  const displayValue = stat.numeric
    ? stat.value.includes('+') ? `${count}+` : `${count}`
    : stat.value;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 10, boxShadow: `0 12px 40px ${stat.color}22` }}
      style={{
        display: 'flex', alignItems: 'center', gap: '20px',
        padding: '22px 26px',
        borderRadius: '16px',
        background: stat.bg,
        border: `1px solid ${stat.border}`,
        cursor: 'default',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: '14px',
        background: stat.bg, border: `1px solid ${stat.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <stat.icon size={24} color={stat.color} />
      </div>
      <div>
        <motion.div
          className="font-display"
          style={{ fontSize: '1.7rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}
        >
          {displayValue}
        </motion.div>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600, marginTop: 4 }}>
          {stat.label}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
          {stat.sub}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const [countStarted, setCountStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (inView && !countStarted) {
      timerRef.current = setTimeout(() => setCountStarted(true), 300);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [inView, countStarted]);

  return (
    <section id="about" className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
            About Me
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800,
            color: 'var(--text-primary)', marginBottom: '12px',
          }}>
            The Developer{' '}
            <span className="gradient-text">Behind the Code</span>
          </h2>
          <div className="gradient-line-h" style={{ maxWidth: '120px', margin: '0 auto' }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'start',
        }} className="about-grid">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={itemVariants} style={{
              fontSize: '1.05rem', color: 'var(--text-secondary)',
              lineHeight: 1.9, marginBottom: '18px',
            }}>
              I&apos;m a passionate{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Full Stack Developer
              </span>{' '}
              with hands-on experience in building modern web applications. I specialize in
              developing end-to-end solutions using technologies like React, Next.js, and
              Spring Boot, focusing on performance, scalability, and clean architecture.
            </motion.p>

            <motion.p variants={itemVariants} style={{
              fontSize: '1.05rem', color: 'var(--text-secondary)',
              lineHeight: 1.9, marginBottom: '28px',
            }}>
              Beyond coding, I enjoy exploring{' '}
              <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>
                AI-driven solutions and smart systems
              </span>,
              working on real-world projects like business management platforms, and
              continuously learning new technologies to improve my skills as a developer.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '28px' }}>
              {[
                { icon: MapPin, text: 'Trincomalee, Sri Lanka • Remote Friendly', color: '#22d3ee' },
                { icon: Calendar, text: 'Open to Full-time & Freelance', color: '#6366f1' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={16} color={color} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p style={{
                fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '14px', fontWeight: 600,
              }}>
                Expertise
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {highlights.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.06, borderColor: 'rgba(99,102,241,0.5)' }}
                    style={{
                      padding: '6px 14px', borderRadius: '100px',
                      fontSize: '0.8rem', fontWeight: 500,
                      background: 'rgba(99,102,241,0.07)',
                      border: '1px solid rgba(99,102,241,0.18)',
                      color: '#a5b4fc', cursor: 'default',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Count-up Stat Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} triggerCount={countStarted} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
