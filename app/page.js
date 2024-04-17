import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="/posts/a">A</Link></li>
        <li><Link href="/posts/b">B</Link></li>
        <li><Link href="/posts/c">C</Link></li>
      </ul>
    </main>
  );
}
