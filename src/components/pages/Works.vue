<template>
  <div class="main">
    <h1>Works</h1>
    <p>個人開発のあれこれ</p>
    <div class="works-container">
    <work-card v-for="(work, index) in works" 
               :work="work"
               :key="index"></work-card>
    </div>
    <return-to-home></return-to-home>
  </div>
</template>

<script>
import ReturnToHome from '../atoms/ReturnToHome.vue';
import WorkCard from '../molecules/WorkCard.vue'

export default {
  name: 'works',
   components: {
    WorkCard,
    ReturnToHome
  },
  data() {
    return {
      works: [
        {
          name: "portofolio",
          image: require("@/assets/img/portfolio.png"),
          url: "https://github.com/Chigiri-oym/portfolio",
          detail: "Chigiriの自己紹介サイトです。つまり、このサイトのことです。vue.js使いました。",
        },
        {
          name: "Comming Soon",
          image: require("@/assets/img/hatena.png"),
          url: "",
          detail: "",
        },
      ],
    };
  },
};
</script>
