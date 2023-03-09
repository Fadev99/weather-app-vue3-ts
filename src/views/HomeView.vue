<template>
    <div class="container" :class="{ h__590: showContent, h__400: showError }">
        <searchWeathers @showInfo="showInfo" />
        <errorPage v-if="showError" />
        <template v-else>
            <infoWeathers />
            <detailWeathers />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import searchWeathers from "@/components/searchWeathers.vue";
import infoWeathers from "@/components/infoWeathers.vue";
import errorPage from "@/components/errorPages.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        searchWeathers,
        infoWeathers,
        errorPage,
    },
    data() {
        return {
            showContent: false,
        };
    },
    computed: {
        ...mapState(["showError"]),
    },
    methods: {
        showInfo(value: boolean) {
            this.showContent = value;
        },
    },
});
</script>
