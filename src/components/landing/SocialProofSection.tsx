import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const quotes = [
  {
    text: "Постоянно путались в оплатах клиентов. Уже на этапе теста стало понятно, где теряем деньги.",
    author: "Игорь, кухни на заказ"
  },
  {
    text: "Раньше прибыль считали примерно. Теперь видно каждый заказ.",
    author: "Андрей, шкафы-купе"
  },
  {
    text: "Поняли, что половину проблем создавали кассовые разрывы, а не продажи.",
    author: "Сергей, мебельный цех"
  }
] as const;

export function SocialProofSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Мы разрабатываем Цех вместе с мебельщиками</h2>
          <p className="text-base leading-relaxed text-tsehMuted sm:text-lg">
            Сейчас мы общаемся с владельцами производств и на их реальных заказах строим систему.
            <br />
            Продукт создаётся не в теории, а на основе реальной работы мебельных цехов.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-tsehMuted">
            Уже помогают 12 мебельных мастерских
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((quote) => (
            <Card key={quote.author} className="border border-black/10 p-5">
              <p className="text-sm leading-relaxed text-tsehText">“{quote.text}”</p>
              <p className="mt-4 text-sm text-tsehMuted">— {quote.author}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
