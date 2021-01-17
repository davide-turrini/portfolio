<template>
  <span
    v-if="$device.isDesktop"
    v-show="showValue"
    class="
    fixed z-30
    transform -translate-y-1/2 -translate-x-1/2
    pointer-events-none
    text-white text-xl"
    :class="{
    'mdi mdi-radiobox-blank': triggers['v-pointer-outlined'],
    'mdi mdi-circle': !triggers['v-pointer-outlined'] }"
    :style="'top: ' + top + '; left: ' + left + ';'">
  </span>
</template>

<script>
  export default {
    name: 'v-pointer',
    data () {
      return {
        showValue: false,
        doShow: null,
        doHide: null,
        top: 0,
        left: 0,
        timeout: null,
        triggers: {
          'v-pointer-outlined': false
        }
      }
    },
    mounted () {
      this.setup()
    },
    methods: {
      updateTriggers () {
        document.querySelectorAll('.v-pointer:not([v-pointer-bound])').forEach(element => {
          element.setAttribute('v-pointer-bound', true)
          element.addEventListener('mouseenter', () => {
            Object.keys(this.triggers).filter( t2 => element.classList.contains(t2)).forEach(t1 => this.triggers[t1] = true)
          }, false)
          element.addEventListener('mouseleave', () => {
            Object.keys(this.triggers).filter( t2 => element.classList.contains(t2)).forEach(t1 => this.triggers[t1] = false)
          }, false)
        })
      },
      move (x,y) {
        this.top = y + 'px'
        this.left = x + 'px'
      },
      show () {
        if (this.doHide) {
          this.doHide.pause()
        }
        if (this.doShow) {
          this.doShow.restart()
        }
      },
      hide () {
        if (this.doShow) {
          this.doShow.pause()
        }
        if (this.doHide) {
          this.doHide.restart()
        }
      },
      setup () {
        window.addEventListener('mousemove', (event) => {
          this.updateTriggers()
          this.move(event.clientX, event.clientY)
        })
        this.doShow = this.$anime({
          autoplay: false,
          targets: this.$el,
          opacity: [0, 1],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.showValue = true
            this.$emit('showing')
          },
          complete: () => {
            this.$emit('shown')
          }
        })
        this.doHide = this.$anime({
          autoplay: false,
          targets: this.$el,
          opacity: [1, 0],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.$emit('hiding')
          },
          complete: () => {
            this.showValue = false
            this.$emit('hidden')
          }
        })
      }
    }
  }
</script>

<style>
  html, body, a, button, iframe, input, textarea, form {
    cursor: none !important;
  }
</style>
