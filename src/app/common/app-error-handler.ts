import {ErrorHandler, Injectable} from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(private toasterService: ToasterService) {

  }

  handleError(error: any): void {

    const msg = new Date() + ' foutje';

    this.toasterService.pop({
      type: 'error',
      title: 'FOUTJE',
      body: msg
    } );
    //alert('An unexpected error occured.')
    console.log('msg ' + msg, error);
  }

}
