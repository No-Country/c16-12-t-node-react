import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const Input = ({ size, inputs, placeHolder, label }) => {
  //tamaño de los inputs.
  const inputSizesVariants = {
    large: 'w-min-full h-12 bg-FFFFFF',
    medium: 'w-80 h-12 bg-FFFFFF',
    small: 'w-36 h-12 bg-FFFFFF',
    minimum : 'w-36 h-12 bg-[#188183] text-white placeholder-white text-center'
  };
  //type de los inputs.
  const inputType = {
    text: 'text',
    email: 'email',
    password: 'password',
    number: 'numbre',
    date: 'date',
  };
  //diferentos tipos de labels.
  const labelContentVariants = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'Email',
    contraseña: 'Contraseña',
    telefono: 'Numero de telefono',
    documento: 'Documento de identidad',
    sesion: 'Iniciar sesión',
    origen: 'Origen',
    destino: 'Destino',
    fechaIda: 'Fecha de ida',
    fechaVuelta: 'Fecha de vuelta',
    viajeros: 'Viajeros',
    fecha: 'Fecha',
    viajeros: 'Viajeros'
  };
  //diferentes placeholders
  const placeholderVariants = {
    nombre: 'Tu Nombre',
    apellido: 'Tu Apellido',
    email: 'Ej: chirs@example.com',
    iniciarSesion: 'Correo electronico',
    viajeros: '2',
    fecha: '24/05/2024',
    origen: "Mar de Plata",
    destino: "Buenos Aires",
    fecha: '24/05/2024',
    personas: 'Cuantas personas?',
    seleccion: 'Selecciona destino'
  };

  let labelContent = labelContentVariants[label];
  let inputSize = inputSizesVariants[size];
  let inputsType = inputType[inputs];
  let placeHolderContent = placeholderVariants[placeHolder];

  return (
    <div className='flex flex-col'>
        <label className="text-base">{labelContent}</label>
        <input
          type={inputsType}
          className={`my-2 text-xl p-2 border border-black rounded-md ${inputSize}`}
          placeholder={placeHolderContent}
        />
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  inputs: PropTypes.oneOf(['text', 'email', 'password', 'number', 'date']),
  label: PropTypes.oneOf([
    'nombre',
    'apellido',
    'email',
    'contraseña',
    'telefono',
    'documento',
    'sesion',
    'origen',
    'destino',
    'fechaIda',
    'fechaVuelta',
    'viajeros',
    'fecha'
  ]),
  placeHolder: PropTypes.oneOf(['nombre', 'apellido', 'email', 'iniciarSesion', 'viajeros']),
};
