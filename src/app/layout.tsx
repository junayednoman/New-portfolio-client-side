import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// Import css files
import Providers from "../providers";
import "./globals.css";
import "antd/dist/reset.css"; // Ant Design CSS

const inter = Inter({
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junayed Noman - Full stack developer",
  description: "A Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="icon.png" sizes="any" />
      </head>
      <Providers>
        <body
          className={`${inter.variable} ${poppins.variable} font-montserrat`}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </Providers>
    </html>
  );
}
