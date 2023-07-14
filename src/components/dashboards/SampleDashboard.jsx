import React from "react";
import { BaseDashboard } from "@microsoft/teamsfx-react";

import ChartWidget from "../widgets/ChartWidget";
import ListWidget from "../widgets/ListWidget";
import MeetingIDWidget from "../widgets/MeetingIDWidget";
import AuthWidget from "../widgets/AuthWidget";
import TestServerToken from "../widgets/TestServerToken";

export default class SampleDashboard extends BaseDashboard {
  layout() {
    return (
      <>
        <ListWidget />
        <ChartWidget />
        <MeetingIDWidget />
        <AuthWidget />
        <TestServerToken />
      </>
    );
  }
}
