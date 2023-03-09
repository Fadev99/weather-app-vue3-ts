import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        API_KEY: "8508d45176b9ce6b3738d3d7d4c49404",
        weatherByLocation: {},
        showError: false,
    },
    getters: {},
    mutations: {
        weatherByLocation(state, payload) {
            state.weatherByLocation = payload;
        },
    },
    actions: {
        async search({ state, commit }, city: string) {
            await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${state.API_KEY}`
            )
                .then((response) => {
                    commit("weatherByLocation", response);
                    state.showError = false;
                })
                .catch((error) => {
                    state.showError = true;
                });
        },
    },
    modules: {},
});
