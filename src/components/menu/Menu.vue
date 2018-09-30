<template>
  <div id='menu' style = 'float: left;'></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'webix';
import router from '../../router';

@Component
export default class Menu extends Vue {
  private layout!: webix.ui.contextmenu;

  public mounted(): void {
    this.layout = this.createLayout();
    const route = router.currentRoute;
    this.layout.select(route.name ? route.name : 'home', true);
  }

  public createLayout(): webix.ui.contextmenu {
    return webix.ui({
      view: 'menu',
      container: 'menu',
      id: 'm1',
      layout: 'y',
      width: 200,
      height: 500,
      select: true,
      data: [
        { id: 'home', value: 'home', route: '/'},
        { id: 'about', value: 'about', route: '/about'},
      ],
      on: {
        onMenuItemClick: (id: string) => {
          router.push(this.layout.getMenuItem(id).route);
        },
      },
    }) as webix.ui.contextmenu;
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
