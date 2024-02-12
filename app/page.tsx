"use client";
import {useRouter} from "next/navigation";

import {useEffect} from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.huddle01.com/api/v1/create-iframe-room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY || "",
      },
      body: JSON.stringify({
        hostWallets: ["0xb44a29524433dBC639C35124459c741bC241d4f4"],
        roomType: "VIDEO",
        title: "My Room",
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (data?.data?.roomId) router.push(`/${data.data.roomId}`);
      });
    });
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
