<template>
  <div class="main">
    <h1>Chigiri's Portfolio</h1>
    <p>Chigiriのポートフォリオサイト</p>
    <div class="container">
    <top-card class="card" 
              v-for="(card, index) in cards" 
              :card="card"
              :key="index">
    </top-card>
    </div>
  </div>
</template>

<script>
import TopCard from '../molecules/TopCard.vue'

export default {
  name: 'Top',
  components: {
    TopCard
  },
  data() {
    return {
      cards :[
        {
          title: "About", 
          url:"/about",
          icon:"user-circle"
        },
        {
          title: "Skills", 
          url:"/skills",
          icon:"cogs"
        },
        {
          title: "Projects", 
          url:"/projects",
          icon:"list-alt"
        },
        {
          title: "Works", 
          url:"/works",
          icon:"briefcase"
        }
      
      ]
    }
  }
}
</script>
