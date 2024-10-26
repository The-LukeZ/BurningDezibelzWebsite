<script>
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";

    /**
     * @type {Array<{title: string, author: string}>}
     */
    const songs = [
        {
            title: "Ace of Spades",
            author: "Motörhead",
        },
        {
            title: "The Trooper",
            author: "Iron Maiden",
        },
        {
            title: "Born to be Wild",
            author: "Steppenwolf",
        },
        {
            title: "Highway to Hell",
            author: "AC/DC",
        },
        {
            title: "Crazy Train",
            author: "Ozzy Osbourne",
        },
        // TODO ...
    ].sort((a, b) => a.title.localeCompare(b.title));
</script>

<Navbar />

<div class="mt-5 overflow-x-auto">
    <table class="table table-zebra">
        <!-- head -->
        <thead>
            <tr>
                <th class="w-10">Nr.</th>
                <th class="text-right text-xl">Titel</th>
                <th class="text-xl">Interpret</th>
            </tr>
        </thead>
        <tbody>
            {#each songs as song, index}
                <tr>
                    <td>{index + 1}</td>
                    <td class="text-right">{song.title}</td>
                    <td>{song.author}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<Footer />
