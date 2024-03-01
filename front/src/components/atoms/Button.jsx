import PropTypes from 'prop-types';

const sizeBtn = {
  small: 'py-1 px-2',
  medium: 'py-2 px-4',
  large: 'py-4 px-6',
  full: 'py-2 w-full',
};

const typeBtn = {
  primary:
    'bg-primary-400 text-white hover:bg-primary-600 active:bg-primary-500',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-400',
  sufle: 'bg-primary-300 hover:bg-primary-200 active:bg-primary-100 text-black',
  ghost: 'text-black border border-black hover:bg-primary-200',
};

// You need to pass on props this arguments for pick size and content for button!
export const Button = ({
  children,
  content,
  type,
  btnType = 'primary',
  size = 'medium',
  leftIcon,
  RighIcon,
  ...props
}) => {
  const buttonSize = sizeBtn[size];
  const buttonColor = typeBtn[btnType];
  return (
    <button
      type={type}
      className={`rounded-md flex text-xl justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${buttonColor} ${buttonSize}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children ?? content}
      {RighIcon && <span className="ml-2">{RighIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node || PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
  btnType: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  leftIcon: PropTypes.node || PropTypes.string,
  RighIcon: PropTypes.node || PropTypes.string,
};
