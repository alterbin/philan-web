"use client";
import Card from "@/src/components/givens/card";
import { givenQueries } from "@/src/services/queries";
import { Button, EmptyState } from "@/src/components/ui";
import { useModals } from "@/src/contexts/modals";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CreatGivenModal, GivenInterestModal } from "@/src/components/givens/modals";
import { Given } from "@/src/services/queries/givens/schemas";

export default function Givings() {
  const {
    data: givens,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = givenQueries.fetchInfiniteGivens();
  const { setModals } = useModals();
  const { ref, inView } = useInView();

  const handleClaim = (record: Given) => {
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
        <h3>All Givens</h3>
        <div className="card_wrapper mt-10">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            givens?.data?.map((post) => (
              <Card
                key={post.id}
                title={post.name}
                description={post.description}
                images={post.photos}
                address={post?.address}
                onClick={() => handleClaim(post)}
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
        {givens?.total < 1 && !isLoading && (
          <EmptyState
            title="No Givens"
            description="Kindly post item you want to give out"
          />
        )}
        <div className="flex justify-end w-full mt-10">
          <div className="w-[130px]">
            <Button
              className="!w-[125px]"
              onClick={handleOpen}
              type="button"
              size="sm"
            >
              Create Given
            </Button>
          </div>
        </div>
      </div>

      <CreatGivenModal />
      <GivenInterestModal />
    </div>
  );
}
