import {injecct, customElement, useView, bindable} from 'aurelia-framework';

import {inject, customAttribute, bindable, noView} from 'aurelia-framework';

@customAttribute('froala')
@bindable({name: 'allowComments', defaultValue: true})
@bindable({name: 'allowedAttrs', defaultValue: '*'})
@bindable({name: 'allowedBlankTags', defaultValue: '*'})
@bindable({name: 'allowedFileTypes', defaultValue: '*'})
@bindable({name: 'allowedImageTypes', defaultValue: ['jpeg', 'jpg', 'png', 'gif']})
@bindable({name: 'allowedTags', defaultValue: '*'})
@bindable({name: 'allowScripts', defaultValue: false})
@bindable({name: 'allowStyle', defaultValue: false})
@bindable({name: 'alwaysBlank', defaultValue: false})
@bindable({name: 'alwaysVisible', defaultValue: false})
@bindable({name: 'autosave', defaultValue: true})
@bindable({name: 'autosaveInterval', defaultValue: 10000})
@bindable({name: 'beautifyCode', defaultValue: true})
@bindable({name: 'blockStyles', defaultValue: {}})
@bindable({name: 'blockStylesToggle', defaultValue: true})
@bindable({name: 'blockTags', defaultValue: '*'})
@bindable({name: 'buttons', defaultValue: '*'})
@bindable({name: 'colorGroups', defaultValue: '*'})
@bindable({name: 'colors', defaultValue: '*'})
@bindable({name: 'colorsStep', defaultValue: 7})
@bindable({name: 'convertMailAddresses', defaultValue: true})
@bindable({name: 'countCharacters', defaultValue: true})
@bindable({name: 'crossDomain', defaultValue: true})
@bindable({name: 'customButtons', defaultValue: {}})
@bindable({name: 'customDropdowns', defaultValue: {}})
@bindable({name: 'customImageButtons', defaultValue: {}})
@bindable({name: 'customText', defaultValue: {}})
@bindable({name: 'defaultBlockStyle', defaultValue: {'f-italic': 'Italic', 'f-typewriter': 'Typewriter', 'f-spaced': 'Spaced', 'f-uppercase': 'Uppercase'}})
@bindable({name: 'defaultColorGroup', defaultValue: 'foreColor'})
@bindable({name: 'defaultImageAlignment', defaultValue: 'center'})
@bindable({name: 'defaultImageDisplay', defaultValue: 'block'})
@bindable({name: 'defaultImageTitle', defaultValue: 'Image title'})
@bindable({name: 'defaultImageWidth', defaultValue: 300})
@bindable({name: 'inlineMode', defaultValue: true})
@noView
@inject(Element)
export class Froala { 
  constructor(element) {
    this.element = element;
    console.log("Froala initializing");
  }
 
  attached() {
    console.log($(this.element));
    $(this.element).editable({
      inlineMode: false,
      useClasses: true
    });
  }
}