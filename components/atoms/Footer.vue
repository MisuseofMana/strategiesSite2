<template>
<v-card elevation="1" class="pa-10 mb-10" color="#fafafa">
    <v-row class="d-flex align-start">
        <v-col cols="12" md="2" :class="centerStyle">
            <slot name="left"></slot>
        </v-col>
        <v-col cols="12" md="5" :class="centerStyle">
            <slot name="middle">

            </slot>
        </v-col>
        <v-col cols="12" md="5" :class="centerStyle">
            <slot name="right"></slot>
        </v-col>    
    </v-row>
</v-card>
</template>

<script>
export default {
    computed: {
        centerStyle() {
            if(this.$vuetify.breakpoint.mobile) {
                return 'd-flex justify-center align-center flex-column text-center'
            }
            return ''
        }
    },
}
</script>