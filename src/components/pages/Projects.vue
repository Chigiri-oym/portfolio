<template>
  <div class="main">
    <h1>Projects</h1>
    <p>参画プロジェクトなど</p>
    <ul v-for="project in projects" v-bind:key="project.id">
      <li>
        <timeline-card :project="project"></timeline-card>
      </li>
    </ul>
  </div>
</template>

<script>
import TimelineCard from '../molecules/TimelineCard.vue'

export default {
  components: { TimelineCard },
  name: 'Project',
  data(){
      return {
        projects: [
            {
                id:1,
                startMonth:"YYYY/MM",
                title:"ああああああああ",
                overview:"overview",
                role:"role",
                detail: `ああああああああああああ
                ああああああああああああああああああ
                ああああああああああああああああああ
                ああああああああああああああああああ
                ああああああああああああああああああ`
            },
            {
                id:2,
                startMonth:"YYYY/MM",
                title:"いいいいいいいいい",
                overview:"overview",
                role:"role",
                detail: `いいいいいいいいいいいいいいいいいいいいいいいいいいいい
                いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
                いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
                いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい`
            }
        ]
      }
  }
 
}
</script>

<style scoped>
ul{
    margin-top:1em;
    margin-bottom:2em;
}
</style>
