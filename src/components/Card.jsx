export default function Card({ monster, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-picture">
          <img
            src={
              monster.sprites.versions['generation-i']['red-blue'].front_default
            }
            alt={monster.name}
          />
        </div>
        <div className="card-title">{monster.name}</div>
      </div>
    </>
  );
}
