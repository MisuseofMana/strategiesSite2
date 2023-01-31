<template>
    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h2">
            {{heading}}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
            <ul class="text-body-1">
                <li v-for="(item, index) in firstHalfOfList" :key="makeUniqueId(item.question, index)">
                    <strong>{{item.question}}</strong>
                    <ul>
                        <li>
                            {{item.answer}}
                        </li>
                    </ul>
                </li>
            </ul>
        </v-col>
        <v-col cols="12" md="6">
            <ul class="mb-10 text-body-1">
                <li v-for="(item, index) in secondHalfOfList" :key="makeUniqueId(item.question, index)">
                    <strong>{{item.question}}</strong>
                    <ul>
                        <li>
                            {{item.answer}}
                        </li>
                    </ul>
                </li>
            </ul>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
    export default {
        props: {
            heading: {
                type: String,
                default: ''
            },
            listItems: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            makeUniqueId(string, index) {
                return string.split(' ').join('').slice(0, 5) + '-' + index
            }
        },
        computed: {
            lowerHalf() {
                return Math.ceil(this.listItems.length / 2)
            },
            firstHalfOfList() {
                return this.listItems.slice(0, this.lowerHalf + 1) 
            },
            secondHalfOfList() {
                return this.listItems.slice(this.lowerHalf + 1) 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>