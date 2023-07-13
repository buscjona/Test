import React from "react";
import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";
import meetingData from "../services/meetingData.json";

export default class ParticipantListWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.state = {
      participants: meetingData.participants,
    };
  }

  header() {
    return (
      <div>
        <List28Filled />
        <Text>Participant List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  body() {
    const { participants } = this.state;

    return (
      <div className="list-body">
        {participants.map((participant) => (
          <div key={participant.id}>
            <div className="divider" />
            <Text className="title">{participant.title}</Text>
            <Text className="content">{participant.content}</Text>
          </div>
        ))}
      </div>
    );
  }

  footer() {
    return <Button appearance="primary">View Details</Button>;
  }
}
