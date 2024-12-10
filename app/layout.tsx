import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Design/Navbar";
import NextThemeProvider from "@/lib/ThemeProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(inter.className, "dark")}
        style={{ colorScheme: "dark" }}
      >
        <body>
          <NextThemeProvider>
            <div className="flex min-h-screen items-center text-slate-100 w-full flex-col dark:bg-black ">
              <Navbar />
              <div className="flex justify-center items-center w-full flex-grow ">
                {children}
                <Toaster />
              </div>
              <Footer />
            </div>
          </NextThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
