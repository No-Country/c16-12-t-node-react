import { LoginComponent } from '@/components/molecules/LoginComponent';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';

export const LoginPage = () => {
  return (
    <LayOut>
      <Section>
        <LoginComponent />
      </Section>
    </LayOut>
  );
};
