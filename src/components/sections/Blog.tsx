'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

const posts = [
  {
    id: 'blog-1',
    title: 'Implementing Secure Password Verification Using bcrypt in Python',
    excerpt: 'A step-by-step guide to integrating bcrypt for secure password hashing, covering installation, hashing, and verification workflows with detailed Python code examples.',
    date: 'Apr 10, 2026',
    readTime: '8 min read',
    category: 'Python',
    catColor: '#6366f1',
    catBg: 'rgba(99,102,241,0.1)',
    emoji: '🔒',
    link: 'https://medium.com/@oshadanethmina665/implementing-secure-password-verification-using-bcrypt-in-python-4bb6e1069c45',
  },
  {
    id: 'blog-2',
    title: 'Knowledge Representation in the Semantic Web',
    excerpt: 'Explore how RDF, OWL, and knowledge graphs structure data for machine understanding and intelligent applications.',
    date: 'Mar 28, 2026',
    readTime: '6 min read',
    category: 'Semantic Web',
    catColor: '#22d3ee',
    catBg: 'rgba(34,211,238,0.1)',
    emoji: '🔗',
    link: 'https://medium.com/@oshadanethmina665/knowledge-representation-in-the-semantic-web-with-real-world-insight-bc0f3a0803d9',
  },
  {
    id: 'blog-3',
    title: 'Docker & Kubernetes: A Developer-First Approach',
    excerpt: 'From zero to production with containers — writing Dockerfiles, K8s manifests, and rolling deployments without the headaches.',
    date: 'Mar 14, 2026',
    readTime: '10 min read',
    category: 'DevOps',
    catColor: '#fbbf24',
    catBg: 'rgba(251,191,36,0.1)',
    emoji: '🐳',
    link: 'https://medium.com/@oshadanethmina665',
  },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <BookOpen size={12} />
            From the Blog
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
            Technical{' '}
            <span className="gradient-text">Writing</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
            Deep dives into modern web development, architecture patterns, and developer tools
          </p>
          <div className="gradient-line-h" style={{ maxWidth: '120px', margin: '16px auto 0' }} />
        </motion.div>

        {/* Blog Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px',
        }}>
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              id={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '28px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Emoji + Category */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  width: 52, height: 52, borderRadius: '14px',
                  background: post.catBg,
                  border: `1px solid rgba(255,255,255,0.07)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem',
                }}>
                  {post.emoji}
                </span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontSize: '0.72rem', fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: post.catBg,
                  border: `1px solid ${post.catColor}30`,
                  color: post.catColor,
                }}>
                  <Tag size={10} />
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                flex: 1,
              }}>
                {post.excerpt}
              </p>

              {/* Meta + CTA */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontSize: '0.78rem', color: 'var(--text-muted)',
                  }}>
                    {post.date}
                  </span>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontSize: '0.78rem', color: 'var(--text-muted)',
                  }}>
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--accent-blue)', fontSize: '0.82rem', fontWeight: 600,
                    padding: 0,
                    textDecoration: 'none',
                  }}
                >
                  Read <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="https://medium.com/@oshadanethmina665"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline"
            id="view-all-posts-btn"
            style={{ display: 'inline-flex' }}
          >
            View All Posts
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
