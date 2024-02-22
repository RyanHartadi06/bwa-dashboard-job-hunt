import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });
import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
