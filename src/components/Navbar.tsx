"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import ProfileCard from "@/components/ui/profileCard";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  const profileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 16);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter((s): s is HTMLElement => Boolean(s));

      const current = sections.find((s) => {
        const top = s.offsetTop - 140;
        return scrollY >= top && scrollY < top + s.offsetHeight;
      });

      if (current) setActiveSection(current.id);
      else if (scrollY < 120) setActiveSection("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isProfileCardOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (!profileCardRef.current?.contains(e.target as Node)) {
        setIsProfileCardOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProfileCardOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileCardOpen]);

  return (
    /* Outer nav — full width strip, fixed at top */
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: "16px",
        left: "16px",
        right: "16px",
        zIndex: 50,
      }}
    >
      {/* ── Pill container ─────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.09)",
          background: "rgba(10,10,15,0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: isScrolled
            ? "0 20px 60px rgba(2,6,23,0.7), 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 8px 32px rgba(2,6,23,0.45)",
          transition: "box-shadow 0.4s ease",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Subtle gradient shimmer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background:
              "radial-gradient(ellipse at top left, rgba(99,102,241,0.16) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(34,211,238,0.10) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Desktop row ─────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "68px",
            padding: "0 28px",
            gap: "16px",
          }}
        >
          {/* Logo */}
          <Link
            href="#home"
            style={{
              flexShrink: 0,
              fontWeight: 900,
              fontSize: "1.25rem",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
            }}
          >
            ON
          </Link>

          {/* Nav links — hidden on mobile, centered on desktop */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hidden md:flex"
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                listStyle: "none",
                margin: 0,
                padding: "6px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "6px 16px",
                        borderRadius: "999px",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        color: isActive ? "#ffffff" : "#a1a1aa",
                        background: isActive
                          ? "rgba(255,255,255,0.09)"
                          : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.target as HTMLElement).style.color = "#ffffff";
                          (e.target as HTMLElement).style.background =
                            "rgba(255,255,255,0.06)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.target as HTMLElement).style.color = "#a1a1aa";
                          (e.target as HTMLElement).style.background =
                            "transparent";
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — avatar (desktop) */}
          <div
            style={{ flexShrink: 0 }}
            className="hidden md:flex items-center gap-3"
          >
            <div ref={profileCardRef} style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setIsProfileCardOpen((c) => !c)}
                aria-label="Open profile card"
                aria-expanded={isProfileCardOpen}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: isProfileCardOpen
                    ? "2px solid rgba(99,102,241,0.7)"
                    : "2px solid rgba(63,63,70,0.8)",
                  background: "#18181b",
                  cursor: "pointer",
                  transition: "border-color 0.2s, transform 0.2s",
                  position: "relative",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Oshada Nethmina"
                  fill
                  sizes="44px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </button>

              <ProfileCard
                isOpen={isProfileCardOpen}
                onClose={() => setIsProfileCardOpen(false)}
              />
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            className="md:hidden"
            style={{
              marginLeft: "auto",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile menu ─────────────────────────────────── */}
        {isMenuOpen && (
          <div
            id="mobile-nav-menu"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "12px 16px 16px",
            }}
            className="md:hidden"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(24,24,27,0.7)",
                padding: "8px",
              }}
            >
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      color: isActive ? "#ffffff" : "#d4d4d8",
                      background: isActive
                        ? "rgba(255,255,255,0.09)"
                        : "transparent",
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Profile row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "8px",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  background: "rgba(9,9,11,0.8)",
                }}
              >
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#d4d4d8" }}>
                  Oshada Nethmina
                </span>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid rgba(63,63,70,0.8)",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/profile.png"
                    alt="Oshada Nethmina"
                    fill
                    sizes="36px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
