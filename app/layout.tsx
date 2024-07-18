import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/Components/Sidebar";
import SupabaseProvider from "@/Providers/Supabase";
import UserProvider from "@/hooks/UserProvider";
import ModalProvider from "@/Providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
        <Sidebar>
          {children}
        </Sidebar> 
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
