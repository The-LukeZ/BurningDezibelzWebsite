<script>
    import BigHeader from "$lib/BigHeader.svelte";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";

    import { onMount } from "svelte";

    let subject = $state("");
    let message = $state("");
    let mailUrl = $state("");

    function handleSubmit() {
        window.open(mailUrl, "_blank");
    }

    onMount(() => {
        document.getElementById("subject").focus({ preventScroll: true });
    });

    $effect(() => {
        mailUrl = `mailto:burningdezibelz.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    });
</script>

<Navbar />

<BigHeader text={"Kontakt"} />

<form class="mt-[50px] w-[90%] justify-center self-center md:w-[40%]" onsubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Betreff"
        class="input input-bordered w-full font-sans text-white"
        required
        bind:value={subject}
        id="subject"
    />
    <textarea
        class="textarea textarea-bordered h-fit min-h-[9rem] w-full font-sans font-hairline text-white"
        placeholder="Deine Nachricht"
        id="message"
        bind:value={message}
        required
    ></textarea>
    <button type="submit" class="btn btn-ghost float-right justify-self-end">Senden</button>
</form>

<Footer />
