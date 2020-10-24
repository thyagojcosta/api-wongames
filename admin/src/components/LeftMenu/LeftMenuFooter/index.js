import React from 'react';
import Wrapper from './Wrapper';
import { FormattedMessage } from 'react-intl';
import messages from './messages.json'

function LeftMenuFooter() {
  const projectType = PROJECT_TYPE;
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage
          id={messages.poweredBy.id}
          defaultMessage={messages.poweredBy.defaultMessage}
          key="poweredBy"
          />
        <a key="website" href="https://google.com" target="_blank" rel="noopener noreferrer">
          Thyago Costa
        </a>
        &nbsp;
      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
