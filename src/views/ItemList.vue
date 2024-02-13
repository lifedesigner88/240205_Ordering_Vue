<script>
import axios from "axios";

export default {
  data() {
    return {
      itemList: [],
      pageSize: 10,
      currentPage: 0,
      searchType: "name",
      searchValue: ``,
      isLastPage: false,
      isLoading: false,
      quantity: 0,
      selectedItems: {},
    }
  },

  methods: {

    async placeOrder() {

      // {
      //   "1" : true,
      //   "2" : false,
      // }
      // object.keys : 위의 데이터 구주에서 1,2 등 key 값 추출하는 메서드.
      console.log('아이템')
      console.log(this.selectedItems);
      console.log('아이템들')
      console.log(this.itemList);


      const orderItems = Object.keys(this.selectedItems)
          .filter(key => this.selectedItems[key] === true)
          .map(key => {
            const item = this.itemList.find(item => item.id == key)
            return {itemId: item.id, quantity: item.quantity}
          })
      console.log('최종 오더.')
      console.log(orderItems);

      const TOKEN = localStorage.getItem("token");
      const headers = TOKEN ? {Authorization: `Bearer ${TOKEN}`} : {};
      const orderReqItemDtoList = orderItems;
      await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}/order/create`,
          {orderReqItemDtoList},
          {headers}
      );


    },



    async loadItems() {
      try {
        this.isLoading = true;
        const params = {
          page: this.currentPage,
          size: this.pageSize,
          [this.searchType]: this.searchValue,
        }
        console.log(this.isLastPage);
        const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
        const addItemList = res.data.map(item => ({...item, quantity: 1}));

        if (addItemList.length < this.pageSize) {
          this.isLastPage = true;
        }

        this.itemList = [...this.itemList, ...addItemList];
      } catch (e) {
        console.log(e);
      }
      this.isLoading = false;
    },

    serarchItems() {
      console.log("클리어")
      this.itemList = [];
      this.currentPage = 0;
      this.isLastPage = false;
      this.loadItems();
    },

    getImage(id) {
      return `${process.env.VUE_APP_API_BASE_URL}/item/${id}/image`;
    },

    scrollPagination() {
      // innerHeight : 브라우저 창의 내부톺이를 픽셀단위로 변환
      // offsetHeight : 전체 브라우저 창의 높이
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      if (nearBottom && !this.isLastPage && !this.isLoading) {
        this.currentPage++;
        this.loadItems();
      }
    },

  },

  created() {
    this.loadItems();
  },

  mounted() {
    window.addEventListener('scroll', this.scrollPagination);
  },
}
</script>


<template>
  <div class="container">
    <div class="float-right">
      <button class="btn" style="margin: 10px" type="submit"> 장바구니</button>
      <button class="btn" style="margin: 10px" type="submit" @click="placeOrder"> 주문하기</button>
    </div>
    <div class="page-header" style="padding: 15px">
      <h1>상품 목록</h1>

      <div class="d-flex justify-content-between float-left" style="margin-top:20px">
        <form style="display: flex; padding : 10px" @submit.prevent="serarchItems">
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
          <button class="btn" style="margin-left: 5px" type="submit"> 검색</button>
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
          <td><input v-model="selectedItems[item.id]" class="form-check" type="checkbox"></td>
          <td><img :src="getImage(item.id)" alt="상품이미지" style="height:100px; width:100px"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stockQuantity }}</td>
          <td><input v-model="item.quantity" class="form-control" min="1" style="width:70px; text-align: center"
                     type="number"/></td>

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
