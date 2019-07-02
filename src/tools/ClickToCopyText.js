import React, { useRef, useState } from 'react';

export default function CopyExample() {

  const [copySuccess, setCopySuccess] = useState('');
  const textRef = useRef(null);

  function copyToClipboard(e) {
    textRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
      {
        /* Logical shortcut for only displaying the
            button if the copy command exists */
        document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button>
          {copySuccess}
        </div>
      }
      <textarea
        ref={textRef}
        value="nathanalexanderpage@gmail.com"
        className="hide"
      />
    </div>
  );
}
