import {Dialog} from './base';
import {iconcheck} from '../views/iconcheck';

export const action = 'share';

export class DialogBox extends Dialog {
  public init() {
    webix.protoUI(iconcheck, webix.ui.checkbox);
    return {
      view: 'window',
      position: 'center',
      head: 'Share film',
      move: true,
      modal: true,
      width: 500,
      body: {
        view: 'form',
        elements: [
          { cols: [
            { view: 'iconcheck', name: 'fb', icon: 'facebook-square', label: 'Facebook'},
            { view: 'iconcheck', name: 'twitter', icon: 'twitter', label: 'Twitter'},
            { view: 'iconcheck', name: 'gplus', icon: 'google-plus', label: 'Google +'},
          ]},
          this.getButtons('Share', 'Cancel'),
        ],
        rules: {
          $obj: (obj: any) => {
            return obj.fb || obj.twitter || obj.gplus;
          },
        },
      },
    };
  }
  public oninit() {
    this.form.attachEvent('onValidationError', () => {
      webix.message({text: 'You should check at least 1 option', type: 'error'});
    });
  }
  public apply() {
    if (this.form.validate()) {
      webix.alert('The film has been shared');
      this.close();
    }
  }
}
