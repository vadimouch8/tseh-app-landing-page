import type { Metadata } from "next";
import "@/app/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Цех — прибыль по каждому мебельному заказу",
  description:
    "Цех помогает мебельным цехам и мастерам видеть прибыль по каждому заказу, предупреждает о кассовых разрывах и упрощает контроль закупок.",
  openGraph: {
    title: "Цех — прибыль по каждому мебельному заказу",
    description:
      "Показывает, сколько вы реально зарабатываете на каждом заказе, и помогает избегать нехватки денег на закупки.",
    type: "website",
    locale: "ru_RU"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
