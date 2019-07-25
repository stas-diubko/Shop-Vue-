<template>
    <div class="basket-wrap">
        <ProductList/>
    </div>
</template>

<script>


  import ProductList from "../components/ProductList";
  export default {
      name: "Basket",
      components: {
        ProductList
      },

    }
</script>

<style scoped>
  h2 {
    text-transform: capitalize;
    font-size: 50px;
    color: crimson;
    margin-left: 50px;
  }
  .basket-wrap {
    background-color: ghostwhite;
    height: 100vh;
    width: 100%;
  }
</style>
