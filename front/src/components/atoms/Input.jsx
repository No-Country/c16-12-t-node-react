import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const Input = ({ size, inputs, placeHolder, label }) => {
  //tamaño de los inputs.
  const inputSizesVariants = {
    large: 'w-96 h-12 bg-FFFFFF',
    medium: 'w-80 h-12 bg-FFFFFF',
    small: 'w-36 h-12 bg-FFFFFF',
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
  };
  //diferentes placeholders
  const placeholderVariants = {
    nombre: 'Tu Nombre',
    apellido: 'Tu Apellido',
    email: 'Ej: chirs@example.com',
    iniciarSesion: 'Correo electronico',
  };

  let labelContent = labelContentVariants[label];
  let inputSize = inputSizesVariants[size];
  let inputsType = inputType[inputs];
  let placeHolderContent = placeholderVariants[placeHolder];

  return (
    <>
        <label className="text-base">{labelContent}</label>
        <input
          type={inputsType}
          className={`my-2 text-xl border border-black rounded-md ${inputSize}`}
          placeholder={placeHolderContent}
        />
    </>
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
  ]),
  placeHolder: PropTypes.oneOf(['nombre', 'apellido', 'email', 'iniciarSesion']),
};
