import React from "react";
import BigCard from "components/BigCard";
import Icon from "tsx:svgs/icons/validators.svg";

const title = "become a validator (soon!)";

const body =
  "The validators deposit a stake to bridge each message batch and " +
  "pay for the transaction gas. The deposit is returned to honest " +
  "validators. The validators may receive various incentives in " +
  "a future version. ";

const BecomeAValidator: React.FC = () => <BigCard {...{ title, body, Icon }} />;

export default BecomeAValidator;
