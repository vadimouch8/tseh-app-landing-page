create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  city text,
  business_type text,
  created_at timestamptz not null default now()
);
