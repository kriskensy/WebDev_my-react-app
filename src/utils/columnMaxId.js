export const columnMaxId = (state) => {
  const maxId = state.columns.length > 0 ? Math.max(...state.columns.map(column => column.id)) : 0;

  return maxId;
};