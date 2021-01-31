<template>
  <div class="about">
    <h1>About Myself</h1>
    <div>
      {{message}}
    </div>
    <table>
      <tr v-for="(content, index) in contents" :key="index">
        <th>{{content.key}}</th>
        <td>{{content.value}}</td>
        <td>{{content.link}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'About',
  data(){
  return {
    contents : [
      {
        key: '仮名',
        value: 'Chigiri',
        link: ''
      },
      {
        key: '所属',
        value: '中規模SIer5年目',
        link: ''
      },
        {
        key: '属性',
        value: 'サーバーサイドエンジニア(Java)',
        link: ''
      },
      {
        key: '業務領域',
        value: 'BtoBCシステムの開発・運用保守',
        link: ''
      },
      {
        key: '好きな分野',
        value: 'DB定義やSQL、データ移行など',
        link: ''
      },
      {
        key: 'その他',
        value: '5名程度のプロジェクトのリーダー経験あり',
        link: ''
      },
        {
        key: 'お問い合わせ',
        value: 'Google Form',
        link: ''
      }
    ],
    message: '私立文系大学卒業後、新卒で現在のSIerに入社。某サービスサイトのプロジェクトで開発・運用保守を経験。モダンな技術よりも保守性を優先させる慎重派。'
  }
}
}
</script>
