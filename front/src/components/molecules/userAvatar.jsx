import PropTypes from 'prop-types';

import { Avatar } from '../atoms/Avatar';
import { StarRating } from '../atoms/StarRating';
import { UserName } from '../atoms/Username';

export const UserAvatar = ({
  userId,
  avatarUrl,
  username,
  rating,
  information,
}) => {
  return (
    <div className="flex items-top gap-4">
      <Avatar avatarUrl={avatarUrl} userName={username} size="small" />
      <div className="py-1 flex flex-col gap-4">
        <UserName username={username} size="small" />
        {information && <p className="text-gray-500">{information}</p>}
        {rating !== undefined && (
          <StarRating userId={userId} userRating={rating} />
        )}
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  userId: PropTypes.number,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  rating: PropTypes.number,
  information: PropTypes.string,
};
