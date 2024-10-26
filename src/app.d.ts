// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    namespace Components {
        interface Location {
            address: string;
            city: string;
            postalCode: string; // :)
            county: string;
            country: string;
        }

        interface Concert {
            _id: string;
            name: string;
            date: string;
            location: Location;
            ticketsUrl?: string;
            abendkasse?: boolean;
        }
    }

    const __apiRoute: "/api";
}

export {};
