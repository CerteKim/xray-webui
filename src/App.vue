<template>
  <v-app>
    <v-card class="mx-auto overflow-hidden" tile>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        color="white"
        app
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../src/assets/logo.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Xray Webui</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-list nav dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
            v-on:click="title=item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-card class="overflow-hidden" tile style="position: sticky; top: 0">
      <v-app-bar
        absolute
        color="#66ccff"
        dense
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        tile
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>{{ title }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="calc(100vh)"
      >
        <v-container style="margin-top: 56px; height: calc(100vh - 56px)">
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => {
    return {
      drawer: false,
      title: "Home",
      items: [
        { title: "Home", icon: "mdi-home-city", link: "/" },
        { title: "Status", icon: "mdi-chart-donut", link: "/Status" },
        { title: "About", icon: "mdi-information-outline", link: "/About" },
      ],
      mini: true,
    };
  },
};
</script>
