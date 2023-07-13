import { Client } from "@microsoft/microsoft-graph-client";

class MeetingService {
  static accessMeetingData(meetingId, callback) {
    const client = Client.init({
      authProvider: (done) => {
        // No authentication needed for local development
        done(null, "");
      },
    });

    let meeting; // Define the 'meeting' variable

    client
      .api(`/me/events/${meetingId}`)
      .get()
      .then((response) => {
        meeting = response;
        console.log("Meeting details:", meeting);
        // Process the meeting data as needed

        // Fetch the participant data
        return client.api(`/me/events/${meetingId}/participants`).get();
      })
      .then((participants) => {
        console.log("Participants:", participants);
        // Process the participant data as needed

        // Pass the meeting data and participants to the callback function
        callback({ meeting, participants: participants.value });
      })
      .catch((error) => {
        console.error("Error retrieving meeting and participant data:", error);
        // Pass an error object to the callback function
        callback({ error });
      });
  }
}

export default MeetingService;
