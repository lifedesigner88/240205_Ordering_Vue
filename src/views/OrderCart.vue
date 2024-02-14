<script>
import {mapGetters} from "vuex";

export default {
  name: "OrderCart",

  computed: {
    ...mapGetters(['getCartItems']),
  },

}
</script>

<template>
  <div class="container">
    <div class="page-header" style="padding: 15px"><h1>장바구니 목록</h1></div>
    <table class="table">
      <thead>
      <tr>
        <th>제품 id</th>
        <th>제품명</th>
        <th>주문수량</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in getCartItems" :key="item.id">
        <td>{{ item.itemId }}</td>
        <td>{{ item.itemName }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
</style>

<style scoped>

</style>