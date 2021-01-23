<template>
  <div class="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
    <v-loader :show="!content" @ok="show['pointer'] = true"/>
    <template v-if="content">
      <v-pointer :show.sync="show['pointer']" @ok="show['welcome'] = true"/>
      <v-welcome :show.sync="show['welcome']" :text="content['welcome']" @ok="show['background'] = true"/>
      <v-background :show="show['background']" :src="content['background']" @ok="show['header'] = true"/>
      <v-header :show="show['header']" :title="content['header']['title']" :headline="content['header']['headline']" @ok="show['main'] = true"/>
      <v-main :show="show['main']" @ok="show['contacts'] = true">
        <v-hero :landscape-src="content['hero']['landscape']" :profile-src="content['hero']['profile']">
          <v-quote :cit="content['hero']['quote']['cit']" :author="content['hero']['quote']['author']"/>
        </v-hero>
        <v-experience :experience="content['experience']"/>
        <v-education :education="content['education']"/>
        <v-skills :skills="content['skills']"/>
      </v-main>
      <v-contacts :show="show['contacts']" :whatsapp="content['contacts']['whatsapp']" :callmebot="content['contacts']['callmebot']" @ok="show['languageSwitcher'] = true"/>
      <v-language-switcher :show="show['languageSwitcher']" @ok="show['footer'] = true"/>
      <v-footer :show="show['footer']" :copyright="content['footer']['copyright']" :links="content['footer']['links']"/>
    </template>
  </div>
</template>

<script>
  import VHeader from '../components/header'
  import VLoader from '../components/loader'
  import VPointer from '../components/pointer'
  import VWelcome from '../components/welcome'
  import VBackground from '../components/background'
  import VMain from '../components/main'
  import VContacts from '../components/contacts'
  import VHero from '../components/hero'
  import VExperience from '../components/experience'
  import VEducation from '../components/education'
  import VSkills from '../components/skills'
  import VLanguageSwitcher from '../components/languageSwitcher'
  import VFooter from '../components/footer'
  import VQuote from '../components/quote'
  export default {
    head () {
      return {
        title: this.$t('seo.title'),
        meta: [
          { hid: 'description', name: 'description', content: this.$t('seo.description') },
          { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ],
      }
    },
    components: {
      VLanguageSwitcher,
      VHeader,
      VQuote,
      VLoader,
      VPointer,
      VWelcome,
      VBackground,
      VMain,
      VContacts,
      VHero,
      VExperience,
      VEducation,
      VSkills,
      VFooter
    },
    data () {
      return {
        content: null,
        show: {
          welcome: false,
          background: false,
          pointer: false,
          header: false,
          main: false,
          contacts: false,
          languageSwitcher: false,
          footer: false
        }
      }
    },
    async fetch () {
      setTimeout(async ()=> {
        this.content = await this.$content(this.$i18n.locale+'/page').fetch()
      }, 2000)
    }
  }
</script>
