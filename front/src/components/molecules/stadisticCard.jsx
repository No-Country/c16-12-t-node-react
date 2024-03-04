import PropTypes from 'prop-types';
export const StadisticCard = ({ text, img }) => {
  const imgName = img.split('/').pop().split('.')[0];

  return (
    <div className="flex flex-col items-center justify-between gap-2 w-full sm:max-w-64">
      <p className="text-2xl md:text-[2rem] text-center">{text}</p>
      <img src={img} alt={imgName} className="w-[160px] h-fit" />
    </div>
  );
};

StadisticCard.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
