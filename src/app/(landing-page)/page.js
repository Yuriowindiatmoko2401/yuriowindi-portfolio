import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import payload from "payload";

async function getPosts() {
  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        includedInBlog: {
          equals: true,
        },
      },
      limit: 3,
    });
    return posts.docs;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <ProjectSection />
      <PostsSection posts={posts} />
    </div>
  );
}
