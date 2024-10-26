import demoConcerts from "$lib/demo_concerts.json";
import dayjs from "dayjs";

export function load({ params, url }) {
    // Load data from internal API
    return {
        slug: params.slug,
        concerts: demoConcerts,
        matchedConcert: demoConcerts.find((concert) => concert._id === params.slug),
        path: url.pathname.split("/").filter(Boolean),
    };
}
