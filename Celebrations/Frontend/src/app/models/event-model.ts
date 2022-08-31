import { EventTypeModel } from "./event-type-model";

export class EventModel {
    public _id: string;
    public typeId: string;
    public date: string;
    public description: string;
    public address: string;
    public guests: number;
    public celebration: EventTypeModel; // this is the virtual field!
}
