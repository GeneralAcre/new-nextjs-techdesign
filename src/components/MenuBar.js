import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="MenuBar">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  )
}