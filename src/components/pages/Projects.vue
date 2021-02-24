<template>
  <div class="main">
    <h1>Projects</h1>
    <p>参画プロジェクトなど</p>
    <ul>
      <li v-for="project in reverseProjects" v-bind:key="project.id">
        <timeline-card :project="project"></timeline-card>
      </li>
    </ul>
    <return-to-home></return-to-home>
  </div>
</template>

<script>
import ReturnToHome from '../atoms/ReturnToHome.vue';
import TimelineCard from "../molecules/TimelineCard.vue";

export default {
  components: { TimelineCard, ReturnToHome },
  name: "Project",
  computed:{
    reverseProjects() {
        return this.projects.slice().reverse();
    }
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          startMonth: " 2016/07",
          title: "人材系サービスの保守開発",
          overview: "BtoBC向けサービスの保守・追加機能開発",
          role: "メンバー",
          detail: `・追加機能開発 
          ・問い合わせ調査や障害対応
          ・機能改修の際に一部サーバレスアーキテクチャ導入`,
        },
        {
          id: 2,
          startMonth: "2018/10",
          title: "人材系サービスの保守",
          overview: "BtoBC向けサービスの保守・追加機能開発",
          role: "メンバー",
          detail: `・転職サイト追加機能開発
          ・サーバー刷新業務`,
        },
        {
          id: 3,
          startMonth: "2019/04",
          title: "人材系サービスマスタデータ刷新プロジェクト",
          overview: "マスタデータ刷新プロジェクト",
          role: "リーダー",
          detail: `・顧客との仕様調整 
          ・仕様調整後のテーブル設計、RV、テスト 
          ・スケジュール設定、リソース配置、作業割り振り、進捗管理`,
        },
        {
          id: 4,
          startMonth: "2019/08",
          title: "リニューアル開発",
          overview: "同企業別サービスの刷新プロジェクト",
          role: "メンバー兼担当業務リーダー",
          detail: `・旧システムからのデータ移行の要件定義、詳細設計、開発、テスト
          ・顧客とのデータ移行要件確認、作業スケジュール計画、調整 
          ・旧システムのデータ構造調査、移行用SQL設計、開発、テスト
          ・一部機能API実装`,
        },
        {
          id: 5,
          startMonth: "2020/08",
          title: "リニューアル開発",
          overview: "BtoBC向けサービスのtoB向けサービスの刷新プロジェクト",
          role: "メンバー兼担当業務リーダー",
          detail: `・旧システムからのデータ移行の要件定義、詳細設計、開発、テスト
          ・顧客とのデータ移行要件確認、作業スケジュール計画、調整 
          ・旧システムのデータ構造調査、移行用SQL設計、開発、テスト
          ・旧システム側改修の設計、進捗管理、RV`
        }
      ],
    };
  },
};
</script>

<style scoped>
ul {
  margin-top: 1em;
  margin-bottom: 2em;
  width: 90%;
  position: relative;
}
@media screen and (max-width: 896px) {
  .ul {
    width: 100%;
  }
}

@media screen and (min-width: 897px) {
  ul:before {
    content: "";
    position: absolute;
    width: 5px;
    margin-top: 1em;
    left: 18.75em;
    background: #2a2a2a;
    height: 100%;
  }
}
</style>
