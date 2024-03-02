import { RegisterForm } from '@/components/molecules/RegisterForm';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';

export const RegistePage = () => {
  return (
    <LayOut>
      <Section>
        <RegisterForm />
      </Section>
    </LayOut>
  );
};
