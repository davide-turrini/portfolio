<template>
  <v-transition @after-enter="$emit('ok')" >
    <div v-if="show" class="absolute z-40 top-0 right-0 text-xs inline-flex">
      <nuxt-link
        class="border-t px-4 text-center v-pointer v-pointer-link hover:text-white hover:border-white uppercase"
        :class="{
          'text-gray-300 border-gray-300': (locale.code === $i18n.locale),
          'text-gray-500 border-gray-500': (locale.code !== $i18n.locale)
        }"
        v-for="locale in allLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>
    </div>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  export default {
    name: 'v-language-switcher',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false }
    },
    computed: {
      allLocales () {
        return this.$i18n.locales
      }
    }
  }
</script>
