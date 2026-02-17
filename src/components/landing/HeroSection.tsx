"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

const metrics = [
  { label: "Оплачено", value: "180 000 ₽", tone: "neutral" },
  { label: "Расходы", value: "142 000 ₽", tone: "neutral" },
  { label: "Прибыль", value: "38 000 ₽", tone: "profit" }
] as const;

const operations = [
  { type: "in", amount: "+50 000 ₽", title: "доплата клиента" },
  { type: "out", amount: "−18 500 ₽", title: "фурнитура" },
  { type: "out", amount: "−6 200 ₽", title: "доставка" }
] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const projectParallax = useTransform(scrollYProgress, [0, 1], [22, -20]);
  const operationsParallax = useTransform(scrollYProgress, [0, 1], [14, -26]);

  return (
    <section ref={sectionRef} className="hero-surface relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <div className="max-w-xl space-y-7">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-tsehText sm:text-6xl">
              Работы много, а денег в конце месяца почти нет?
            </h1>
            <p className="text-base leading-relaxed text-tsehMuted sm:text-xl">
              Цех показывает, сколько вы реально зарабатываете на каждом заказе и заранее предупреждает, когда денег на
              закупку не хватит.
            </p>
            <p className="text-sm leading-relaxed text-tsehMuted">
              Мы сами работаем с мебельными заказами и делаем систему, которой нам самим не хватало.
            </p>
            <div className="space-y-3">
              <a href="#waitlist" className={buttonClassName()}>
                Записаться в ранний доступ
              </a>
              <p className="text-sm text-tsehMuted">Ранний доступ получат только первые 50 производств.</p>
              <p className="text-xs text-tsehMuted">После запуска регистрация будет закрыта.</p>
              <p className="text-xs text-tsehMuted">Первый закрытый запуск — в этом месяце.</p>
              <p className="text-xs text-tsehMuted">Для первых пользователей участие бесплатное.</p>
            </div>
          </div>

          <div className="hero-mockup-stage relative mx-auto w-full max-w-[760px] px-2 py-7 sm:px-4">
            <motion.div style={{ y: projectParallax }} className="relative z-20 lg:w-[74%]">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.55, ease: "easeOut" }, y: { duration: 4.8, ease: "easeInOut", repeat: Infinity } }}
                whileHover={{ x: -4, y: -11, boxShadow: "var(--hero-shadow-far-hover), var(--hero-shadow-contact-hover)" }}
                className="hero-screen rounded-[24px] p-6 sm:p-8 lg:-rotate-[1.6deg]"
                style={{ boxShadow: "var(--hero-shadow-far), var(--hero-shadow-contact)" }}
              >
                <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tsehMuted">Проект</p>
                    <h2 className="mt-1 text-2xl font-semibold text-tsehText sm:text-3xl">Кухня «Сканди»</h2>
                  </div>
                  <span className="rounded-full border border-black/10 bg-[#f2efe9] px-3 py-1 text-xs font-medium text-tsehText">
                    В работе
                  </span>
                </div>

                <div className="space-y-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-[#f8f6f2] px-4 py-3"
                    >
                      <p className="text-sm text-tsehMuted">{metric.label}</p>
                      <p
                        className={`text-right text-lg font-semibold tabular-nums ${metric.tone === "profit" ? "text-[#2f6b47]" : "text-tsehText"}`}
                      >
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2 rounded-2xl border border-[#e57c23]/20 bg-[#e57c23]/[0.06] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-tsehMuted">Свободно</p>
                    <p className="text-right text-sm font-semibold text-tsehText tabular-nums">23 400 ₽</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-tsehMuted">Закупка фасадов через 3 дня</p>
                    <p className="text-right text-sm font-semibold text-tsehText tabular-nums">68 000 ₽</p>
                  </div>
                  <p className="text-base font-semibold text-[#8f4a1f] tabular-nums">⚠ Не хватает: 44 600 ₽</p>
                </div>
              </motion.article>
            </motion.div>

            <motion.div style={{ y: operationsParallax }} className="relative z-10 mt-5 lg:absolute lg:right-0 lg:top-16 lg:mt-0 lg:w-[45%] lg:translate-x-4">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ opacity: { duration: 0.55, delay: 0.1, ease: "easeOut" }, y: { duration: 5.6, ease: "easeInOut", repeat: Infinity, delay: 0.3 } }}
                whileHover={{ x: 3, y: -8, boxShadow: "var(--hero-shadow-far-hover), var(--hero-shadow-contact-hover)" }}
                className="hero-screen rounded-[22px] p-4 sm:p-5 lg:rotate-[2.2deg]"
                style={{ boxShadow: "var(--hero-shadow-far-soft), var(--hero-shadow-contact-soft)" }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-tsehMuted">Операции</p>
                <div className="space-y-2.5">
                  {operations.map((operation) => (
                    <div key={operation.title} className="rounded-2xl border border-black/10 bg-[#f8f6f2] p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-sm font-semibold tabular-nums ${operation.type === "in" ? "text-[#2f6b47]" : "text-[#9c5120]"}`}>
                          {operation.amount}
                        </p>
                        <span className="rounded-full border border-black/10 bg-white px-2.5 py-0.5 text-[11px] font-medium text-tsehMuted">
                          {operation.type === "in" ? "Поступление" : "Расход"}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-medium leading-snug text-tsehText">{operation.title}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
