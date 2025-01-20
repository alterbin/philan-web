"use client";
import Card from "@/src/components/posts/card";
import { postQueries } from "@/src/services/queries";
import Button from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: posts, isLoading } = postQueries.fetchPosts();
  const { push } = useRouter();

  return (
    <div className="items-center bg-[#f3f9f9] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <h3>All Posts</h3>
        <div className="card_wrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            posts?.map((post) => (
              <Card
                key={post.id}
                title={`${post?.firstName} ${post?.lastName}`}
                description={post.condition}
                image={post.photos[0]}
                onClick={() => console.log("Show interest")}
              />
            ))
          )}
        </div>
        <div className="flex justify-end w-full">
          <Button
            className="!w-[120px]"
            onClick={() => push("/posts/create")}
            type="button"
            size="sm"
          >
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
}
