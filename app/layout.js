import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({subsets: ['latin']});
export const metadata = {
  title: "AIwithSarv",
  description: "created by sarv AI app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <ClerkProvider>

         
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />

          

        </ClerkProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
