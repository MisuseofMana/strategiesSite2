<template>
    <v-card class="pa-10 mb-10">
    <v-row>
        <v-col>
            <slot name="heading"></slot>
        </v-col>
    </v-row>
      <v-row :class="[center ? 'd-flex align-center justify-center' : '']">
        <v-col cols="12" :md="leftCols">
            <slot name="left"></slot>
        </v-col>
        <v-col cols="12" :md="rightCols">
            <slot name="right"></slot>
        </v-col>
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
        },
        center: {
            type: Boolean,
            default: false
        }
    }
}
</script>
