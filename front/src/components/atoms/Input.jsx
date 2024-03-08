import PropTypes from 'prop-types';

//tamaño de los inputs.
const inputSizesVariants = {
  large: 'w-min-full h-12',
  medium: 'w-80 h-12',
  small: 'w-36 h-12',
};

export const Input = ({
  label,
  id,
  name,
  type,
  size,
  value,
  border,
  rounded = true,
  ...props
}) => {
  let inputSize = inputSizesVariants[size];

  return (
    <div className="flex flex-col gap-2 my-4">
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
        className={`text-xl outline-none focus:ring-[3px] focus:ring-primary-500 p-2 ${border ? 'border border-black' : ''} ${rounded ? 'rounded-xl' : 'rounded-md'} ${inputSize}`}
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
  border: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
