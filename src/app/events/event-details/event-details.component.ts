import { Component, Input } from "@angular/core";
import { EventsService } from "../shared/event.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent{
    @Input() event: any
    
    constructor(private eventService: EventsService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}