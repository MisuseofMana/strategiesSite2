<template>
    <p class="text-body-1 white--text mb-0" :class="[mock ? 'pink lighten-3 pa-5' : '']">
        <a class="white--text" :href="`mailto: ${email}`">{{email}}</a>
    </p>
</template>

<script>
    export default {
        props: {
            email: {
                type: String,
                default: 'BROKEN EMAIL LINK'
            },
            mock: {
                type: Boolean, 
                default: false
            }
        }
    }
</script>