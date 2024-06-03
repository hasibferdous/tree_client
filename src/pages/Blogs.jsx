

const Blogs = () => {

    const blogs = [
        {
          id: 1,
          title: "The Benefits of Planting Trees",
          date: "May 10, 2024",
          author: "Jane Doe",
          content: "Trees provide numerous benefits including shade, beauty, and environmental sustainability. Planting trees can improve air quality, conserve water, and support wildlife."
        },
        {
          id: 2,
          title: "Choosing the Right Tree for Your Yard",
          date: "April 25, 2024",
          author: "John Smith",
          content: "Selecting the right tree involves considering factors such as soil type, climate, and space. Our guide helps you choose the perfect tree for your specific needs."
        },
        {
          id: 3,
          title: "Tree Care Tips for Beginners",
          date: "March 15, 2024",
          author: "Mary Johnson",
          content: "Proper tree care ensures healthy growth and longevity. Learn the basics of watering, pruning, and fertilizing to keep your trees thriving."
        },
        {
          id: 4,
          title: "Top 5 Flowering Trees for Your Garden",
          date: "February 20, 2024",
          author: "Alice Brown",
          content: "Flowering trees add color and fragrance to your garden. Discover our top 5 picks for the most beautiful and easy-to-care-for flowering trees."
        },
        {
          id: 5,
          title: "How to Prune Your Trees Correctly",
          date: "January 30, 2024",
          author: "Robert Green",
          content: "Pruning is essential for maintaining tree health and appearance. Learn the best practices and techniques for pruning your trees effectively."
        },
        {
          id: 6,
          title: "Understanding the Different Types of Trees",
          date: "December 15, 2023",
          author: "Susan White",
          content: "There are many different types of trees, each with its own unique characteristics. This guide covers the basics of deciduous, evergreen, and fruit trees."
        },
        {
          id: 7,
          title: "The Role of Trees in Ecosystems",
          date: "November 10, 2023",
          author: "Tom Clark",
          content: "Trees play a crucial role in ecosystems by providing habitat, food, and protection for many species. Learn about the ecological importance of trees."
        },
        {
          id: 8,
          title: "Common Tree Diseases and How to Treat Them",
          date: "October 5, 2023",
          author: "Emily Davis",
          content: "Tree diseases can threaten the health and longevity of your trees. Identify common diseases and learn how to treat and prevent them."
        }
      ];

    return (
        <div>
             <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-11 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-500 text-sm mb-4">
              {blog.date} by {blog.author}
            </p>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Blogs;