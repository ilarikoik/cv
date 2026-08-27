import Link from "next/link";


interface GitHubButtonProps {
    url: string;
}

export default function GitHubButton({url} : GitHubButtonProps) {
    
    return (
        <Link
        href={url}
        className=" font-mono rounded-full text-sm mb-5"
        >Github →</Link>
    )
}