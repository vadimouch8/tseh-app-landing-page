import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const pains = [
  { title: "Касса есть, закупка горит", text: "Взяли предоплату, а на материалы всё равно не хватает." },
  { title: "Много работы, мало маржи", text: "Заказ большой, а в конце почти нет чистой прибыли." },
  { title: "Деньги не там, где нужны", text: "На счету сумма есть, но фасады и фурнитуру закрыть нечем." },
  { title: "Сроки поджимают", text: "Монтаж уже завтра, а часть кухни до сих пор не оплачена." },
  { title: "Оборот растет, запас нет", text: "Заказы идут постоянно, а свободных денег почти нет." },
  { title: "Таблицы не дают ясности", text: "Excel ведете, но по заказам все равно много вопросов." }
];

export function PainSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-tsehMuted">
          Каждый мебельщик через это проходит
        </p>
        <h2 className="mb-10 text-3xl font-bold text-tsehText sm:text-4xl">Знакомо?</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {pains.map((pain) => (
            <Card
              key={pain.title}
              className="border border-[#e57c23]/25 bg-[#fff8f2] p-7 transition hover:-translate-y-0.5 hover:border-[#e57c23]/55 hover:shadow-[0_16px_28px_rgba(156,81,32,0.12)]"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4e5db] text-xs font-semibold text-[#9c5120]">
                  !
                </span>
                <div>
                  <p className="text-lg font-semibold leading-snug text-tsehText">{pain.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-tsehMuted">{pain.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-base text-tsehMuted sm:text-lg">
          Если узнали себя — проблема не в вас. Это особенность мебельного бизнеса.
        </p>
      </Container>
    </section>
  );
}
