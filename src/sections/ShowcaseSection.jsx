import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const signTranslatorRef = useRef(null);
  const velvetPourRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  
  const [hoveredProject, setHoveredProject] = useState(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [signTranslatorRef.current, velvetPourRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div 
            ref={signTranslatorRef} 
            className="first-project-wrapper relative cursor-pointer"
            onMouseEnter={() => setHoveredProject('signTranslator')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`image-wrapper transition-all duration-300 ${hoveredProject === 'signTranslator' ? 'blur-sm opacity-30' : ''}`}>
              <img src="/images/project1.png" alt="Sign Translator Interface" />
            </div>
            <div className={`text-content transition-all duration-300 ${hoveredProject === 'signTranslator' ? 'blur-sm opacity-30' : ''}`}>
              <h2>
                Breaking Communication Barriers with AI-Powered Sign Language Translation
              </h2>
              <p className="text-white-50 md:text-xl">
                An intelligent sign language translator built with machine learning to bridge communication gaps and promote accessibility.
              </p>
            </div>
            {hoveredProject === 'signTranslator' && (
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                <div className="text-center">
                  <a href="https://your-sign-translator-live-link.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-4">
                    View Project
                  </a>
                  <a href="https://github.com/yourusername/sign-translator" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200">
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div 
              className="project relative cursor-pointer" 
              ref={velvetPourRef}
              onMouseEnter={() => setHoveredProject('velvetPour')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`image-wrapper bg-[#FFEFDB] transition-all duration-300 ${hoveredProject === 'velvetPour' ? 'blur-sm opacity-30' : ''}`}>
                <img
                  src="/images/project2.png"
                  alt="VelvetPour GSAP Landing Page"
                />
              </div>
              <h2 className={`transition-all duration-300 ${hoveredProject === 'velvetPour' ? 'blur-sm opacity-30' : ''}`}>GSAP Landing Page For VelvetPour</h2>
              {hoveredProject === 'velvetPour' && (
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                  <div className="text-center">
                    <a href="https://your-velvetpour-live-link.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-2 text-sm">
                      View Project
                    </a>
                    <a href="https://github.com/yourusername/velvetpour-landing" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm">
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="project relative cursor-pointer" 
              ref={ycDirectoryRef}
              onMouseEnter={() => setHoveredProject('ycDirectory')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`image-wrapper bg-[#FFE7EB] transition-all duration-300 ${hoveredProject === 'ycDirectory' ? 'blur-sm opacity-30' : ''}`}>
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2 className={`transition-all duration-300 ${hoveredProject === 'ycDirectory' ? 'blur-sm opacity-30' : ''}`}>YC Directory - A Startup Showcase App</h2>
              {hoveredProject === 'ycDirectory' && (
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                  <div className="text-center">
                    <a href="https://your-yc-directory-live-link.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-2 text-sm">
                      View Project
                    </a>
                    <a href="https://github.com/yourusername/yc-directory" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm">
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
