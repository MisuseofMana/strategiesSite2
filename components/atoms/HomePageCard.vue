<template>
    <v-card class="pa-10 mb-10">
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-img
          :src="require(`@/assets/images/${contents.logoImage}`)"
          :alt="contents.logoImageAltText"
          :max-width="halfSizeLogo ? '50%' : '100%'"
          class="mb-6"
        />
        <h1 class="text-h1 mb-4">{{ contents.tagline }}</h1>
        <p v-for="(text, index) in contents.copy" :key="`company-copy-${index}`" class="text-body-1">{{text}}</p>
      </v-col>
      <v-spacer/>
      <v-col cols="6" >
        <v-img class="rounded-xl" :src="require(`@/assets/images/${contents.heroImage}`)"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
    export default {
        name: 'HomePageCard',
        props: {
            contents: {
                type: Object,
                default: () => {}
            },
            halfSizeLogo: {
              type: Boolean,
              default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>