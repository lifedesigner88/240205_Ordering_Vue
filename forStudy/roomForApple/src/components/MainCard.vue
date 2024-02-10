<script>

export default {
  name: "MainCard",
  props: {
    data: Object,
  },
  methods:{
    sendEvent(){
      this.$emit('OpenModal', this.data)
    }
  }
}
</script>

<template>
  <div class="Info">
    <img :src="data.image" alt=""/>
    <h4 @click="sendEvent">{{ data.title }}</h4>
  </div>
</template>

<style scoped>

</style>