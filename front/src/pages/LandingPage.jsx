import { LayOut } from '@/components/templates/template';
import { SectionCards } from '@/components/organims/SectionCards';
import { SectionSearchBar } from '@/components/organims/SectionSearchBar';
import { SectionStadistic } from '@/components/organims/SectionStadistic';
import { Section } from '@/components/templates/Section';

export const LandingPage = () => {
  return (
    <LayOut>
      <Section>
        <SectionSearchBar />
        <SectionCards />
        <SectionStadistic />
      </Section>
    </LayOut>
  );
};
