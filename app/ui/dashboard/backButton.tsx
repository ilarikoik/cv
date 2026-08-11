import Link from "next/link";


export default function BackButton() {
    
    return (
        <Link
        href="/#projects"
        className=" font-mono rounded-full text-sm mb-5"
        >← Back</Link>
    )
}