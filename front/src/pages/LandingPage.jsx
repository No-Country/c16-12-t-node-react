import { LayOut } from '@/components/templates/template';
import { SectionCards } from '@/components/organims/SectionCards';
import { SectionSearchBar } from '@/components/organims/SectionSearchBar';
import { SectionStadistic } from '@/components/organims/SectionStadistic';

export const LandingPage = () => {
  return (
    <LayOut>
      <SectionSearchBar />
      <SectionCards />
      <SectionStadistic />
    </LayOut>
  );
};
