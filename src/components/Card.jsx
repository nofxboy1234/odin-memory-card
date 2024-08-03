import '../styles/card.css';

export default function Card({
  monster,
  shuffleCards,
  resetCards,
  saveCard,
  isClicked,
}) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          if (isClicked) {
            console.log('clicked the same card!');
            // Reset isClicked on all Cards
            resetCards();
            // Update High score if score > high score
            // Set score to 0
            // ~fetch new pokemon (changes ids!)
          } else {
            const updatedCard = {
              id: monster.id,
              isClicked: true,
            };
            saveCard(updatedCard);

            // Increment score by 1
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
