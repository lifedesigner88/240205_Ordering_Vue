<script>
export default {
  name: "ListContent",
  props: {
    PostData: Object,
  }
}
</script>

<template>
  <div v-for="(data,u) in PostData" :key="u">
    <h5 @click="$router.push(`/detail/${u}`)">{{ data.title }} </h5>
    <router-link
        @click="$emit('clicked', data)"
        :to="`/detail/${u}`"
    > 상세보기  </router-link>
    <br>
    <br>
    <br>
  </div>
</template>
