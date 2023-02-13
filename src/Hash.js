class Hash {
    constructor(paramsSeparator = "&", valueSeparator = "=") {
        this._paramsSeparator = paramsSeparator;
        this._valueSeparator = valueSeparator;
        this._paramsObject = {};

        let paramEntries = window.location.hash ? window.location.hash.substr(1).split(paramsSeparator) : [];

        for(let i = 0; i < paramEntries.length; i++) {
            let entry = paramEntries[i].split(valueSeparator);
            this._paramsObject[entry[0]] = decodeURIComponent(entry[1]);
        }
    }

    _replaceHash() {
        let str = [];
        for (let [key, value] of Object.entries(this._paramsObject)) {
            str.push(key + this._valueSeparator + encodeURIComponent(value));
        }
        let hash = str.join(this._paramsSeparator);

        if(hash) {
            hash = "#"+hash;
        }

        this.hash = hash;
        // history.pushState({},  document.title,window.location.origin+window.location.pathname+hash);
    }

    getHash() {
        return this.hash;
    }

    get(paramName) {
        if (paramName) {
            return this._paramsObject[paramName];
        }
    }

    set(name, value) {
        this._paramsObject[name] = value;
        this._replaceHash();
    }

    setAll(newParams) {
        for (let [key, value] of Object.entries(newParams)) {
            if(value === undefined) {
                delete this._paramsObject[key];
            } else {
                this._paramsObject[key] = value;
            }
        }
        this._replaceHash();
    }

    removeAll(parameterNames) {
        parameterNames = (typeof(parameterNames)=='string') ? [parameterNames] : parameterNames;
        for (let i = 0; i < parameterNames.length; i++) {
            delete this._paramsObject[parameterNames[i]];
        }
        this._replaceHash()
    }

    clear() {
        this._paramsObject = {};
        this._replaceHash();
    }
}

export default Hash;
