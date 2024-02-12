<script>
export default {
  name: 'DisconutBox',
  data() {
    return {
      discountNumber: 30,
    }
  },


  created() {

    setInterval(
        ()=>{
          this.discountNumber--;
        },
        1000
    )
  },


}
</script>

<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountNumber }}% 할인</h4>
  </div>
</template>

<style>
.discount {
  background: #eee;
  color: darkslategrey;
  padding: 3px;
  font-size: 20px;
}
</style>