import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) {
      return NextResponse.json({ count: 500 }, { status: 200 });
    }

    return NextResponse.json({ count: 500 + (count || 0) });
  } catch {
    return NextResponse.json({ count: 500 }, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email ? String(body.email).trim().toLowerCase() : "";

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Try to insert
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();

    if (error) {
      if (error.code === "23505") {
        // Unique violation - already registered
        const { data: existing } = await supabase
          .from("waitlist")
          .select("id")
          .eq("email", email)
          .single();

        const spot = existing ? 500 + Number(existing.id) : 501;
        return NextResponse.json({
          success: true,
          spot,
          alreadyJoined: true,
        });
      }

      return NextResponse.json(
        { error: error.message || "Failed to join waitlist" },
        { status: 500 }
      );
    }

    const newId = data?.[0]?.id || 1;
    const spot = 500 + Number(newId);

    return NextResponse.json({
      success: true,
      spot,
      alreadyJoined: false,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
