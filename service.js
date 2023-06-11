const { DUMMY_EVENTS } = require("./dummy-data");

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}