import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilRootWrapper from "./RecoilWrapper";
import { MSWComponent } from "./mocks/MSWComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk_to_Me",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} className={inter.className}>
        <RecoilRootWrapper>
          <MSWComponent>{children}</MSWComponent>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
