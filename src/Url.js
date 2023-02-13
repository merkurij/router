
const init = (url) => {
    let protocolSplitterInd = url.indexOf("://");
    if(protocolSplitterInd >= 0) {
        this.protocol = url.substring(0, protocolSplitterInd);
    }

    
};

class Url {
    constructor(url) {
        init.bind(this)(url);
    }

    get() {
        let url = this.protocol + "//" + this.domain;
        if(this.port !== null) {
            url += ":" + this.port;
        }
        if(this.path !== null) {

        }
        if(this.params !== null) {

        }
        if(this.hash !== null) {

        }

        return url;
    }

}

export default Url;