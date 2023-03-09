<template>
    <div class="not-found">
        <img :src="image" />
        <p>Oops! Invalid location</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {
            image: require("../assets/404.png"),
        };
    },
});
</script>

<style scoped></style>
