/**
 * Waitlist API Route
 * Handles email submissions to the waitlist table in Supabase
 */

import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/src/lib/supabase/client";

/**
 * Email validation regex
 * Validates standard email format
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Request body type
 */
interface WaitlistRequest {
  email: string;
}

/**
 * Success response type
 */
interface SuccessResponse {
  success: true;
  message: string;
}

/**
 * Error response type
 */
interface ErrorResponse {
  success: false;
  error: string;
  message: string;
}

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns true if valid, false otherwise
 */
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * POST handler for waitlist submissions
 * Accepts email addresses and stores them in Supabase
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  try {
    // Parse request body
    const body: WaitlistRequest = await request.json();

    // Validate email presence
    if (!body.email) {
      return NextResponse.json(
        {
          success: false,
          error: "missing_email",
          message: "Email address is required",
        },
        { status: 400 }
      );
    }

    // Sanitize and validate email format
    const email = body.email.trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "invalid_email",
          message: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    // Insert email into waitlist table
    // Using service role key for server-side operations (bypasses RLS)
    const supabaseAdmin = createSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("waitlist")
      .insert([{ email }])
      .select();

    // Handle database errors
    if (error) {
      // Check for unique constraint violation (duplicate email)
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            error: "already_exists",
            message: "This email is already on the waitlist",
          },
          { status: 409 }
        );
      }

      // Check for RLS policy violation (42501)
      if (error.code === "42501") {
        console.error("RLS Policy Error:", error);
        return NextResponse.json(
          {
            success: false,
            error: "policy_error",
            message:
              "Database policy error. Please ensure RLS policies are configured correctly in Supabase.",
          },
          { status: 500 }
        );
      }

      // Log error for debugging (in production, use proper logging)
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "database_error",
          message: "Failed to join waitlist. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist",
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle JSON parsing errors or unexpected errors
    console.error("Unexpected error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "invalid_request",
        message: "Invalid request format",
      },
      { status: 400 }
    );
  }
}

/**
 * Handle non-POST requests
 */
export async function GET(): Promise<NextResponse<ErrorResponse>> {
  return NextResponse.json(
    {
      success: false,
      error: "method_not_allowed",
      message: "Method not allowed. Use POST to submit an email.",
    },
    { status: 405 }
  );
}
