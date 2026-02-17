import { Container } from "@/components/ui/Container";

export function WhySection() {
  return (
    <section className="bg-[#efede8] py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Почему в мебельном бизнесе постоянно не хватает денег</h2>
          <ul className="space-y-4 text-base leading-relaxed text-tsehText sm:text-lg">
            <li>— Предоплата клиента — это не прибыль</li>
            <li>— Закупки начинаются раньше, чем приходят доплаты</li>
            <li>— Прибыль становится понятна только после монтажа</li>
          </ul>
          <p className="text-base leading-relaxed text-tsehMuted sm:text-lg">
            Пока заказ не установлен — вы фактически финансируете производство из будущих денег клиента.
          </p>
        </div>
      </Container>
    </section>
  );
}
