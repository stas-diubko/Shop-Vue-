import { ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART} from "./mutation-types";

export default {
  addToCart({ commit }, { title, price, id}) {
    commit(ADD_TO_CART,  {
      title,
      id,
      price,
      count: 1
    })
  },
  DecreaseCount({ commit, state }, id) {
    const index = state.list.findIndex(p => p.id === id);
    if(state.list[index].count !== 1) {
      commit(CHANGE_COUNT,  {
        id,
        count: state.list[index].count - 1
      })
    }

  },
  IncreaseCount({ commit, state }, id) {
    const index = state.list.findIndex(p => p.id === id);
    commit(CHANGE_COUNT,  {
      id,
      count: state.list[index].count + 1
    })
  },
  removeFromCart({ commit }, id) {
    commit(REMOVE_FROM_CART,  id);
  },
}
