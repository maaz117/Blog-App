import { IBlog } from './Blog.model';
import BlogRepository from './blog.repository';
import { CreateBlogBody } from './schema/create-blog.validator';
import { UpdateBlogBody } from './schema/update-blog.valdation';



class BlogService {
  private readonly repository: BlogRepository = new BlogRepository()
  // Create a blog
  async createBlog(data: CreateBlogBody): Promise<IBlog> {
    try {
      return await this.repository.create(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  //Get with pagination
  async findAllWithPagination(page: number = 1, limit: number = 10) {
    try {
        // Call the repository's method to fetch blogs with pagination
        return await this.repository.findAllwithPagination(page, limit);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}
  // Get all blogs
  async getAllBlogs(): Promise<IBlog[]> {
    try {
      return await this.repository.findAll();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  // Get a single blog by ID
  async getBlogById(id: string): Promise<IBlog | null> {
    try {
      const blog = await this.repository.findById(id);
      if (!blog) throw new Error('Blog not found');
      return blog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  // Update a blog by ID
  async updateBlog(id: string, data: UpdateBlogBody): Promise<IBlog | null> {
    try {
      const updatedBlog = await this.repository.updateById(id, data);
      if (!updatedBlog) throw new Error('Blog not found');
      return updatedBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  // Delete a blog by ID
  async deleteBlog(id: string): Promise<IBlog | null> {
    try {
      const deletedBlog = await this.repository.deleteById(id);
      if (!deletedBlog) throw new Error('Blog not found');
      return deletedBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export default BlogService;
