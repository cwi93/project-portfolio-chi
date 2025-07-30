import styled from "styled-components";
import { Theme } from "../../contexts/ThemeContext";
import ImgDiv from "../../components/loadImage/LoadImage";

// =====================================
// TYPES & INTERFACES
// =====================================
interface ThemedProps {
  theme: Theme;
}

// =====================================
// MAIN CONTAINER
// =====================================
const ChiWaiContainer = styled.div`
  /* Layout */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  
  /* Base Padding */
  padding: 12px 0;
  
  /* Responsive Padding */
  @media (max-width: 768px) {
    padding: 8px 0;
  }
  
  @media (max-width: 640px) {
    padding: 6px 0;
  }
  
  @media (max-width: 480px) {
    padding: 4px 0;
  }
  
  @media (max-width: 360px) {
    padding: 2px 0;
  }
  
  @media (max-width: 320px) {
    padding: 1px 0;
  }
`;

// =====================================
// INTRO SECTION (Text Content)
// =====================================
const ChiWaiIntro = styled.div<ThemedProps>`
  /* Base Styles */
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  
  /* HEADING STYLES */
  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    
    /* Responsive Heading Sizes */
    @media (max-width: 1200px) { font-size: 3.5rem; }
    @media (max-width: 1024px) { font-size: 3rem; }
    @media (max-width: 768px) { 
      font-size: 2.5rem; 
      text-align: center; 
    }
    @media (max-width: 640px) { font-size: 2.2rem; }
    @media (max-width: 480px) { font-size: 2rem; }
    @media (max-width: 360px) { font-size: 1.5rem; }
    @media (max-width: 320px) { font-size: 1.6rem; }
  }

  /* SPECIAL TEXT STYLES */
  .one_sentence {
    font-weight: bold;
    
    /* Responsive Text Adjustments */
    @media (max-width: 768px) { 
      text-align: center; 
      font-size: 1.6rem; 
    }
    @media (max-width: 640px) { font-size: 1.5rem; }
    @media (max-width: 480px) { font-size: 1.4rem; }
    @media (max-width: 360px) { font-size: 1.3rem; }
    @media (max-width: 320px) { font-size: 1.2rem; }
  }

  /* PARAGRAPH STYLES */
  p {
    /* Mobile Center Alignment */
    @media (max-width: 768px) { text-align: center; }
    
    /* Responsive Font Sizes */
    @media (max-width: 640px) { font-size: 1.5rem; }
    @media (max-width: 480px) { font-size: 1.3rem; }
    @media (max-width: 360px) { font-size: 1.2rem; }
    @media (max-width: 320px) { font-size: 1.1rem; }
  }

  /* LAYOUT & SPACING */
  /* Mobile Layout */
  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 0 24px;
    margin-bottom: 2rem;
  }
  
  @media only screen and (max-width: 640px) {
    padding: 0 20px;
    margin-bottom: 1.5rem;
  }
  
  @media only screen and (max-width: 480px) {
    padding: 0 16px;
    margin-bottom: 1rem;
  }
  
  @media only screen and (max-width: 360px) {
    padding: 0 12px;
    margin-bottom: 0.8rem;
  }
  
  @media only screen and (max-width: 320px) {
    padding: 0 8px;
    margin-bottom: 0.5rem;
  }
  
  /* Desktop Layout */
  @media only screen and (min-width: 769px) {
    width: 50%;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }

  /* Responsive Base Font Size */
  @media (max-width: 1024px) { font-size: 1.6rem; }
  @media (max-width: 768px) { font-size: 1.4rem; }
  @media (max-width: 480px) { font-size: 1.2rem; }
  @media (max-width: 320px) { font-size: 1.1rem; }

  /* TEXT CONTENT MARGINS (for image spacing) */
  h1,
  p {
    width: 100%;
    
    /* Responsive margins that scale with screen size */
    @media only screen and (min-width: 769px) {
      margin-right: calc(25vw + 40px);
    }
    
    @media only screen and (min-width: 1024px) {
      margin-right: calc(30vw + 60px);
    }
    
    @media only screen and (min-width: 1200px) {
      margin-right: calc(35vw + 80px);
    }
  }
`;

