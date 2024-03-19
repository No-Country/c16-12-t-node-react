import { useState, useEffect } from 'react';
import { uniqBy } from 'lodash';

import { TOKEN, WS_ENDPOINT } from '@/config/config';
import { Messages } from '../atoms/Messages';
import { PeopleStatus } from '../atoms/PeopleStatus';
import { Contact } from './Contact';
import { ChatForm } from '../molecules/ChatForm';
import { useUser } from '@/context/user.context';
import { getFromSessionStorage } from '@/services/utils/handle-token.utils';
import { CHATS } from '@/services/apiServices/chats.service';
import { useTrip } from '@/context/Trips.context';

const token = getFromSessionStorage(TOKEN);

export const Chat = () => {
  const { user } = useUser();
  const { trip, getTrip } = useTrip();

  const [wsConnection, setSocketConnection] = useState(null);
  const [userSelected, setUserSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlinePeople, setOnlinePepple] = useState([]);
  const [offlinePeople, setOfflinePeople] = useState([]);

  useEffect(() => {
    connectionWebSocket();
  }, [userSelected]);

  function showOnlinePeople(peopleArray) {
    const people = {};

    peopleArray.forEach(
      ({ id, username, email, rating, role, avatar, city_id }) => {
        people[id] = { id, username, email, rating, role, avatar, city_id };
      }
    );

    const peopleMap = Object.values(people).filter(
      ({ id }) => id !== undefined
    );

    return peopleMap;
  }

  const connectionWebSocket = () => {
    const ws = new WebSocket(WS_ENDPOINT, [token]);
    setSocketConnection(ws);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('close', handleReconnect);
  };

  const handleReconnect = () => {
    console.log('Disconnected trying to reconnect...');
    setTimeout(connectionWebSocket, 1000);
  };

  const handleMessage = (e) => {
    const whoIsOnLine = JSON.parse(e.data);

    if ('online' in whoIsOnLine) {
      const onlinePeopleArr = showOnlinePeople(whoIsOnLine.online);
      setOnlinePepple(onlinePeopleArr);
    } else {
      if (userSelected === whoIsOnLine.sender) {
        setMessages((prev) => [...prev, { ...whoIsOnLine }]);
      }
    }
  };

  useEffect(() => {
    if (userSelected) {
      CHATS.getChats(userSelected).then(setMessages).catch(console.error);
    }
  }, [userSelected]);

  useEffect(() => {
    // todo: implementar con adaptador axios
    fetch(`http://localhost:3000/api/trips/${user.id}`).then((res) => {
      const offlinePeopleArr =
        res?.data?.passengers
          .filter(({ id }) => !onlinePeople.find((user) => user.id === id))
          .filter(({ id }) => id !== user.id) || [];
      setOfflinePeople(offlinePeopleArr);
    });
  }, [onlinePeople]);

  const onlinePeopleExclOurUser = onlinePeople.filter(
    ({ id }) => id !== user.id
  );

  const messagesWithoutDupes = uniqBy(messages, 'id');

  return (
    <div className="flex h-fit gap relative">
      <aside className="md:flex md:flex-col md:justify-evenly md:w-3/5">
        <form className="absolute top-0 left-0 right-0 flex gap-2 md:mb-7 md:relative">
          <input
            type="text"
            className="w-full p-2 rounded outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="buscar por nombre"
          />
          <button
            type="button"
            className="p-2 rounded w-20 bg-primary-400 text-secondary-100 font-semibold"
          >
            search
          </button>
        </form>
        <div className="hidden md:flex-grow md:flex">
          <div className="flex flex-col w-full mt-5">
            <PeopleStatus
              state="online"
              countPeople={Object.entries(onlinePeopleExclOurUser).length}
            />
            {/*  todo: implementar onlinePeopleExclOurUser*/}
            {onlinePeopleExclOurUser?.map(({ id, username, avatar }, i) => (
              <Contact
                key={i}
                id={id}
                username={username}
                avatar={avatar}
                isOnline
                selected={userSelected === id}
                onClick={setUserSelected}
              />
            ))}
            <PeopleStatus state="offline" countPeople={offlinePeople?.length} />
            {/* todo: implementar offlinePeople */}
            {offlinePeople.map((user, i) => (
              <Contact
                key={i}
                id={user?.id}
                username={`${user?.name} ${user?.last_name}`}
                avatar={user?.avatar}
                selected={userSelected === user?.id}
                onClick={setUserSelected}
              />
            ))}
          </div>
        </div>
      </aside>
      <div className="flex flex-col w-full mt-11 md:mt-0">
        {/* <div className="w-full px-6 py-4 flex gap-4">
          <UserAvatar avatarUrl={user?.avatar} username={user?.name} />
          <a
            href="#"
            className="hover:underline hover:text-slate-950 font-semibold mt-2 text-sm md:text-md"
          >
            Ver Perfil
          </a>
        </div> */}

        <section className="w-full h-[500px] flex flex-col py-2">
          <div className="flex-grow">
            {!userSelected && (
              <div className="flex justify-center items-center h-full rounded-md bg-[#BAE5E6]">
                <p className="text-2xl text-center text-gray-600">
                  &larr;Selecciona un contacto
                </p>
              </div>
            )}
            {userSelected && (
              <div className="relative h-full">
                <div className="overflow-y-scroll absolute top-0 right-0 left-0 bottom-2 rounded-md flex flex-col gap-2 bg-white shadow-inner p-4">
                  {messagesWithoutDupes.map((message, i) => (
                    <Messages key={i} {...message} />
                  ))}
                </div>
              </div>
            )}
          </div>
          {!!userSelected && (
            <ChatForm
              ws={wsConnection}
              userSelected={userSelected}
              addMessage={setMessages}
            />
          )}
        </section>
      </div>
    </div>
  );
};
