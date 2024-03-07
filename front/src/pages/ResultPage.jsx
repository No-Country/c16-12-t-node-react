import { SearchBar } from '@/components/atoms/SearchBar';
import { CardComponent } from '@/components/organims/CardComponent';
import { SectionError } from '@/components/organims/SectionError';
import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';
import { useTrip } from '@/context/Trips.context';

const filterByOrigin = (trips, origin) => {
  if (origin === '') return trips;

  return trips.filter((trip) => trip.origin.name.toLowerCase() === origin);
};

const filterByDestiny = (trips, destiny) => {
  if (destiny === '') return trips;
  return trips.filter((trip) => trip.destiny.name.toLowerCase() === destiny);
};

const filterByDate = (trips, date) => {
  if (date === '') return trips;
  return trips.filter((trip) => trip.trip_date === date);
};

const filterByTime = (trips, time) => {
  if (time === '') return trips;
  return trips.filter((trip) => trip.departure_time === time);
};
export const ResultPage = () => {
  const { tripData, searching } = useTrip();

  const filetTripsByDate = filterByDate(tripData.data, searching.date);
  const filetTripsByTime = filterByTime(filetTripsByDate, searching.time);
  const filetTripsByDestiny = filterByDestiny(
    filetTripsByTime,
    searching.destiny
  );
  const tripsFiltered = filterByOrigin(filetTripsByDestiny, searching.origin);

  return (
    <LayOut>
      <Section>
        {!tripsFiltered?.length && <SectionError />}
        {tripsFiltered?.length > 0 && (
          <div className="relative">
            <div className="h-[10rem]"></div>
            <SearchBar />
            <div className="flex flex-col">
              <div className=" my-[10rem] md:my-[8rem] lg:my-[5rem]"></div>
              <h1 className="text-2xl text-center font-bold">
                Resultados de búsqueda
              </h1>
              <div className="grid-card-auto-fill place-items-center">
                {tripsFiltered?.map((trip, i) => (
                  <CardComponent
                    key={i}
                    id={trip.id}
                    seats={trip.seats}
                    origin={trip.origin?.name}
                    destiny={trip.destiny?.name}
                    driver={trip.driver}
                    tripDate={trip.trip_date}
                    DepartureTime={trip.departure_time}
                    spots={trip.seats_reserved}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>
    </LayOut>
  );
};
