import { Client } from '@microsoft/microsoft-graph-client';
import { getAuthToken } from './AuthService';
import ServerTokenService from './ServerTokenService';

class MeetingService {
  static accessMeetingData(meetingId, callback) {
    getAuthToken()
      .then((clientToken) => {
        ServerTokenService.exchangeClientToken(
          '6d0c1b1b-49c2-4cd5-a9c7-54f32e98ba2e',
          'db94a65d-6849-41a7-94e1-0cd2aa33c677',
          '99a0d3d4-d7f3-4aba-bba6-2a0eeded1dbf',
          clientToken
        )
          .then((serverToken) => {
            console.log('Server Token:', serverToken); // Add this line to display the server token
            const client = Client.init({
              authProvider: (done) => {
                done(null, serverToken);
              },
            });

            let meeting;
            client
              .api(`/me/events/${meetingId}`)
              .get()
              .then((meeting) => {
                console.log('Meeting details:', meeting);
                // Process the meeting data as needed

                return client.api(`/me/events/${meetingId}/participants`).get();
              })
              .then((participants) => {
                console.log('Participants:', participants);
                callback({ meeting, participants: participants.value });
              })
              .catch((error) => {
                console.error('Error retrieving meeting and participant data:', error);
                callback({ error });
              });
          })
          .catch((error) => {
            console.error('Error exchanging client token for server token:', error);
            callback({ error });
          });
      })
      .catch((error) => {
        console.error('Error getting client access token:', error);
        callback({ error });
      });
  }
}

export default MeetingService;
