import { Component, EventEmitter, INJECTOR, Input, Output } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .green {color: #50C878 !important;}
        .red {color: #FF0000 !important;}
        .bold {font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        `
    ]
})
export class EventThumbnailComponent{
    @Input() event: any;
    // @Output() eventClick = new EventEmitter()

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name)
    // }
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === "8:00 am"
        const isLateStart = this.event && this.event.time === "10:00 am"
        return {green: isEarlyStart, bold: [isEarlyStart, isLateStart], red: isLateStart}
    }
}   