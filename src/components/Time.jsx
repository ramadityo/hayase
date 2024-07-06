"use client";

import React, { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState("");
    function showTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = "AM";

        if (h == 0) {
            h = 12;
            session = "AM";
        }

        if (h > 24) {
            h = h - 24;
            session = "PM";
        }

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        var time = h + ":" + m + " " + session;

        setTime(time);
        setTimeout(showTime, 1000);
    }

    useEffect(() => {
        showTime();
    }, []);

    return <>{time}</>;
};

export default Time;
