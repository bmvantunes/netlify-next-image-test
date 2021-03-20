import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Next.js Component on Netlify!</h1>

      <Image
        width={848}
        height={566}
        layout="responsive"
        src="/david-emrich-odII8BzuWU8-unsplash.jpg"
      />
    </>
  );
}
