"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

export default function Calendar() {
  const events = [
    { title: "회의", date: "2025-09-01" },
    { title: "회의2", date: "2025-09-01" },
    { title: "회의3", date: "2025-09-01" },
    { title: "회의4", date: "2025-09-01" },
    { title: "회의5", date: "2025-09-01" },
    { title: "회의6", date: "2025-09-01" },
    { title: "스터디", date: "2025-09-05" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "title",
          center: "",
          right: "today prev,next",
        }}
        selectable={true}
        editable={true}
        events={events}
        dayMaxEvents={3}
      />
    </div>
  );
}
