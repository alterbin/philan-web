import prisma from "../../../lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name, condition, photos, location, contactInfo, userId } = body;

//   const post = await prisma.post.create({
//     data: { name, condition, photos, location, contactInfo, userId },
//   });

//   return NextResponse.json(post, { status: 201 });
// }

export async function POST(request: Request) {
    try {
      const body = await request.json();
      const { name, condition, photos, location, contactInfo, email } = body;
  
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
          name,
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