// =====================================
// IMAGE CONTAINER
// =====================================
const ChiWaiImage = styled.div`
  /* Base Layout */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* MOBILE LAYOUT */
  @media only screen and (max-width: 769px) {
    width: 100%;
    position: relative;
    margin-bottom: 1rem;
    
    /* Responsive Heights */
    height: 300px;
    
    @media (max-width: 640px) {
      height: 280px;
      margin-bottom: 0.8rem;
    }
    
    @media (max-width: 480px) {
      height: 250px;
      margin-bottom: 0.6rem;
    }
    
    @media (max-width: 360px) {
      height: 220px;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 320px) {
      height: 200px;
      margin-bottom: 0.4rem;
    }
  }
  
  /* DESKTOP LAYOUT */
  @media only screen and (min-width: 769px) {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    z-index: 10;
  }
`;

// =====================================
// IMAGE COMPONENT
// =====================================
const ChiWaiImportImage = styled(ImgDiv)`
  /* Base Sizing */
  width: auto;
  height: auto;
  
  /* MOBILE RESPONSIVE SIZING */
  @media only screen and (max-width: 769px) {
    object-fit: cover;
    
    /* Default Mobile */
    height: 300px;
    width: 90%;
    
    /* Responsive Breakpoints */
    @media (max-width: 640px) {
      height: 280px;
      width: 85%;
    }
    
    @media (max-width: 480px) {
      height: 250px;
      width: 80%;
    }
    
    @media (max-width: 360px) {
      height: 220px;
      width: 85%;
    }
    
    @media (max-width: 320px) {
      height: 200px;
      width: 90%;
    }
  }
  
  /* DESKTOP SCALING */
  @media only screen and (min-width: 769px) {
    height: auto;
    object-fit: contain;
    
    /* Viewport-based scaling with constraints */
    width: 25vw;
    min-width: 300px;
    max-width: 600px;
    
    @media (min-width: 1024px) {
      width: 30vw;
      min-width: 400px;
      max-width: 700px;
    }
    
    @media (min-width: 1200px) {
      width: 35vw;
      min-width: 500px;
      max-width: 800px;
    }
  }
`;

// =====================================
// SCROLL DOWN COMPONENT
// =====================================
const ScrollDown = styled.div<ThemedProps>`
  /* Layout */
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  margin-top: 2rem;
  
  /* Interaction */
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  /* Reset default styles */
  * {
    margin: 0;
    padding: 0;
  }

  /* ARROW STYLING */
  .arrow {
    border: solid ${props => props.theme.colors.text};
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 0 40px 40px 0;
    
    /* Animation */
    animation: move 3s ease-in-out infinite;
    
    /* Responsive Arrow Sizing */
    @media (max-width: 1024px) {
      border-width: 0 8px 8px 0;
      padding: 0 35px 35px 0;
    }
    
    @media (max-width: 768px) {
      border-width: 0 6px 6px 0;
      padding: 0 30px 30px 0;
    }
  }

  .arrow:after {
    border-radius: 5px;
  }

  /* ANIMATION KEYFRAMES */
  @keyframes move {
    0% {
      transform: translateY(5px) rotate(45deg);
    }
    50% {
      transform: translateY(30px) rotate(45deg);
    }
    100% {
      transform: translateY(5px) rotate(45deg);
    }
  }

  /* RESPONSIVE VISIBILITY */
  @media only screen and (max-width: 769px) {
    display: none;
  }
  
  @media only screen and (min-width: 1200px) {
    margin-top: 3rem;
  }
`;

// =====================================
// EXPORTS
// =====================================
export {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
};
