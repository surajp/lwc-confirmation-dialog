# LWC Confirmation Dialog

Dialog to confirm user action before proceeding.

## Usage

```html
<c-confirmation-dialog></c-confirmation-dialog>
```

```js
let result = await this.template.querySelector('c-confirmation-dialog')
                        .confirm('Do you wish to proceed?');
if(result===true){
  //proceed
}
```

## Properties

| Property Name | Type   | Default Value |
| ------------- | ------ | ------------- |
| title         | string | Confirm       |
| confirmLabel  | string | Yes           |
| cancelLabel   | string | No            |
