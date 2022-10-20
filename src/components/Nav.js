import { Slice } from "gatsby";
import React from "react";

export default function Nav({ pageContext }) {
  return <Slice alias="nav" pageContext={pageContext} />;
}
