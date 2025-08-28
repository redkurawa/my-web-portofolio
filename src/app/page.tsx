import About from './home/partials/about';
import Hero from './home/partials/hero';

const Home = () => {
  return (
    <div className='min-h-[2000px]'>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
