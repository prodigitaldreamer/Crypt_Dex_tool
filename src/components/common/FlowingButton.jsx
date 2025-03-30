import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import './style.css'; // Import your CSS file for styling

const FlowingButton = ({ text, ...props }) => {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);
  const flowTextRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const content = contentRef.current;
    const flowText = flowTextRef.current;

    if (content.offsetWidth < content.scrollWidth) {
      // If content overflows, set text to flow
      flowText.textContent = content.textContent;
      flowText.style.animationPlayState = 'running';
    }
  }, []);

  return (
    <Button {...props} ref={buttonRef} className="flowing-button gradient-button">
      <span className="content" ref={contentRef}>
        {text}
      </span>
      <span className="flow-text" ref={flowTextRef}></span>
    </Button>
  );
};

export default FlowingButton;
