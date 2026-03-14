import Experiences from '@/sections/Experience';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import ComingSoon from '@/sections/ComingSoon';
import History from '@/sections/History';
import Instagram from '@/sections/Instagram';
import Newsletter from '@/sections/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <ComingSoon />
      <History />
      <Instagram/>
    </main>
  );
}
