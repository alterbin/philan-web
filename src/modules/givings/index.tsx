"use client";
import Card from "@/src/components/posts/card";
import { postQueries } from "@/src/services/queries";
import { Button, EmptyState } from "@/src/components/ui";
import { useModals } from "@/src/contexts/modals";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CreatGivingModal } from "@/src/components/posts/modals";
import { ClaimGivingModal } from "@/src/components/posts/modals/claim";
import { Post } from "@/src/services/queries/post/schemas";

export default function Givings() {
  const {
    data: givings,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = postQueries.fetchInfinitePosts();
  const { setModals } = useModals();
  const { ref, inView } = useInView();

  const handleClaim = (record: Post) => {
    setModals((prev) => ({ ...prev, enable: true, record }));
  };

  const handleOpen = () => {
    setModals((prev) => ({ ...prev, show: true }));
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  return (
    <div>
      <div>
        <h3>All Givings</h3>
        <div className="card_wrapper mt-10">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            givings?.data?.map((post) => (
              <Card
                key={post.id}
                title={post.name}
                description={post.description}
                images={post.photos}
                address={post?.address}
                onClick={()=>handleClaim(post)}
              />
            ))
          )}

          <div
            className="py-4 flex justify-center items-center text-small-regular text-gray-700"
            ref={ref}
          >
            <span ref={ref}></span>
          </div>
          {isFetchingNextPage && (
            <div className="text-center font-semibold text-white py-4">
              Loading more...
            </div>
          )}
        </div>
        {givings?.total < 1 && !isLoading && (
          <EmptyState
            title="No Givings"
            description="Kindly post item you want to give out"
          />
        )}
        <div className="flex justify-end w-full mt-10">
          <Button
            className="!w-[120px]"
            onClick={handleOpen}
            type="button"
            size="sm"
          >
            Create Post
          </Button>
        </div>
      </div>

      <CreatGivingModal />
      <ClaimGivingModal />
    </div>
  );
}
