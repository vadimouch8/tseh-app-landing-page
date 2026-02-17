import { Container } from "@/components/ui/Container";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export function EarlyAccessSection() {
  return (
    <section id="waitlist" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Это не продажа</h2>
            <p className="text-base leading-relaxed text-tsehMuted sm:text-lg">
              Мы не продаём вам программу.
              <br />
              Мы ищем 10–15 производств, с которыми настроим систему вместе и поможем внедрить её в работу.
            </p>
            <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
              <p className="mb-3 text-base font-semibold text-tsehText">Вы:</p>
              <ul className="space-y-2 text-base text-tsehText">
                <li>— получаете пожизненную скидку</li>
                <li>— влияете на функции</li>
                <li>— мы лично помогаем с настройкой</li>
              </ul>
            </div>
            <p className="text-base leading-relaxed text-tsehText sm:text-lg">
              Мы лично свяжемся с вами перед запуском, поможем настроить и перенести текущие заказы.
            </p>
          </div>
          <div className="space-y-4">
            <WaitlistForm />
            <p className="text-sm font-medium text-tsehMuted">Берём только первые 50 производств.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
