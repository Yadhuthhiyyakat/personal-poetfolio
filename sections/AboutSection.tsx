import React, { useState, useEffect, useRef } from 'react';

// Use React.memo for performance optimization
const TerminalLine: React.FC<{ text: string; delay?: number; isCommand?: boolean; showInitialBlink?: boolean }> = React.memo(({ text, delay = 0, isCommand = false, showInitialBlink = false }) => {
  const [shouldDisplay, setShouldDisplay] = useState(false); // Controls when the text appears
  const timeoutRef = useRef<number | null>(null); // Ref to hold the timeout ID for cleanup

  useEffect(() => {
    // Clear any existing timeout if props change or component unmounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setShouldDisplay(false); // Reset display state when text or delay changes

    // Set a new timeout to display the text after the specified delay
    timeoutRef.current = window.setTimeout(() => {
      setShouldDisplay(true);
    }, delay);

    // Cleanup function: clear the timeout if the component unmounts or effect re-runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delay]); // Dependencies: re-run effect if text or delay changes

  if (!shouldDisplay) {
    return null; // Don't render anything until the delay is over
  }

  // Render the full text instantly once shouldDisplay is true
  return (
    <p className={`whitespace-pre-wrap ${isCommand ? 'text-cyan-400' : 'text-green-400'}`}>
      {text}
      {showInitialBlink && <span className="animate-blink">█</span>} {/* Only show blinking cursor if explicitly requested */}
    </p>
  );
});

const AboutSection: React.FC = () => {
  const [hasUnlocked, setHasUnlocked] = useState(false);
  // Re-added delay to the type definition for contentLines
  const [contentLines, setContentLines] = useState<Array<{ text: string; isCommand?: boolean; delay?: number; showInitialBlink?: boolean }>>([]);
  const prompt = 'user@ubuntu-portfolio:~$ ';
  const baseDelay = 500;
  // Use a ref to store the last calculated delay for the final prompt
  const finalPromptCalculatedDelayRef = useRef(baseDelay);

  const name = "John Doe"; // Your name
  const photoUrl = "/profile.jpg"; // Path to your profile picture
  const subtitle = "Web Developer & Mobile Developer"; // Your subtitle

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !hasUnlocked) {
        setHasUnlocked(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hasUnlocked]);

  // This useEffect generates the terminal content lines ONLY ONCE when hasUnlocked becomes true
  useEffect(() => {
    if (!hasUnlocked) {
      setContentLines([]); // Clear lines if not unlocked yet
      finalPromptCalculatedDelayRef.current = baseDelay; // Reset delay reference
      return;
    }

    // Prevent re-generation if already unlocked and lines are present
    if (hasUnlocked && contentLines.length > 0) {
        return;
    }

    let currentDelay = baseDelay;
    // Re-added delay to the type definition for generatedLines
    const generatedLines: Array<{ text: string; isCommand?: boolean; delay?: number }> = [];

    const addLine = (text: string, isCommand: boolean = false) => {
      // Pass the currentDelay with the line data
      generatedLines.push({ text, isCommand, delay: currentDelay });
      // Drastically reduced delay for a snappier terminal feel
      currentDelay += 150; // A fixed small delay between lines
    };

    // Simulate terminal commands and output
    addLine(prompt + 'whoami', true);
    addLine(`${name} - ${subtitle}`);

    addLine(prompt + 'cat about.txt', true);
    addLine('Hello! I\'m John Doe, a passionate Frontend Developer with a knack for creating dynamic and intuitive user interfaces. With 5 years of experience, I specialize in crafting engaging web applications using modern JavaScript frameworks and libraries.');
    addLine('My expertise lies in React, TypeScript, and Tailwind CSS, allowing me to build robust, scalable, and visually appealing web solutions. I\'m always eager to learn new technologies and improve my skills to deliver the best possible user experience.');

    addLine(prompt + 'ls -F skills/', true);
    addLine(`./React.js/
./TypeScript/
./JavaScript_(ES6+)/
./Tailwind_CSS/
./HTML5_&_CSS3/
./Node.js/
./Git_&_GitHub/
./Responsive_Design/`);

    addLine(prompt + 'cd projects', true);
    addLine('You can find more details in the projects directory.');
    addLine('Navigate to the "Projects" section to explore my work!');

    addLine(prompt + 'cat contact.txt', true);
    addLine('Feel free to reach out via:');
    addLine(`Email: your.email@example.com
WhatsApp: 123-456-7890`);

    setContentLines(generatedLines);
    finalPromptCalculatedDelayRef.current = currentDelay; // Store the final calculated delay
  }, [hasUnlocked, name, subtitle, contentLines.length]); // Dependencies for line generation

  return (
    <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 h-full overflow-y-auto rounded-b-xl relative">
      {!hasUnlocked && (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <img
            src={photoUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-[#E95420] mb-4 shadow-md"
          />
          <h1 className="text-3xl font-bold text-white mb-1">
            {name}
          </h1>
          <p className="text-lg font-light text-gray-300 mb-6">
            {subtitle}
          </p>
          <div className="text-lg md:text-xl text-gray-300 font-medium tracking-wide">
            {prompt} Press <span className="font-bold text-[#E95420]">ENTER</span> to view my details
            <span className="animate-blink">█</span>
          </div>
        </div>
      )}

      {hasUnlocked && (
        <div className="h-full">
          {contentLines.map((line, index) => (
            <TerminalLine key={index} text={line.text} isCommand={line.isCommand} delay={line.delay} />
          ))}
          {/* Ensure a final prompt is shown and keeps blinking */}
          <div className="mt-4">
            {/* Pass the delay to the final prompt as well */}
            <TerminalLine text={prompt} isCommand={true} delay={finalPromptCalculatedDelayRef.current + 150} showInitialBlink={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;