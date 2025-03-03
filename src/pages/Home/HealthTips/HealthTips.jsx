const HealthTips = () => {
    const healthBlogs = [
        {
            id: 1,
            title: "5 Ways to Boost Your Immunity",
            description: "Discover natural ways to strengthen your immune system and stay healthy.",
            image: "https://images.unsplash.com/photo-1625750998899-61a72bc58c80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        },
        {
            id: 2,
            title: "How to Manage Stress for Better Health",
            description: "Learn stress-relief techniques that can improve your mental and physical well-being.",
            image: "https://images.unsplash.com/photo-1467647160393-708009aefd5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        },
        {
            id: 3,
            title: "The Importance of Staying Hydrated",
            description: "Find out why drinking enough water daily is crucial for your overall health.",
            image: "https://images.unsplash.com/photo-1611190346465-12f6b1ad0c06?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        }
    ];

    return (
        <div className="my-10 px-5">
            <h2 className="text-3xl font-bold text-center mb-6">🩺 Health Tips & Blogs</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {healthBlogs?.map((blog) => (
                    <div key={blog.id} className="border rounded-lg shadow-lg p-4">
                        <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
                        <p className="text-gray-600 mt-2">{blog.description}</p>
                        <a href={blog.link} className="text-blue-600 font-medium mt-3 inline-block">Read More →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthTips;