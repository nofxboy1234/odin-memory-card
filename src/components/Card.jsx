export default function Card({ monster }) {
  return (
    <>
      <div className="card">
        <div>
          <img
            src={
              monster.sprites.versions['generation-i']['red-blue'].front_default
            }
            alt={monster.name}
          />
        </div>
        <div>{monster.name}</div>
      </div>
    </>
  );
}
