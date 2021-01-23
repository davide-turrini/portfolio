<template>
  <v-transition @after-enter="$emit('ok')">
    <span v-if="$device.isDesktop && show" class="fixed z-50 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none" :class="{
      'text-transparent bg-clip-text bg-awesome-gradient mdi mdi-radiobox-blank text-4xl': triggers['v-pointer-link'],
      'text-white mdi mdi-arrow-left text-2xl': triggers['v-pointer-back'],
      'text-white mdi mdi-circle text-xl': !(triggers['v-pointer-link'] || triggers['v-pointer-back'])}" :style="'top: ' + top + '; left: ' + left + '; transition: font-size 300ms ease-in;'">
      </span>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  export default {
    name: 'v-pointer',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false }
    },
    watch: {
      show (show) {
        if (show && !this.$device.isDesktop) {
          this.$emit('update:show', false)
          this.$emit('ok')
        }
      }
    },
    data () {
      return {
        top: 0,
        left: 0,
        timeout: null,
        triggers: {
          'v-pointer-link': false,
          'v-pointer-back': false
        }
      }
    },
    mounted () {
      window.addEventListener('mousemove', (event) => {

        // updating triggers
        document.querySelectorAll('.v-pointer:not([v-pointer-bound])').forEach(element => {
          element.setAttribute('v-pointer-bound', true)
          element.addEventListener('mouseenter', () => {
            Object.keys(this.triggers).filter(t2 => element.classList.contains(t2)).forEach(t1 => this.triggers[t1] = true)
          }, false)
          element.addEventListener('mouseleave', () => {
            Object.keys(this.triggers).filter(t2 => element.classList.contains(t2)).forEach(t1 => this.triggers[t1] = false)
          }, false)
        })

        // moving pointer
        this.top = event.clientY + 'px'
        this.left = event.clientX + 'px'

      })
    }
  }
</script>

<style>
  html, body, a, button, iframe, input, textarea, form {
    cursor: none !important;
  }
</style>
