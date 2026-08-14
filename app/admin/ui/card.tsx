'use client';

interface CardProps {
    name: string;
    clicks: number;
}

export default function Card({ name, clicks }: CardProps) {
    return (
        <div className="w-3/5 rounded-lg border border-gray-200 p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 mt-2">
            <p className="font-medium text-black dark:text-white">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{clicks} clicks</p>
        </div>
    );
}