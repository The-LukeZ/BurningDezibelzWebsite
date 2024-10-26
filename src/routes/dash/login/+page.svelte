<script>
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";

    let loggingIn = $state(false);

    onMount(() => {
        document.getElementById("username").focus({ preventScroll: true });
    });

    /**
     * @param {Event} event
     */
    async function login(event) {
        event.preventDefault();
        loggingIn = true;

        // Simulate API Call
        // * In Prod: Use fetch to call API which returns a JWT Token to set in Cookies to set in Auth Headers
        const randMs = ~~(Math.random() * 4000) + 2000;
        console.log("Simulating API Call for", randMs, "ms");
        await new Promise((resolve) => setTimeout(resolve, randMs));
        loggingIn = false;

        // Set Cookies

        // Sow success message

        window.location.href = "/dash";
    }
</script>

<Navbar />

<!-- {#if $state.loggingIn}
    <div role="alert" class="alert alert-success sticky left-0 right-0 top-0 z-[2000]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
        <span>Du hast dich erfolgreich eingeloggt und weirst gleich weitergeleitet.</span>
    </div>
    ;
{/if} -->

<div class="mt-[50px] w-[70%] justify-center justify-items-center self-center">
    <article class="prose w-full text-center">
        <h1>Login</h1>
    </article>
</div>

<div class="divider"></div>

<div class="m-auto mt-5 w-4/5 md:w-1/4">
    <form onsubmit={login}>
        <!-- Later: api/ with routing in ngnix -->
        <div class="flex w-full flex-col">
            <input
                type="text"
                name="text"
                placeholder="Username"
                id="username"
                class="rounded-md border border-gray-300 p-2 text-black"
                required
            />
        </div>
        <div class="mt-5 flex flex-col">
            <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                class="rounded-md border border-gray-300 p-2 text-black"
                required
            />
        </div>
        <div class="mt-5 flex flex-col">
            {#if loggingIn}
                <button type="submit" class="btn btn-outline cursor-not-allowed" disabled={loggingIn}
                    ><span class="loading loading-spinner"></span> Bitte warten...
                </button>
            {:else}
                <button type="submit" class="btn btn-outline cursor-pointer" disabled={loggingIn}>Anmelden </button>
            {/if}
        </div>
    </form>
</div>

<Footer />
