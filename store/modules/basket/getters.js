export default {
  productsList(store) {
    return store.list;
  },
  totalCartPrice(store) {
    return store.list.reduce((sum, product) => sum + (product.price * product.count), 0);
  },
  productsCount(store) {
    return store.list.length;
  },
}
