import { DriverTrips } from '@/components/organims/DriverTrips';
import { PassengerReservations } from '@/components/organims/PassengerReservations';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';
import { useUser } from '@/context/user.context';

export const MyTrips = () => {
  const { user } = useUser();
  const { role } = user;

  if (role?.name === 'driver') {
    return (
      <LayOut>
        <Section>
          <DriverTrips />
        </Section>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <Section>
        <PassengerReservations />
      </Section>
    </LayOut>
  );
};
