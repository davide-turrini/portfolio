<template>
  <h2
    v-if="showValue"
    class="text-7xl">

    <span
      class="name"
      ref="name">
      {{ text }}
    </span>

  </h2>
</template>

<script>
  export default {
    name: 'v-headline',
    props: {
      text: {
        type: String,
        required: true
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
