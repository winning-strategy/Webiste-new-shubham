import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Spreadsheet Agent - AI-Powered Business Analytics | WinningStrategy.ai",
  description: "Transform your spreadsheet workflow with AI-powered automation. Build financial models, analyze data, and generate insights 10x faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <AuthProvider>
          <div className="max-w-[1920px] mx-auto">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

