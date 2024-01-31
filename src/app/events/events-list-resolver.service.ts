import { Resolve } from "@angular/router";
import { EventsService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService: EventsService) { }

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
}