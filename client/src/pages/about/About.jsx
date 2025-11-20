import React from "react";
import { motion as Motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Our E‑Learning Platform
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Our e‑learning platform is designed to make knowledge accessible,
          engaging, and personalized. With interactive lessons, real‑time
          assessments, and hands‑on learning paths, students can develop skills
          at their own pace while tracking their progress.
        </p>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mt-10"
      >
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Interactive Courses
          </h2>
          <p className="text-gray-600 text-sm">
            High‑quality courses designed with multimedia content to make
            learning immersive.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Progress Tracking
          </h2>
          <p className="text-gray-600 text-sm">
            Monitor learning milestones with dashboards that keep learners
            motivated.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Certifications
          </h2>
          <p className="text-gray-600 text-sm">
            Earn certificates to showcase mastery and boost career
            opportunities.
          </p>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We aim to democratize education by bringing affordable, world‑class
          learning resources to students everywhere. Whether you're a beginner
          or a professional, our platform supports your journey with
          expert‑crafted content and a seamless learning experience.
        </p>
      </Motion.div>
    </div>
  );
}
