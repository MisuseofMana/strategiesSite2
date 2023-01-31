<template>
<v-card elevation="1" class="pa-10 mb-10" color="#e9e9e9">
    <v-row class="d-flex align-center">
        <v-col cols="12" md="3" class="my-5">
            <slot name="left"></slot>
        </v-col>
        <v-col cols="12" md="3">
            <slot name="middle">

            </slot>
        </v-col>
        <v-col cols="12" md="6">
            <slot name="right"></slot>
        </v-col>    
    </v-row>
</v-card>
</template>

<script>
export default {
    mounted() {
        console.log(this.$vuetify.breakpoint.mobile)
    }
}
</script>