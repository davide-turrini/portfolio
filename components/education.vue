<template>
  <v-section :title="$t('education')">
    <div v-for="(item,i) in education" :key="'experience-'+i">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{{ item['where'] }}</span>
          <span class="mt-1 text-gray-500 text-sm">{{ item['from'] }} - {{ item['to'] }}</span>
          <span class="mt-1 text-gray-400 text-sm capitalize">{{ $t('score') }}: {{ item['score'] }}</span>
        </div>
        <div class="md:flex-grow">
          <h4 class="text-xl text-gray-400 title-font mb-2 capitalize">{{ item['title'] }}</h4>
          <h5 class="text-xl text-gray-300 title-font mb-2 capitalize">{{ item['school'] }}</h5>
          <p class="leading-relaxed font-light text-gray-500 md:text-left text-justify">{{ item['description'] }}</p>
        </div>
      </div>
    </div>
  </v-section>
</template>

<script>
  import VSection from './section'
  export default {
    name: 'v-education',
    components: { VSection },
    props: {
      education: { type: Array, required: true }
    }
  }
</script>
