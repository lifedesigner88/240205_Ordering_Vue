<script>
import OrderListCompo from "@/components/OrderListCompo.vue";
export default {
  components:{
    OrderListCompo
  }
}


</script>

<template>
<OrderListCompo
    :isAdmin="true"
    api-url="http://localhost:8080/orders"
/>
</template>

<style>

</style>