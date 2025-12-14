import { PreviewProvider } from "@/context/PreviewContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreviewProvider>{children}</PreviewProvider>
      </body>
    </html>
  );
}
