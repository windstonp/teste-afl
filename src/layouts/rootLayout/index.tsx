import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Teste AFL",
  description: "Teste AFL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={poppins.className}>{children}</main>;
}
