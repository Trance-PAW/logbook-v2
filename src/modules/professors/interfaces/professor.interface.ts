import { Document } from "mongoose";

export interface Professor extends Document {
    readonly name: string;
}