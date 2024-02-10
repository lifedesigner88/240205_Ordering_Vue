<script>
import roomDatas from './assets/oneroom.js';
import DisconutBox from "@/components/Discount.vue";
import MenuBar from "@/components/Menu.vue";
import MainCard from "@/components/MainCard.vue";
import ModalWindows from "@/components/Modal.vue";

export default {
  name: 'App',
  data() {
    return {
      roomdatasOrigin: [...roomDatas],
      roomDatas,
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      modalOpen: false,
      pushedItem: 0,
      showDiscount: true,
    }
  },

  methods: {
    openModal(i) {
      this.modalOpen = true;
      this.pushedItem = i;
    },

    priceSort(int) {
      this.roomDatas.sort(
          (a, b) =>
              (a.price - b.price) * int
      );

    },
    getOrigin() {
      this.roomDatas = [...this.roomdatasOrigin];
    }

  },

  mounted() {

    setTimeout(
        () => {
          this.showDiscount = false;
        },
        10000
    )
  },

  components: {
    ModalWindows,
    MenuBar,
    DisconutBox,
    MainCard
  }
}
</script>

<template>


  <MenuBar/>

  <DisconutBox
      v-if="showDiscount === true"
  />

  <button @click="getOrigin">원래대로</button>
  <button @click="priceSort(1)">가격낮은순</button>
  <button @click="priceSort(-1)">가격높은순</button>

  <!--  <div class="start" :class="{ end : modalOpen }">-->
  <transition name="fade">
    <ModalWindows
        :data="roomDatas[pushedItem]"
        @CloseModal="modalOpen = false"
        v-if="modalOpen === true"
    />
  </transition>
  <!--  </div>-->
  <MainCard
      v-for="(data,i) in roomDatas" :key="i"
      @OpenModal="console.log($event); openModal(i) "
      :data="data"
  />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
  top: 0;
  transform: translateY(0px);

}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-1000px);
}


body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.Info img {
  width: 500px;
  margin-top: 40px;
}


</style>







