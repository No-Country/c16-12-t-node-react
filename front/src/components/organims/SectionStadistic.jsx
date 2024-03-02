import { StadisticCard } from '../molecules/stadisticCard';
import { LANDING } from '@/contacts/langingUtils';

export const SectionStadistic = () => {
  return (
    <section className="sm:px-12 flex flex-col gap-24">
      <h2 className="text-4xl font-bold text-primary-400 text-center py-10">
        Nuestra Comunidad viajera en números
      </h2>
      <div className="flex flex-wrap justify-evenly gap-10">
        {LANDING.sectionStadistic.map(({ text, img }, i) => (
          <StadisticCard key={i} text={text} img={img} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between py-10 gap-5 sm:mx-0 lg:mx-16">
        <p className=" text-3xl md:text-4xl text-center md:text-left self-center w-[22rem] md:w-[24rem]">
          ¡Descubre una nueva forma de viajar!
        </p>
        <div className="flex flex-col gap-4 justify-between">
          <p className="space-x-2 text-center md:text-left">
            <strong className="text-primary-400 text-xl sm:text-2xl">
              Conecta
            </strong>
            <span className="text-lg font-light">
              con conductores que comparten tu ruta
            </span>
          </p>
          <p className="space-x-2 text-center md:text-left">
            <strong className="text-primary-400 text-xl sm:text-2xl">
              Ahorra
            </strong>
            <span className="text-lg font-light">
              dinero mientras conoces gente nueva.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full lg:justify-around">
        <p className="space-x-2 md:w-96 lg:w-48 text-center ">
          <strong>Viaja</strong>
          <span>de manera cómoda, segura y ecológica.</span>
        </p>
        <p className="space-x-2 text-center">
          <span>Únete hoy y comienza a disfrutar de</span>
          <strong>experiencias únicas</strong>
          <span>en cada viaje.</span>
        </p>
      </div>
    </section>
  );
};
