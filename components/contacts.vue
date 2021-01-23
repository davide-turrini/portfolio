<template>
  <v-transition @after-enter="$emit('ok')">
    <div v-if="show">
      <button class="fixed z-20 bottom-0 right-0 mr-10 mb-10 w-16 h-16 rounded-full border-2 border-gray-800 bg-gray-900 text-gray-700 mdi mdi-message text-3xl shadow-xl animate__animated animate__jello animate__delay-2s focus:outline-none hover:text-white hover:border-white v-pointer v-pointer-link transition duration-500" @click="open"></button>
      <v-transition enter-active-class="animate__animated animate__zoomInDown" :leave-active-class="'animate__animated ' + (success ? 'animate__zoomOutUp' : 'animate__rotateOutDownLeft')">
        <div v-if="modal" class="fixed z-30 top-0 left-0 w-screen h-screen bg-transparent flex justify-end items-center p-5 md:p-20" @click="close">
          <div class="absolute z-40 bg-gradient-to-b from-gray-900 to-gray-800 py-6 px-6 shadow-xl rounded-xl text-gray-400 relative" @click.stop>
            <h2 class="text-2xl font-medium title-font">Get in contact</h2>
            <p class="mb-5 text-gray-600">I'll contact you as soon as possible</p>
            <div class="relative">
              <label class="leading-7 text-sm text-gray-600">Email / Phone</label>
              <input v-model="from.value" type="email"
                     :class="{
                        'border-green-800': from.isValid && from.value!=='',
                        'border-red-800': !from.isValid && from.value!=='',
                        'border-gray-800': from.value === ''
                      }"
                     class="w-full bg-gray-900 rounded border focus:border-indigo-900 outline-none text-gray-700 py-1 px-3 leading-8">
            </div>
            <div class="relative">
              <label class="leading-7 text-sm text-gray-600">Message</label>
              <textarea v-model="message.value" name="message"
                        :class="{
                        'border-green-800': message.isValid && message.value!=='',
                        'border-red-800': !message.isValid && message.value!=='',
                        'border-gray-800': message.value === ''
                      }"
                        class="w-full bg-gray-900 rounded border border-gray-800 focus:border-indigo-900 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6"></textarea>
            </div>
            <button
              :class="{
                'bg-gradient-to-b from-purple-500 to-gray-700':isValid,
                'bg-gradient-to-b from-gray-500 to-gray-700':!isValid
              }"
              class="absolute top-0 right-0 mt-8 -mr-4 mdi mdi-send w-12 h-12 rounded-full text-2xl text-white border-0 focus:outline-none hover:bg-indigo-600" @click="isValid ? send() : null"></button>
          </div>
        </div>
      </v-transition>
    </div>
  </v-transition>
</template>

<script>
  import VTransition from './transition'
  import { detectBrowserLanguage } from '../.nuxt/nuxt-i18n/options'
  export default {
    name: 'v-contacts',
    components: { VTransition },
    props: {
      show: { type: Boolean, default: false },
      whatsapp: { type: String, required: true },
      callmebot: { type: String, required: true }
    },
    data() {
      return {
        success: false,
        modal: false,
        from: {
          value: '',
          isValid: false
        },
        message: {
          value: '',
          isValid: false
        }
      }
    },
    computed: {
      isValid () {
        return this.from.isValid && this.message.isValid
      }
    },
    mounted () {
      this.$watch('from.value', (value) => {
        this.from.isValid =
          // validating phone
          (/^(\+\d{3})?\d{9}$/.test(value.replace(/\s+/g, ''))) ||
          // validating email
          (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
      })
      this.$watch('message.value', (value) => {
        this.message.isValid = (
          value.length > 0
        )
      })
    },
    methods: {
      send () {
        let msg = this.$t('onDate') + '\n' + ((new Date()).toUTCString()) + '\n\n[ ' + this.from.value + ' ]\n\n' + this.$t('wrote') + ':\n\n' + this.message.value
        this.$http.$get('https://cors-anywhere.herokuapp.com/api.callmebot.com/whatsapp.php?phone=' + this.whatsapp +'&text='+encodeURI(msg)+'&apikey='+this.callmebot)
        this.success = true
        this.$nextTick(()=>{
          this.message.value = ''
          this.from.value = ''
          this.close()
        })
      },
      open () {
        this.modal = true
        this.success = false
      },
      close () {
        this.modal = false
      }
    }
  }
</script>
