<script>
    import BigHeader from "$lib/BigHeader.svelte";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import AboutTemplate from "../../lib/AboutTemplate.svelte";
</script>

<Navbar />

<BigHeader text={"Über uns"} />

<div class="md:w-7/10 container flex flex-col">
    <div class="flex h-fit w-full flex-col md:flex-row-reverse">
        <div class="flex h-full w-full justify-center p-4 md:w-1/2 md:justify-start">
            <img src="https://picsum.photos/1920/1080" alt="Die Band" class="w-full rounded-lg" />
        </div>
        <div class="flex w-full p-4 md:w-1/2">
            <article class="prose w-full">
                <h1>Die Band</h1>
                <p>
                    Die Band wurde 2023 in Zwickau gegründet. Wir spezialisieren uns seitdem auf Rock und Metal und spielten am
                    21.12.2023 im <a href="https://www.facebook.com/ontherocks.zwickau/" class="font-thin" target="_blank"
                        >Rocks</a
                    > unser Debut.
                </p>
                <p>
                    Kurz darauf folgte schon der erst Bandmitgliederwechsel. Max wurde durch <a href="#luca">Luca</a> ausgewechselt,
                    welcher bis heute dabei ist.
                </p>
                <p>Diese Besetzung hält bis heute an und wir spielen regelmäßig in Zwickau und Umgebung.</p>
                <p>
                    Gespielt wird AC/DC, Metallica, Iron Maiden, Ozzy Osbourne, Black Sabbath, Mötorhead, Mötley Crüe, und viele
                    mehr.
                </p>
                <a href="/setlist" class="link link-primary">Erfahre mehr über unsere Setlist.</a>
            </article>
        </div>
    </div>

    <div class="divider divider-primary"></div>

    <AboutTemplate
        name={"Jan"}
        text={"Infos..."}
        birthdate={"1991-05-20"}
        left={true}
        imagePath={"https://picsum.photos/200/350"}
    />

    <div class="divider divider-secondary"></div>

    <AboutTemplate
        name={"Robert"}
        text={"Infos..."}
        birthdate={"1991-05-20"}
        left={false}
        imagePath={"https://picsum.photos/200/350"}
    />

    <div class="divider divider-secondary"></div>

    <AboutTemplate
        name={"Micha"}
        text={"Infos..."}
        birthdate={"1991-05-20"}
        left={true}
        imagePath={"https://picsum.photos/200/350"}
    />

    <div class="divider divider-secondary"></div>

    <AboutTemplate
        name={"Luca"}
        text={"Luca ist seit Anfang 2024 unser Schlagzeuger. Er ist {age} Jahre alt und spielt seit seinem 4. Lebensjahr Schlagzeug."}
        birthdate={"2004-11-24"}
        left={false}
        imagePath={"https://picsum.photos/200/350"}
    />

    <div class="divider divider-primary"></div>
</div>

<Footer />
