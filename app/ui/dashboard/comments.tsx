'use client';
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  message: string;
}

export default function Comments() {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/comments");
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading comments...</p>;
  }

  if (data.length === 0) {
    return <p className="text-sm text-gray-500">No comments yet.</p>;
  }

  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Comments
      </h1>
      {data.map((comment) => (
        <div
          key={comment.id}
          className="rounded-xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {comment.message}
          </p>
        </div>
      ))}
    </div>
  );
}