<template>
    <div v-if="level != null">
        <ul> <div v-for="n of 3" :key="n">
            <li v-if="n <= level"><font-awesome-icon :icon="['fas', 'star']"/></li>
            <li v-else><font-awesome-icon :icon="['far', 'star']"/></li>
            </div>
        </ul>
    </div>
</template>
<style scoped>
ul {
    list-style: none;
    display: flex;
}

</style>

<script>
export default {
    name:'stars',
    props:{
        level: Number
    }
}
</script>