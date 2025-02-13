"use client";
import { givenQueries } from "@/src/services/queries";
import { Button, Dropdown, EmptyState, SearchInput } from "@/src/components/ui";
import { useModals } from "@/src/contexts/modals";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { CreatGivenModal, GivenInterestModal } from "./sub-components/modals";
import { Given } from "@/src/services/queries/givens/schemas";
import Card from "./sub-components/card";
import Typography from "@/src/components/ui/typography";

export default function Givens() {
  const {
    data: givens,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = givenQueries.fetchInfiniteGivens();
  const { setModals } = useModals();
  const { ref, inView } = useInView();
  const [searchTerm, setSearchTerm] = useState("");

  const handleClaim = (record: Given) => {
    setModals((prev) => ({ ...prev, enable: true, record }));
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  const repeatedData = Array.from({ length: 24 }, (_, index) => {
    const post = givens?.data?.[index % givens?.data?.length]; // Cycle through the existing data
    return { ...post, id: `${post?.id}-${index}` }; // Ensure unique IDs
  });

  return (
    <div>
      <div>
        <div className="flex gap-10 justify-between">
          <div>
            <Typography
              variant="h1"
              fontWeight="bd"
              color="main-color"
              className="text-5xl leading-tight"
            >
              Available items
            </Typography>
            <Typography variant="p" color="main-color" className="text-xl">
              List items that can be claimed
            </Typography>
          </div>

          <div
            className="flex justify-end gap-2 h-10"
            style={{
              maxHeight: "46px",
            }}
          >
            <SearchInput
              placeholder="Search givens..."
              handleChange={(val) => setSearchTerm(val)}
              value={searchTerm}
              className="h-[46px]"
            />

            <Dropdown
              btnClassName="bg-[#DD9940] h-[46px]"
              value="Filter by"
              data={[
                { label: "A-Z" },
                { label: "Date" },
                { label: "Location" },
              ]}
            />
          </div>
        </div>
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
  
      </div>

      <CreatGivenModal />
      <GivenInterestModal />
    </div>
  );
}
