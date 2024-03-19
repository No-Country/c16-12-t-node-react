import { TripForm } from '@/components/organims/tripFrom';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';

export const CreateNewTripPage = () => {
  return (
    <LayOut>
      <Section>
        <h1 className="text-3xl text-center my-10">Crear nuevo viaje</h1>
        <TripForm />
      </Section>
    </LayOut>
  );
};
