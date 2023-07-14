import React from 'react';
import * as microsoftTeams from '@microsoft/teams-js';

const AuthWidget = () => {
  const handleButtonClick = () => {
    microsoftTeams.initialize();

    const authTokenRequest = {
      successCallback: (result) => {
        console.log("Success: " + result);
        // Display success message or perform additional actions
      },
      failureCallback: (error) => {
        console.log("Error getting token: " + error);
        // Display error message or handle the failure case
      }
    };

    microsoftTeams.authentication.getAuthToken(authTokenRequest);
  };

  return (
    <div>
      <h3>Authentication Widget</h3>
      <button onClick={handleButtonClick}>Get Token</button>
    </div>
  );
};

export default AuthWidget;
