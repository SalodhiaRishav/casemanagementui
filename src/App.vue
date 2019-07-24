<template>
  <div id="app">
    <app-client></app-client>
  </div>
</template>

<script>
import Client from "@/components/Client.vue";

export default {
  name: "app",
  components: {
    appClient: Client
  }
};
</script>
