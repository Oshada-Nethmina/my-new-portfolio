"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineBookOpen,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineX,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type ProfileCardProps = {
  isOpen: boolean;
  onClose: () => void;
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Oshada-Nethmina",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oshada-nethmina/",
    icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
  {
    name: "Blog",
    href: "#blog",
    icon: HiOutlineBookOpen,
  },
];

export default function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Nudge card left if it overflows the right edge of the viewport
  useEffect(() => {
    if (!isOpen || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const overflow = rect.right - (window.innerWidth - 16);
    if (overflow > 0) {
      card.style.right = `${overflow}px`;
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: -14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "calc(100% + 14px)",
            right: 0,
            zIndex: 80,
            width: "22rem",
            maxWidth: "calc(100vw - 32px)",
            borderRadius: "2rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#09090b",
            boxShadow: "0 24px 60px rgba(2,6,23,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* ── Banner ─────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              height: "84px",
              background: "linear-gradient(120deg, #0c1525 0%, #162032 50%, #0c1525 100%)",
            }}
          >
            {/* Colour blobs on banner */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.2) 0%, transparent 55%)",
                pointerEvents: "none",
              }}
            />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile card"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <HiOutlineX style={{ width: "18px", height: "18px" }} />
            </button>
          </div>

          {/* ── Content ────────────────────────────────── */}
          <div style={{ padding: "0 24px 20px", position: "relative" }}>

            {/* Avatar + Available row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginTop: "-40px",
                marginBottom: "16px",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #27272a",
                  background: "#18181b",
                  boxShadow: "0 8px 24px rgba(2,6,23,0.5)",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Oshada Nethmina"
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Available badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  borderRadius: "999px",
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  padding: "5px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#34d399",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10b981",
                    flexShrink: 0,
                  }}
                />
                Available
              </span>
            </div>

            {/* Name + bio */}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              Oshada Nethmina
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#a1a1aa",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              Full Stack Developer building modern web &amp; mobile experiences.
            </p>

            {/* Location + Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#71717a", fontSize: "0.875rem" }}>
                <HiOutlineLocationMarker style={{ width: "17px", height: "17px", flexShrink: 0 }} />
                <span style={{ color: "#d4d4d8" }}>Sri Lanka</span>
              </div>
              <a
                href="mailto:oshadanethminamunasingha@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#71717a",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4d4d8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717a")}
              >
                <HiOutlineMail style={{ width: "17px", height: "17px", flexShrink: 0 }} />
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "#d4d4d8",
                  }}
                >
                  oshadanethminamunasingha@gmail.com
                </span>
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    onClick={link.href.startsWith("#") ? onClose : undefined}
                    aria-label={link.name}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#18181b",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a1a1aa",
                      textDecoration: "none",
                      transition: "background 0.15s, color 0.15s, transform 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#38bdf8";
                      el.style.color = "#0c0c0f";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#18181b";
                      el.style.color = "#a1a1aa";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon style={{ width: "17px", height: "17px" }} />
                  </a>
                );
              })}
            </div>

            {/* Get In Touch CTA */}
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "14px 20px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #38bdf8 0%, #22d3ee 100%)",
                color: "#0c0c0f",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "transform 0.15s, opacity 0.15s",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <FiArrowUpRight style={{ width: "16px", height: "16px" }} />
              Get In Touch
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
