<script>
    import dayjs from "dayjs";

    /**
     * @typedef AboutMeProps
     * @prop {string} name
     * @prop {string} text
     * @prop {string} birthdate
     * @prop {boolean?} left Whether the image should be on the left side
     * @prop {string?} imagePath
     */

    /**
     * @type {AboutMeProps}
     */
    let { name, text, birthdate, left = true, imagePath = "https://picsum.photos/200/350" } = $props();
</script>

<!-- 
Mobile:
- flex-col (immer)

Desktop:
- flex-row (if left)
- flex-row-reverse (if !left)
-->

{#if left}
    <div class="flex h-fit w-full flex-col sm:flex-row" id={name.toLowerCase()}>
        <div class="flex p-4 sm:w-2/5 sm:justify-end">
            <img src={imagePath} alt={name} class="max-h-[500px] w-auto rounded-xl" />
        </div>
        <div class="flex p-4 sm:w-3/5 sm:justify-start">
            <article class="h-full w-auto text-left">
                <h1 class="text-2xl font-bold">{name}</h1>
                <p class="mt-4">{text.replace("{age}", dayjs().diff(dayjs(birthdate), "year").toString())}</p>
            </article>
        </div>
    </div>
{:else}
    <div class="w-9/10 flex h-fit flex-col sm:flex-row-reverse" id={name.toLowerCase()}>
        <div class="flex p-4 sm:w-2/5 sm:justify-start">
            <img src={imagePath} alt={name} class="max-h-[500px] w-auto rounded-xl" />
        </div>
        <div class="flex justify-start p-4 sm:w-3/5 sm:justify-end">
            <article class="h-full w-fit text-left sm:text-right">
                <h1 class="text-2xl font-bold">{name}</h1>
                <p class="mt-4">{text.replace("{age}", dayjs().diff(dayjs(birthdate), "year").toString())}</p>
            </article>
        </div>
    </div>
{/if}
