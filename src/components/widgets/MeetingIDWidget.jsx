import React from "react";
import { Button, Text, Input } from "@fluentui/react-components";
import { Text12Regular, MoreHorizontal32Regular, Checkmark16Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";
import MeetingService from "../services/MeetingService";

export default class MeetingIDWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.state = {
      meetingId: "",
      isMeetingIdValid: false,
      validationMessage: "",
    };
  }

  handleSaveClick = () => {
    const { meetingId } = this.state;

    if (meetingId) {
      MeetingService.accessMeetingData(meetingId, this.handleMeetingDataReceived);
    } else {
      this.setState({ isMeetingIdValid: false, validationMessage: "" });
    }
  };

  handleMeetingDataReceived = (meetingData) => {
    const { meeting, error } = meetingData;

    if (error) {
      this.setState({ isMeetingIdValid: false, validationMessage: "Not a valid meeting ID" });
    } else {
      this.setState({ isMeetingIdValid: true, validationMessage: "" });
      // Process the meeting data as needed
    }
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ meetingId: value, isMeetingIdValid: false, validationMessage: "" });
  };

  renderValidationTextOrCheckmark = () => {
    const { isMeetingIdValid, validationMessage } = this.state;

    if (isMeetingIdValid) {
      return <Checkmark16Regular className="checkmark-icon" />;
    } else if (validationMessage) {
      return <Text className="validation-text">{validationMessage}</Text>;
    } else {
      return null;
    }
  };

  header() {
    return (
      <div>
        <Text12Regular />
        <Text>Meeting ID</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  body() {
    const { meetingId } = this.state;

    return (
      <div className="meeting-id-widget">
        <div className="input-container">
          <Input label="Meeting ID" value={meetingId} onChange={this.handleInputChange} />
          <div className="validation-container">
            {this.renderValidationTextOrCheckmark()}
          </div>
        </div>
        <div className="button-container">
          <Button appearance="primary" onClick={this.handleSaveClick}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}
