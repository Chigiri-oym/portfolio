<template>
  <div class="main">
    <h1>Works</h1>
    <p>個人開発のあれこれ</p>
    <div class="works-container">
    <work-card v-for="(work, index) in works" 
               :work="work"
               :key="index"></work-card>
    </div>
  </div>
</template>

<script>
import WorkCard from '../molecules/WorkCard.vue'

export default {
  name: 'works',
   components: {
    WorkCard
  },
  data() {
    return {
      works: [
        {
          name: "my portofolio",
          image: require("@/assets/img/portfolio.png"),
          url: "https://github.com/Chigiri-oym/portfolio",
          detail: "個人の自己紹介サイトです。つまり、このサイトのことです。",
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
