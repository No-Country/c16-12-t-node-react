import PropTypes from 'prop-types';

export const PeopleStatus = ({ state, countPeople }) => {
  const isOnline = state === 'online' ? 'bg-green-500' : 'bg-gray-400';
  return (
    <>
      <div className="flex py-2 pl-4 items-center gap-3">
        <h2 className="text-lg text-slate-700 font-semibold">{state}</h2>
        <div className={`w-2 h-2 ${isOnline} rounded-full`}></div>
        <span className="text-slate-700">{countPeople ?? 0}</span>
      </div>
      <hr className="border-slate-300 w-full" />
    </>
  );
};

PeopleStatus.propTypes = {
  state: PropTypes.string,
  countPeople: PropTypes.number,
};
