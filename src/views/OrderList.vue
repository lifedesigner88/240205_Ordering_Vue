<script>
import axios from "axios";
const API_BASE_URL = "http://localhost:8080";

export default {
  data() {
    return {
      orderList: [],
    }
  },
  methods: {
    async fetchMembers() {
      const TOKEN = localStorage.getItem("token");
      const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};
      const response = await axios.get(`${API_BASE_URL}/orders`, {headers});
      this.orderList = response.data;
    },
  },
  created() {
    this.fetchMembers();
  },
}

</script>

<template>
  <div class="container">
    <div class="page-header" style="padding: 15px"><h1>주문 목록</h1></div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>회원 Email</th>
          <th>주문상태</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderList" :key="order.orderId">
          <td>{{ order.orderId }}</td>
          <td>{{ order.memberEmail }}</td>
          <td>{{ order.orderStatus }}</td>
          <td><button> CANCLE </button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>