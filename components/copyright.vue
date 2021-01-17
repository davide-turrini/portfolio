<template>
  <div class="
  container px-5 py-8 mx-auto
  flex items-center sm:flex-row flex-col">

    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">Copyleft {{ new Date().getFullYear() }} {{ who }} —
      definitely no rights reserved.
    </p>

    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="mdi mdi-phone mr-3 text-gray-500 text-3xl hover:text-white transition duration-1000"></a>
      <a class="mdi mdi-gmail mr-3 text-gray-500 text-3xl hover:text-white transition duration-1000"></a>
      <a class="mdi mdi-npm mr-3 text-gray-500 text-3xl hover:text-white transition duration-1000"></a>
      <a class="mdi mdi-github mr-3 text-gray-500 text-3xl hover:text-white transition duration-1000"></a>
      <a class="mdi mdi-linkedin mr-3 text-gray-500 text-3xl hover:text-white transition duration-1000"></a>
    </span>

  </div>
</template>

<script>
  export default {
    name: 'v-copyright',
    props: {
      disclaimer: {
        type: String,
        required: true
      },
      icons: {
        type: Array,
        default: []
      }
    }
  }
</script>
