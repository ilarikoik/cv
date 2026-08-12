'use client';

import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const fethcData = async () => {
            const response = await fetch("/api/comments");
            const ok = await response.json();
            setData(ok);
        }
        fethcData();
    }, []);

const teksti = "koitetaan toimiiko"
    const handleSubmit = async (teksti : string) => {
        try {
            const response = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: teksti }),
            });
            if (!response.ok) {
                throw new Error("täällä");
            }
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
        <h1 className="pt-20">DASHBOARS</h1>

              {data?.map((comment: any) => (
        <p key={comment.id}>{comment.message}</p>
      ))}
        </>
    )
}