<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/menu/Menu.vue'; // @ is an alias to /src

@Component({
  components: {
    Menu,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/webix-skin-material/skins/material.css'
</style>
