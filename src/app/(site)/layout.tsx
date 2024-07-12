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
                <link
                    href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
                    rel="stylesheet"
                    type="text/css"
                ></link>
            </head>
            <body className="body">
                <NavBar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
