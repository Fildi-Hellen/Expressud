import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { BlogPostModel } from '../models/blog-post.model'; 

const router = Router();

// Seed route to populate initial data (optional)
router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    // Check if there are existing blog posts
    const blogPostsCount = await BlogPostModel.countDocuments();
    if (blogPostsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    // Seed your database with sample blog posts
    // Example: await BlogPostModel.create(sample_blog_posts);
    // Replace sample_blog_posts with your actual data
    res.send('Seed Is Done!');
  })
);

// Get all blog posts
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const blogPosts = await BlogPostModel.find();
    res.send(blogPosts);
  })
);

// Get a specific blog post by ID
router.get(
  '/:postId',
  asyncHandler(async (req, res) => {
    const blogPost = await BlogPostModel.findById(req.params.postId);
    if (blogPost) {
      res.send(blogPost);
    } else {
      res.status(404).send('Blog post not found');
    }
  })
);

// Create a new blog post
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const newBlogPost = await BlogPostModel.create(req.body);
    res.status(201).send(newBlogPost);
  })
);

// Update an existing blog post
router.put(
  '/:postId',
  asyncHandler(async (req, res) => {
    const updatedBlogPost = await BlogPostModel.findByIdAndUpdate(req.params.postId, req.body, { new: true });
    if (updatedBlogPost) {
      res.send(updatedBlogPost);
    } else {
      res.status(404).send('Blog post not found');
    }
  })
);

// Delete a blog post
router.delete(
  '/:postId',
  asyncHandler(async (req, res) => {
    const deletedBlogPost = await BlogPostModel.findByIdAndDelete(req.params.postId);
    if (deletedBlogPost) {
      res.send('Blog post deleted successfully');
    } else {
      res.status(404).send('Blog post not found');
    }
  })
);

export default router;
