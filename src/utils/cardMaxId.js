export const cardMaxId = (state) => {
  const maxId = state.cards.length > 0 ? Math.max(...state.cards.map(card => card.id)) : 0;

  return maxId;
};