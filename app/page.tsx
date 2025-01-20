"use client";
import NewPostForm from "@/src/components/posts/create";
import Card from "@/src/components/posts/card";
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
    queryKey: ["posts"],
    refetchOnMount: "always",
  });

  console.log("error", error);
  console.log("posts", posts);

  return (
    <div className="items-center bg-[#f3f9f9] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        {error && <p>{`Error: ${(error as Error).message}`}</p>}
        <div className="card_wrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            posts?.map((post: any) => (
              <Card
                key={post.id}
                title={post.name}
                description={post.condition}
                image={post.photos[0]}
                onClick={() => console.log("Show interest")}
              />
            ))
          )}
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <NewPostForm />
        </div>
      </div>
    </div>
  );
}
