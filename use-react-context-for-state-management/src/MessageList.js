import React from 'react';
import { UserConsumer } from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
  {({ user }) => (
    <EmailConsumer>
    {({ loading, emails, onSelectEmail }) => (
      {loading ? 
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      </div> : 
    <ul>
    {emails.map(email => 
        <Email 
          key={email.id} 
          email={email}  
          onClick={() => onSelectEmail(email)}
        /> 
    )}
    </ul>}
    )}
  </EmailConsumer>   
  )}
  </UserConsumer>
);

const Email = ({}) => (
  <li>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
)

export default MessageList;
