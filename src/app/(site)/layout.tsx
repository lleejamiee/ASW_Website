import type { Metadata } from "next";

import "../globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

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
                <nav>
                    <NavBar />
                </nav>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
