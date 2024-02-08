<script>
import axios from "axios";

export default {
  data() {
    return {
      itemList: [],
      pageSize: 5,
      currentPage: 0,
      searchType: "name",
      searchValue: ``,
      isLastPage: false,
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
        console.log("data 호출");
        const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
        const addItemList = res.data
        if (addItemList.length < this.pageSize){
          this.isLastPage = true;
        }

        this.itemList = [...this.itemList, ...addItemList];
      } catch (e) {
        console.log(e);
      }
    },

    getImage(id) {
      return `${process.env.VUE_APP_API_BASE_URL}/item/${id}/image`;
    },

    scrollPagination() {
      // innerHeight : 브라우저 창의 내부톺이를 픽셀단위로 변환
      // offsetHeight : 전체 브라우저 창의 높이
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (nearBottom && !this.isLastPage) {
        this.currentPage++;
        this.fetchItems();
      }
    },

  },

  created() {
    this.fetchItems();
  },

  mounted() {
    window.addEventListener('scroll', this.scrollPagination);
  },
}
</script>



<template>
  <div class="container">
    <div class="page-header" style="padding: 15px">
      <h1>상품 목록</h1>
      <div class="d-flex justify-content-between" style="margin-top:20px">
        <form style="display: flex; padding : 10px" @submit.prevent="fetchItems">
          <select v-model="searchType"
                  class="form-control"
                  style="display: inline-block;
                  width: auto;
                  margin-right: 5px">
            <option value="option">선택</option>
            <option value="name">상품명</option>
            <option value="category">카테고리</option>
          </select>
          <input v-model="searchValue" class="form-control" placeholder="텍스트 입력" type="text"/>
          <button class="btn" style="margin-left: 5px" type="submit"> 제출</button>
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
