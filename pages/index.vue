<template>
  <div class="shop-wrap">

      <ShopList/>

  </div>
</template>

<script>

import ShopList from "../components/ShopList";
export default {
  components: {
    ShopList,
  },

}
</script>

<style>
  h1 {
    text-transform: capitalize;
    font-size: 50px;
    color: crimson;
  }
  h3 {
    text-transform: capitalize;
    color: darkred;
  }
  .shop-wrap{
    height: 100vh;
    width: 1640px;
    background-color: ghostwhite;
    max-width: none !important;
    padding: 10px;
  }

</style>
