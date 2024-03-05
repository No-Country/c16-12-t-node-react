import { Chat } from '@/components/organims/chat';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';

export const MessagesPage = () => {
  return (
    <LayOut>
      <Section>
        <Chat />
      </Section>
    </LayOut>
  );
};
