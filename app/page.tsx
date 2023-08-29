import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/Hero/Hero'));
const About = dynamic(() => import('./components/About/About'));
const Services = dynamic(() => import('./components/Services/Services'));
const Career = dynamic(() => import('./components/Career/Career'));
const Gallery = dynamic(() => import('./components/Gallery/Gallery'));
const Contacts = dynamic(() => import('./components/Contacts/Contacts'));

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
