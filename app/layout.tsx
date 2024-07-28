import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/Components/Sidebar";
import SupabaseProvider from "@/Providers/Supabase";
import UserProvider from "@/Providers/UserProvider";
import ModalProvider from "@/Providers/ModalProvider";
import Player from "@/Components/Player";
import ToasterProvider from "@/Providers/ToasterProvider";
import getSongsByUserId from "@/Actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>  
            <ModalProvider />
            <Sidebar songs ={userSongs}>
              {children}
            </Sidebar> 
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
