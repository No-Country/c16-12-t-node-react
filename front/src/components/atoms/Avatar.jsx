import PropTypes from 'prop-types'
import defaultAvatar from '@/assets/img/user.png'

export const Avatar = ({ avatarUrl, userName, size }) => {
  const avatarClasses = {
    small: 'w-20 h-20',
    medium: 'w-40 h-40',
    large: 'w-80 h-80',
  }

  let avatarSize = avatarClasses[size]

  return (
    <img
      src={avatarUrl ?? defaultAvatar}
      alt={userName}
      className={`object-cover rounded-full bg-center shadow-lg shadow-gray-500 ${avatarSize}`}
    />
  )
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
  userName: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}
