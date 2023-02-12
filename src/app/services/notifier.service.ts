import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toast: ToastrService) { }

  success(title: string, message: string){
    this.toast.success(message, title);
  }

  warning(title: string, message: string){
    this.toast.warning(message, title);
  }
}
