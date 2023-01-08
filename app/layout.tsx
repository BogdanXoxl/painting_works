import "../styles/globals.scss";

import { Lato } from "@next/font/google";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={lato.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
