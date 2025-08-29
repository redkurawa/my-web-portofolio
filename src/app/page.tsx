import About from './home/partials/about';
import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Portfolio from './home/partials/portfolio';
import Skillset from './home/partials/skillset';
import Superiority from './home/partials/superiority';
import Testimony from './home/partials/testimony';
import WorkExperience from './home/partials/work-experience';

const Home = () => {
  return (
    <div className='min-h-[2000px]'>
      <Hero />
      <About />
      <Skillset />
      <Superiority />
      <Portfolio />
      <WorkExperience />
      <Testimony />
      <Faq />
    </div>
  );
};

export default Home;
