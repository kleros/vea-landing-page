import React from "react";
import BigCard from "components/BigCard";
import Icon from "tsx:svgs/icons/run-client.svg";

const title = "become a keeper (soon!)";

const body =
  "The keepers deposit a stake to bridge each message batch and pay for the " +
  "transaction gas. The deposit is returned to honest keepers. The keepers " +
  "may receive various incentives in a future version. ";

const BecomeAKeeper: React.FC = () => <BigCard {...{ title, body, Icon }} />;

export default BecomeAKeeper;
