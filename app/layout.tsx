import "./globals.css";
import Sidebar from "@/src/components/layout/Sidebar";
import Header from "@/src/components/layout/Header";
import RightSidebar from "@/src/components/layout/RightSidebar";

export const metadata = {
  title: "Reddit",
  description: "UI-focused Reddit-style feed built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="content-row">
          <Sidebar />
          <main className="main-content">{children}</main>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}