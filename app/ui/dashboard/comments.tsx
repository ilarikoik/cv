'use client';
import { useEffect, useState } from "react";

export default function Comments() {

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fethcData = async () => {
      const response = await fetch("/api/comments");
      const ok = await response.json();
      setData(ok);
    };
    fethcData();
  }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Comments</h1>
        {data?.map((comment: any) => (
          <p key={comment.id}>{comment.message}</p>
        ))}
        </div>
    );
    }