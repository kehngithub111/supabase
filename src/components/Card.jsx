const Card = ({ smoothie }) => {
  return (
    <>
      <div>
        <h3>{smoothie.title}</h3>
        <p>{smoothie.method}</p>
        <p>{smoothie.rating}</p>
      </div>
    </>
  );
};

export default Card;
