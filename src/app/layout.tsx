import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oshada Nethmina | Full Stack Developer",
  description:
    "Full Stack Developer building scalable web, mobile, and AI-powered applications. Explore my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Oshada Nethmina" }],
  openGraph: {
    title: "Oshada Nethmina | Full Stack Developer",
    description: "Building scalable web, mobile, and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
