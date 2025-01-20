import prisma from "../../../src/components/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      lastName,
      firstName,
      condition,
      photos,
      location,
      contactInfo,
      email,
    } = body;

    // Check if the user exists by their email
    //   const user = await prisma.user.findUnique({
    //     where: { email },
    //   });

    //   if (!user) {
    //     return NextResponse.json(
    //       { error: "User with the provided email does not exist." },
    //       { status: 404 }
    //     );
    //   }

    // Create the post with the user's ID
    const post = await prisma.post.create({
      data: {
        firstName,
        lastName,
        condition,
        photos: photos || [],
        location,
        contactInfo,
        userId: null,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post. Please try again." },
      { status: 500 }
    );
  }
}

// export async function DELETE(request: Request) {
//   try {
//     const url = new URL(request.url);
//     const id = url.searchParams.get("id");

//     if (!id) {
//       return NextResponse.json(
//         { error: "'id' parameter is required " },
//         { status: 400 }
//       );
//     }

//     const deletedPost = await prisma.post.delete({
//       where: { id: Number(id) },
//     });

//     return NextResponse.json(deletedPost, { status: 200 });
//   } catch (error: any) {
//     console.error("Error deleting post:", error);
//     return NextResponse.json(
//       { error: "Failed to delete post", details: error.message },
//       { status: 500 }
//     );
//   }
// }

export async function DELETE() {
  try {
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        OR: [{ firstName: "" }],
      },
    });

    return NextResponse.json(deletedPosts, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting posts:", error);
    return NextResponse.json(
      { error: "Failed to delete posts", details: error.message },
      { status: 500 }
    );
  }
}
