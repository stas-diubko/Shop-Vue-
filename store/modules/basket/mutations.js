import { ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART} from "./mutation-types";

export default {
  [ADD_TO_CART](store, product) {
    const index = store.list.findIndex(p => p.id === product.id);
    if (index !== -1) {
      store.list.splice(index, 1, Object.assign({}, store.list[index], { count: store.list[index].count + 1 }));
    } else {
      store.list.push(product);
    }
  },
  [REMOVE_FROM_CART](store, id) {
    const index = store.list.findIndex(p => p.id === id);
    store.list.splice(index, 1);
  },
  [CHANGE_COUNT](store, {id, count}) {
    const index = store.list.findIndex(p => p.id === id);
    store.list.splice(index, 1, Object.assign({}, store.list[index], { count }))
  }
}
