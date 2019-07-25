<template>
  <div>
    <ul class="link-wrap">
      <li>
        <nuxt-link id="link" to="/" tag="button">Shop</nuxt-link>
      </li>
      <li>
        <nuxt-link id="link" :to="{name: 'basket'}" tag="button">Basket {{count}}</nuxt-link>
      </li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      count: 'Basket/productsCount'
    })
  }
</script>


<style>
  ul {
    list-style: none;
    display: flex;

  }
  li {
    margin-right: 5px;

  }
  #link {
    border-radius: 8px;
    background-color: beige;
    border: 1px solid beige;
    color: crimson;
  }
  .link-wrap {
    background-color: bisque;
    padding: 10px 10px;
    margin-bottom: 0;
  }

</style>

