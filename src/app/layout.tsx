import type { Metadata } from "next";
import "../css/globals.css";
import { childProps } from "@/types/type";
import CustomContext from "@/context/custom-context";
import Navbar from "@/components/component/navbar";
import Footer from "@/components/component/footer";

export const metadata: Metadata = {
  title: "LexiDuel",
  description:
    "LexiDuel is a real-time multiplayer word game where two players race to guess the same secret word first in a wordle manner.",
  icons: {
    icon: [
      { url: "/assets/logofav.ico", type: "image/x-icon" },
      { url: "/assets/logofav32.png", type: "image/png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<childProps>) {
  return (
    <html className="dark" lang="en">
      <body className={`p-5 px-5 min-h-screen selection:bg-[#FCFCF7] selection:text-[#0E0D12] text-clig bg-cdark font-satoshi antialiased`}>
        <CustomContext>
          <Navbar />
          {children}
          <Footer />
        </CustomContext>
      </body>
    </html>
  );
}
