<script>
    import BigHeader from "$lib/BigHeader.svelte";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar />

<BigHeader text={"Impressum"} />

<div class="w-[70%] justify-center self-center">
    <article class="prose w-full">
        <p>Angaben gemäß § 5 TMG</p>

        <ul class="list-none">
            <li class="mb-0 mt-0">Max Mustermann</li>
            <li class="mb-0 mt-0">Musterstraße 1</li>
            <li class="mb-0 mt-0">12345 Musterstadt</li>
            <li class="mb-0 mt-0">Deutschland</li>
        </ul>
        <p>
            Email: <a href="mailto:burningdezibelz.de" target="_blank">burningdezibelz.de</a>
        </p>
    </article>
</div>

<Footer />
