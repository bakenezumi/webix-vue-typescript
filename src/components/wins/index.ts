import * as rec from './records';
import * as rew from './review';
import * as sha from './share';

const dialogs: { [key: string]: any; }  = {};

export function init(grid: any) {
  dialogs[rec.action] = new rec.DialogBox(grid);
  dialogs[rew.action] = new rew.DialogBox(grid);
  dialogs[sha.action] = new sha.DialogBox(grid);
}

export function open(action: string) {
  const box = dialogs[action];
  if (box) {
    box.open();
  }
}
