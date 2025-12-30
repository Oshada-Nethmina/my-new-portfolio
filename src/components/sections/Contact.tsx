'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Send, CheckCircle, AlertCircle, Rocket,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon2 } from '@/components/icons';

const contactMethods = [
  {
    id: 'contact-email',
    icon: MailIcon2,
    label: 'Email',
    value: 'oshadanethminamunasingha@gmail.com',
    href: 'mailto:oshadanethminamunasingha@gmail.com',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.25)',
  },
  {
    id: 'contact-linkedin',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Oshada Nethmina',
    href: 'https://www.linkedin.com/in/oshada-nethmina/',
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.1)',
    border: 'rgba(0,119,181,0.25)',
  },
  {
    id: 'contact-github',
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'Oshada-Nethmina',
    href: 'https://github.com/Oshada-Nethmina',
    color: '#f0f6fc',
    bg: 'rgba(240,246,252,0.05)',
    border: 'rgba(255,255,255,0.15)',
  },
  {
    id: 'contact-twitter',
    icon: XIcon,
    label: 'Twitter / X',
    value: '@alexmorgandev',
    href: 'https://twitter.com',
    color: '#1d9bf0',
    bg: 'rgba(29,155,240,0.1)',
    border: 'rgba(29,155,240,0.25)',
  },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <Rocket size={12} />
            Let&apos;s Connect
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
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto' }}>
            Have a project in mind, a role to fill, or just want to chat tech? I&apos;d love to hear from you.
          </p>
          <div className="gradient-line-h" style={{ maxWidth: '120px', margin: '16px auto 0' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '50px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: '1.2rem', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '24px',
              }}
            >
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactMethods.map(({ id, icon: Icon, label, value, href, color, bg, border }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: '14px',
                    background: bg,
                    border: `1px solid ${border}`,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '12px',
                    background: `${bg}`,
                    border: `1px solid ${border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2px' }}>{label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              padding: '36px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '16px', padding: '40px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={56} color="#22d3ee" />
                <h3 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Send a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email-input" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
                      Email
                    </label>
                    <input
                      id="contact-email-input"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Let's build something great..."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '12px 16px', borderRadius: '10px',
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                    color: '#f87171', fontSize: '0.85rem',
                  }}>
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    <>
                      <span style={{
                        width: 16, height: 16, borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: 'white',
                        animation: 'spin 0.7s linear infinite',
                        display: 'inline-block',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus {
          border-color: var(--accent-blue) !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
        }
      `}</style>
    </section>
  );
}
