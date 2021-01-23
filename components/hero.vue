<template>
  <section class="flex flex-col bg-gradient-to-b from-black text-white ">
    <img alt="landscape" class="object-cover object-center h-64 w-full" :src="landscapeSrc">
    <img alt="profile" class="object-center h-48 w-48 rounded-full mx-auto transform -translate-y-1/2" :src="profileSrc">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: 'v-hero',
    props: {
      landscapeSrc: { type: String, required: true },
      profileSrc: { type: String, required: true }
    }
  }
</script>
