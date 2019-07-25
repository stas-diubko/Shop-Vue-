<template>
  <div class="wrap-shop" >
    <ProductItem
      v-for="product of products"
      :product="product"
      :key="product.id"

    />
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProductItem from "./ProductItem";
    export default {
      name: "ShopList",
      components: {ProductItem},
      computed: mapGetters({
        products: 'Products/products'
      }),

      // methods: {
      //   onAddToBasket(product){
      //     this.$emit('addToBasket', product);
      //
      //   }
      // }
    }
</script>

<style scoped>
  .wrap-shop {
    display: flex;

  }
</style>
