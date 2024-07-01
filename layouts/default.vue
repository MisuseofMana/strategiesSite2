<template>
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        app
        bottom
        floating
        color="primary"
        width="450"
      >
      <div class="mx-5 mt-2 mb-5">
        <h2 class="text-h2 white--text mb-2">Main</h2>
        <v-btn 
          to="/"
          color="teal lighten-5"
          width="100%"
          class="mb-2"
          x-large
          >
          <v-icon class="mr-1">mdi-home</v-icon>
          Home
          </v-btn>
        <v-btn 
          href="https://thestrategiesstore.itemorder.com/shop/home/"
          target="_blank"
          color="teal lighten-5"
          width="100%"
          class="mb-2"
          x-large
          >
          <v-icon class="mr-1">mdi-shopping</v-icon>
          Strategies Store
          </v-btn>
      </div>  
      <div class="mx-5 mt-2 mb-5">  
        <h2 class="text-h2 white--text mb-2">Care Strategies</h2>
        <v-btn 
          v-for="item in careStrategiesSubItems"
          :key="item.icon"
          :to="item.to"
          color="teal lighten-5"
          width="100%"
          class="mb-2"
          x-large
          >
          <v-icon class="mr-1">{{ item.icon }}</v-icon>
          {{ item.title }}
          </v-btn>
        </div>
        <div class="mx-5 mt-2 mb-5">
          <h2 class="text-h2 white--text mb-2">Info Pages</h2>
        <v-btn 
          v-for="item in items"
          :key="item.icon"
          :to="item.to"
          color="teal lighten-5"
          width="100%"
          class="mb-2"
          x-large
          elevation="5"
          >
          <v-icon class="mr-1">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </div>
      </v-navigation-drawer>
  
      <v-app-bar prominent elevation="2" app width="100%">
        <v-toolbar-title>
        <v-img
            :src="require('@/assets/images/strategies-logo.png')"
            alt="The Strategies Logo"
            eager
            max-width="350"
        />
        <h1 class="d-sr-only">The Strategies</h1>
        </v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <div class="pa-md-15 pa-10">
          <v-btn
        elevation="1"
        class="d-flex align-center justify-center mb-10 white--text pa-7 d-lg-none"
        color="primary"
        @click="drawer = !drawer"
      >
        <v-icon class="mr-2">{{menuIcon}}</v-icon>
        <span v-if="drawer"> CLOSE MENU </span>
        <span v-if="!drawer"> OPEN MENU </span>
      </v-btn>
            <Nuxt/>
            <v-btn
        elevation="1"
        class="d-flex align-center justify-center mb-10 white--text pa-7 d-lg-none"
        color="primary"
        @click="drawer = !drawer"
      >
        <v-icon class="mr-2">{{menuIcon}}</v-icon>
        <span v-if="drawer"> CLOSE MENU </span>
        <span v-if="!drawer"> OPEN MENU </span>
      </v-btn>
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data() {
        return {
        drawer: null,
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
          title: 'Innovative Treatment',
          to: '/innovative-treatment-strategies',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Our Team',
          to: '/our-team',
        },
      ],
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
      }
      },
      computed: {
          menuIcon() {
            if(this.drawer === false || this.drawer === null) {
              return 'mdi-menu'
            }
            else {
              return 'mdi-close-thick'
            }
          }
        },
    }
  </script>