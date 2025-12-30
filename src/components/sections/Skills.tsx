'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', icon: '🌐', category: 'Frontend' },
  { name: 'CSS', icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'Frontend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Spring Boot', icon: '🍃', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'MySQL', icon: '🗄️', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'AWS', icon: '☁️', category: 'DevOps' },
  { name: 'Git', icon: '🔀', category: 'DevOps' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

const catColors: Record<string, { bg: string; border: string; text: string }> = {
  Frontend: { bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)', text: '#818cf8' },
  Backend:  { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', text: '#22d3ee' },
  Database: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)', text: '#a78bfa' },
  DevOps:   { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', text: '#fbbf24' },
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding" ref={ref} style={{ position: 'relative' }}>
      {/* Subtle gradient bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8b5cf6' }} />
            Tech Stack
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}
          >
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Tools and technologies I use to build exceptional digital experiences
          </p>
          <div className="gradient-line-h" style={{ maxWidth: '120px', margin: '16px auto 0' }} />
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {categories.slice(1).map((cat) => {
            const c = catColors[cat];
            return (
              <span
                key={cat}
                style={{
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  color: c.text,
                }}
              >
                {cat}
              </span>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {skills.map((skill, i) => {
            const cat = catColors[skill.category];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.03 }}
                style={{
                  padding: '20px 22px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'default',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${cat?.text || '#6366f1'}, transparent)`,
                  opacity: 0.5,
                }} />

                <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{skill.icon}</span>
                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>
                    {skill.name}
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: cat?.bg || 'rgba(99,102,241,0.1)',
                    border: `1px solid ${cat?.border || 'rgba(99,102,241,0.2)'}`,
                    color: cat?.text || '#818cf8',
                    letterSpacing: '0.04em',
                  }}>
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
