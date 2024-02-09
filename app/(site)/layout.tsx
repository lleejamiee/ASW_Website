import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ASW",
    description: "AUT STEM Women",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body>
                <header>
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
