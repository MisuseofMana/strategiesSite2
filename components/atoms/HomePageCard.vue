<template>
    <v-card class="pa-10 mb-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="5">
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
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
        <v-img class="rounded-xl mb-3" max-height="800px" :src="require(`@/assets/images/${contents.heroImage}`)"/>
        <p class="text-body-1" v-if="contents.stockLink">Photo by 
          <a :href="contents.stockLink">{{contents.stockName}}</a>
        </p>
        <p class="text-body-1" v-else>Photo by {{contents.stockName}}
        </p>
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