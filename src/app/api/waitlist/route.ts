import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

type WaitlistPayload = {
  name?: string;
  phone?: string;
  city?: string;
  business_type?: string;
};

function normalize(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as WaitlistPayload;
    const phone = normalize(payload.phone);

    if (!phone) {
      return NextResponse.json({ ok: false, error: "Поле phone обязательно" }, { status: 400 });
    }

    if (phone.length < 6 || phone.length > 25) {
      return NextResponse.json({ ok: false, error: "Телефон должен содержать 6–25 символов" }, { status: 400 });
    }

    const name = normalize(payload.name);
    const city = normalize(payload.city);
    const businessType = normalize(payload.business_type);

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase.from("waitlist").insert({
      name: name || null,
      phone,
      city: city || null,
      business_type: businessType || null
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "Не удалось записать в waitlist" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }
}
