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
      <v-list class="px-2" :opened="open">
          <v-list-item active-class="sitePage-active" router exact to="/">
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-1">The Strategies</v-list-item-title>
          </v-list-item>

          <v-list-group
          :value="true"
          no-action
        >
          <template #activator>
              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-body-1">Care Strategies</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, i) in careStrategiesSubItems"
            :key="i+'careItem'"
            active-class="sitePage-active"
            router
            exact
            :to="subItem.to"
          >
          <v-list-item-icon>
            <v-icon>{{ subItem.icon }}</v-icon>
          </v-list-item-icon>
            <v-list-item-title class="text-body-1">{{ subItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item v-for="(item, i) in items" :key="i+'remainingItems'" active-class="sitePage-active" router exact :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-1">{{ item.title }}</v-list-item-title>
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
      open: ['CareStrategies'],
      navigation: null,
      fixed: false,
      careStrategiesSubItems: [
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
      ],
      items: [
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