"use client";
import { useEffect, useState } from "react";

export default function DateCreatedDisplay({ dateString }: { dateString?: string }) {
  const [date, setDate] = useState("");
  useEffect(() => {
    if (dateString) {
      const d = new Date(dateString);
      setDate(d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
    } else {
      setDate("");
    }
  }, [dateString]);
  if (!date) return null;
  return <div className="text-xs text-muted-foreground">Created: {date}</div>;
}