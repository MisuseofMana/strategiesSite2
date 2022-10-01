<template>
    <div class="mb-10">
        <h2 class="text-h2 mb-3">
            {{heading}}
          </h2>
          <p v-for="(text, index) in paragraphs" :key="`${uniqueId}-${index}`" class="text-body-1">
           {{text}}
          </p>
    </div>
</template>

<script>
    export default {
        props: {
            heading: {
                type: String,
                default: 'DEFAULT HEADING'
            },
            paragraphs: {
                type: Array,
                default: () => ['Mock Paragraph', 'Mock Paragraph 2'],
            },
            uniqueId: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>