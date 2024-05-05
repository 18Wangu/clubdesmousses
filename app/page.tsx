import Image from 'next/image';
import { BoutonContact } from './ui/boutons/bouton-contact';
import { limelightFont } from './ui/font';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-around items-center background-caroussel'>
        <Image
          src="/logo-club-des-mousses.png"
          alt="Logo du Club des Mousses"
          width={150}
          height={150}
        />
        <h1 className={`${limelightFont.className} text-white text-4xl text-center`}>Venez passer des vacances inoubliables <br /> au Club des Mousses !</h1>
        <BoutonContact />
      </div>
    </main>
  );
}
