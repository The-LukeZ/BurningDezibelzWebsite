<script>
    import { onMount } from "svelte";

    let { data } = $props();

    onMount(() => {
        console.log(data);
        if (data.redirect) {
            window.location.href = data.redirect;
        }
    });
</script>
