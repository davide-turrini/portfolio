<template>
  <v-transition>
    <footer v-if="show" class="container relative z-10">
      <div class="flex sm:flex-row flex-col sm:justify-between py-10 mx-16">
        <p class="text-sm text-gray-500 text-center">{{ copyright }}</p>
        <div class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a v-for="(link,l) in links" :key="'footer-link-'+l"
             class="mr-3 text-gray-600 text-3xl hover:text-blue-500 v-pointer v-pointer-link"
             :href="link.href"
             :class="link.class">{{ link.text }}</a>
        </div>
      </div>
    </footer>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  export default {
    name: 'v-footer',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false },
      copyright: { type: String, required: true },
      links: { type: Array, default: [] }
    }
  }
</script>
