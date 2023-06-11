const { DUMMY_EVENTS } = require("./dummy-data")

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }