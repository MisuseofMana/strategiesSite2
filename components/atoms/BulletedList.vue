<template>
<div>
    <p v-if="paragraph" class="text-body-1">{{paragraph}}</p>
    <h2 v-if="headingOne" class="text-h2 mb-5">{{headingOne}}</h2>
    <h3 v-if="headingTwo" class="text-h3 mb-4">{{headingTwo}}</h3>
    <ul class="mb-10 text-body-1">
    <li v-for="(item, index) in listItems" :key="makeUniqueId(item, index)">{{item}}</li>
    </ul>
</div>
</template>

<script>
    export default {
        props: {
            listItems: {
                type: Array,
                default: () => []
            },
            paragraph: {
                type: String,
                default: '',
            },
            headingOne: {
                type: String,
                default: '',
            },
            headingTwo: {
                type: String,
                default: ''
            }
        },
        methods: {
            makeUniqueId(string, index) {
                return string.split(' ').join('').slice(0, 5) + '-' + index
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>