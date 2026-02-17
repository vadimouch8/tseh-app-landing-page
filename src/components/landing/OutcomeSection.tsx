import { Container } from "@/components/ui/Container";

const outcomes = [
  "вы будете точно знать прибыль по каждому заказу",
  "перестанете путать оборот и заработок",
  "заранее будете видеть нехватку денег",
  "сможете спокойно забирать деньги из бизнеса"
];

export function OutcomeSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-tsehText sm:text-4xl">Что изменится после подключения</h2>
          <p className="text-base leading-relaxed text-tsehMuted sm:text-lg">Через 2–3 недели использования:</p>
          <ul className="space-y-3 text-base text-tsehText sm:text-lg">
            {outcomes.map((outcome) => (
              <li key={outcome}>— {outcome}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
