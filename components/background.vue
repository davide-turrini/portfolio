<template>
  <img
    v-show="showValue"
    class="
    fixed top-0 z-0
    h-screen w-screen
    object-cover"
    :src="src"
    :alt="alt">
</template>

<script>
  export default {
    name: 'v-background',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: 'background'
      }
    },
    data () {
      return {
        showValue: false,
        doShow: null,
        doHide: null
      }
    },
    mounted () {
      this.setup()
    },
    methods: {
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
