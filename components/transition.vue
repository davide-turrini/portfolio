<template>
  <transition @after-leave="$emit('after-leave')" @after-enter="$emit('after-enter')" :duration="duration" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass" appear>
    <slot/>
  </transition>
</template>

<script>
  export default {
    name: 'v-transition',
    props: {
      enterActiveClass: { type: String, default: 'animate__animated animate__fadeIn' },
      leaveActiveClass: { type: String, default: 'animate__animated animate__fadeOut' },
      duration: { type: Number, default: 1000 }
    }
  }
</script>
