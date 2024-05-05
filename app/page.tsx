import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='background-caroussel'>
        <Image
          src="/logo-club-des-mousses.png"
          alt="Logo du Club des Mousses"
          width={150}
          height={150}
        />
        <h1>Venez passer des vacances inoubliables au Club des Mousses !</h1>
        
      </div>
    </main>
  );
}
