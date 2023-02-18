<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="navigation"
      color="rgb(238,238,238)"
      app
      width="30rem"
      class="px-10 pt-10"
    >

      <v-btn
          v-if="$vuetify.breakpoint.mobile"
          elevation="1"
          class="d-flex align-center justify-center mb-10 white--text pa-7"
          color="primary"
          @click="toggleNavigation"
        >
          <v-icon class="mr-2">{{menuIcon}}</v-icon>
          <span v-if="navigation"> CLOSE MENU </span>
          <span v-if="!navigation"> OPEN MENU </span>
        </v-btn>

      <v-img
        :src="require('@/assets/images/strategies-logo.png')"
        max-height="150"
        class="mb-5 mx-2"
        eager
      />
      <v-list class="px-2">
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
          class="d-flex align-center justify-center mb-10 white--text pa-7"
          color="primary"
          @click="toggleNavigation"
        >
          <v-icon class="mr-2">{{menuIcon}}</v-icon>
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
          icon: 'mdi-arm-flex',
          title: 'Rehab Strategies',
          to: '/rehab-strategies',
        },
        {
          icon: 'mdi-account-group',
          title: 'Staffing Strategies',
          to: '/staffing-strategies',
        },
        {
          icon: 'mdi-bottle-tonic-plus-outline',
          title: 'Brookside Care Strategies',
          to: '/brookside-care-strategies',
        },
        {
          icon: 'mdi-leaf',
          title: 'GentleCare Strategies',
          to: '/gentle-care-strategies',
        },
        {
          icon: 'mdi-nature-people',
          title: 'Sycamore Care Strategies',
          to: '/sycamore-care-strategies',
        },
        {
          icon: 'mdi-head-heart',
          title: 'Poplar Care Strategies',
          to: '/poplar-care-strategies',
        },
        {
          icon: 'mdi-bird',
          title: 'Cardinal Care Strategies',
          to: '/cardinal-care-strategies',
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
  computed: {
    menuIcon() {
      if(this.navigation === false) {
        return 'mdi-menu'
      }
      else {
        return 'mdi-close-thick'
      }
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