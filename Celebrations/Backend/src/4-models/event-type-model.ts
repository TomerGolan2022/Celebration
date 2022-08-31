import mongoose from "mongoose";

// 1. interface
export interface IEventTypeModel extends mongoose.Document {
    eventType: string;
}

// 2. schema
export const EventTypeSchema = new mongoose.Schema<IEventTypeModel>({
    eventType: String
});

// 3. model
export const EventTypeModel = mongoose.model<IEventTypeModel>("EventTypeModel", EventTypeSchema, "eventsTypes");
