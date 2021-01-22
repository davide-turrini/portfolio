<template>
  <v-transition>
    <div v-if="show" class="fixed z-40 h-screen w-screen flex flex-col justify-center items-center bg-gray-900">
      <h5 class="flex flex-col justify-center items-center text-9xl">
        <span class="absolute bg-clip-text text-transparent awesome-gradient opacity-0" v-for="(word,w) in text.split(' ')" :key="'h5-span-'+w">
          {{ word }}
        </span>
      </h5>
      <div class="absolute z-50 bottom-0 right-0 text-gray-600 bg-gray-900 text-2xl mb-10 mr-10 v-pointer v-pointer-link" @click="welcomed">
        {{ $t('skip') }}
      </div>
    </div>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  import anime from 'animejs'
  export default {
    name: 'v-welcome',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false },
      text: { type: String, required: true }
    },
    watch: {
      show (show) {
        if (show && !this.alreadyWelcomed) {
          this.$nextTick(()=> {
            const tl = anime.timeline()
            for (let w = 0; w < this.text.split(' ').length; w++) {
              tl.add({
                targets: 'h5 span:nth-child('+(w+1)+')',
                scale: [0.2,1],
                opacity: [0,1],
                easing: "easeOutCirc",
                duration: 400
              }).add({
                targets: 'h5 span:nth-child('+(w+1)+')',
                scale: [1,(w < this.text.split(' ').length-1) ? 0 : 24],
                opacity: [1,0],
                easing: "easeInCirc",
                duration: 400,
                delay: (w < this.text.split(' ').length-1) ? 0 : 1000
              })
            }
            tl.add({
              complete: () => {
                this.welcomed()
              }
            })
          })
        } else {
          this.welcomed()
        }
      }
    },
    computed: {
      alreadyWelcomed: {
        set (alreadyWelcomed) { localStorage.setItem('alreadyWelcomed', alreadyWelcomed) },
        get () { return localStorage.getItem('alreadyWelcomed') || false }
      }
    },
    methods: {
      welcomed () {
        this.$emit('update:show', false)
        this.alreadyWelcomed = true
        this.$emit('ok')
      }
    }
  }
</script>
