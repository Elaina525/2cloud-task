export default function Blog() {
    const blogs = [
      {
        image: "/blog1.png",
        title: "The Top Branded Products of 2024 – Merch That Made Maximum Impact",
        date: "Published Wed 26th Feb, 2025",
      },
      {
        image: "/blog2.png",
        title: "Your Ultimate 2024 Holiday Gift Guide for Clients and the Team",
        date: "Published Tue 3rd Dec, 2024",
      },
    ];
  
    return (
      <div className="bg-gray-100 px-6 sm:px-16 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="hidden md:block w-32"></div>
  
          <h2 className="text-3xl sm:text-5xl font-bold text-black flex-1 text-center">
            New on our blog
          </h2>
  
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition">
              VIEW ALL BLOG
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col">
              <img src={blog.image} alt={blog.title} className="w-full rounded-lg shadow-lg" />
  
              <h3 className="text-2xl font-semibold text-black mt-4">
                {blog.title}
              </h3>
  
              <p className="text-gray-500 text-sm">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  