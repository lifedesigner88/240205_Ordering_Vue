<script>
export default {
  name: "DetailVeiw",
  props: {
    id: Number,
    clickedData: Object,
    PostData: Object,
  },
};
</script>

<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ PostData[id].title }}</h5>
    <p>{{ PostData[id].content }}</p>
    <p>{{ PostData[id].date }}</p>
    <p>{{ PostData[id].number }}</p>
    <p>{{ id }}</p>
  </div>

  <a :href="`/detail/${id}/author`">작가정보</a>
  <a :href="`/detail/${id}/comment`">댓글정보</a>
  <router-view
      :id="id"
  />

  <router-link :to="`/detail/${id}/author`">작가정보</router-link>
  <router-link :to="`/detail/${id}/comment`">댓글정보</router-link>

  <button @click="$router.go(-1);">뒤로가기</button>
</template>

<style scoped>

</style>

