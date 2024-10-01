import Card from './card'
import Draggable from 'react-draggable';

const CardList = ({cards}) => {
  console.log(cards)
  return (
  
      <div className="card-list">
          {cards.map(card => (
              <Draggable key={card.id}>
                  <div>
                      <Card title={card.title} content={card.productDescription} />
                  </div>
              </Draggable>
          ))}
      </div>
  
  );
};

export default CardList