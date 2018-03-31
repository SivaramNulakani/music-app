import {CanActivateChild} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild() {
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }
}