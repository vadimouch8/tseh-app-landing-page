import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

const methods = ["Excel или Google таблицы", "заметки в телефоне", "переписки WhatsApp", "просто держите всё в голове"];

export function CurrentAccountingSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Вы, скорее всего, сейчас ведёте учёт так:</h2>
          <ul className="space-y-3 text-base text-tsehText sm:text-lg">
            {methods.map((method) => (
              <li key={method}>— {method}</li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-tsehMuted sm:text-lg">
            Из-за этого часть расходов теряется, прибыль считается примерно и кассовые разрывы появляются неожиданно.
          </p>
          <p className="text-base font-medium text-tsehText sm:text-lg">Цех как раз решает именно эту проблему.</p>
          <a href="#waitlist" className={buttonClassName()}>
            Записаться в ранний доступ
          </a>
        </div>
      </Container>
    </section>
  );
}
