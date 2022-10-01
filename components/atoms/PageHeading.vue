<template>
 <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center"
      >
        <v-img max-width="50%" :src="require(`@/assets/images/${logo}`)" />
        <h1 class="text-h1">
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>