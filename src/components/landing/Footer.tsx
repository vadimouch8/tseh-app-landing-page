import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-8">
      <Container className="flex flex-col gap-2 text-sm text-tsehMuted sm:flex-row sm:items-center sm:justify-between">
        <p>Цех</p>
        <p>© 2026</p>
      </Container>
    </footer>
  );
}
