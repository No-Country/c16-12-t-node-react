import { SearchBar } from '@/components/atoms/SearchBar';
import { CardComponent } from '@/components/organims/CardComponent';
import { SectionError } from '@/components/organims/SectionError';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';

export const ResultPage = () => {
  const data = [];
  return (
    <LayOut>
      <Section>
        {!data.length && <SectionError />}
        {data.length > 0 && (
          <div className="relative">
            <SearchBar />
            <div className="flex flex-col border border-orange-400">
              <div className=" my-[19rem] lg:my-[7rem]"></div>
              <h1 className="text-2xl text-center font-bold">
                Resultados de búsqueda
              </h1>
              <div className="flex flex-wrap justify-center gap-10">
                {data.map((item, index) => (
                  <CardComponent key={index} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>
    </LayOut>
  );
};
