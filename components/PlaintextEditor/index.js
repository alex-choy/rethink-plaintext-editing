import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import path from 'path';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  console.log(file, write);
  const [fileText, setFileText] = useState(file.text().then(data => setFileText(data)));

  // useEffect(() => {
  //   e => setFileText(e.target.value);
  // }, [fileText])


  return (
    <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <textarea 
        className={css.content} 
        value={fileText}
        onChange={(e) => setFileText(e.target.value)}
      ></textarea>
      {/* put a write button to call "write" on the text area */}
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
