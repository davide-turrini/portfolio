<template>
  <v-section :title="$t('experience')">
    <div v-for="(item,i) in experience" :key="'experience-'+i">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{{ item['where'] }}</span>
          <span class="mt-1 text-gray-500 text-sm">{{ item['from'] }} - {{ item['to'] }}</span>
        </div>
        <div class="md:flex-grow">
          <h4 class="text-2xl text-gray-500 title-font mb-2">
            <span class="text-gray-400">{{ item['title'] }}</span>
            {{ $t('at') }}
            <span class="text-gray-300">{{ item['company'] }}</span>
          </h4>
          <p class="leading-relaxed font-light text-gray-500 text-justify md:text-left">{{ item['description'] }}</p>
        </div>
      </div>
    </div>
  </v-section>
</template>

<script>
  import VSection from './section'
  export default {
    name: 'v-experience',
    components: { VSection },
    props: {
      experience: { type: Array, required: true }
    }
  }
</script>
