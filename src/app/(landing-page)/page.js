import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import { getPayload } from "../../lib/payload";

async function getPosts() {
  try {
    const payload = await getPayload();
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
    <div className="container mx-auto px-4 sm:px-8 pt-24 sm:pt-20 pb-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <ProjectSection />
      <PostsSection posts={posts} />
    </div>
  );
}
