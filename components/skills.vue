<template>
  <v-section :title="$t('skills')">
    <div v-for="(item,i) in skills" :key="'experience-'+i">
      <div class="py-8 flex flex-col md:flex-nowrap">

        <h4 class="text-2xl text-gray-500 title-font mb-2">
          <span class="text-gray-400">{{ item['field'] }}</span>
        </h4>
        <p class="leading-relaxed font-light text-gray-500 text-justify">{{ item['comment'] }}</p>

        <div class="flex flex-wrap overflow-hidden py-8">
          <div class="container flex flex-wrap justify-between text-gray-400 text-xs">
            <div class="border-gray-700 border px-4 mx-1 my-1 rounded-full" v-for="(tag,t) in  item['tags'].split(',')" :key="'skill-'+i+'-tag-'+t"><span class="text-xs text-gray-600">#</span> {{ tag }}</div>
          </div>
        </div>

      </div>
    </div>
  </v-section>
</template>

<script>
  import VSection from './section'
  export default {
    name: 'v-skills',
    components: { VSection },
    props: {
      skills: { type: Array, required: true }
    }
  }
</script>
