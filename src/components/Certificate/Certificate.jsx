import React, { useState } from "react";
import { CertificatesInfo } from "../../constants";

const Certificates = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section
            id="certificates"
            className="py-20 sm:py-24 px-4 sm:px-[7vw] lg:px-[20vw]
      font-sans bg-skills-gradient"
        >
            {/* Section Title */}
            <div className="text-center mb-12 sm:mb-14">
                <h2 className="text-2xl sm:text-4xl font-bold text-white">
                    CERTIFICATES
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
                    Certifications that showcase my learning & skills
                </p>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
                {CertificatesInfo.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-gray-900 border border-white/10 rounded-2xl
            p-4 sm:p-5 flex flex-col
            shadow-[0_0_18px_1px_rgba(130,69,236,0.25)]
            hover:scale-[1.03] transition-transform duration-300"
                    >
                        {/* Top Section */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Logo */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-2 flex-shrink-0">
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                                    {cert.role}
                                </h3>
                                <p className="text-sm text-[#8245ec] font-medium">
                                    {cert.title}
                                </p>
                                {cert.date && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        {cert.date}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mt-3 sm:mt-4 flex-grow leading-relaxed">
                            {cert.description}
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => setSelected(cert)}
                            className="mt-4 sm:mt-5 py-2 rounded-xl bg-[#8245ec]
              text-white font-semibold hover:opacity-90 transition
              w-full sm:w-auto"
                        >
                            View Certificate
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center
          z-50 px-3 sm:px-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-gray-900 rounded-2xl
            max-w-4xl w-full p-3 sm:p-4
            max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-3 bg-[#8245ec] text-whitew-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold hover:scale-110 transition z-50"
                        >
                            ✕
                        </button>
                        {/* Full Image */}
                        <img
                            src={selected.fullimg}
                            alt="Certificate"
                            className="w-full rounded-xl object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
