import { Document } from "mongoose";

export interface Faculty extends Document {
    readonly name: string;
}