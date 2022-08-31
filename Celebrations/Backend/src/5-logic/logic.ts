import { ResourceNotFoundError, ValidationError } from "../4-models/error-models";
import { EventModel, IEventModel } from "../4-models/event-model";
import { EventTypeModel, IEventTypeModel } from "../4-models/event-type-model";

async function getAllEventsTypes(): Promise<IEventTypeModel[]> {
    return EventTypeModel.find().exec();
}

async function getEventsByType(typeId: string): Promise<IEventModel[]> {
    return EventModel.find({ typeId }).populate("celebration").exec();
}

async function addNewEvent(event: IEventModel): Promise<IEventModel> {
    const errors = event.validateSync();
    if (errors) {
        throw new ValidationError(errors.message);
    }
    return event.save();
}

async function deleteEvent(_id: string): Promise<void> {
    const deletedEvent = await EventModel.findByIdAndDelete(_id).exec();
    if (!deletedEvent) {
        throw new ResourceNotFoundError(_id);
    }
}

export default {
    getAllEventsTypes,
    getEventsByType,
    addNewEvent,
    deleteEvent
};

