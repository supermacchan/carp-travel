import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../sections/Hero/Hero'));
const About = dynamic(() => import('../sections/About/About'));
const Services = dynamic(() => import('../sections/Services/Services'));
const Career = dynamic(() => import('../sections/Career/Career'));
const Gallery = dynamic(() => import('../sections/Gallery/Gallery'));
const Contacts = dynamic(() => import('../sections/Contacts/Contacts'));

export default function Home() {
  return (
    <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
    </main>
  )
}
