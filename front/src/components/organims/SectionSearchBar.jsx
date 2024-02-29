import { SearchBar } from '@/components/atoms/index';
import iconoLanding from '@/assets/img/iconoLanding.png';

export const SectionSearchBar = () => {
  return (
    <section className="container">
      <div className="block pt-24 ml-20">
        <h1 className="text-6xl font-extrabold leading-normal tracking-wide drop-shadow-md">
          Ahora viajAR es
          <br /> mas fácil,barato
          <br />y seguro!
        </h1>
      </div>
      <div className="flex justify-center sm:flex-col lg:flex-row lg:ml-20 mt-20">
        <div className="drop-shadow-md">
          <SearchBar />
        </div>
        <div className='flex pt-5'>
          <img src={iconoLanding} alt="iconoLanding" />
        </div>
      </div>
    </section>
  );
};
