import { SearchBar } from '@/components/atoms/index';
import iconoLanding from '@/assets/img/iconoLanding.png';

export const SectionSearchBar = () => {
  return (
    <section className="flex flex-col gap-8 md:gap-24 my-16 md:my-20">
      <div className="block md:ml-4">
        <h1 className="text-4xl text-center md:text-left md:text-6xl font-extrabold leading-normal tracking-wide drop-shadow-md">
          Ahora viajAR es
          <br /> mas fácil,barato
          <br />y seguro!
        </h1>
      </div>
      <div className="flex relative justify-end pt-48 lg:pt-32">
        <div className="w-[430px] lg:mr-10">
          <SearchBar />
          <img
            src={iconoLanding}
            alt="iconoLanding"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
