import mongoose from "mongoose";
import { EventTypeModel } from "./event-type-model";

// 1. interface
export interface IEventModel extends mongoose.Document {
    typeId: mongoose.Schema.Types.ObjectId;
    date: string;
    description: string;
    address: string;
    guests: number;
}

// 2. schema
export const EventSchema = new mongoose.Schema<IEventModel>({
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Missing event type"]
    },
    date: {
        type: String,
        required: [true, "Missing date"]
    },
    description: {
        type: String,
        required: [true, "Missing description"],
        minlength: [2, "Description too short"],
        maxlength: [100, "Description too long"],
        trim: true,
        unique: true
    },
    address: {
        type: String,
        required: [true, "Missing address"],
        minlength: [2, "Address too short"],
        maxlength: [100, "Address too long"],
        trim: true,
        unique: true
    },
    guests: {
        type: Number,
        required: [true, "Missing guests"],
        min: [250, "Guests can't be less than 250"],
        max: [1000, "Guests can't exceed 1000"]
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

EventSchema.virtual("celebration", {
    ref: EventTypeModel,
    localField: "typeId",
    foreignField: "_id",
    justOne: true
});

// 3. model
export const EventModel = mongoose.model<IEventModel>("EventModel", EventSchema, "events");

