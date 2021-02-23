<template>
<div>
    <span class="time-line">{{project.startMonth}}</span>
    <font-awesome-icon class="timeline-dot" icon="circle" size="3x"></font-awesome-icon>
    <div class="timeline-wrapper">
    <h2>{{project.title}}</h2>
    <hr>
    <time-line-detail :title="label_overview"
                      :detail="project.overview"
    />
    <time-line-detail :title="label_role"
                      :detail="project.role"
    />
    <time-line-detail :title="label_detail"
                      :detail="project.detail"
    />
    </div>
</div>
</template>

<script>
import TimeLineDetail from '../atoms/TimeLineDetail.vue'
export default {
  components: { TimeLineDetail },
    name:'name',
    props: {
        project:Object
    },
    data(){
        return {
            label_overview:"概要",
            label_role:"役割",
            label_detail:"詳細"
        }
    }
}
</script>

<style>
.timeline-wrapper {
    width: 70%;
    margin-left: auto;
    box-shadow: 8.71px 8.71px 6px #bebebe, -8.71px -8.71px 6px #ffffff;
    margin-right:2em;
    padding: 1em;
}

h2 {
    text-align: left;
    padding: 0.5em;
}

.time-line {
    width: 25%;
    display: flex;
    margin-left:10%;
}

.timeline-dot {
    display: flex;
    margin-left:20%;
    
}
</style>