import { Section } from '@/components/templates/Section';
import { TripDetails } from '@/components/organims';
import { LayOut } from '@/components/templates/template';

export const TripDetailsPage = () => {
  return (
    <LayOut>
      <Section>
        <TripDetails />
      </Section>
    </LayOut>
  );
};
