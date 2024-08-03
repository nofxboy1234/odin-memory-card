import '../styles/card.css';

export default function Card({
  monster,
  shuffleCards,
  resetCards,
  saveCard,
  isClicked,
  incrementCurrentScore,
  resetCurrentScore,
  updateBestScore,
}) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          if (isClicked) {
            resetCards();
            updateBestScore();
            resetCurrentScore();
            alert(`You caught ${monster.name} twice! Game over!`);
          } else {
            const updatedCard = {
              id: monster.id,
              isClicked: true,
            };
            saveCard(updatedCard);
            incrementCurrentScore();
          }
          shuffleCards();
        }}
      >
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
