import type { Metadata } from "next";
import "../css/globals.css";

export const metadata: Metadata = {
  title: "LexiDuel",
  description: "LexiDuel is a real-time multiplayer word game where two players race to guess the same secret word first in a wordle manner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`p-2  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
