import { CardComponent } from './CardComponent';

export const SectionCards = () => {
  // TODO: get trips from context
  const trips = [
    {
      id: 1,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/300',
      userRating: 4,
      driver: 'Lucas',
      tripDate: '2022-05-20',
      DepartureTime: '10:30',
      spots: 3,
    },
    {
      id: 2,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/310',
      userRating: 4.5,
      driver: 'Jorge',
      tripDate: '2022-05-20',
      DepartureTime: '14:30',
      spots: 2,
    },
    {
      id: 3,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/312',
      userRating: 3.5,
      driver: 'Manuel',
      tripDate: '2022-05-20',
      DepartureTime: '12:30',
      spots: 1,
    },
    {
      id: 4,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/313',
      userRating: 5,
      driver: 'Lucas',
      tripDate: '2022-05-20',
      DepartureTime: '10:30',
      spots: 3,
    },
    {
      id: 5,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/314',
      userRating: 4.5,
      driver: 'Jorge',
      tripDate: '2022-05-20',
      DepartureTime: '14:30',
      spots: 2,
    },
    {
      id: 6,
      origin: 'Cordoba',
      destiny: 'Buenos Aires',
      avatarUrl: 'https://i.pravatar.cc/315',
      userRating: 3.5,
      driver: 'Manuel',
      tripDate: '2022-05-20',
      DepartureTime: '12:30',
      spots: 1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <p className="text-xl md:text-2xl font-bold text-gray-800 mb-10">
        Descubre los viajes disponibles
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {trips.map((trip) => (
          <CardComponent
            key={trip.id}
            origin={trip.origin}
            destiny={trip.destiny}
            avatarUrl={trip.avatarUrl}
            userRating={trip.userRating}
            driver={trip.driver}
            tripDate={trip.tripDate}
            DepartureTime={trip.DepartureTime}
            spots={trip.spots}
          />
        ))}
      </div>
    </div>
  );
};
