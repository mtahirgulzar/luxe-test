import React from 'react';
import { Script } from 'gatsby';

const FontLoader = () => {
  return (
    <Script
      strategy="idle"
      dangerouslySetInnerHTML={{
        __html: `
          // Load Google Fonts after page is idle
          if (document.readyState === 'complete') {
            loadFonts();
          } else {
            window.addEventListener('load', loadFonts);
          }
          
          function loadFonts() {
            // Create font stylesheet link
            var link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap';
            link.rel = 'stylesheet';
            
            // Add to head
            document.head.appendChild(link);
            
            // Optional: Add fonts-loaded class when ready
            if ('fonts' in document) {
              document.fonts.ready.then(function() {
                document.documentElement.classList.add('fonts-loaded');
              });
            }
          }
        `,
      }}
    />
  );
};

export default FontLoader; 