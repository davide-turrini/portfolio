<template>
  <h1
    v-show="showValue"
    class="
    text-7xl">

    <!-- text start -->
    <span
      v-for="(word,w) in text.split(' ')"
      :key="'word-'+w"
      class="word-title"
      :ref="'word-'+w">
      {{ word }}
    </span>
    <!-- text end -->

  </h1>
</template>

<script>
  export default {
    name: 'v-title',
    props: {
      text: {
        type: String,
        required: true
      },
    },
    data () {
      return {
        showValue: false,
        doShow: null,
        doHide: null
      }
    },
    // watch: {
    //   text () {
    //     this.$nextTick(()=> {
    //       this.setup()
    //     })
    //   }
    // },
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
        this.doShow = this.$anime.timeline({
          autoplay: false
        }).add({
          targets: this.$el,
          opacity: [0, 1],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.showValue = true
            this.$emit('showing')
          }
        }).add({
          targets: 'h1 span',
          scale: [14,1],
          opacity: [0,1],
          easing: 'easeOutCirc',
          duration: 800,
          delay: (el, i) => 800 * i,
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
