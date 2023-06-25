import Product from '../components/Product';
import Slide from '../components/slide';

import { createClient } from 'next-sanity';
import Header from '../components/Header';

const client = createClient({
  projectId: 'assvtyt4',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
});

export default function IndexPage({ pets, slideshows }) {
  return (
    <div className=''>
      <Header />
       <div className='w-full'>
        {slideshows.map((pet) => (
          <Slide key={pet._id} pet={pet} />
        ))}
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5'>
        {pets.map((pet) => (
          <Product key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
  
}

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "product"]`);
  const slideshows = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets,
      slideshows,
    },
  };
}
