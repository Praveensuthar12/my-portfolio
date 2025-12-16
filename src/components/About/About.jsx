import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const About = () => {
    return (
        <>

            <section
                id="about"
                className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
            >
                <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
                    {/* Left Side */}
                    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            Hello, I am
                        </h1>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Praveen Suthar
                        </h2>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]">
                            <span className="text-white">
                                I am a{" "}
                                <span className="text-blue-600">
                                    <Typewriter
                                        words={["Full Stack Developer", "Coder"]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </span>
                        </h3>



                        {/* About me */}
                        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                            I am a passionate fresher full-stack developer with a solid foundation in the MERN stack and modern web technologies. I enjoy creating responsive and user-focused applications, and I love solving problems through clean and efficient code. I am eager to join a professional team where I can learn, contribute to real-world projects, and grow as a developer.
                        </p>



                        {/* View Resume */}
                        <a
                            href="/Praveen_Suthar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full transition-all duration-300 transform hover:scale-105"
                            style={{
                                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                                boxShadow: "0 0 10px #8245ec",
                            }}
                        >
                            View Resume
                        </a>

                    </div>


                    {/* Right Side */}
                    {/* <div className="md:w-1/2 flex justify-center md:justify-end">
                        <Tilt
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <img
                                src={profileImage}
                                alt="Praveen Suthar"
                                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                            />
                        </Tilt>
                    </div> */}

                </div>

            </section>

        </>
    );
};


export default About;
