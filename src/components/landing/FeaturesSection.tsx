import { Container } from "@/components/ui/Container";

const features = [
  "показывает прибыль по каждому заказу",
  "считает реальную себестоимость кухни",
  "предупреждает, когда денег не хватит на закупку",
  "показывает, где теряется маржа",
  "раскладывает предоплату клиента на материалы, зарплаты и прибыль"
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <h2 className="mb-10 text-3xl font-bold text-tsehText sm:text-4xl">Что делает Цех</h2>
          <ul className="space-y-4 text-base leading-relaxed text-tsehText sm:text-lg">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-tsehAccent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
