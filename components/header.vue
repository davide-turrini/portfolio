<template>
  <v-transition>
    <header v-if="show" class="relative w-full flex flex-col justify-center items-center py-16">
      <h1 class="text-7xl font-gruppo text-white">
        <span v-for="(letter,l) in title.split('')" :key="'h1-span-'+l">{{ letter }}</span>
      </h1>
      <h2 class="text-xl font-sans uppercase text-gray-500 tracking-widest overflow-hidden">
        <span v-for="(letter,l) in headline.split('')" :key="'h2-span-'+l">{{ letter }}</span>
      </h2>
    </header>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  import anime from 'animejs'
  export default {
    name: 'v-header',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false },
      title: { type: String, required: true },
      headline: { type: String, required: true }
    },
    watch: {
      show (show) {
        if (show) {
          this.$nextTick(()=>{
            anime({
              targets: 'h1 span',
              opacity: [0,1],
              easing: "easeInOutQuad",
              duration: 2250,
              delay: (el, i) => 150 * (i+1),
              complete: () => {
                this.$emit('ok')
              }
            })
            anime({
                targets: 'h2 span',
                translateY: [-100,0],
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 30 * i
              })
          })
        }
      }
    }
  }
</script>
