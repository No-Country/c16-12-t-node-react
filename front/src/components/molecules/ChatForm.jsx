import { useState } from 'react';
import PropTypes from 'prop-types';

export const ChatForm = ({ ws, userSelected, addMessage }) => {
  // todo: call user context to get user data
  // const { user } = useUser();

  // ! remove this
  const user = {
    id: 1,
    avatarUrl: 'https://i.pravatar.cc/300',
    username: 'Lucas',
    information: 'arrancamos en 10 min',
  };

  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({
        recipient: userSelected,
        message: newMessage,
      })
    );

    if (newMessage.trim().length > 0) {
      setNewMessage('');
      addMessage((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: user.id,
          recipient: userSelected,
          message: newMessage,
        },
      ]);
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={newMessage}
        type="text"
        className="block w-full rounded-lg border p-2 font-normal placeholder:text-slate-400 text-gray-800"
        placeholder="Escribe un mensaje..."
        onChange={handleChange}
      />
      <button className="py-2 px-3 bg-[#20ACAF]  rounded-md" type="submit">
        <span className="text-white font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 rotate-[-25deg]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </span>
      </button>
    </form>
  );
};

ChatForm.propTypes = {
  ws: PropTypes.object,
  userSelected: PropTypes.number,
  addMessage: PropTypes.func,
};
