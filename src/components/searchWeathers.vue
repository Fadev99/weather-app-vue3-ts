<template>
    <div class="search-box">
        <i class="fa-solid fa-location-dot"></i>
        <input v-model="city" type="text" placeholder="Enter your location" />
        <button
            @keyup.enter="search(city)"
            class="fa-solid fa-magnifying-glass"
            @click="search(city), showInfo()"
        ></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
    setup() {
        return {
            city: ref(""),
        };
    },
    methods: {
        ...mapActions(["search"]),
        showInfo() {
            this.$emit("showInfo", true);
        },
    },
});
</script>

<style scoped></style>
