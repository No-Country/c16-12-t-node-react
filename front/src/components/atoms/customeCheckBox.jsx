import PropTypes from 'prop-types';
import { AiOutlineCheck } from 'react-icons/ai';

export const CustomeCheckBox = ({ label, name, checked, ...props }) => {
  return (
    <div className="flex items-center gap-1 my-2">
      <label className="flex items-center gap-1 justify-center cursor-pointer relative text-secundary-500">
        <span className="absolute top-1/2 left-0  -translate-y-1/2">
          {checked && <AiOutlineCheck size={20} color="#20ACAF" />}
        </span>
        <input
          type="checkbox"
          name={name}
          className="w-5 h-5 cursor-pointer border-primary-400 rounded-sm bg-white shrink-0 border-2 appearance-none"
          {...props}
        />
        {label}
      </label>
    </div>
  );
};

CustomeCheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.object,
  checked: PropTypes.bool,
};
