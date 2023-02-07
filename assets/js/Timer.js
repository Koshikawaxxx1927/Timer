class Timer {
    constructor(_color1, _color2, $dom_meter) {
        this._color1 = _color1;
        this._color2 = _color2;
        this.DOM = {};
        this.DOM.meter = $dom_meter;
        this.id = undefined;
    }

    start(time) {
        // 1msあたりの回転角度
        const degree_per_time = 0.36 / time;
        if (this.id !== undefined) {
            clearInterval(this.id);
            this._reset();
        }
        const st = Date.now(); // 開始時間
        this.id = setInterval(() => {
            let now = Date.now(); // 現在の時間(ms)
            let degree = degree_per_time * (now - st);
            this.DOM.meter.style.background = `conic-gradient(${this._color1} ${degree}deg, ${this._color2} ${degree}deg)`;
            if (degree >= 360) {
                clearInterval(this.id);
            }
        }, 1);
    }
    _reset() {
        this.DOM.meter.style.background = "conic-gradient(white)";
    }
    set color1(_color1) {
        this._color1 = _color1;
    }
    set color2(_color2) {
        this._color2 = _color2;
    }
}
