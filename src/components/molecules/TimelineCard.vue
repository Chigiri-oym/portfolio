<template>
  <div>
    <div class="time-line-contents">
      <span class="time-stamp">{{ project.startMonth }}</span>
      <font-awesome-icon
        class="timeline-dot"
        icon="circle"
        size="2x"
      ></font-awesome-icon>
      <div class="timeline-wrapper">
        <h2>{{ project.title }}</h2>
        <hr />
        <time-line-detail :title="label_overview" :detail="project.overview" />
        <time-line-detail :title="label_role" :detail="project.role" />
        <time-line-detail :title="label_detail" :detail="project.detail" />
      </div>
    </div>
  </div>
</template>

<script>
import TimeLineDetail from "../atoms/TimeLineDetail.vue";
export default {
  components: { TimeLineDetail },
  name: "name",
  props: {
    project: Object,
  },
  data() {
    return {
      label_overview: "概要",
      label_role: "役割",
      label_detail: "詳細",
    };
  },
};
</script>

<style>
.time-line-contents {
  display: flex;
  margin-left: 10em;
  font-size: 1.2em;
  margin-bottom: 2em;
  margin-top: 2em;
}
@media screen and (max-width: 896px) {
  .time-line-contents {
    display: block;
    font-size: 1em;
    margin-left: 0em;
    text-align: left;
  }
}

.time-stamp {
  display: inline;
}
@media screen and (max-width: 896px) {
  .time-stamp {
    margin-left: 1em;
  }
}

.timeline-dot {
  display: inline;
  margin-left: 0.5em;
}
@media screen and (max-width: 896px) {
  .timeline-dot {
    display: none;
  }
}

.timeline-wrapper {
  width:100%;
  margin-left: 2em;
  position: relative;
  box-shadow: 8.71px 8.71px 6px #bebebe, -8.71px -8.71px 6px #ffffff;
  margin-right: 2em;
  padding: 1em;
}
@media screen and (max-width: 896px) {
  .timeline-wrapper {
    width: 90%;
    display: block;
    margin-top: 1em;
    margin-right: 2em;
    margin-left: 1.5em;
  }
}

.timeline-wrapper:before {
  content: "";
  position: absolute;
  top: 0.5em;
  right: 100%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #e0e0e0;
}
@media screen and (max-width: 896px) {
  .timeline-wrapper:before {
    top: -1.5em;
    left: 1em;
    border-right: 30px solid transparent;
    border-bottom: 30px solid #e0e0e0;
    border-left: 30px solid transparent;
  }
}

h2 {
  text-align: left;
  padding: 0.5em;
}
</style>
