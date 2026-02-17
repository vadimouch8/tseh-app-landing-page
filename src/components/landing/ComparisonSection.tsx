import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const columns = [
  {
    title: "Excel",
    plus: ["Гибко", "Привычно"],
    minus: ["Легко ошибиться", "Нет контроля кассовых разрывов", "Сложно видеть прибыль по заказу"]
  },
  {
    title: "CRM",
    plus: ["Контакты и сделки", "Этапы продаж"],
    minus: ["Не считает себестоимость", "Не показывает реальную прибыль", "Слабый контроль закупок"]
  },
  {
    title: "Бухгалтерия",
    plus: ["Отчеты и налоги", "Финансовая дисциплина"],
    minus: ["Сложно для мастера", "Не про ежедневные решения", "Прибыль видно слишком поздно"]
  },
  {
    title: "Цех",
    plus: ["Прибыль по каждому заказу", "Понимание закупок заранее", "Контроль маржи и кассовых разрывов"],
    minus: ["Закрытый ранний доступ"]
  }
];

export function ComparisonSection() {
  return (
    <section className="bg-[#efede8] py-20 sm:py-28">
      <Container>
        <h2 className="mb-10 text-3xl font-bold text-tsehText sm:text-4xl">Сравнение</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <Card
              key={column.title}
              className={`border p-5 ${
                column.title === "Цех"
                  ? "scale-[1.04] border-tsehAccent bg-[#fff7f0] p-7 shadow-[0_0_0_2px_rgba(229,124,35,0.25),0_20px_32px_rgba(31,31,31,0.08)]"
                  : "border-black/10"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-tsehText">{column.title}</h3>
                {column.title === "Цех" ? (
                  <span className="rounded-full bg-tsehAccent px-3 py-1 text-xs font-semibold text-white">Рекомендуем</span>
                ) : null}
              </div>
              <div className="space-y-2.5">
                {column.plus.map((item) => (
                  <p key={`${column.title}-${item}`} className="text-sm text-tsehText">
                    <span className={`${column.title === "Цех" ? "text-[#2f6b47]" : "text-tsehText"}`}>+ </span>
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-5 space-y-2.5">
                {column.minus.map((item) => (
                  <p key={`${column.title}-${item}`} className="text-sm text-tsehMuted">
                    − {item}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
