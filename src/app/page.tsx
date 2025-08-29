import About from './home/partials/about';
import Hero from './home/partials/hero';
import Skillset from './home/partials/skillset';

const Home = () => {
  return (
    <div className='min-h-[2000px]'>
      <Hero />
      <About />
      <Skillset />
    </div>
  );
};

export default Home;
