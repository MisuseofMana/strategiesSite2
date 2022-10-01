<template>
<v-card elevation="0" class="pa-10 mb-10" color="rgb(240,240,240)">
    <v-row align="center" justify="center">
    <v-spacer/>
    <v-col cols="2">
        <slot name="left"></slot>
    </v-col>
    <v-col cols="5">
        <slot name="middle">

        </slot>
    </v-col>
    <v-col cols="3">
        <slot name="right"></slot>
    </v-col>
    <v-spacer/>
    </v-row>
</v-card>
</template>