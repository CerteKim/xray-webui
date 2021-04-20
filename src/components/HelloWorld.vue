<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Xray</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Xray developers,
          <br />please join our online
          <a href="https://t.me/projectXray" target="_blank">Telegram Group</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>