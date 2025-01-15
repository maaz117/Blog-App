import { Router, NextFunction, Request, Response } from 'express';
import BlogController from './blog.controller';



class BlogRoutes{
  readonly router: Router = Router();
  readonly controller: BlogController = new BlogController();

  constructor() {
    this.initRoutes();
  }
  initRoutes(): void {
    console.log("Access Routes initialized!");
    this.router.post(
    '/',

    async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.createBlog(req, res);
        } catch (err) {
          next(err);
        }
      }
    );

    // Get all blogs
    this.router.get(
      '/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.getAllBlogs(req, res);
        } catch (err) {
          next(err);
        }
      }
    );

    this.router.get(
      '/all',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.findAllWithPagination(req, res);
        } catch (err) {
          next(err);
        }
      }
    );
  


    // Get a single blog by ID
    this.router.get(
      '/:id',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.getBlogById(req, res);
        } catch (err) {
          next(err);
        }
      }
    );

    // Update a blog by ID
    this.router.put(
      '/:id',
      // validateBody(updateBlogSchema),
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.updateBlog(req, res);
        } catch (err) {
          next(err);
        }
      }
    );

    // Delete a blog by ID
    this.router.delete(
      '/:id',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await this.controller.deleteBlog(req, res);
        } catch (err) {
          next(err);
        }
      }
    );

  }
}
export default BlogRoutes;
