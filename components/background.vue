<template>
  <v-transition @after-enter="$emit('ok')">
    <img v-if="show" class="fixed top-0 z-0 h-screen w-screen object-cover" :src="src" :alt="alt">
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  export default {
    name: 'v-background',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false },
      src: { type: String, required: true },
      alt: { type: String, default: 'background' }
    }
  }
</script>
