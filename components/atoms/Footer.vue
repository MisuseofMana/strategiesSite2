<template>
<v-card elevation="1" class="pa-10 mb-10" color="#dddddd">
    <v-row class="d-flex">
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