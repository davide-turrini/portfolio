<template>
  <div
    v-show="showValue"
    class="
    fixed z-40
    flex flex-col justify-center items-center
    bg-gray-900">

    <!-- text start -->
    <h5 class="
      flex flex-col justify-center items-center
      text-9xl"
      ref="text">
      <span
        v-for="(word,w) in text.split(' ')"
        :key="'word-'+w"
        class="
        absolute
        bg-clip-text text-transparent text-gradient
        opacity-0"
        :ref="'word-'+w">
        {{ word }}
      </span>
    </h5>
    <!-- text end -->

  </div>
</template>

<script>
  export default {
    name: 'v-welcome',
    props: {
      text: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        showValue: false,
        doCycle: null
      }
    },
    watch: {
      text () {
        this.$nextTick(()=> {
          this.setup()
        })
      }
    },
    mounted () {
      this.setup()
    },
    methods: {
      cycle () {
        if (this.doCycle) {
          this.doCycle.restart()
        }
      },
      setup () {
        this.doCycle = this.$anime.timeline({
          autoplay: false
        })

        // starting
        this.doCycle.add({
          targets: this.$el,
          opacity: [0, 1],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.showValue = true
            this.$emit('starting')
          }
        }).add({
          targets: this.$refs['text'],
          opacity: [0, 1],
          duration: 500,
          delay: 500,
          easing: 'linear',
          complete: () => {
            this.$emit('started')
          }
        })

        // TODO fix selector !
        // running animation
        for (const [w, word] of this.text.split(' ').entries()) {
          this.doCycle.add({
            targets: this.$refs['word-'+w],
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800
          }).add({
            targets: this.$refs['word-'+w],
            opacity: 0,
            scale: 5,
            duration: 600,
            easing: "easeInExpo",
            delay: 400
          })
        }

        // auto stopping
        this.doCycle.add({
          targets: this.$refs['text'],
          opacity: 0,
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.$emit('stopping')
          }
        }).add({
          targets: this.$el,
          opacity: 0,
          duration: 500,
          delay: 500,
          easing: 'linear',
          complete: () => {
            this.showValue = false
            this.$emit('stopped')
          }
        })
      }

    }
  }
</script>

<style scoped>
  .text-gradient {
    background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
