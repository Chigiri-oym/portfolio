<template>
  <div class="about">
    <h1>About</h1>
    <p>自己紹介</p>
    <img class="my-icon" src="../../assets/img/icon.png"/>
    <div class="message">
      {{message}}
    </div>
    <table class="table-content">
      <tr v-for="(content, index) in contents" :key="index">
        <th>{{content.key}}</th>
        <td v-if="content.link !== null">
          <a v-bind:href="content.link">{{content.value}}</a>
        </td>
        <td v-else>{{content.value}}
        </td>
      </tr>
    </table>
    <return-to-home></return-to-home>
  </div>
</template>
<script>
import ReturnToHome from '../atoms/ReturnToHome.vue'
export default {
  components: { ReturnToHome },
  name: 'About',
  data(){
  return {
    contents : [
      {
        key: '仮名',
        value: 'Chigiri',
        link: null
      },
      {
        key: '所属',
        value: '中規模SIer5年目',
        link: null
      },
        {
        key: '種類',
        value: 'サーバーサイドエンジニア(Java)',
        link: null
      },
      {
        key: '業務領域',
        value: 'BtoBCシステムの開発・運用保守',
        link: null
      },
      {
        key: 'スキル概要',
        value: `要件定義〜テストまで経験
                8名程度のプロジェクトのリーダー経験あり`,
        link: null
      },
      {
        key: '直近の業務',
        value: 'DB定義やSQL、データ移行など',
        link: null
      },
      {
        key: 'Twitter',
        value: '@Chigiri3desu',
        link: 'https://twitter.com/Chigiri3desu'
      },
      {
        key: 'github',
        value: '@Chigiri-oym',
        link: 'https://github.com/Chigiri-oym/portfolio'
      },
      {
        key: 'Qiita',
        value: '@Chigiri-san',
        link: 'https://qiita.com/Chigiri-san'
      },
        {
        key: 'お問い合わせ',
        value: 'Google Form',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfgzXIcl44j6_PYIZtqwZzNsxshL49gG7UGk93tA32dv2_uCw/viewform'
      }
    ],
    message: `私立文系大学国際系学部卒業後、新卒で中規模SIerに入社。
              人材系サービスサイトのプロジェクトで開発・運用保守を経験。
              モダンな技術よりも保守性を優先させる慎重派。`
  }
}
}
</script>
