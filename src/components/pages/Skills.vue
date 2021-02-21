<template>
  <div class="main"></div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      skill_data: [
        {
          category: "バックエンド",
          skills: [
            {
              name: "Java",
              year: 5,
              level: 2,
            },
            {
              name: "kotolin",
              year: 0.5,
              level: 2,
            }
          ]
        },
        {
          category: "フロントエンド",
          skills: [
            {
              name: "Vue",
              year: 0.5,
              level: 1,
            }
          ]
        },
        {
          category: "DB",
          skills: [
            {
              name: "MySQL",
              year: 2,
              level: 2,
            },
            {
              name: "Oracle",
              year: 2,
              level: 2,
            }
          ]
        },
        {
          category: "インフラ",
          skills: [
            {
              name: "AWS",
              year: 2,
              level: 2,
            },
            {
              name: "GCP",
              year: 0.5,
              level: 1,
            }
          ]
        },
        {
          category: "その他",
          skills: [
            {
              name: "Git",
              year: 4,
              level: 2,
            },
            {
              name: "Docker",
              year: 2,
              level: 1,
            }
          ]
        },
        {
          category: "保有資格",
          skills: [
            {
              name: "Associate Cloud Engineer - Google Cloud",
              year: null,
              level: null,
            },
            {
              name: "基本情報技術者",
              year: null,
              level: null,
            }
          ]
        }
      ]
    };
  },
};
</script>
