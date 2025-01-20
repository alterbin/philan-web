"use client";

import Input from "../ui/input";
import Button from "../ui/Button";
import { postQueries } from "@/services/queries";

export default function NewPostForm() {

  const {mutate, isPending} = postQueries.Create();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
   mutate({
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
      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Create Post"}
      </Button>
    </form>
  );
}
