import router from "../src/Router.js";

const push = (e) => {
    let state = document.getElementById("state_data").value;
    let url = document.getElementById("url").value;
    let hash = document.getElementById("hash").value;

    let data = {
        path: url,
        hashAttrs: JSON.parse(hash),
        state: state
    };
    router.load(data);
};

const showState = (e) => {
    let state = document.getElementById("history_state");
    state.value = window.history.state;
};

export default (() => {
    document.getElementById("push").addEventListener("click", push);
    document.getElementById("back").addEventListener("click", () => {router.back(); showState();});
    document.getElementById("forward").addEventListener("click", () => {router.forward(); showState();});

    document.addEventListener('popstate', showState);
})();