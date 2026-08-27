import { getClicks, updateClicks } from "@/app/lib/queries";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const res = await getClicks();
        return new Response(JSON.stringify(res), { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to fetch comments" },
            { status: 500 }
          );
    }
}

export async function POST(request: Request) {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

   
    if (ip === process.env.MY_IP) {
        console.log("OMA IP, skip updating clicks");
        return NextResponse.json({ skipped: true }, { status: 200 });
    }
    try {
        const { name } = await request.json();
        const updatedClicks = await updateClicks(name);
        return NextResponse.json(updatedClicks);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to update clicks" },
            { status: 500 }
        );
    }
}