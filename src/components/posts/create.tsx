"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../ui/input";
import Button from "../ui/Button";

const createPost = async (postData: any) => {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error("Failed to create post");
  }
  return response.json();
};

export default function NewPostForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    mutationKey: ["create-post"],
    onSuccess: async (data: any) => {
      console.log("second asPath", data);

      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err: any) => {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
      } else {
        console.log("Something went wrong");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    mutation.mutate({
      name: formData.get("name"),
      condition: formData.get("condition"),
      photos: [],
      location: formData.get("location"),
      contactInfo: formData.get("contactInfo"),
      email: formData.get("email"),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <Input label="name" name="name" placeholder="Item Name" required />
        <Input
          label="condition"
          name="condition"
          placeholder="Condition"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="location"
          name="location"
          placeholder="Location"
          required
        />
        <Input
          label="contactInfo"
          name="contactInfo"
          placeholder="Contact Info"
          required
        />
      </div>

      <Input label="Email" name="email" placeholder="User Email" required />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Saving..." : "Create Post"}
      </Button>
    </form>
  );
}
