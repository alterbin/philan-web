"use client";
import Card from "@/src/components/posts/card";
import { postQueries } from "@/src/services/queries";
import { Button, Modal } from "@/src/components/ui";
import { useRouter } from "next/navigation";
import { useModals } from "@/src/contexts/modals";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Givings() {
  // const { data: posts, isLoading } = postQueries.fetchPosts();
  const {
    data: givings,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = postQueries.fetchInfinitePosts();
  const { mutate } = postQueries.Del();
  const { modals, setModals } = useModals();
  const { push } = useRouter();
  const { ref, inView } = useInView();

  const handleClose = () => {
    setModals((prev) => ({ ...prev, show: false }));
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
        <div className="card_wrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            givings?.data?.map((post) => (
              <Card
                key={post.id}
                title={`${post?.firstName} ${post?.lastName}`}
                description={post.condition}
                image={post.photos[0]}
                onClick={() => console.log("Show interest")}
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

      <Modal
        isOpen={modals.show}
        onClose={handleClose}
        title="No Permission"
        message="Ops, you do not have the permission to perform this operation"
      />
    </div>
  );
}
