<script>
    import dayjs from "dayjs";

    let { data } = $props();
</script>

<div class="breadcrumbs pl-10 pt-5 text-sm">
    <ul>
        <li><a href="/">Start</a></li>
        <li><a href="/konzerte">Konzerte</a></li>
        <li>{data.matchedConcert.name}</li>
    </ul>
</div>

<div class="m-10">
    <article class="prose">
        {#if data.matchedConcert}
            <h1>{data.matchedConcert.name}</h1>
            <ul class="list-none">
                <li>{dayjs(data.matchedConcert.date).toDate().toLocaleString("de", { dateStyle: "full" })}</li>
                <li>{data.matchedConcert.ticketsUrl}</li>
                {#if data.matchedConcert.ticketsUrl}
                    <a
                        role="button"
                        class="btn btn-ghost btn-sm h-fit font-thin"
                        href={data.matchedConcert.ticketsUrl}
                        rel="noreferrer"
                        target="_blank">Hol dir Tickets hier!</a
                    >
                {:else if data.matchedConcert.abendkasse}
                    <button class="btn btn-ghost btn-sm h-fit align-middle font-thin">
                        Tickets vor Ort an der Abendkasse!
                    </button>
                {:else}
                    <button class="btn btn-ghost btn-sm h-fit align-middle font-thin">Eintritt frei!</button>
                {/if}
            </ul>
        {:else}
            <div role="alert" class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Konzert nicht gefunden!</span>
            </div>
        {/if}
    </article>
</div>
