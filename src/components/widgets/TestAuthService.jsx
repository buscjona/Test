import React from 'react';
import { Button, Text } from '@fluentui/react-components';
import { BaseWidget } from '@microsoft/teamsfx-react';
import { getAuthToken } from '../services/AuthService';

const AuthTestWidget = () => {
  const handleButtonClick = async () => {
    try {
      const accessToken = await getAuthToken();
      console.log('Access Token:', accessToken);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h3>Auth Test Widget</h3>
      <Button onClick={handleButtonClick}>Get Access Token</Button>
      <Text>Check the console for the retrieved access token.</Text>
    </div>
  );
};

export default AuthTestWidget;
