<template>
  <section class="mx-5 md:mx-16">
    <div class="w-full bg-awesome-gradient mt-10" style="padding: 1px 0;">
      <div class="bg-gray-900">
        <h3 class="w-full text-center text-2xl tracking-widest font-light py-4 bg-clip-text text-transparent bg-awesome-gradient">
          {{ title }}
        </h3>
      </div>
    </div>
    <slot/>
  </section>
</template>

<script>
  export default {
    name: 'v-section',
    props: {
      title: { type: String, required: true }
    }
  }
</script>
