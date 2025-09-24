import { AbstractControl } from "@angular/forms";

export function password (expretion: RegExp) {
  return (control:AbstractControl)=>{
    const ex = expretion.test(control.value)
    return ex ?  null:{'expretion':{value:control.value}};
  }
}
