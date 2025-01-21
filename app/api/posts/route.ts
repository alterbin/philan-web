import { Prisma } from "@prisma/client";
import prisma from "../../../src/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const take = parseInt(url.searchParams.get("take") || "10", 10);
  const order = url.searchParams.get("order") === "asc" ? "asc" : "desc";
  const search = url.searchParams.get("search") || "";
  const skip = (page - 1) * take;

  const where: Prisma.GivingWhereInput = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { contact: { contains: search, mode: "insensitive" } },
          { address: { contains: search, mode: "insensitive" } },
        ],
      }
    : {};

  const [total, data] = await Promise.all([
    prisma.giving.count({ where }),
    prisma.giving.findMany({
      where,
      skip,
      take,
      orderBy: { name: order },
    }),
  ]);
  return NextResponse.json({
    total,
    data,
    message: "Givings fetched successfully",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, photos, address, contact } = body;

    const giving = await prisma.giving.create({
      data: {
        name,
        description,
        photos: photos || [],
        address,
        contact,
      },
    });

    return NextResponse.json({
      data: giving,
      description: "Created Successfully"
    }, {
      status: 201,
      statusText: "Post Created Successfully",
    });
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
    const deletedPosts = await prisma.giving.deleteMany({
      where: {
        OR: [{ name: "" }],
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
