<template>
  <div>
      <router-link  v-bind:to="card.url">{{card.title}}
        <div class="icon-box">
         <font-awesome-icon :icon="card.icon" size="2x"></font-awesome-icon>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'TopCard',
    props: {
      card: {
          type: Object,
          required: true
      }
    }
}
</script>