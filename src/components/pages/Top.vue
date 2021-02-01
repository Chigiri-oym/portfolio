<template>
  <div>
        <h1>Welcome to Chigiri's Portfolio</h1>
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="card-content">
      <a v-bind:href="card.url">{{card.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Top from '@/components/HelloWorld.vue'
// todo card化してurlと画像パスとtitleを渡すだけにする

export default {
  name: 'Top',
  data() {
    return {
      cards :[
        {
          title: "About", 
          url:"/#/about"
        },
        {
          title: "Skills", 
          url:"/#/skills"
        },
        {
          title: "Projects", 
          url:"/#/projects"
        },
        {
          title: "Works", 
          url:"/#/works"
        }
      
      ]
    }
  }
}
</script>
