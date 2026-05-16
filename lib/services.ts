export type CampusService = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  /** Muted pastel surface + soft border tint */
  cardClass: string;
};

export const campusServices: CampusService[] = [
  {
    id: "lost-found",
    title: "Lost & Found",
    badge: "Working on v1",
    cardClass: "bg-violet-100/90 border-violet-200/70",
  },
  {
    id: "syllabus-notes",
    title: "Syllabus, Notes & PYQs",
    subtitle: "Academics · Projects · Assignments",
    cardClass: "bg-emerald-100/90 border-emerald-200/70",
  },
  {
    id: "events-news",
    title: "Events, News & Announcements",
    cardClass: "bg-sky-100/90 border-sky-200/70",
  },
  {
    id: "find-friends",
    title: "Find Friends",
    cardClass: "bg-rose-100/90 border-rose-200/70",
  },
  {
    id: "course-finder",
    title: "Course Finder",
    cardClass: "bg-amber-100/90 border-amber-200/70",
  },
  {
    id: "our-professors",
    title: "Our Professors",
    cardClass: "bg-fuchsia-100/90 border-fuchsia-200/70",
  },
  {
    id: "sell-buy",
    title: "Sell & Buy",
    subtitle: "Marketplace",
    cardClass: "bg-orange-100/90 border-orange-200/70",
  },
  {
    id: "attendance-timetable",
    title: "Attendance & Timetable",
    cardClass: "bg-cyan-100/90 border-cyan-200/70",
  },
  {
    id: "clubs",
    title: "Clubs & Communities",
    cardClass: "bg-lime-100/90 border-lime-200/70",
  },
  {
    id: "campus-nav",
    title: "Campus Navigation",
    cardClass: "bg-blue-100/90 border-blue-200/70",
  },
  {
    id: "campus-tour",
    title: "Campus Tour",
    cardClass: "bg-indigo-100/90 border-indigo-200/70",
  },
  {
    id: "college-memories",
    title: "Our Collage Memories",
    cardClass: "bg-pink-100/90 border-pink-200/70",
  },
];
