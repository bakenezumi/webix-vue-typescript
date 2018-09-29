<template>
  <div></div>
</template>

<script lang='ts'>
import * as wins from './wins/index';
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'webix';

@Component
export default class Example1 extends Vue {
  private layout: webix.ui.layout = this.createLayout();

  public created(): void {
    this.init();
  }
  public destroyed(): void {
    this.layout.destructor();
  }
  public init(): void {
    const grid: webix.ui.datatable = this.layout.getChildViews()[1];
    this.createDialogs(grid);
  }
  public createLayout(): webix.ui.layout {
    const datatable: webix.ui.datatableConfig = {
      view: 'datatable',
      id: 'filmsdata',
      editable: true,
      editaction: 'dblclick',
      autoConfig: true,
      url: 'server/films.json',
      pager: 'pagerA',
      scrollX: false,
    };

    const pager: webix.ui.pagerConfig = {
      view: 'pager', id: 'pagerA',
      group: 10, size: 30,
    };
    return webix.ui({
      padding: 50,
      width: 800,
      height: 590,
      type: 'space',
      rows: [
        { view: 'toolbar', cols: [
          { view: 'label', label: 'Film Collection'},
          {},
          {
            view: 'button', type: 'iconButton',
            icon: 'plus', label: 'Add new film', autowidth: true,
            click: () => this.openDialog('record'),
          },
          {
            view: 'button', type: 'iconButton',
            icon: 'star', label: 'Rate film', autowidth: true,
            click: () => this.openDialog('rating'),
          },
          {
            view: 'button', type: 'iconButton',
            icon: 'share', label: 'Share film', autowidth: true,
            click: () => this.openDialog('share'),
          },
        ]},
        datatable,
        pager,
      ],
    }) as webix.ui.layout;
  }
  public createDialogs(grid: webix.ui.datatable): void {
    wins.init(grid);
  }
  public openDialog(action: string): void {
    wins.open(action);
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
