<template>
  <div>
    <p class="mx-24 text-center text-gray-100 text-xl font-sans -mt-12">
      <span class="text-gray-500 text-4xl italic">“ </span> {{ cit }} <span class="text-gray-500 text-4xl italic">”</span>
    </p>
    <p class="text-center text-gray-500 text-xl italic">{{ author }}</p>
  </div>
</template>

<script>
  export default {
    name: 'v-quote',
    props: {
      value: { type: Boolean, default: false },
      cit: { type: String, required: true },
      author: { type: String, required: true }
    }
  }
</script>
