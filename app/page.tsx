"use client";
import NewPostForm from "@/src/components/posts/create";
import Card from "@/src/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export default function Home() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetchPosts(),
    queryKey: ["post"],
    refetchOnMount: "always",
  });

  console.log('error', error)
  console.log('posts', posts)

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <h1>Philan</h1>
        <p>Loading...</p>
        {error && (<p>{`Error: ${(error as Error).message}`}</p>)}
        <div>
          {posts?.map((post: any) => (
            <Card
              key={post.id}
              title={post.name}
              description={post.condition}
              image={post.photos[0]}
              onClick={() => console.log("Show interest")}
            />
          ))}
        </div>
        <div className="">
          
        <NewPostForm/>
</div>
      </div>
    </div>
  );
}
