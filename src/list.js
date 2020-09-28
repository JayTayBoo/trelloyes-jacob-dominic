import Card from './card.js';

function List(props) {
  const cardLists = STORE.lists.map(cardList => {
    <CardList key={cardList.id} header={cardList.header} cards={cardList.content} />
  })
  return (
  < section className = "List" >
    <header className="List-header">
      <h2>{header}</h2>
    </header>
    <div className="List-cards">

    </div>
  </section >
  )
}

export {List};