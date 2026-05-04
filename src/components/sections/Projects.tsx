'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { GitHubIcon } from '@/components/icons';

const projects = [
  {
    id: 'proj-1', title: 'MyTurn – Smart Fuel Queue Optimization System', featured: true,
    description: 'AI-powered queue optimization and predictive analytics for fuel stations using reinforcement learning (Q-learning) and real-time data processing with AWS services and Java/Spring Boot.',
    image: '/projects/myturn.png',
    tags: ['Java/Spring Boot', 'PostgreSQL', 'Next.js', 'TailwindCSS', 'AI/ML'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com/stars/Oshada-Nethmina/lists/myturn',
    accentColor: '#6366f1', accentAlpha: 'rgba(99,102,241,',
  },
  {
    id: 'proj-2', title: 'SmartBiz - AI Powered ERP Software', featured: true,
    description: 'SmartBiz is a comprehensive ERP (Enterprise Resource Planning) system designed to streamline business operations. It features advanced inventory management, sales and purchase order tracking, client and supplier relationship management, and an AI-powered analytics engine that provides intelligent insights to optimize business performance.',
    image: '/projects/smartbiz.png',
    tags: ['React', 'Spring Boot', 'MySQL', 'OpenAI API'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com/stars/Oshada-Nethmina/lists/smartbiz',
    accentColor: '#22d3ee', accentAlpha: 'rgba(34,211,238,',
  },
  {
    id: 'proj-3', title: 'EventBuddy – Smart Event Planning & Vendor Marketplace', featured: false,
    description: 'EventBuddy is an intelligent event planning platform that connects organizers with vendors seamlessly. It simplifies event management through automated planning tools, real-time collaboration, and a curated marketplace of event suppliers.',
    image: '/projects/eventbuddy.png',
    tags: ['React', 'Node.js', 'Express.js', 'Stripe / PayPal (planned)', 'MongoDB'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com/Hasmoonn/EventBuddy',
    accentColor: '#8b5cf6', accentAlpha: 'rgba(139,92,246,',
  },
  {
    id: 'proj-4', title: 'ParkSwift - Smart Parking System', featured: false,
    description: 'ParkSwift is a smart parking management system that helps drivers find parking spots easily and efficiently. It features real-time parking availability, navigation to parking spots, and payment integration.',
    image: '/projects/parkswift.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com/sampathmenuka/ParkSwift',
    accentColor: '#10b981', accentAlpha: 'rgba(16,185,129,',
  },
  {
    id: 'proj-5', title: 'Real-time Dashboard', featured: false,
    description: 'Analytics dashboard with live data visualization, WebSocket-powered charts, drag-and-drop widgets, and custom reporting.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'D3.js', 'WebSockets', 'Express', 'MongoDB'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    accentColor: '#f59e0b', accentAlpha: 'rgba(245,158,11,',
  },
  {
    id: 'proj-6', title: 'Blockchain Voting', featured: false,
    description: 'Decentralized voting on Ethereum with smart contracts, wallet integration, and tamper-proof audit trails for elections.',
    image: '/projects/blockchain.jpg',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethers.js', 'IPFS'],
    demoUrl: 'https://demo.example.com', codeUrl: 'https://github.com',
    accentColor: '#6366f1', accentAlpha: 'rgba(99,102,241,',
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
                    {/* Overlay gradient */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${project.accentAlpha}0.18), rgba(10,10,10,0.4))`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '3.5rem',
                      transition: 'all 0.3s',
                    }} />
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
