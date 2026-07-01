import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-neutral-50 dark:bg-black transition-colors duration-700">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}