import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const faq = [
  ["Это сложно?", "Нет, основные действия занимают несколько секунд."],
  ["Это бухгалтерия?", "Нет, это контроль заказов и прибыли."],
  ["Подойдет для аутсорса?", "Да."]
];

export function FaqSection() {
  return (
    <section className="bg-[#f7f6f3] py-20 sm:py-28">
      <Container>
        <h2 className="mb-10 text-3xl font-bold text-tsehText sm:text-4xl">FAQ</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {faq.map(([q, a]) => (
            <Card key={q} className="border border-black/10 p-5">
              <h3 className="text-base font-semibold text-tsehText sm:text-lg">{q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tsehMuted sm:text-base">{a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
