import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-tsehBg/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="text-lg font-bold tracking-tight text-tsehText">
          Цех
        </Link>
        <a href="#waitlist" className={buttonClassName("px-4 py-2 text-xs sm:text-sm")}>
          Оставить заявку
        </a>
      </Container>
    </header>
  );
}
