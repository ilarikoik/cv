import { NextResponse } from "next/server";
import { createComment, getComments } from "@/app/lib/queries";

// eristetään tää tuolta 'use clientistä' ja rakentaa enpointin
// querissa siis suorat kyselit tietokantaan - eristetään kanssa 
export async function GET() {
  try {
    const comments = await getComments();
    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
    try {
      const { message } = await request.json();
      const comment = await createComment(message);
  
      return NextResponse.json(comment);
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        { error: "Failed to create comment" },
        { status: 500 }
      );
    }
  }
