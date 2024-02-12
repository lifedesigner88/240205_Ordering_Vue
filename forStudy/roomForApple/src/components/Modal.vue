<script>
import DisconutBox from "@/components/Discount.vue";

export default {
  name: "ModalWindows",
  props: {
    data: Object,
  },
  data() {
    return {
      warn: [0, 0, 0, 0, 0, 0],
      month: 1,
    }
  },


  watch: {
    month(after, before) {
      if (after > 12) {
        alert('13이상 판매하지 않습니다.');
        this.month = before;
      }
    }
  },



  methods: {
    increase(i) {
      this.warn[i]++;
    },

    infoAlert(){
      alert(`${this.month}월 선택하셨습니다.`);
    }
  },

  updated() {
    this.infoAlert();
  },



  components: {DisconutBox}
}

</script>

<template>
    <div class="black-bg">
      <div class="white-bg Info">
        <img :src="data.image" alt=""/>
        <h4>{{ data.title }}</h4>
        <p>{{ data.content }}</p>
        <!--      <input value="1" type="number" min="1"  @input="month = $event.target.value"/>-->
        <input value="1" min="1" v-model="month"/>
        <!--      <input value="1" type="number" min="1"  v-model.number="month"/>-->
        <p>{{ month }}개월 선택함 총 {{ data.price * month }}원</p>
        <button @mouseover="increase(data.id)">허위매물 신고</button>
        <p> 신고수 : {{ warn[data.id] }} </p>
        <DisconutBox/>
        <button @click="$emit('CloseModal')">닫기</button>
      </div>
    </div>
</template>

<style>

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>