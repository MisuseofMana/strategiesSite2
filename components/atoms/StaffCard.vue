<template>
 <v-card class="pa-10 mb-10">
    <v-row align="center" justify="center">
        <v-spacer/>
        <v-col cols="12" md="4" class="d-flex flex-column align-center text-center">
            <v-img v-if="image" class="rounded mb-4" :src="require(`@/assets/images/staff/${image}.png`)"/>
            <h2 class="text-h2">{{who}}</h2>
            <h3 class="text-h3">{{rank}}</h3>
            <v-img v-if="badge" class="mt-3" max-width="90px" :src="require('@/assets/images/staff/shrm.png')"/>
        </v-col>
        <v-col cols="12" md="6">
            <p v-for="(item, index) in paragraphs" :key="makeUniqueId(item, index)" class="text-body-1" :class="[mock ? 'red--text' : '' ]">
                {{item}}
            </p>
        </v-col>
        <v-spacer/>
    </v-row>
</v-card>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                default: '',
            },
            who: {
                type: String,
                default: ''
            },
            rank: {
                type: String,
                default: '',
            },
            paragraphs: {
                type: Array,
                default: () => [],
            },
            badge: {
                type: Boolean,
                default: false,
            },
            mock: {
                type: Boolean,
                default: false,
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
    .rounded {
        border-radius: 9999px;
        height:10rem;
        width:10rem;
    }
</style>