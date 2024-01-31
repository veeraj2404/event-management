import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventsService } from "../shared/event.service";


@Injectable()
export class EventRouteActivate implements CanActivate {
    
    constructor(private eventService: EventsService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        const eventExists = this.eventService.getEvent(+route.params['id'])

        if(!eventExists){
            // Navigating to the error page, return false to prevent activation
            this.router.navigate(['/404']);
            return false
        }

         // Event exists, allow activation
        return true
    }
    
}