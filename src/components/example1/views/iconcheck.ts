interface IconCheckConfig extends webix.ui.checkboxConfig {
  icon: string;
  label: string;
}

interface IconCheckApi {
  name: string;
  $init(config: IconCheckConfig): void;
  getIconLabel(icon: string, label: string): string;
}

interface IconCheckView extends webix.ui.checkbox, IconCheckApi {}

export const iconcheck: IconCheckApi = {
  name: 'iconcheck',
  $init(config) {
    config.label = (this as IconCheckView).getIconLabel(config.icon, config.label);
    config.labelWidth = 100;
  },
  getIconLabel(icon, label) {
    return '<span class="webix_icon fa-' + icon + '"></span>' + label;
  },
};
