import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="rounded-2xl border border-black/10 bg-[#faf9f7] p-5 shadow-card sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-tsehText sm:text-base">Хотите увидеть расчет на своем заказе? Оставьте заявку на доступ.</p>
            <a href="#waitlist" className={buttonClassName()}>
              Оставить заявку
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
