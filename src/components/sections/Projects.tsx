'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { GitHubIcon } from '@/components/icons';

const projects = [
  {
    id: 'proj-1', title: 'AI Chat Platform', featured: true,
    description: 'Real-time AI-powered chat with context memory, multi-model support, and team collaboration. Built with streaming SSE and WebSocket.',
    image: '/projects/ai-chat.jpg',
    tags: ['Next.js', 'OpenAI', 'WebSockets', 'MongoDB', 'TailwindCSS'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '🤖', accentColor: '#6366f1', accentAlpha: 'rgba(99,102,241,',
  },
  {
    id: 'proj-2', title: 'E-Commerce Suite', featured: true,
    description: 'Full-featured e-commerce platform with Stripe payments, inventory management, analytics dashboard, and AWS S3 media storage.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'Stripe', 'AWS', 'PostgreSQL'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '🛒', accentColor: '#22d3ee', accentAlpha: 'rgba(34,211,238,',
  },
  {
    id: 'proj-3', title: 'DevOps Pipeline Tool', featured: false,
    description: 'CI/CD automation platform with Docker, Kubernetes orchestration, and Slack notifications for deployment events.',
    image: '/projects/devops.jpg',
    tags: ['Docker', 'Kubernetes', 'Python', 'Spring Boot', 'Redis'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '⚙️', accentColor: '#8b5cf6', accentAlpha: 'rgba(139,92,246,',
  },
  {
    id: 'proj-4', title: 'Mobile Fitness App', featured: false,
    description: 'Cross-platform fitness tracker with workout plans, progress analytics, nutrition logging and social challenges in React Native.',
    image: '/projects/fitness.jpg',
    tags: ['React Native', 'TypeScript', 'Node.js', 'MySQL', 'Firebase'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '💪', accentColor: '#10b981', accentAlpha: 'rgba(16,185,129,',
  },
  {
    id: 'proj-5', title: 'Real-time Dashboard', featured: false,
    description: 'Analytics dashboard with live data visualization, WebSocket-powered charts, drag-and-drop widgets, and custom reporting.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'D3.js', 'WebSockets', 'Express', 'MongoDB'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '📊', accentColor: '#f59e0b', accentAlpha: 'rgba(245,158,11,',
  },
  {
    id: 'proj-6', title: 'Blockchain Voting', featured: false,
    description: 'Decentralized voting on Ethereum with smart contracts, wallet integration, and tamper-proof audit trails for elections.',
    image: '/projects/blockchain.jpg',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethers.js', 'IPFS'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    emoji: '⛓️', accentColor: '#6366f1', accentAlpha: 'rgba(99,102,241,',
  },
];

// ── 3D tilt card hook ──────────────────────────────────────────
function TiltCard({ children, accentColor }: { children: React.ReactNode; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.03)`,
      boxShadow: `0 28px 60px ${accentColor}22, 0 0 0 1px ${accentColor}33`,
      transition: 'transform 0.1s ease, box-shadow 0.1s ease',
    });
  };

  const onLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      boxShadow: '',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
    });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style}>
      {children}
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.04 });

  return (
    <section id="projects" className="section-padding" ref={ref} style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <Sparkles size={12} />
            Featured Work
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800,
            color: 'var(--text-primary)', marginBottom: '12px',
          }}>
            Recent{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            A curated selection of my latest work — from AI integrations to full-stack platforms
          </p>
          <div className="gradient-line-h" style={{ maxWidth: '120px', margin: '16px auto 0' }} />
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard accentColor={project.accentColor}>
                <article
                  id={project.id}
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.028)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    position: 'relative', height: '200px',
                    background: `${project.accentAlpha}0.12)`,
                    overflow: 'hidden',
                  }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                    />
                    {/* Overlay with emoji */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${project.accentAlpha}0.18), rgba(10,10,10,0.4))`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '3.5rem',
                      transition: 'all 0.3s',
                    }}>
                      {project.emoji}
                    </div>
                    {/* Top accent line */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                    }} />
                    {project.featured && (
                      <div style={{
                        position: 'absolute', top: 14, right: 14,
                        background: 'var(--gradient-primary)',
                        color: 'white', fontSize: '0.68rem', fontWeight: 700,
                        padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.06em',
                      }}>
                        ★ FEATURED
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 className="font-display" style={{
                      fontSize: '1.12rem', fontWeight: 700,
                      color: 'var(--text-primary)', marginBottom: '10px',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem', color: 'var(--text-secondary)',
                      lineHeight: 1.75, marginBottom: '18px', flex: 1,
                    }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '20px' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: '0.7rem', fontWeight: 600,
                          padding: '3px 10px', borderRadius: '6px',
                          background: `${project.accentAlpha}0.08)`,
                          border: `1px solid ${project.accentAlpha}0.22)`,
                          color: project.accentColor,
                          fontFamily: 'var(--font-fira-code), monospace',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-primary"
                        style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '0.82rem' }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-outline"
                        style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '0.82rem' }}
                      >
                        <GitHubIcon size={14} /> View Code
                      </motion.a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
