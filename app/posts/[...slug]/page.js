import {notFound} from "next/navigation";

const validSlugs = ['a', 'b']

export default function Page(props) {
  const slug = Array.isArray(props.params.slug) ? props.params.slug.join('/') : props.params.slug;
  if (!validSlugs.includes(slug)) {
    throw notFound();
  }
  return <div>{slug}</div>
}

export function generateStaticParams() {
  return [{slug: ['a']}]
}