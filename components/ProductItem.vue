<template>
  <div class="product" >
    <h3>{{product.title}}</h3>
    <div>Price: {{product.price}}</div>
    <b-button class="btn" variant="primary" @click="onBuy(product)">Buy</b-button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
        name: "ProductItem",
      props: {
        product: {
          type: Object,
          required: true
        }
      },
      methods: mapActions({
        onBuy: 'Basket/addToCart'
      })

    }
</script>

<style scoped>
  .product {
    margin-right: 20px;
    border: 1px solid darkkhaki;
    border-radius: 10px;
    padding: 10px;
    width: 250px;
  }
  .btn {
    margin-top: 10px;
  }
</style>
