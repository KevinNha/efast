import React from 'react';
import {MessageUserBar} from './MessageHeader';

export const MessageText = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      {props.message.attachments.length === 0 && <MessageUserBar {...props} />}
      {props.renderText}
      {/* {props.renderText(props.message, props.theme.message.content.markdown)} */}
    </React.Fragment>
  );
};