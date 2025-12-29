import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import connectDB from "./lib/connectDB";

export const metadata: Metadata = {
  title: "Raghuram's Next.js App",
  description: "Its a sample Next.js application by Raghuram",
};

// Initialize database connection
connectDB().catch(console.error);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="header-logo mb-8 shadow-md rounded-lg text-center">
          <h1 className="text-3xl font-bold text-white p-4" style={{ backgroundColor: "blueviolet" }}>Raghu Logo</h1>
        </div>
        {children}
        <footer className="bg-slate-200 dark:bg-slate-800 py-8 mt-16">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <p className="text-slate-600 dark:text-slate-300">
              © 2025 MyApp. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                About
              </Link>
              <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                Contact
              </Link>
              <Link href="/login" className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                Login
              </Link>
              <Link href="/register" className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                Register
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
