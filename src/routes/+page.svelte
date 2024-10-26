<script lang="js">
    import { error } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import dayjs from "dayjs";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

    let concerts = $state([]);

    // Load concerts
    onMount(async () => {
        try {
            // Future API call
            // const res = await fetch("http://localhost:3000/api/concerts?sort=date&limit=5&order=newest");
            // if (res.ok) {
            //     const data = await res.json();
            //     console.log(data);
            // } else {
            //     throw new Error("Failed to fetch concerts");
            // }

            // For now, use dummy data
            concerts = (await import("$lib/demo_concerts.json")).default;
        } catch (err) {
            error(500, { message: err instanceof Error ? err.message : String(err) });
        }
    });
</script>

<svelte:head>
    <title>Burning Dezibelz</title>
    <meta name="description" content="Die offizielle Website der Band Burning Dezibelz" />
    <meta name="keywords" content="Burning Dezibelz, Band, Rock, Metal, Konzerte, Zwickau" />
    <meta name="author" content="Burning Dezibelz" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<!-- Website Desgin:
- Big Banner Image
  - Title not required as it's in the image

- Navbar (Home, Concerts, About, Contact)

- Main Content
  - Upcoming Concerts (up to 5, with link to concerts page below)
  - About Us (image, with link to about page below)
  - Contact Us (Redirection to contact page)

- Footer (Contact Us, About Us, Imprint, Last updated)
-->
<Navbar />

<div class="bg-black">
    <div class="hero min-h-screen bg-[url('/burningdezibelz_logo.png')]"></div>
</div>

<div class="md:w-7/10 container flex w-full flex-col">
    <div id="concerts" class="container">
        <div class="pb-5 pt-10 text-center md:pl-0 md:pr-0">
            <a href="#upcomingConcerts" id="upcomingConcerts" class="text-2xl font-black italic">Anstehende Konzerte</a>
        </div>

        <div class="grid grid-cols-1 items-center gap-2" id="concerts">
            {#if concerts.length == 0}
                <span class="loading loading-dots loading-lg justify-self-center"></span>
            {:else}
                <div class="container mx-auto p-4">
                    {#each concerts as concert}
                        <div
                            class="mb-2 items-center justify-items-center space-x-4 rounded-[10px] bg-base-200 p-2 align-middle md:flex md:items-center"
                        >
                            <div class="mb-2 md:mb-0 md:w-1/3">
                                <p class="text-center text-lg font-semibold">{concert.name}</p>
                            </div>
                            <div class="mb-3 text-center font-thin md:mb-0 md:w-1/3">
                                <p>{dayjs(concert.date).toDate().toLocaleString("de", { dateStyle: "full" })}</p>
                            </div>
                            <div class="flex flex-col flex-wrap items-center justify-items-center align-middle md:m-0 md:w-1/3">
                                {#if concert.ticketsUrl}
                                    <a
                                        role="button"
                                        class="btn btn-ghost btn-sm h-fit font-thin"
                                        href={concert.ticketsUrl}
                                        rel="noreferrer"
                                        target="_blank">Hol dir Tickets hier!</a
                                    >
                                {:else if concert.abendkasse}
                                    <button class="btn btn-ghost btn-sm h-fit align-middle font-thin">
                                        Tickets vor Ort an der Abendkasse!
                                    </button>
                                {:else}
                                    <button class="btn btn-ghost btn-sm h-fit align-middle font-thin">Eintritt frei!</button>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>

    <div class="divider divider-primary"></div>

    <div class="pb-5 pt-2 text-center">
        <a href="#about" id="about" class="text-2xl font-black italic">Über Uns</a>
    </div>

    <!-- Short About Us -->

    <div id="aboutusimage" class="justify-items-center">
        <img
            src="https://picsum.photos/1920/1080"
            alt="Die Band im Bandraum (Jan, Robert, Micha, Luca)"
            class="z-auto mx-auto w-[90%] max-w-[90%] rounded-[10px] hover:z-[1] hover:drop-shadow-lg"
        />
    </div>

    <div class="h-10"></div>

    <div class="text-center text-[1.5rem] font-extralight">
        <p>
            <span class="text-[110%]">Wir sind die <span class="font-bold">Burning Dezibelz</span>!</span><br />
            Eine junge Band aus dem schönen <span class="font-bold">Zwickau</span>, wobei sich "jung" nur auf das Alter der Band
            bezieht, denn uns gibt es seit &lt;platzhalter&gt;.<br />
        </p>
        <p>
            Wir bestehen aus den vier Mitgliedern:
            <span class="tooltip tooltip-info underline decoration-dotted underline-offset-4" data-tip="Gitarre & Gesang"
                >Jan
            </span>,
            <span class="tooltip tooltip-info underline decoration-dotted underline-offset-4" data-tip="Bass & Gesang"
                >Robert
            </span>,
            <span class="tooltip tooltip-info underline decoration-dotted underline-offset-4" data-tip="Gitarre & Gesang"
                >Micha
            </span>
            und
            <span class="tooltip tooltip-info underline decoration-dotted underline-offset-4" data-tip="Nur Schlagzeug :("
                >Luca
            </span>.
        </p>
        <p>
            Wir spielen <span class="font-bold">Rock</span>, <span class="font-bold">Metal</span> und alles dazwischen.<br />
        </p>
        <p>
            Mehr über uns erfährst du <a href="/about">hier</a>.
        </p>
    </div>

    <div class="divider divider-primary"></div>
    <div class="min-h-1000"></div>
</div>

<Footer />
