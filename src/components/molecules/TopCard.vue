<template>
  <div>
      <a v-bind:href="card.url">{{card.title}}
        <div class="icon-box">
         <font-awesome-icon :icon="card.icon" size="2x"></font-awesome-icon>
        </div>
      </a>
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