import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Loyalty Platforms | SabbPe",
  description: "Reward engines to drive customer retention and engagement.",
};

export default function LoyaltyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 mb-6">
            <span className="text-sm font-semibold text-blue-300">SaaS Platforms</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Loyalty{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Platforms
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            Advanced reward engines designed to drive customer retention and engagement. 
            Build loyalty programs that keep customers coming back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                Talk to Sales
              </motion.button>
            </Link>

            <Link href="/">
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "Points Management",
              description: "Flexible points systems with custom rules",
            },
            {
              title: "Reward Catalog",
              description: "Curated rewards that customers actually want",
            },
            {
              title: "Gamification",
              description: "Boost engagement with challenges and tiers",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 backdrop-blur-xl transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Placeholder Section */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-400/20 p-12 md:p-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Transform customer relationships with loyalty
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Reduce churn, increase lifetime value, and build lasting customer relationships 
            with powerful loyalty programs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
              Schedule a Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
