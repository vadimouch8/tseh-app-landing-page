import { Container } from "@/components/ui/Container";

const steps = ["Добавили заказ", "Отметили оплаты и закупки", "Видите реальную прибыль"];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f7f6f3] py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Всего 3 шага</h2>
          <ol className="space-y-4 text-base text-tsehText sm:text-lg">
            {steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f4e5db] text-sm font-semibold text-[#9c5120]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-base text-tsehMuted sm:text-lg">Никакой бухгалтерии. Никаких сложных таблиц.</p>
        </div>
      </Container>
    </section>
  );
}
