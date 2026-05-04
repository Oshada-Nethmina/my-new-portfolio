'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';
import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons';
import ParticleField from '@/components/ParticleField';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'AI App Builder',
  'Open Source Contributor',
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 45);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx >= 0) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 25);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span>
      {displayed}
      <span
        className="cursor-blink"
        style={{ color: 'var(--accent-cyan)', fontWeight: 300 }}
      >
        |
      </span>
    </span>
  );
}

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Oshada-Nethmina', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/oshada-nethmina/', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Gradient blobs */}
      <div
        style={{
          position: 'absolute', top: '-15%', left: '-5%',
          width: '55vw', height: '55vw',
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
        }}
      />

      <div
        className="section-container"
        style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', zIndex: 2 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }} className="hero-grid">

          {/* ── Left ─────────────────────────────────── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="section-badge"
              style={{ marginBottom: '24px' }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#22d3ee', display: 'inline-block',
                boxShadow: '0 0 10px #22d3ee', animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display"
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                marginBottom: '16px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Hi, I&apos;m{' '}
              <span
                className="gradient-text"
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.5))',
                }}
              >
                Oshada Nethmina
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-mono"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: 'var(--accent-blue)',
                fontWeight: 500,
                marginBottom: '24px',
                minHeight: '2rem',
              }}
            >
              &gt;_{' '}<TypewriterText texts={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                lineHeight: 1.85,
                marginBottom: '40px',
              }}
            >
              Building{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>scalable web</span>,{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>mobile</span>, and{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AI-powered</span>{' '}
              applications that deliver real-world impact. Turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              {[
                { href: '#contact', icon: <Mail size={16} />, label: 'Get in Touch', primary: true, id: 'hero-contact-btn' },
                { href: '#projects', icon: <Eye size={16} />, label: 'View Projects', primary: false, id: 'hero-projects-btn' },
                { href: '/projects/Oshada_Nethmina_Resume.pdf', icon: <Download size={16} />, label: 'Download CV', primary: false, id: 'hero-cv-btn' },
              ].map((btn, i) => (
                <motion.a
                  key={btn.id}
                  id={btn.id}
                  href={btn.href}
                  download={btn.href.endsWith('.pdf')}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={btn.primary ? 'btn-primary' : 'btn-outline'}
                  style={btn.primary ? { boxShadow: '0 8px 24px rgba(99,102,241,0.35)' } : {}}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  style={{
                    width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="gradient-line-h" style={{ width: '40px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.04em' }}>
                Follow me
              </span>
            </motion.div>
          </div>

          {/* ── Right: Profile Card ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
            style={{ position: 'relative' }}
          >
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: '-22px',
                borderRadius: '50%',
                border: '2px dashed rgba(99,102,241,0.22)',
              }}
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: '-10px',
                borderRadius: '50%',
                border: '1px dashed rgba(34,211,238,0.15)',
              }}
            />

            {/* Glow card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                boxShadow: [
                  '0 0 30px rgba(99,102,241,0.25)',
                  '0 0 60px rgba(99,102,241,0.5), 0 0 100px rgba(139,92,246,0.2)',
                  '0 0 30px rgba(99,102,241,0.25)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 300, height: 360,
                borderRadius: '28px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.1))',
                border: '1px solid rgba(99,102,241,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', bottom: -50, right: -50,
                width: 180, height: 180, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)',
              }} />
              <div style={{
                position: 'absolute', top: -40, left: -40,
                width: 140, height: 140, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.25), transparent)',
              }} />
              <Image
                src="/profile.png"
                alt="Oshada Nethmina — Full Stack Developer"
                width={280}
                height={340}
                style={{ objectFit: 'cover', borderRadius: '22px', position: 'relative', zIndex: 1 }}
                priority
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                  const p = t.parentElement;
                  if (p && !p.querySelector('.initials-fb')) {
                    const d = document.createElement('div');
                    d.className = 'initials-fb';
                    d.style.cssText = 'width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:3.5rem;font-weight:800;color:white;position:relative;z-index:1;';
                    d.textContent = 'AM';
                    p.appendChild(d);
                  }
                }}
              />
            </motion.div>

            {/* Badge: Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: 'absolute', top: -18, right: -72,
                background: 'rgba(99,102,241,0.18)',
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: '14px',
                padding: '12px 18px',
                backdropFilter: 'blur(12px)',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: 3, letterSpacing: '0.05em' }}>EXPERIENCE</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-space-grotesk)' }}>3+ Years</div>
            </motion.div>

            {/* Badge: Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: 'absolute', bottom: 24, left: -80,
                background: 'rgba(34,211,238,0.12)',
                border: '1px solid rgba(34,211,238,0.28)',
                borderRadius: '14px',
                padding: '12px 18px',
                backdropFilter: 'blur(12px)',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: 3, letterSpacing: '0.05em' }}>PROJECTS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22d3ee', fontFamily: 'var(--font-space-grotesk)' }}>5+ Academic & Personal Projects</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: '56px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
