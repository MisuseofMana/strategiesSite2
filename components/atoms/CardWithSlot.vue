<template>
    <v-card class="pa-10 mb-10">
      <v-row>
        <v-spacer/>
        <v-col :cols="leftCols">
            <slot name="left"></slot>
        </v-col>
        <v-spacer/>
        <v-col :cols="rightCols">
            <slot name="right"></slot>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        leftCols: {
            type: String,
            default: '8',
        },
        rightCols: {
            type: String,
            default: '4',
        }
    }
}
</script>
