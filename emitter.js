function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []; // if undefined, use []
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(
            function (event) {
                event();
            }
        );
    }
}

module.exports = Emitter;