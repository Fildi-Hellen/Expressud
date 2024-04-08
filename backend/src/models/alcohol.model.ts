import {Schema, model} from 'mongoose';

export interface Alcohol{
    id:string;
    name:string;
    price:number;
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    
}

export const AlcoholSchema = new Schema<Alcohol>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true}
       
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const AlcoholModel = model<Alcohol>('Alcohol', AlcoholSchema);