<template>
  <div class="prod-item">
    <h4>Product: {{prodItem.title}}</h4>
    <div>Price: {{prodItem.price}}</div>
    <div class="btn-wrap">
      <div>
        <button @click="onDecrease(prodItem.id)">-</button>
        <input style="width: 100px; text-align: center" type="text" :value="prodItem.count">
        <button @click="onIncrease(prodItem.id)">+</button>
      </div>
      <button style="margin-left: 15px" @click="onRemove(prodItem.id)">Remove</button>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
      name: "ProductListItem",
      props: {
        prodItem: {
          type: Object,
          required: true
        }
      },
      methods: mapActions({
        onDecrease: 'Basket/DecreaseCount',
        onIncrease: 'Basket/IncreaseCount',
        onRemove: 'Basket/removeFromCart'
      })
    }
</script>

<style scoped>
  .prod-item {
    width: 400px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .btn-wrap {
    margin-top: 10px;
    display: flex;
  }
  button {
    background-color: darkseagreen;
    border: 1px solid transparent;
    border-radius: 4px;
  }
</style>
