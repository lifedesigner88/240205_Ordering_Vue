<script>
import axios from "axios";

const API_BASE_URL = "http://localhost:8080";
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QGFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzA3MTk2NTE0LCJleHAiOjE3MDcxOTgzMTR9.hkaeMpf9S_yJfcAO1fzOIi16PsUDbWZjW_RyjWaaoFM";

export default {
  data() {
    return {
      memberList: [],
    }
  },
  methods: {
    async fetchMembers() {
      const header = {Authorization: `Bearer ${TOKEN}`};
      const response = await axios.get(`${API_BASE_URL}/members`, {headers: header});
      this.memberList = response.data;
    },
  },
  created() {
    this.fetchMembers();
  },
}
</script>
<template>
  <div class="container">
    <div class="page-header" style="padding: 15px"><h1>회원 목록</h1></div>
    <table class="table">
      <thead>
      <tr>
        <th>id</th>
        <th>이름</th>
        <th>email</th>
        <th>주문갯수</th>
        <th>#</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="member in memberList" :key="member.id">
        <td>{{ member.id }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.email }}</td>
        <td>{{ member.orderCount }}</td>
        <td><a :href="'/author/detail/' + member.id">상세보기</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
</style>