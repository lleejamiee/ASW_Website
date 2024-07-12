import type { Metadata } from "next";

import "../globals.css";
import NavBar from "./(components)/Navbar/NavBar";
import Footer from "./(components)/Footer/Footer";

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
            <body className="body">
                <NavBar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
