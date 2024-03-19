import PropTypes from 'prop-types';

export const Select = ({ label, value, name, roles, selectOne, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full my-4">
      {label && <label>{label}</label>}
      <select
        value={value}
        name={name}
        {...props}
        className="block text-center w-full px-4 py-3 border bg-white border-secondary-400 rounded-md shadow-sm focus:outline-none focus:border-primary-500"
      >
        <option value="" disabled>
          {selectOne}
        </option>
        {roles.map((role, i) => (
          <option key={i} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  roles: PropTypes.array,
  selectOne: PropTypes.string,
};
