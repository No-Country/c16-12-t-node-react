import PropTypes from 'prop-types';

import { UserAvatar } from '../molecules/userAvatar';

export const Contact = ({
  id,
  avatarUrl,
  username,
  information,
  onClick,
  selected,
}) => {
  return (
    <div
      className={`flex items-center gap-2 border-slate-300 cursor-pointer ${
        selected ? 'bg-white' : ''
      }`}
      onClick={() => onClick(id)}
    >
      {selected && <div className="w-1 h-20 bg-[#20ACAF] rounded-r-lg" />}
      <div className="flex gap-2 py-3 pl-12 items-center">
        <UserAvatar
          avatarUrl={avatarUrl}
          username={username}
          information={information}
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  information: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  isOnline: PropTypes.bool,
};
