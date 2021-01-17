<template>
  <div>

    <!-- loader -->
    <v-loader
      @stopped="()=> { this.$refs['welcome'].cycle() }"
      ref="loader"/>

    <template v-if="content">

      <!-- welcome -->
      <v-welcome
        @ended="()=> { this.$refs['background'].show() }"
        :text="content['welcome']"
        ref="welcome"/>

      <!-- background -->
      <v-background
        @shown="()=> { this.$refs['pointer'].show() }"
        :src="content['background']"
        ref="background"/>

      <!-- pointer -->
      <v-pointer
        @shown="()=> { this.$refs['main'].show() }"
        ref="pointer"/>

      <!-- main start -->
      <v-main
        @shown="()=> { this.$refs['title'].show() }"
        ref="main">

        <!-- title -->
        <v-title
          @shown="()=> { this.$refs['headline'].show() }"
          :text="content['title']"
          ref="title"/>

        <!-- headline -->
        <v-headline
          :text="content['headline']"
          @shown="()=> { this.$refs['paper'].show() }"
          ref="headline"/>

        <!-- paper start -->
        <v-paper
          ref="paper">

          <!-- hero start -->
          <v-hero
            :landscape-src="content['landscape']"
            :profile-src="content['profile']"
            ref="hero">

            <!-- quote -->
            <v-quote
              :cit="content['quote']['cit']"
              :author="content['quote']['author']"
              ref="quote"/>

          </v-hero>
          <!-- hero end -->

          <!-- experience -->
          <v-experience
            :experience="content['experience']"
            ref="experience"/>

          <!-- education -->
          <v-education
            :education="content['education']"
            ref="education"/>

          <!-- hobby -->
          <v-hobby
            :hobby="content['hobby']"
            ref="hobby"/>

        </v-paper>
        <!-- paper end -->

      </v-main>
      <!-- main end -->

      <!-- get in contact button -->
      <v-get-in-contact-button
        @click="()=> { this.$refs['contact-me-modal'].toggle() }"
        ref="get-in-contact-button"/>

      <!-- contact me modal -->
      <v-contact-me-modal
        ref="contact-me-modal"/>

      <!-- footer start -->
      <v-footer
        ref="footer">

        <!-- copyright -->
        <v-copyright
          :disclaimer="false"
          ref="copyright"/>

      </v-footer>
      <!-- footer end -->

    </template>

  </div>
</template>

<script>
  import VLoader from '../components/loader'
  import VPointer from '../components/pointer'
  import VWelcome from '../components/welcome'
  import VBackground from '../components/background'
  import VMain from '../components/main'
  import VTitle from '../components/title'
  import VHeadline from '../components/headline'
  import VGetInContactButton from '../components/getInContactButton'
  import VContactMeModal from '../components/contactMeModal'
  import VPaper from '../components/paper'
  import VHero from '../components/hero'
  import VExperience from '../components/experience'
  import VEducation from '../components/education'
  import VHobby from '../components/hobby'
  import VFooter from '../components/footer'
  import VCopyright from '../components/copyright'
  import VQuote from '../components/quote'
  export default {
    components: {
      VQuote, VLoader, VPointer, VWelcome, VBackground, VMain, VTitle, VHeadline, VGetInContactButton, VContactMeModal,
      VPaper, VHero, VExperience, VEducation, VHobby, VFooter, VCopyright
    },
    data() {
      return {
        content: null
      }
    },
    async fetch() {
      this.content = await this.$content('page').fetch()
      this.$refs['loader'].stop()
    }
  }
</script>
