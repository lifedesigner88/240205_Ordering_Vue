<script>

export default {
  data() {
    return {
      myLang: "python",
      inputvalue1: "python2",
      inputvalue2: "python3",
    }
  },

  created() {
    this.myLang = "java";
  },

  methods: {
    showValue(){
      alert(this.inputvalue2);
    }
  }
}
</script>


<template>
  <h1>Hello World {{myLang}}</h1>
  <input type="text" value="myvalue"/>

  <!--  :value는 v-bind:value= 의 축약어 -->
  <!--  v-bind는 input 박스에서 많이 사용하는 단방향 데이터 바인딩 방식 -->
  <input type="text" v-bind:value="inputvalue1"/>
  <input type="text" :value="inputvalue1"/>


  <!--v-model = 양방향 데이터 바인딩 모델이라는 차이점 -->
  <input type="text" v-model="inputvalue2"/>


<!--  oneclick = @click 와 간다. -->
  <button @click="showValue"> 변수 변경사항 확인 </button>

</template>
