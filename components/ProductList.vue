<template>
  <div class="wrap">
    <div class="list-wrap" v-if="totalPrice > 0">
      <ProductListItem
        v-for="prodItem of products"
        :prodItem="prodItem"
        :key="prodItem.id"
      />
      <div class="total-price">
        total price: {{totalPrice}}
      </div>
    </div>
    <div v-else class="msg-empty">
      <h4>the basket is empty!</h4>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
    import ProductListItem from "./ProductListItem";
    export default {
      name: "ProductList",
      components: {ProductListItem},
      computed: mapGetters({
        products: 'Basket/productsList',
        totalPrice: 'Basket/totalCartPrice'
      })

    }
</script>

<style scoped>
  .list-wrap {
    padding: 10px;
    margin-left: 50px;
  }
  .total-price {
    text-transform: capitalize;
    color: darkred;
    font-weight: bold;
  }
  .msg-empty {
    text-transform: capitalize;
    padding: 15px;
  }
</style>
