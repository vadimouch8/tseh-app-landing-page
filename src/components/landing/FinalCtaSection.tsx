import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <section className="bg-[#eceae5] py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold leading-tight text-tsehText sm:text-4xl">
            Вы хорошо умеете делать мебель. Цех поможет понять, сколько вы на ней зарабатываете.
          </h2>
          <a href="#waitlist" className={buttonClassName()}>
            Записаться в ранний доступ
          </a>
        </div>
      </Container>
    </section>
  );
}
