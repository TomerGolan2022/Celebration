import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event-model';
import { EventsService } from 'src/app/services/events-service.service';
import { EventListComponent } from '../event-list/event-list.component';
import * as moment from 'moment';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input()
  public event: EventModel;
  public today = moment();
  public isTakePlace: string;

  constructor(
    private eventsService: EventsService,
    private eventsList: EventListComponent
  ) { }

  ngOnInit(): void {
    if (moment(this.event.date) < this.today) {
      this.isTakePlace = "Yes";
    } else  this.isTakePlace = "No";
  }

  public async deleteEvent(_id: string) {
    try {
      const ok = window.confirm("Are you sure to delete?");
      if (!ok) return;
      await this.eventsService.deleteEvent(this.event._id);
      alert("Event has been successfully deleted");
      const indexToDelete = this.eventsList.events.findIndex(e => e._id === _id);
      this.eventsList.events.splice(indexToDelete, 1);
    }
    catch (err: any) {
      alert(err.message);
    }
  }

}
