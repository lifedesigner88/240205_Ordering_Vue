<script>
import axios from "axios";

export default {
  data() {
    return {
      itemList: [],
      pageSize: 10,
      currentPage: 0,
      // name:"e",
      // category:"과일"
    }
  },

  methods: {
    async fetchItems() {
      try {
        const params = {
          page: this.currentPage,
          size: this.pageSize,
          // name: this.name,
          // category: this.category
        }
        const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
        this.itemList = res.data;
      } catch (e) {
        console.log(e);
      }
    },


    getImage(id){
      return `${process.env.VUE_APP_API_BASE_URL}/item/${id}/image`;
    }

  },
  created() {
    this.fetchItems();
  }

}


</script>

<template>
  <div class="container">
    <div class="page-header" style="padding: 15px">
      <h1>상품 목록</h1>
      <table class="table">
        <thead>
        <tr>
          <th>id</th>
          <th></th>
          <th>제품사진</th>
          <th>제품명</th>
          <th>카테고리</th>
          <th>가격</th>
          <th>재고수량</th>
          <th>주문수량</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in itemList" :key="item.id">
          <td>{{ item.id }}</td>
          <td><input type="checkbox"></td>
          <td><img :src="getImage(item.id)" alt="상품이미지" style="height:100px; width:100px"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stockQuantity }}</td>
          <td><input style="width:50px; text-align: center" type="number"/></td>

        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<style scoped>

</style>

<!--
[
  {
    "id": 1,
    "name": "apple",
    "category": "과일",
    "price": 10000,
    "stockQuantity": 1323827190,
    "imagePath": "C:\\Users\\Playdata\\IdeaProjects\\Ordering\\src\\main\\resources\\temp\\1_apple.jpg"
  },
]
-->
