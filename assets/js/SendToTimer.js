class SendToTimer {
    static _color1 = "aqua";
    static _color2 = "white";
    static _timer = new Timer(
        SendToTimer._color1,
        SendToTimer._color2,
        document.querySelector(".time-meter")
    );
    set color1(_color1) {
        SendToTimer._timer.color1 = _color1;
    }
    set color2(_color2) {
        SendToTimer._timer.color2 = _color2;
    }
    constructor(minutes, seconds, btn, meter) {
        this.DOM = {};
        this.DOM.btn = btn;
        this.DOM.minutes = minutes;
        this.DOM.seconds = seconds;
        this.DOM.meter = meter;
    }

    _isnan() {
        return !isNan(this.DOM.minutes.value) && !isNan(this.DOM.seconds.value);
    }
    _is_valid() {
        if (this.DOM.minutes.value == "") {
            this.DOM.minutes.value = 0;
        }
        return (
            this.DOM.minutes.value >= 0 &&
            0 <= this.DOM.seconds.value &&
            this.DOM.seconds.value < 60
        );
    }
    getTimer() {
        if (this._is_valid() && this._is_valid()) {
            SendToTimer._timer.start(
                Number(this.DOM.minutes.value * 60) +
                    Number(this.DOM.seconds.value)
            );
        } else {
            SendToTimer._timer.start(0);
        }
    }
}
