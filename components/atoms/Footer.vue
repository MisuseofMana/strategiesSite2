<template>
<v-card elevation="1" class="pa-10 mb-10" color="#fafafa">
    <v-row class="d-flex align-start">
        <v-col cols="12" md="3" :class="centerStyle">
            <slot name="left"></slot>
        </v-col>
        <v-col cols="12" md="3" :class="centerStyle">
            <slot name="middle">

            </slot>
        </v-col>
        <v-col cols="12" md="6" :class="centerStyle">
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