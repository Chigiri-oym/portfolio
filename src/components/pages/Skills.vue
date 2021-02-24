<template>
  <div class="main">
    <h1>Skills</h1>
    <p>スキルセットと保有資格</p>
    <table>
      <tr>
        <td><stars :level="1"></stars></td>
        <td>初心者レベル</td>
      </tr>
      <tr>
        <td><stars :level="2"></stars></td>
        <td>ある程度実装できるレベル</td>
      </tr>
      <tr>
        <td><stars :level="3"></stars></td>
        <td>専門家レベル</td>
      </tr>
    </table>

    <div class="wrapper">
      <skill-card
        v-for="skill_datum in skill_data"
        :skill_datum="skill_datum"
        v-bind:key="skill_datum.categoryId"
      >
      </skill-card>
    </div>
    <return-to-home></return-to-home>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
}

table {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;

}

tr td {
  border-bottom: none;
  text-align: left;
  padding: 0.5em;
}
</style>
<script>
import SkillCard from "../molecules/SkillCard.vue";
import Stars from "../atoms/Stars.vue";
import ReturnToHome from '../atoms/ReturnToHome.vue'

export default {
  components: { SkillCard, Stars, ReturnToHome},
  name: "skill",
  data() {
    return {
      skill_data: [
        {
          categoryId: 1,
          category: "バックエンド",
          skills: [
            {
              id: 1,
              name: "Java",
              year: 5,
              level: 2,
            },
            {
              id: 2,
              name: "kotolin",
              year: 0.5,
              level: 2,
            },
          ],
        },
        {
          categoryId: 2,
          category: "フロントエンド",
          skills: [
            {
              id: 3,
              name: "Vue.js",
              year: 0.5,
              level: 1,
            },
          ],
        },
        {
          categoryId: 3,
          category: "DB",
          skills: [
            {
              id: 4,
              name: "MySQL",
              year: 2,
              level: 2,
            },
            {
              id: 5,
              name: "Oracle",
              year: 2,
              level: 2,
            },
          ],
        },
        {
          categoryId: 4,
          category: "インフラ",
          skills: [
            {
              id: 6,
              name: "AWS",
              year: 2,
              level: 2,
            },
            {
              id: 7,
              name: "GCP",
              year: 0.5,
              level: 1,
            },
          ],
        },
        {
          categoryId: 5,
          category: "その他",
          skills: [
            {
              id: 8,
              name: "Git",
              year: 4,
              level: 2,
            },
            {
              id: 9,
              name: "Docker",
              year: 2,
              level: 1,
            },
          ],
        },
        {
          categoryId: 6,
          category: "保有資格",
          skills: [
            {
              id: 10,
              name: "Google Cloud : Associate Cloud Engineer",
              year: null,
              level: null,
            },
            {
              id: 11,
              name: "基本情報技術者",
              year: null,
              level: null,
            },
            {
              id: 12,
              name: "TOEIC:865点",
              year: null,
              level: null,
            },
          ],
        },
      ],
    };
  },
};
</script>
