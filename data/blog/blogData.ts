interface BlogPost {
  title: string;
  author: string;
  date: Date;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Smart Home Automation",
    author: "John Smith",
    date: new Date("2024-01-15"),
    excerpt: "Learn the basics of setting up your first smart home system with our comprehensive guide.",
    image: "/images/banner/smarthome.jpg"
  },
  {
    title: "Top 5 Security Devices for 2024",
    author: "Sarah Johnson",
    date: new Date("2024-02-20"),
    excerpt: "Discover the latest security innovations that will keep your home safe and secure.",
    image: "/images/banner/security.png"
  },
  {
    title: "Energy Efficient Lighting Solutions",
    author: "Michael Brown",
    date: new Date("2024-03-10"),
    excerpt: "Reduce your energy bills with these smart lighting solutions that adapt to your lifestyle.",
    image: "/images/banner/lamp.webp"
  }
];