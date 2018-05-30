import {AbstractControl} from '@angular/forms';

export function formValidate(control: AbstractControl){
     if (Nationality =='MY' && IdentityNo.length == '12'){
         return{
             NEW = IdentityNo;
             TYPE = NEW; 
         }else if (Nationality =='MY' && IdentityNo.length == '7'){
             return{
                 OLD = IdentityNo;
                 TYPE = OLD;
             }else "Invalid Malaysia Identity No ";
         }
     }

    if (Nationality != 'MY' && IdentityNo.length == '9'){
        return{
            OTHER = IdentityNo;
            TYPE = OTHER;
        }else "Invalid Identity NO";
    }
}