import { Slice } from "gatsby";
import React from "react";

export default function ContentNav({ prev, next, pathPrefix }) {
  return (
    <Slice
      alias="content-nav"
      prev={prev}
      next={next}
      pathPrefix={pathPrefix}
    />
  );
}
