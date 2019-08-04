import React, {useState, Fragment} from 'react';
import CopyBox from './CopyBox';

const withCopyBox = Component => {
  return (props) => {
    const [copy, setCopy] = useState(false);
    const [color, setColor] = useState('');

    const copyColor = (color) => {
      setColor(color);
      setCopy(true);
      setTimeout(() => setCopy(false), 1800);
    };

    return(
      <Fragment>
        {copy ? <CopyBox inProp={copy} color={color}/> : <Component {...props} copy={copy} copyColor={copyColor}/>}
      </Fragment>
    )
  }
};

export default withCopyBox;