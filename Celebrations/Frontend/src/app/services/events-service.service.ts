import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from '../models/event-model';
import { EventTypeModel } from '../models/event-type-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  public async getAllEventsTypes(): Promise<EventTypeModel[]> {
    const observable = this.http.get<EventTypeModel[]>(environment.eventsTypesUrl);
    const eventsTypes = await firstValueFrom(observable);
    return eventsTypes;
  }

  public async getEventsByType(typeId: string): Promise<EventModel[]> {
    const observable = this.http.get<EventModel[]>(environment.eventsByTypeUrl + typeId);
    const events = await firstValueFrom(observable);
    return events;
  }

  public async addNewEvent(event: EventModel): Promise<void> {
    const observable = this.http.post<EventModel>(environment.eventsUrl, event);
    await firstValueFrom(observable);
  }

  public async deleteEvent(_id: string): Promise<void> {
    const observable = this.http.delete(environment.eventsUrl + _id);
    await firstValueFrom(observable);
  }

}
