import { Schema, model } from 'mongoose';

// Define the interface for a blog post
export interface BlogPost {
    title: string;
    content: string;
    author: string;
    tags: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

// Create a Mongoose schema for the blog post
const BlogPostSchema = new Schema<BlogPost>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true },
        tags: { type: [String] },
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields automatically
    }
);

// Create a Mongoose model for the blog post
export const BlogPostModel = model<BlogPost>('BlogPost', BlogPostSchema);
