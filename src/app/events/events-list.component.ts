import { Component } from "@angular/core";
import { EventsService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-6">
                    <event-thumbnail [event]="event"></event-thumbnail>
                    <!-- <event-thumbnail (click)="  handleThumbnailClick(event.name)" [event]="event"></event-thumbnail> -->
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent {
    events:any

    constructor(
        // private eventService: EventsService,
        // private toastr: ToastrService,
        private route: ActivatedRoute
        ){
    }
    
    ngOnInit(){
      this.events = this.route.snapshot.data['events']
    }

    // handleThumbnailClick(eventName: any){
    //   this.toastr.success(eventName)
    // }
}