'use client';

interface CardProps {
    name: string;
    clicks: number;
}

export default function Card({ name, clicks }: CardProps) {
    return (
        <div className=" m-1 flex w-full items-center justify-between rounded-xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
    <p className="font-medium text-black dark:text-gray-300 ">{name}</p>
    <p className="text-sm font-bold text-gray-500 dark:text-gray-100">{clicks} clicks</p>
</div>
    );
}