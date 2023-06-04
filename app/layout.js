import { Navbar } from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "The First Ad Free Jobboard",
  description: "This is MVP for Job placement",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
