import Blog, { IBlog } from './Blog.model';

type BlogRepoData = Pick<IBlog, 'title' | 'content' | 'author' | 'category'>

interface UpdatedRepoData{
  title?: string | undefined;
  content?: string | undefined;
  author?: string | undefined;
  category?: string | undefined;
}

class BlogRepository {
  // Create a new blog post
   async create(data: BlogRepoData ): Promise<IBlog> {
    const blog = new Blog(data);
    return await blog.save();
  }

  async findAllwithPagination(page: number = 1, limit: number = 10): Promise<IBlog[]> {
      const skip = (page - 1) * limit;
      // Fetch data with pagination
      const results = await Blog.find()
        .skip(skip)
        .limit(limit)
      return await results;
  }
  
  // Find all blog posts
  async findAll(): Promise<IBlog[]> {
    return await Blog.find();
  }

  // Find a blog post by its ID
   async findById(id: string): Promise<IBlog | null> {
    return await Blog.findById(id);
  }



  // Update a blog post by its ID
  async updateById(id: string, data: UpdatedRepoData): Promise<IBlog | null> {
    return await Blog.findByIdAndUpdate(
      id,
      { ...data, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
  }

  // Delete a blog post by its ID
  async deleteById(id: string): Promise<IBlog | null> {
    return await Blog.findByIdAndDelete(id);
  }
}

export default BlogRepository;
