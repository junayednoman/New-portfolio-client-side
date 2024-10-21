import type { Metadata } from "next";
// import "@/styles/globals.css"; // Tailwind Global Styles
import "antd/dist/reset.css"; // Ant Design CSS
import { Inter, Poppins } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// Import css files
import "./globals.css";
import Providers from "../providers";

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
  title: "Junayed Noman - Full Stack Developer",
  description: "A Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.svg" sizes="any" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-montserrat`}>
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
