'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon2 } from '@/components/icons';

const footerLinks = {
  About: [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ],
  'Quick Links': [
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Download CV', href: '/resume.pdf' },
  ],
  Contact: [
    { label: 'Email Me', href: 'mailto:alex@example.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Schedule a Call', href: '#contact' },
  ],
};

const socials = [
  { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://twitter.com', label: 'Twitter' },
  { icon: MailIcon2, href: 'mailto:alex@example.com', label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
    }}>
      {/* Main Footer */}
      <div className="section-container" style={{ padding: '60px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '48px',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.85rem', fontWeight: 800, color: 'white',
              }}>
                ON
              </div>
              <span className="font-display gradient-text" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                Oshada Nethmina
              </span>
            </a>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: '260px',
              marginBottom: '24px',
            }}>
              Full Stack Developer crafting scalable, beautiful digital products.
              Open to new opportunities.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: 38, height: 38,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#818cf8'; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gradient-line-h" style={{ marginBottom: '28px' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            © {new Date().getFullYear()} Oshada Nethmina. Made with{' '}
            <Heart size={13} color="#6366f1" fill="#6366f1" /> using Next.js & Tailwind CSS
          </p>
          <motion.button
            id="scroll-to-top-btn"
            onClick={scrollTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '10px',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#818cf8',
              cursor: 'pointer',
            }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
