<template>
  <v-app dark>
    <v-app-bar prominent app elevation="2" class="px-2">
      <!-- <v-app-bar-nav-icon>
       <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon> -->

      <v-app-bar-title>      
        <v-img
        :src="require('@/assets/images/strategies-logo.png')"
        alt="The Strategies Logo"
        eager
        max-width="300"
        />
        <h1 class="d-sr-only">The Strategies</h1>
      </v-app-bar-title>

      <v-spacer/>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab 
            v-for="item in items"
            :href="item.to"
            :key="item.icon"
          >
            {{ item.title }}
            <v-icon>{{ item.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    <v-navigation-drawer
      v-if="false"
      v-model="navigation"
      color="rgb(238,238,238)"
      app
      width="30rem"
      class="px-10 pt-10"
    >

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

          <v-list-item active-class="sitePage-active" target="_blank" href="https://thestrategiesstore.itemorder.com/shop/home/">
            <v-list-item-icon>
              <v-icon>mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-1">Strategies Store</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-10">
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
      tab: null,
      open: ['CareStrategies'],
      fixed: false,
      careStrategiesSubItems: [
        {
          icon: 'mdi-bottle-tonic-plus-outline',
          title: 'Brookside Care Strategies',
          to: '/brookside-care-strategies',
        },
        {
          icon: 'mdi-bird',
          title: 'Cardinal Care Strategies',
          to: '/cardinal-care-strategies',
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