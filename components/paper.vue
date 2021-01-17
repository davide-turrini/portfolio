<template>
  <div
    v-show="show"
    class="
      relative w-full overflow-hidden
      container rounded-2xl
      bg-gray-900 text-white
      my-12">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'v-paper',
    data () {
      return {
        show: false,
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
          easing: 'hiding',
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
