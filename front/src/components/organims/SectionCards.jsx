import React from 'react';
import CardComponent from './CardComponent';

export const SectionCards = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Descubre los viajes disponibles
      </p>
      <div className="flex flex-wrap gap-8 justify-center md:justify-normal">
        <CardComponent
          from="Cordoba"
          to="Buenos Aires"
          avatarUrl="https://i.pravatar.cc/300"
          userRating={5}
          driver="Lucas"
          time="10:30"
          spots={3}
        />
        <CardComponent
          from="Cordoba"
          to="Buenos Aires"
          avatarUrl="https://i.pravatar.cc/310"
          userRating={4.5}
          driver="Jorge"
          time="14:30"
          spots={2}
        />
        <CardComponent
          from="Cordoba"
          to="Buenos Aires"
          avatarUrl="https://i.pravatar.cc/312"
          userRating={3.5}
          driver="Manuel"
          time="12:30"
          spots={1}
        />
      </div>
    </div>
  );
}

