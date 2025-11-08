import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    // Insert a sample document
    const user = await User.create({
      name: "Test User",
      email: "test@example.com",
      password: "hashedpassword",
    });

    return new Response(
      JSON.stringify({ message: "✅ Connected and inserted user", user }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error testing DB:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
