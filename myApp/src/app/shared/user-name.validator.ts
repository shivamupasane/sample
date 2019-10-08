import { AbstractControl, ValidatorFn } from "@angular/forms";

//export function forbiddenNameValidator(control: AbstractControl) : {[key : string]: any} | null {
  //  let forbiddenName = /admin/.test(control.value);
    //return forbiddenName ? {'forbiddenName' : {value: control.value}} : null;

//}

export function forbiddenNameValidator(pattern: RegExp) : ValidatorFn {
    return (control: AbstractControl) : {[key : string]: any} | null => {
      console.log(control);
          let forbiddenName = pattern.test(control.value);
          return forbiddenName ? {'forbiddenName' : {value: control.value}} : null;
      
      }
}