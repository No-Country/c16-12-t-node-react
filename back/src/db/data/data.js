import { BcryptAdapter } from '../../config/adapters/bcrypt.adapter.js';

export const seedData = {
  roles: [{ name: 'admin' }, { name: 'passenger' }, { name: 'driver' }],
  countries: [
    { name: 'Colombia', code: 'CO' },
    { name: 'Perú', code: 'PE' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Chile', code: 'CL' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Argentina', code: 'AR' },
  ],
  cities: {
    colombia: [
      { name: 'Medellín', zip_code: '05001', latitud: 6.2442, longitud: -75.5615, country_id: 1 },
      { name: 'Cali', zip_code: '11001', latitud: 3.4372, longitud: -76.6046, country_id: 1 },
      { name: 'Bogotá', zip_code: '11001', latitud: 4.6097, longitud: -74.0817, country_id: 1 },
      { name: 'Cucuta', zip_code: '54001', latitud: 7.9311, longitud: -72.5028, country_id: 1 },
      {
        name: 'Bucaramanga',
        zip_code: '68001',
        latitud: 7.1181,
        longitud: -73.1566,
        country_id: 1,
      },
      { name: 'Cartagena', zip_code: '13001', latitud: 10.3997, longitud: -75.5148, country_id: 1 },
      {
        name: 'Santa Marta',
        zip_code: '11001',
        latitud: 11.2363,
        longitud: -74.2013,
        country_id: 1,
      },
      { name: 'Manizales', zip_code: '17001', latitud: 5.0688, longitud: -75.5178, country_id: 1 },
    ],
    peru: [
      { name: 'Lima', zip_code: '15001', latitud: -12.0464, longitud: -77.0428, country_id: 2 },
      { name: 'Cusco', zip_code: '15001', latitud: -13.5225, longitud: -71.9676, country_id: 2 },
      { name: 'Arequipa', zip_code: '15001', latitud: -16.3986, longitud: -71.5355, country_id: 2 },
      { name: 'Trujillo', zip_code: '15001', latitud: -8.1158, longitud: -79.0293, country_id: 2 },
      { name: 'Ica', zip_code: '15001', latitud: -14.0685, longitud: -75.7258, country_id: 2 },
      { name: 'Chiclayo', zip_code: '15001', latitud: -6.7714, longitud: -79.8408, country_id: 2 },
      { name: 'Piura', zip_code: '15001', latitud: -5.1946, longitud: -80.6483, country_id: 2 },
      { name: 'Talca', zip_code: '15001', latitud: -35.4263, longitud: -71.6555, country_id: 2 },
      { name: 'Chimbote', zip_code: '15001', latitud: -9.0855, longitud: -78.5781, country_id: 2 },
      { name: 'Iquitos', zip_code: '15001', latitud: -3.7413, longitud: -73.2533, country_id: 2 },
    ],
    venezuela: [
      { name: 'Caracas', zip_code: '11001', latitud: 10.4806, longitud: -66.9036, country_id: 3 },
      { name: 'Maracaibo', zip_code: '11001', latitud: 10.6676, longitud: -71.6578, country_id: 3 },
      { name: 'Valencia', zip_code: '11001', latitud: 10.1622, longitud: -68.0136, country_id: 3 },
      { name: 'Valencia', zip_code: '11001', latitud: 10.1622, longitud: -68.0136, country_id: 3 },
      {
        name: 'Ciudad Bolívar',
        zip_code: '11001',
        latitud: 8.1299,
        longitud: -63.5377,
        country_id: 3,
      },
      { name: 'Barinas', zip_code: '11001', latitud: 8.6223, longitud: -70.2079, country_id: 3 },
      {
        name: 'Ciudad Guayana',
        zip_code: '11001',
        latitud: 8.0018,
        longitud: -62.6667,
        country_id: 3,
      },
      {
        name: 'Puerto Cabello',
        zip_code: '11001',
        latitud: 10.4733,
        longitud: -68.0125,
        country_id: 3,
      },
    ],
    ecuador: [
      { name: 'Guayaquil', zip_code: '01001', latitud: -2.1786, longitud: -79.8986, country_id: 4 },
      { name: 'Quito', zip_code: '01001', latitud: -0.1807, longitud: -78.4678, country_id: 4 },
      { name: 'Cuenca', zip_code: '01001', latitud: -2.8833, longitud: -79.0, country_id: 4 },
      { name: 'Cotopaxi', zip_code: '01001', latitud: -0.78, longitud: -78.63, country_id: 4 },
      { name: 'Santo Domingo', zip_code: '01001', latitud: 0.0, longitud: -79.0, country_id: 4 },
      { name: 'Latacunga', zip_code: '01001', latitud: -0.9167, longitud: -78.6167, country_id: 4 },
      { name: 'Ibarra', zip_code: '01001', latitud: 0.35, longitud: -76.6833, country_id: 4 },
    ],
    brasil: [
      { name: 'Brasília', zip_code: '16001', latitud: -15.7797, longitud: -47.9292, country_id: 5 },
      {
        name: 'São Paulo',
        zip_code: '16001',
        latitud: -23.5505,
        longitud: -46.6333,
        country_id: 5,
      },
      {
        name: 'Rio de Janeiro',
        zip_code: '16001',
        latitud: -22.9083,
        longitud: -43.1969,
        country_id: 5,
      },
      { name: 'Fortaleza', zip_code: '16001', latitud: -3.7167, longitud: -38.5333, country_id: 5 },
      { name: 'Salvador', zip_code: '16001', latitud: -12.9711, longitud: -38.5108, country_id: 5 },
      {
        name: 'Belo Horizonte',
        zip_code: '16001',
        latitud: -19.92,
        longitud: -43.9378,
        country_id: 5,
      },
      { name: 'Curitiba', zip_code: '16001', latitud: -25.4333, longitud: -49.2667, country_id: 5 },
    ],
    paraguay: [
      { name: 'Asunción', zip_code: '16001', latitud: -25.3, longitud: -57.6333, country_id: 6 },
      {
        name: 'Encarnacion',
        zip_code: '16001',
        latitud: -27.33,
        longitud: -55.8667,
        country_id: 6,
      },
      { name: 'Paraguay', zip_code: '16001', latitud: -25.3, longitud: -57.6333, country_id: 6 },
      {
        name: 'Margarita',
        zip_code: '16001',
        latitud: -25.3667,
        longitud: -54.1833,
        country_id: 6,
      },
    ],
    chile: [
      { name: 'Santiago', zip_code: '16001', latitud: -33.45, longitud: -70.6667, country_id: 7 },
      {
        name: 'Valparaiso',
        zip_code: '16001',
        latitud: -32.8667,
        longitud: -71.5333,
        country_id: 7,
      },
      { name: 'Valdivia', zip_code: '16001', latitud: -39.8167, longitud: -73.2333, country_id: 7 },
      { name: 'Temuco', zip_code: '16001', latitud: -38.7333, longitud: -72.65, country_id: 7 },
      {
        name: 'Puerto Montt',
        zip_code: '16001',
        latitud: -41.5,
        longitud: -72.9333,
        country_id: 7,
      },
      { name: 'Concepcion', zip_code: '16001', latitud: -36.8333, longitud: -73.1, country_id: 7 },
      { name: 'Osorno', zip_code: '16001', latitud: -40.5667, longitud: -73.35, country_id: 7 },
    ],
    uruguay: [
      { name: 'Montevideo', zip_code: '16001', latitud: -34.9, longitud: -56.1667, country_id: 8 },
      { name: 'Maldonado', zip_code: '16001', latitud: -34.9, longitud: -56.1667, country_id: 8 },
      { name: 'Artigas', zip_code: '16001', latitud: -30.4, longitud: -56.5, country_id: 8 },
      { name: 'Colonia', zip_code: '16001', latitud: -34.9, longitud: -56.1667, country_id: 8 },
      { name: 'Canelones', zip_code: '16001', latitud: -34.9, longitud: -56.1667, country_id: 8 },
      { name: 'Flores', zip_code: '16001', latitud: -34.9, longitud: -56.1667, country_id: 8 },
    ],
    argentina: [
      {
        name: 'Buenos Aires',
        zip_code: '16001',
        latitud: -34.6,
        longitud: -58.3833,
        country_id: 9,
      },
      { name: 'Cordoba', zip_code: '16001', latitud: -31.4167, longitud: -64.1833, country_id: 9 },
      { name: 'Rosario', zip_code: '16001', latitud: -32.8833, longitud: -60.6667, country_id: 9 },
      { name: 'Santa Fe', zip_code: '16001', latitud: -31.6333, longitud: -60.7, country_id: 9 },
      { name: 'Tucuman', zip_code: '16001', latitud: -26.8167, longitud: -65.2167, country_id: 9 },
      { name: 'Mendoza', zip_code: '16001', latitud: -32.8833, longitud: -60.6667, country_id: 9 },
      { name: 'San Luis', zip_code: '16001', latitud: -33.3, longitud: -66.3333, country_id: 9 },
      {
        name: 'Entre Rios',
        zip_code: '16001',
        latitud: -32.8833,
        longitud: -60.6667,
        country_id: 9,
      },
      { name: 'La Pampa', zip_code: '16001', latitud: -32.8833, longitud: -60.6667, country_id: 9 },
      { name: 'La Rioja', zip_code: '16001', latitud: -32.8833, longitud: -60.6667, country_id: 9 },
    ],
  },
  users: [
    {
      name: 'Juan',
      last_name: 'Perez',
      email: 'j@j.com',
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      password: BcryptAdapter.hash('123456'),
      roleId: 2,
      city_id: 58,
      country_id: 9,
    },
    {
      name: 'Pedro',
      last_name: 'Lopez',
      email: 'p@p.com',
      password: BcryptAdapter.hash('123456'),
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      role: 3,
      city_id: 59,
      country_id: 1,
    },
    {
      name: 'Maria',
      last_name: 'Gonzalez',
      email: 'm@m.com',
      password: BcryptAdapter.hash('123456'),
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      role: 3,
      city_id: 58,
      country_id: 9,
    },
    {
      name: 'Luis',
      last_name: 'Rodriguez',
      email: 'l@l.com',
      password: BcryptAdapter.hash('123456'),
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      role: 2,
      city_id: 66,
      country_id: 9,
    },
    {
      name: 'Luis',
      last_name: 'Rodriguez',
      email: 'l@l1.com',
      password: BcryptAdapter.hash('123456'),
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      role: 2,
      city_id: 9,
      country_id: 2,
    },
    {
      name: 'Luis',
      last_name: 'Nieto',
      email: 'l@l2.com',
      password: BcryptAdapter.hash('123456'),
      phone: '123456789',
      dni: '12345678',
      address: 'Calle 123',
      avatar: 'https://avatars.githubusercontent.com/u/10425873?v=4',
      role: 3,
      city_id: 10,
      country_id: 2,
    },
  ],
  trips: [
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-01-01',
      departure_time: '10:00:00',
      pets_allowed: true,
      smoothies_allowed: true,
      child_seat_available: true,
      driver_id: 2,
      trip_status: 'in_progress',
      origin_id: 58,
      destiny_id: 63,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-01-19',
      departure_time: '08:00:00',
      pets_allowed: true,
      smoothies_allowed: true,
      child_seat_available: false,
      driver_id: 2,
      trip_status: 'not_started',
      origin_id: 62,
      destiny_id: 64,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 2,
      trip_status: 'not_started',
      origin_id: 64,
      destiny_id: 63,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 3,
      trip_status: 'not_started',
      origin_id: 60,
      destiny_id: 66,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 3,
      trip_status: 'not_started',
      origin_id: 63,
      destiny_id: 67,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 3,
      trip_status: 'not_started',
      origin_id: 61,
      destiny_id: 65,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 6,
      trip_status: 'not_started',
      origin_id: 60,
      destiny_id: 60,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 6,
      trip_status: 'not_started',
      origin_id: 59,
      destiny_id: 62,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 6,
      trip_status: 'not_started',
      origin_id: 66,
      destiny_id: 59,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 3,
      trip_status: 'not_started',
      origin_id: 58,
      destiny_id: 64,
    },
    {
      distance: 10,
      time_estimated: '01:00:00',
      seats: 5,
      seat_price: 100,
      total_price: 500,
      trip_date: '2022-02-19',
      departure_time: '06:00:00',
      pets_allowed: true,
      smoothies_allowed: false,
      child_seat_available: true,
      driver_id: 2,
      trip_status: 'not_started',
      origin_id: 60,
      destiny_id: 65,
    },
  ],
  reservations: [
    {
      seats_reserved: 2,
      trip_id: 2,
      user_id: 1,
      reserved_status: 'reserved',
    },
    {
      seats_reserved: 2,
      trip_id: 1,
      user_id: 4,
      reserved_status: 'reserved',
    },
    {
      seats_reserved: 2,
      trip_id: 3,
      user_id: 5,
      reserved_status: 'reserved',
    },
    {
      seats_reserved: 2,
      trip_id: 1,
      user_id: 4,
      reserved_status: 'reserved',
    },
    {
      seats_reserved: 2,
      trip_id: 5,
      user_id: 5,
      reserved_status: 'reserved',
    },
    {
      seats_reserved: 2,
      trip_id: 1,
      user_id: 6,
      reserved_status: 'reserved',
    },
  ],
};
