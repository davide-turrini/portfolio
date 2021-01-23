<template>
  <v-transition :duration="2000" enter-active-class="custom__growUp" @after-enter="$emit('ok')">
    <main v-if="show" class="container relative z-10 rounded-2xl bg-gray-900 md:overflow-hidden">
      <slot/>
    </main>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  export default {
    name: 'v-main',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false }
    }
  }
</script>

<style scoped>
  .custom__growUp {
    animation: growUp 2s cubic-bezier(0.860, 0.000, 0.070, 1.000); /* easeInOutQuint */
  }
  @keyframes growUp {
    from { max-height: 0; opacity: 0 }
    to { max-height: 100vh; opacity: 1 }
  }
</style>
