export class Dialog {
  protected dialog!: webix.ui.window;
  protected form!: webix.ui.form;
  protected grid: webix.ui.datatable;
  constructor(grid: webix.ui.datatable) {
    this.grid = grid;
  }
  public init(): void {}
  public oninit(): void {}
  public apply(): void {}
  public onshow(): void {}
  public onhide(): void {
    this.form.clear();
  }
  public open(): void {
    if (!this.dialog) {
      this.dialog = webix.ui(this.init()) as webix.ui.window;
      this.form = this.dialog.getBody();

      this.dialog.attachEvent('onHide', () => this.onhide());
      this.dialog.attachEvent('onShow', () => this.onshow());
      this.oninit();
    }
    this.dialog.show();
  }
  public close(): void {
    this.dialog.hide();
  }
  public getButtons(ok: string, cancel: string): webix.ui.layoutConfig {
    return { cols: [
      { view: 'button', value: ok, type: 'form', click: () => this.apply() },
      { view: 'button', value: cancel, click: () => this.close() },
    ]};
  }
}
