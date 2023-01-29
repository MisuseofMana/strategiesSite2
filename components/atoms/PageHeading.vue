<template>
 <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center"
      >
        <v-img max-width="25rem" :src="require(`@/assets/images/${logo}`)" :alt="altText"/>
        <h1 class="text-h2 text-center">
          {{tagline}}
        </h1>
      </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            logo: {
                type: String,
                default: 'temp.jpg'
            },
            tagline: {
                type: String,
                default: 'Your Tagline Here'
            },
            altText: {
              type: String,
              default: 'Page Logo'
            }
          
        }
    }
</script>

<style lang="scss" scoped>

</style>