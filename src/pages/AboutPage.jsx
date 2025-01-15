import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-bold">Blogger</span> – your go-to
          platform for exploring, sharing, and connecting through stories and ideas.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            <strong>A Platform for Everyone:</strong> From personal musings to expert
            insights, our app celebrates diversity in content.
          </li>
          <li className="mb-2">
            <strong>Ease of Use:</strong> User-friendly tools that make blogging simple,
            fun, and accessible.
          </li>
          <li>
            <strong>Community First:</strong> Connect with like-minded individuals,
            engage in meaningful discussions, and build a network.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          To empower voices from all walks of life and create a community where ideas
          flourish and creativity knows no bounds.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us!</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Start your blogging journey today. Share your story, explore new
          perspectives, and be part of a vibrant community that thrives on expression.
        </p>
        <p className="flex justify-center text-lg text-gray-700 leading-relaxed mt-4 font-bold">
          Your stories matter. Let’s create something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
