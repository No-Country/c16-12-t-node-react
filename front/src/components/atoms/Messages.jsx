import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Messages = ({ sender, message }) => {
  //todo: call user context to get user data

  const user = {
    id: 1,
    avatarUrl: 'https://i.pravatar.cc/300',
    username: 'Lucas',
    information: 'arrancamos en 10 min',
  };
  const divUnderMessages = useRef(null);

  useEffect(() => {
    const div = divUnderMessages.current;
    if (div) {
      div.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [message]);

  return (
    <div className={sender === user.id ? 'text-right' : 'text-left'}>
      <div
        className={`text-white inline-block rounded-xl shadow-2xl py-2 px-4 ${
          sender === user.id ? 'bg-slate-500' : 'bg-slate-700'
        }`}
      >
        {message}
      </div>
      <div ref={divUnderMessages}></div>
    </div>
  );
};

Messages.propTypes = {
  sender: PropTypes.number,
  message: PropTypes.string,
};
