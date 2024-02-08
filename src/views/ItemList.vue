<script>
import axios from "axios";

export default {
  data() {
    return {
      itemList: [],
      pageSize: 10,
      currentPage: 0,
      searchType:"name",
      searchValue:``
    }
  },

  methods: {
    async fetchItems() {
      try {
        const params = {
          page: this.currentPage,
          size: this.pageSize,
          [this.searchType]: this.searchValue,
        }

        const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
        this.itemList = res.data;
      } catch (e) {
        console.log(e);
      }
    },

    getImage(id) {
      return `${process.env.VUE_APP_API_BASE_URL}/item/${id}/image`;
    }

  },

  created() {
    this.fetchItems();
  },


}


</script>

<template>
  <div class="container">
    <div class="page-header" style="padding: 15px">
      <h1>상품 목록</h1>
      <div class="d-flex justify-content-between" style="margin-top:20px">
        <form @submit.prevent="fetchItems" style="display: flex; padding : 10px">
          <select class="form-control"
                  v-model="searchType"
                  style="display: inline-block;
                  width: auto;
                  margin-right: 5px">
            <option value="option">선택</option>
            <option value="name">상품명</option>
            <option value="category">카테고리</option>
          </select>
          <input type="text" class="form-control" v-model="searchValue" placeholder="텍스트 입력" />
          <button class="btn" type="submit" style="margin-left: 5px"> 제출 </button>
        </form>
      </div>


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
          <td><input class="form-check" type="checkbox"></td>
          <td><img :src="getImage(item.id)" alt="상품이미지" style="height:100px; width:100px"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stockQuantity }}</td>
          <td><input class="form-control" min="0" style="width:70px; text-align: center" type="number"/></td>

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
