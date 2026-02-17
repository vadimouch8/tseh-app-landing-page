import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const rows = [
  ["Материалы", "91 000 ₽", "Оплачено"],
  ["Фурнитура", "24 000 ₽", "Частично"],
  ["Зарплата сборки", "17 000 ₽", "Запланировано"],
  ["Монтаж", "10 000 ₽", "Запланировано"]
] as const;

export function ProjectMockup() {
  return (
    <section className="bg-[#f5f4f1] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tsehMuted">Экран проекта</p>
            <h2 className="text-3xl font-bold leading-tight text-tsehText sm:text-4xl">
              Интерфейс показывает заказ как рабочий процесс, а не как таблицу
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <Card className="border border-black/10 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3">
                <p className="text-sm font-semibold text-tsehText">Закупки и этапы</p>
                <span className="rounded-full bg-[#f1eee8] px-2.5 py-1 text-xs text-tsehMuted">Заказ в работе</span>
              </div>

              <div className="space-y-2.5">
                {rows.map(([label, value, state]) => (
                  <div key={label} className="grid items-center gap-2 rounded-xl border border-black/10 px-3 py-2 sm:grid-cols-3">
                    <p className="text-sm text-tsehText">{label}</p>
                    <p className="text-sm font-semibold text-tsehText">{value}</p>
                    <p className="text-xs text-tsehMuted">{state}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border border-black/10 p-5 sm:p-6">
              <p className="mb-4 text-sm font-semibold text-tsehText">Что нужно сделать сегодня</p>
              <div className="space-y-2.5 text-sm">
                <div className="rounded-xl border border-black/10 bg-[#faf9f7] p-3 text-tsehText">
                  Проверить оплату фасадов до 16:00
                </div>
                <div className="rounded-xl border border-black/10 bg-[#faf9f7] p-3 text-tsehText">
                  Подтвердить выезд на замер фурнитуры
                </div>
                <div className="rounded-xl border border-black/10 bg-[#faf9f7] p-3 text-tsehText">
                  Согласовать остаток по проекту с клиентом
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
