const msal = require('@azure/msal-node');

// Function to exchange client token for server token
async function exchangeClientToken(clientId, clientSecret, tenantId, clientToken) {
  // Create an instance of MSAL client
  const msalClient = new msal.ConfidentialClientApplication({
    auth: {
      clientId: clientId,
      clientSecret: clientSecret,
    },
  });

  // Define the desired scopes for the server token
  const scopes = ['User.Read.All', 'Calendars.Read', 'Presence.Read.All', 'People.Read.All'];

  try {
    // Acquire a server token using the client token
    const result = await msalClient.acquireTokenOnBehalfOf({
      authority: `https://login.microsoftonline.com/${tenantId}`,
      oboAssertion: clientToken,
      scopes: scopes,
    });

    // Retrieve the server token from the result
    const serverToken = result.accessToken;
    return serverToken;
  } catch (error) {
    console.error('Error exchanging client token for server token:', error);
    throw error;
  }
}
