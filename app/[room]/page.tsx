"use client";
import {HuddleIframe} from "@huddle01/iframe";

import React from "react";

const page = ({params}: {params: {room: string}}) => {
  return (
    <div>
      {" "}
      <HuddleIframe
        projectId={process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID || ""}
        roomUrl={`https://iframe.huddle01.com/${params.room}`}
        className="w-full aspect-video"
      />
    </div>
  );
};

export default page;
