<template>
  <section
    v-if="value"
    class="
    flex flex-col
    bg-gradient-to-b from-black
    opacity-0">

    <div class="justify-end items-center transition-all duration-1000 opacity-0 w-full">

      <!-- landscape -->
      <img alt="landscape" class="object-cover object-center h-64 w-full" :src="landscapeSrc">

      <!-- profile -->
      <img alt="profile" class="object-center h-48 w-48 rounded-full mx-auto transform -translate-y-1/2" :src="profileSrc">

      <!-- injected content -->
      <slot/>

    </div>

  </section>
</template>

<script>
  export default {
    name: 'v-hero',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      landscapeSrc: {
        type: String,
        required: true
      },
      profileSrc: {
        type: String,
        required: true
      }
    },
    mounted () {

      // component fade in


    }
  }
</script>
