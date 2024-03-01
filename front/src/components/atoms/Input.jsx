import PropTypes from 'prop-types';

//tamaño de los inputs.
const inputSizesVariants = {
  large: 'w-min-full h-12',
  medium: 'w-80 h-12',
  small: 'w-36 h-12',
};

export const Input = ({ label, id, name, type, size, value, ...props }) => {
  let inputSize = inputSizesVariants[size];

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-base" id={id} name={id || name}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type || 'text'}
        value={value}
        className={`my-2 text-xl p-2 border border-black rounded-md ${inputSize}`}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.string || PropTypes.number,
};
