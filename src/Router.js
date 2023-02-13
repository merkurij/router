import Hash from "./Hash.js";

const hashManager = new Hash();

const _back = () => {
    window.history.back();
};

const _forward = () => {
    window.history.forward();
};

const _load = (data) => {
    let url = new URL(window.location);

    let newURL = url.origin;
    newURL += data.path !== undefined ? data.path : url.origin;

    if(data.hashAttrs !== undefined) {
        hashManager.clear();
        hashManager.setAll(data.hashAttrs);
        newURL += hashManager.getHash();
    } else {
        newURL += url.hash;
    }

    window.history.pushState(data.state, '', newURL);
};


export default {
    back() {
        _back();
    },

    forward(){
        _forward();
    },

    load(data) {
        _load(data)
    }
};