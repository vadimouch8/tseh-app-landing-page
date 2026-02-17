"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormValues = {
  name: string;
  phone: string;
  city: string;
  business_type: string;
};

const businessTypes = [
  "свой мебельный цех",
  "производство с аутсорсом",
  "дизайнер кухонь",
  "монтажная бригада",
  "частный мастер"
] as const;

const initialValues: FormValues = {
  name: "",
  phone: "",
  city: "",
  business_type: businessTypes[0]
};

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function WaitlistForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const phoneError = useMemo(() => {
    const phone = normalize(values.phone);
    if (!phone) return "Укажите телефон";
    if (phone.length < 6 || phone.length > 25) return "Телефон должен содержать 6–25 символов";
    return null;
  }, [values.phone]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (phoneError) {
      setError(phoneError);
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        name: normalize(values.name),
        phone: normalize(values.phone),
        city: normalize(values.city),
        business_type: values.business_type
      };

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error ?? "Не удалось отправить форму. Попробуйте еще раз.");
        return;
      }

      setIsSuccess(true);
      setValues(initialValues);
    } catch {
      setError("Сервис временно недоступен. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-tsehText">Вы в списке 👍</h3>
        <p className="mt-3 text-base text-tsehMuted">
          В течение 24 часов мы напишем вам в WhatsApp, попросим пример одного вашего заказа и покажем, как он будет
          выглядеть внутри Цеха.
        </p>
        <p className="mt-3 text-base text-tsehMuted">Никаких продаж — просто покажем на вашем реальном проекте.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-tsehText" href="#top">
            Вернуться на главную
          </a>
          <button
            className="rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-tsehText"
            onClick={() => setIsSuccess(false)}
            type="button"
          >
            Отправить ещё заявку
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="mb-1 block text-sm font-medium text-tsehText" htmlFor="name">
            Имя
          </label>
          <input
            className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-tsehText outline-none focus:border-tsehAccent"
            id="name"
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-tsehText" htmlFor="phone">
            Телефон (обязательно)
          </label>
          <input
            aria-invalid={Boolean(error || phoneError)}
            className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-tsehText outline-none focus:border-tsehAccent"
            id="phone"
            name="phone"
            required
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-tsehText" htmlFor="city">
            Город
          </label>
          <input
            className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-tsehText outline-none focus:border-tsehAccent"
            id="city"
            name="city"
            value={values.city}
            onChange={(event) => setValues((prev) => ({ ...prev, city: event.target.value }))}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-tsehText" htmlFor="business_type">
            Тип деятельности
          </label>
          <select
            className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-tsehText outline-none focus:border-tsehAccent"
            id="business_type"
            name="business_type"
            value={values.business_type}
            onChange={(event) => setValues((prev) => ({ ...prev, business_type: event.target.value }))}
          >
            {businessTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Отправляем..." : "Записаться в ранний доступ"}
        </Button>
        <p className="text-xs text-tsehMuted">Мы не передаём контакты и не рассылаем рекламу.</p>
        <p className="text-xs text-tsehMuted">Мы не звоним без согласования — сначала напишем в WhatsApp.</p>
      </form>
    </Card>
  );
}
