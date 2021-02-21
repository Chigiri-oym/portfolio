<template>
  <div class="card-wrapper">
    <a v-bind:href="work.url">
    <div class="card-image">
        <img v-bind:src="work.image"> 
    </div>
    <div class="card-contents">
      <p class="card-title">{{work.name}}</p>
      <div class="card-detail">{{work.detail}}</div>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
};
</script>
>
