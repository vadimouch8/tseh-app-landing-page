import { Container } from "@/components/ui/Container";

const audience = [
  "свой мебельный цех",
  "производство с аутсорсом",
  "дизайнеры кухонь",
  "монтажные бригады",
  "частные мастера"
];

export function AudienceSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-tsehText sm:text-4xl">Кому подойдёт</h2>
          <ul className="space-y-3 text-base text-tsehText sm:text-lg">
            {audience.map((item) => (
              <li key={item} className="rounded-xl border border-black/10 bg-[#faf9f7] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
