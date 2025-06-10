import React from 'react';
import { motion } from 'framer-motion';

function History({ setCurrentPage }) {
  const returnHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-900 text-black px-6 py-16 font-['Neue_Montreal']">
      <div className="max-w-5xl mx-auto space-y-20">

        <button
          onClick={returnHome}
          className="mb-8 px-4 py-2 border-1 rounded-full text-black rounded hover:bg-gray-300 transition"
        >
          ← Back to Home
        </button>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center tracking-tight"
        >
          🏛️ History of Chandigarh
        </motion.h1>

        {[
          {
            title: '🛤️ Post-Independence Vision',
            content: (
              <>
                In the wake of India’s independence and the traumatic partition of 1947, Punjab lost its historic capital Lahore to Pakistan. India’s first Prime Minister, <strong>Jawaharlal Nehru</strong>, envisioned a new capital — a beacon of modernism and a fresh national identity.
                <br /><br />
                Chandigarh was conceived not only as an administrative center but also as a symbol of India’s progress and planned future.
                <blockquote className="italic border-l-4 border-indigo-400 pl-4 text-gray-300 mt-4">
                  “Let this be a new town, symbolic of the freedom of India, unfettered by the traditions of the past...” – Jawaharlal Nehru
                </blockquote>
              </>
            ),
          },
          {
            title: '🏗️ Design and Architecture',
            content: (
              <>
                Chandigarh’s design was a result of international collaboration. American architect <strong>Albert Mayer</strong> initially planned it, but after the tragic death of his partner, <strong>Le Corbusier</strong> took over.
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Emphasis on modernist ideals: geometry, symmetry, and simplicity.</li>
                  <li>Sectors arranged like self-sustaining units.</li>
                  <li>Capitol Complex includes UNESCO heritage buildings.</li>
                  <li>Integration of green belts and open spaces throughout.</li>
                </ul>
              </>
            ),
          },
          {
            title: '🏙️ A Planned City',
            content: (
              <>
                Chandigarh is India’s first planned city, emphasizing harmony between nature and modern living.
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Sectors act like individual neighborhoods.</li>
                  <li>No high-rises — designed for light, space, and air.</li>
                  <li>Public amenities within walking distance.</li>
                  <li>Abundant parks, lakes, and gardens ensure greenery.</li>
                </ul>
              </>
            ),
          },
          {
            title: '🏛️ Political Significance',
            content: (
              <>
                Though a Union Territory, Chandigarh serves as the capital for both <strong>Punjab</strong> and <strong>Haryana</strong>.
                <br /><br />
                This dual role emerged from the 1966 state reorganization, and the city remains a rare example of administrative sharing in India.
              </>
            ),
          },
          {
            title: '🌳 Modern Identity',
            content: (
              <>
                Chandigarh today reflects <strong>clean governance, urban sustainability</strong>, and <strong>architectural excellence</strong>.
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Institutions like PGIMER and Panjab University shape education and healthcare.</li>
                  <li>Tourist attractions include Rock Garden, Rose Garden, and Sukhna Lake.</li>
                  <li>Ranks among India’s cleanest cities.</li>
                  <li>Preserves Le Corbusier’s vision while embracing smart-city growth.</li>
                </ul>
              </>
            ),
          }
        ].map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-indigo-400">{section.title}</h2>
            <div className="text-lg leading-relaxed">{section.content}</div>
            {idx !== 4 && <hr className="border-t border-gray-600 mt-8" />}
          </motion.section>
        ))}
      </div>
    </div>
  );
}

export default History;
