import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Smart Mart",
  description: "",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>{children}
        <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "white",
                        color: "black",
                    },
                }}
            />
      </body>
    </html>
  );
}
