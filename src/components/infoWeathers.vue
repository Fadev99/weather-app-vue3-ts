<template>
    <div v-show="image && temp">
        <div class="weather-box fadeIn">
            <img :src="image" alt="image weather" />
            <p class="temperature">
                {{ temp }}
                <span>°C</span>
            </p>
            <p class="description">{{ desc }}</p>
        </div>
        <div class="weather-details">
            <div class="humidity">
                <i class="fa-solid fa-water"></i>
                <div class="text">
                    <span>{{ `${humidity}%` }}</span>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="wind">
                <i class="fa-solid fa-wind"></i>
                <div class="text">
                    <span>{{ `${wind}Km/h` }}</span>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapState } from "vuex";

export default defineComponent({
    setup() {
        return {
            image: ref(""),
            temp: ref(0),
            desc: ref(""),
            humidity: ref(0),
            wind: ref(0),
        };
    },
    computed: {
        ...mapState(["weatherByLocation"]),
    },
    watch: {
        weatherByLocation() {
            const dataWeather = this.weatherByLocation.data;
            this.getImageByWeather();
            this.temp = Number((dataWeather?.main?.temp || 0).toFixed(0));
            this.desc = dataWeather?.weather[0]?.description;
            this.humidity = dataWeather.main.humidity;
            this.wind = dataWeather.wind.speed;
        },
    },
    methods: {
        getImageByWeather() {
            switch (this.weatherByLocation.data?.weather[0]?.main) {
                case "Clear":
                    this.image = require("../assets/clear.png");
                    break;

                case "Rain":
                    this.image = require("../assets/rain.png");
                    break;

                case "Snow":
                    this.image = require("../assets/snow.png");
                    break;

                case "Clouds":
                    this.image = require("../assets/cloud.png");
                    break;

                case "Haze":
                    this.image = require("../assets/mist.png");
                    break;

                default:
                    this.image = "";
            }
        },
    },
});
</script>

<style scoped></style>
