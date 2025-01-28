// app/waitlist/page.tsx
export default function WaitlistPage() {
    return (
      <section className="w-full py-16 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Join Our Waitlist
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Be the first to know when MaxxedAI is live! Submit your email below.
          </p>
  
          {/* Example waitlist form */}
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-yellow-500 flex-1"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
    );
  }
  