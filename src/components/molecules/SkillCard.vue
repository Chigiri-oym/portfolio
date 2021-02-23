<template>
  <div class="skill-content">
    <p>{{ skill_datum.category }}</p>
    <table>
      <tr v-for="skill in skill_datum.skills" v-bind:key="skill.id">
        <td>{{ skill.name }}</td>
        <td v-if="skill.year != null">{{ skill.year }}年</td>
        <td><stars :level="skill.level"></stars></td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.skill-content {
  padding: 1em;
  box-shadow: 8.71px 8.71px 6px #bebebe, -8.71px -8.71px 6px #ffffff;
  margin-bottom: 2em;
  grid-template-columns: repeat(1, 450px);
  width: 450px;
  gap: 50px;
  margin-top: 2em;
  justify-content: center;
  margin-right:auto;
  margin-left:auto;
  position: relative;
}@media screen and (max-width: 480px) {
    .skill-content{
        grid-template-columns: repeat(1, 300px);
        width: 300px;
        gap:20px;
        margin-left:auto;
        margin-right:auto;
        ;}
}

p {
  font-size: 1.4em;
  font-weight: bold;
}
table {
  margin-left: auto;
  margin-right: auto;
}
tr,
td {
  padding: 1em;
  font-size: 1.2em;
  border-bottom: none;
  text-align: left;
}@media screen and (max-width: 480px) {
    .tr, td{
       font-size: 1em;}
}
</style>

<script>
import Stars from "../atoms/Stars.vue";

export default {
  components: { Stars },
  name: "skillDetail",
  props: {
    skill_datum: Object,
  },
};
</script>
