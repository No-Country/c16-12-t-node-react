import iconoLanding from '@/assets/img/iconoLanding.png';

export const SectionSearchBar = () => {
  return (
    <section className="w-full h-full">
      <div className="block py-24 mx-16">
        <h1 className="text-6xl font-extrabold leading-normal tracking-wide drop-shadow-md">
          Ahora viajAR es
          <br /> mas fácil,barato
          <br />y seguro!
        </h1>
      </div>
      <div className="flex justify-between items-center mx-16">
        <div>
          <p>SearchBar</p>
        </div>
        <div>
          <img src={iconoLanding} alt="iconoLanding"/>
        </div>
      </div>
    </section>
  );
};
