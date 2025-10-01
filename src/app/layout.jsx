import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Entete from "@/components/Entete";
import PiedDePage from "@/components/PiedDePage";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// You can optionally export metadata as a plain object or remove it if unused
export const metadata = {
  title:
    "Lumel Optique | Lunettes de vue, kit d'entretien | Examen de vue à Douala, Cameroun",
  description:
    "Lumel Optique, votre spécialiste optique en ligne et dans vos regions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Entete />
          {children}
          <PiedDePage />
        </ThemeProvider>
      </body>
    </html>
  );
}