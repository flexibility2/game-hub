import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [expanded, setExpanded] = React.useState(false);
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : `${children.slice(0, limit)}...`;
  return (
    <Text>
      {summary}
      <Button
        color="yellow"
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
