import Experiences from '@/sections/Experience';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import ComingSoon from '@/sections/ComingSoon';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences/>
      <ComingSoon/>
    </main>
  );
}
