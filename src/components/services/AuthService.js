import * as microsoftTeams from '@microsoft/teams-js';

export const getAuthToken = () => {
  return new Promise((resolve, reject) => {
    microsoftTeams.initialize();

    const authTokenRequest = {
      successCallback: (result) => {
        console.log("Success: " + result);
        resolve(result); // Resolve the promise with the authentication token
      },
      failureCallback: (error) => {
        console.log("Error getting token: " + error);
        reject(error); // Reject the promise with the error
      },
      resources: ['https://graph.microsoft.com'], // Specify the resource or audience as Microsoft Graph API
      scopes: ['User.Read.All', 'Calendars.Read', 'Presence.Read.All', 'People.Read.All'], // Specify the required scopes for accessing user and calendar data
    };

    microsoftTeams.authentication.getAuthToken(authTokenRequest);
  });
};