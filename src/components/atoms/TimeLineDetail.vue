<template>
  <div>
    <p class="card-detail">■{{ title }}</p>
    <p class="card-detail"><span></span>{{ detail }}</p>
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
}

.card-detail span {
  margin-left: 1em;
}
</style>
