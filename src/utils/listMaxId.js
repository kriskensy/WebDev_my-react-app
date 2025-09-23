export const listMaxId = (state) => {
  const maxId = state.lists.length > 0 ? Math.max(...state.lists.map(list => list.id)) : 0;

  return maxId;
};