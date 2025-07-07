import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// eslint-disable-next-line camelcase
import { Inter, Roboto, Numans } from "next/font/google";

// Inter: All weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Roboto: All weights
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"], // Roboto officially supports these
});

// Numans: Only available at 400
const numans = Numans({
  subsets: ["latin"],
  variable: "--font-numans",
  weight: ["400"], // Only one available weight
});

export const metadata: Metadata = {
  title: "JIRBDAI",
  description:
    "Journal of Institutional Research, Big Data Analytics and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=540" />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${numans.variable} relative inset-x-0 w-full min-w-[540px]  justify-items-center  bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
