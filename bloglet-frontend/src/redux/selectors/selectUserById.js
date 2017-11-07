export default function selectUserById(state, id) {
  const usersById = state.usersById || {};
  return usersById[id] || null;
}
