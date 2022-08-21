<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="navigation"
      color="rgb(238,238,238)"
      app
      width="25rem"
      class="px-10 pt-10"
    >
      <v-img
        :src="require('@/assets/images/strategies-logo.png')"
        max-height="150"
        class="mb-5"
      />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :class="[item.subItem ? 'ml-5' : '']"
          active-class="sitePage-active"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-body-1" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container :fluid="navigation" class="pa-10">
        <v-btn
          elevation="1"
          class="d-flex align-center justify-center mb-5 white--text pa-7"
          color="primary"
          @click="toggleNavigation"
        >
          <v-icon class="mr-2">mdi-menu</v-icon>
          <span v-if="navigation"> CLOSE MENU </span>
          <span v-if="!navigation"> OPEN MENU </span>
        </v-btn>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultPage',
  data() {
    return {
      navigation: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'The Strategies',
          to: '/',
        },
        {
          icon: 'mdi-handshake-outline',
          title: 'Rehab Strategies',
          to: '/rehab-strategies',
        },
        {
          icon: 'mdi-handshake-outline',
          title: 'Work for Rehab Strategies',
          to: '/work-for-rehab-strategies',
          subItem: true,
        },
        {
          icon: 'mdi-account-group',
          title: 'Staffing Strategies',
          to: '/staffing-strategies',
        },
        {
          icon: 'mdi-bottle-tonic-plus-outline',
          title: 'Care Strategies',
          to: '/care-strategies',
        },
        {
          icon: 'mdi-bottle-tonic-plus-outline',
          title: 'Work for Care Strategies',
          to: '/work-for-care-strategies',
          subItem: true
        },
        {
          icon: 'mdi-desktop-classic',
          title: 'Innovative Treatment Strategies',
          to: '/innovative-treatment-strategies',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Our Team',
          to: '/our-team',
        },
      ],
    }
  },
  methods: {
    toggleNavigation() {
      this.navigation = !this.navigation
    },
  },
}
</script>

<style scoped>
.sitePage-active {
  color:white;
  background: #008080;
}
</style>