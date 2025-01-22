import { error } from "console";
import prisma from "../../../src/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { note, shippingAddress, contact, givingId } = body;

    // Validate required fields
    if (!note || typeof note !== "string" || note.trim() === "") {
      return NextResponse.json(
        { error: "Invalid or missing 'note'. It must be a non-empty string." },
        { status: 400 }
      );
    }

    if (
      !shippingAddress ||
      typeof shippingAddress !== "string" ||
      shippingAddress.trim() === ""
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid or missing 'shippingAddress'. It must be a non-empty string.",
        },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== "string" || contact.trim() === "") {
      return NextResponse.json(
        {
          error: "Invalid or missing 'contact'. It must be a non-empty string.",
        },
        { status: 400 }
      );
    }

    if (!givingId || typeof givingId !== "string") {
      return NextResponse.json(
        {
          response: {
            message:
              "Invalid or missing 'givingId'. It must be a valid UUID string.",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    // Check if the associated Giving record exists
    const givingExists = await prisma.giving.findUnique({
      where: { id: givingId },
    });

    if (!givingExists) {
      return NextResponse.json(
        {
          response: {
            message: "The specified 'givingId' does not exist.",
            status: 404,
          },
        },
        { status: 404 }
      );
    }

    //check if contact has shown interest before
    const alreadyAppliedUser = await prisma.interest.findFirst({
      where: {
        contact: contact,
        givingId: givingId,
      },
    });

    if (alreadyAppliedUser && givingExists) {
      return NextResponse.json(
        {
          response: {
            message:
              "You have applied before, kindly wait till we fininsh review",
            status: 409,
          },
        },
        { status: 409 }
      );
    }

    // Create the Interest record
    const interest = await prisma.interest.create({
      data: {
        note: note.trim(),
        shippingAddress: shippingAddress.trim(),
        contact: contact.trim(),
        givingId,
      },
    });

    return NextResponse.json(
      {
        data: interest,
        description: "Interest created successfully.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating interest:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          response: {
            message:
              "A similar interest record already exists. Please check your input.",
            status: 409,
          },
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        response: {
          message:
            "An unexpected error occurred while processing your request.",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
}
