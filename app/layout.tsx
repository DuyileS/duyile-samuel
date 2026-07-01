import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InterTight } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fiyin.ng/"),
  title: "Duyile Samuel Akinwande",
  description:
    "Samuel, A Full-stack Software Engineer, Full Stack Web Developer, and Open Source Enthusiast",
  keywords: [
    "Duyile Samuel",
    "Duyile Akinwande",
    "Samuel Duyile",
    "Akinwande Samuel",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "NestJS Developer",
    "GraphQL Developer",
    "API Developer",
    "Web App Developer",
    "Progressive Web Apps (PWA)",
    "UI/UX Developer",
    "Tailwind CSS Developer",
    "Headless CMS Developer",
    "JAMstack Developer",
    "Software Architect",
    "Mobile App Developer",
    "React Native Developer",
    "Expo Developer",
    "Cross-Platform Developer",
    "Web Performance Optimization",
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "Cloud Developer",
    "Firebase Developer",
    "Supabase Developer",
    "Vite Developer",
    "ESBuild Expert",
    "T3 Stack Developer",
    "Prisma ORM Developer",
    "Web Security Engineer",
    "Open Source Contributor",
    "Remote Software Engineer",
    "Tech Enthusiast",
    "Freelance Web Developer",
    "Software Consultant",
    "DevOps for Developers",
    "CI/CD for Web Development",
    "Vercel Deployment Expert",
    "Netlify Developer",
    "AWS for Web Developers",
    "Docker for Web Apps",
    "Microservices Developer",
    "REST API Developer",
    "Full Stack TypeScript Developer",
    "React Query Expert",
    "Zustand State Management",
    "TanStack Developer",
    "Software Scalability",
    "State Management Expert",
    "Monorepo Development",
    "Turborepo Developer",
    "Bun.js Developer",
    "Edge Computing Engineer",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Duyile Samuel Akinwande",
      url: "https://fiyin.ng/",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fiyin.ng/",
    description: "This is my portfolio website guys, check it out!",
    images: [
      {
        url: "/Duyile.jpeg",
        width: 459,
        height: 820,
        alt: "Samuel Duyile",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${InterTight.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
