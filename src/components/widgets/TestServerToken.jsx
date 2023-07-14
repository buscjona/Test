import React from 'react';
import { getAuthToken } from '../services/AuthService';
import ServerTokenService from '../services/ServerTokenService';

const TestWidget = () => {
  const handleClick = () => {
    getAuthToken()
      .then((clientToken) => {
        console.log('Client Token:', clientToken);

        ServerTokenService.exchangeClientToken(
          '6d0c1b1b-49c2-4cd5-a9c7-54f32e98ba2e',
          'db94a65d-6849-41a7-94e1-0cd2aa33c677',
          '99a0d3d4-d7f3-4aba-bba6-2a0eeded1dbf',
          clientToken
        )
          .then((serverToken) => {
            console.log('Server Token:', serverToken);
          })
          .catch((error) => {
            console.error('Error exchanging client token for server token:', error);
          });
      })
      .catch((error) => {
        console.error('Error getting client access token:', error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Retrieve Tokens</button>
    </div>
  );
};

export default TestWidget;
