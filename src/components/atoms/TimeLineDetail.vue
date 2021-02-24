<template>
  <div>
    <p class="card-detail">■{{ title }}</p>
    <p class="card-detail">{{ detail }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeLineDetail",
  props: {
    title: String,
    detail: String,
  },
};
</script>

<style>
.card-detail {
  text-align: left;
  white-space: pre-line;
  word-wrap: break-word;
  padding: 0.5em;
}@media screen and (max-width: 480px) {
    .card-detail {
        line-height: 1.5;
    }
}

</style>
