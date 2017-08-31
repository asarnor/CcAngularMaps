import { Injectable } from '@angular/core';
import {Icustomize} from "../shared/customize.model";
import {SAVED_CUSTOMIZE} from "../shared/customize";

@Injectable()
export class CustomizeService {

  constructor() { }

  getCustomize(): Icustomize[]{
      return SAVED_CUSTOMIZE.slice(0);
  }

  getDestination(custom: Icustomize[]) {
      return custom['end'];
  }

  getOrigin(custom: Icustomize[]){
      return custom['start'];
  }

}
