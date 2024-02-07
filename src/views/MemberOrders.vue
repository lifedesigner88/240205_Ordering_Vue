<script>
import OrderListCompo from "@/components/OrderListCompo.vue";
export default {
  props: ['id'],
  components:{
    OrderListCompo
  }
}
</script>

<template>
  <OrderListCompo
      :is-admin="true"
      :api-url="`http://localhost:8080/member/${id}/orders`"
  />
</template>