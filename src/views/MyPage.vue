<script>
import OrderListCompo from "@/components/OrderListCompo.vue";
export default {
  components:{
    OrderListCompo
  }
}
</script>

<template>
  <div class="container">
    <div class="page-header" style="padding: 15px"><h1>회원 정보</h1></div>
    <table class="table">
      <thead>
      <tr>
        <th>이름</th>
        <th>email</th>
        <th>도시</th>
        <th>상세주소</th>
        <th>우편번호</th>
      </tr>
      </thead>
      <tbody>
<!--      <tr v-for="member in memberList" :key="member.id">-->
<!--        <td>{{ member.id }}</td>-->
<!--        <td>{{ member.name }}</td>-->
<!--        <td>{{ member.email }}</td>-->
<!--        <td>{{ member.orderCount }}</td>-->
<!--        <td><a :href="`/member/${member.id}/orders`">상세보기</a></td>-->
<!--      </tr>-->
      </tbody>
    </table>
  </div>
  <OrderListCompo
      :is-admin="false"
      api-url="http://localhost:8080/member/myorders"
  />
</template>