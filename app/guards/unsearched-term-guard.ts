import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { Injectable } from "@angular/core";

@Injectable()
export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {
    canDeactivate(component: SearchComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): boolean {
      console.log("UnsearchedTermGuard");
      console.log(state.url+'-'+route);
      return component.canDeactivate() || window.confirm("Are you sure?");
    }
  }
