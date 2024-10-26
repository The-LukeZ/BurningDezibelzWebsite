<script>
    import { page } from "$app/stores";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import dayjs from "dayjs";
    import { onMount } from "svelte";

    let concerts = $state([]);
    let pageNum = $state(1);
    let stillLoading = $state(true);

    // Load concerts
    onMount(async () => {
        // let waitMs = ~~(Math.random() * 10000) / 2;
        // console.log("Waiting for", waitMs, "ms");
        // await new Promise((resolve) => setTimeout(resolve, waitMs));
        // Dummy Data
        concerts = (await import("$lib/demo_concerts.json")).default;

        stillLoading = false;
    });

    $effect(() => {
        console.log("Concerts changed", $state.snapshot(concerts));
    });
</script>

<Navbar />

<div class="fixed left-0 right-0 top-0 z-[-1] min-h-screen bg-gradient-to-b from-primary-content to-transparent"></div>
<div class="lg:w-7/10 container z-0 mt-5 flex w-full flex-col">
    <article class="prose w-full">
        <h1>Konzert-Übersicht</h1>
    </article>
    <div class="divider w-full"></div>

    <div id="concerts" class="container">
        {#if concerts.length === 0 && stillLoading}
            <span class="loading loading-dots"></span>
        {:else if concerts.length === 0 && !stillLoading}
            <div role="alert" class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Keine Konzerte gefunden!</span>
            </div>
        {:else if concerts.length > 0 && !stillLoading}
            <div class="flex w-full flex-wrap justify-center">
                {#each concerts as concert, index}
                    <div class="flex w-full p-5 sm:w-1/2 md:w-1/3">
                        <div class="card glass w-full">
                            <div class="card-body p-[1rem] md:p-[2rem]">
                                <h2 class="card-title">{concert.name}</h2>
                                <p>{dayjs(concert.date).toDate().toLocaleDateString("de", { dateStyle: "full" })}</p>
                                <div class="card-actions ml-auto flex justify-end">
                                    <a role="button" class="btn btn-primary" href={`konzerte/${concert._id}`}>Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <div class="divider"></div>
    <div class="join self-center">
        <button class="btn join-item" disabled={concerts.length == 0 || stillLoading}>«</button>
        <button class="btn join-item" disabled={concerts.length == 0 || stillLoading}>Page {pageNum}</button>
        <button class="btn join-item" disabled={concerts.length == 0 || stillLoading}>»</button>
    </div>
</div>

<Footer />
