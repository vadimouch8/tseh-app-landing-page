# Цех — маркетинговый лендинг

Лендинг для сбора waitlist заявок на ранний доступ к SaaS-продукту «Цех».

## Технологии

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Supabase

## Локальный запуск

1. Установите зависимости:

```bash
npm install
```

2. Создайте `.env.local` на основе `.env.example`:

```bash
cp .env.example .env.local
```

3. Заполните переменные:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (например, `http://localhost:3000`)

4. Создайте таблицу waitlist в Supabase:

```sql
-- файл: supabase/waitlist.sql
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  city text,
  business_type text,
  created_at timestamptz not null default now()
);
```

5. Запустите проект:

```bash
npm run dev
```

## Продакшен

```bash
npm run build
npm start
```

Для Vercel добавьте те же переменные окружения в Project Settings.

## API

`POST /api/waitlist`

Request JSON:

- `name?: string`
- `phone: string`
- `city?: string`
- `business_type?: string`

Response success:

```json
{ "ok": true }
```

Response error:

```json
{ "ok": false, "error": "..." }
```
