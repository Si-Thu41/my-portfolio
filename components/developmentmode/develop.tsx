"use client"
import React from "react"

export default function DevelopPage() {
    const [second, setSecond] = React.useState(10);
    React.useEffect(() => {
    const interval = setInterval(() => {
        setSecond((prev) => {
            if (prev <= 1) clearInterval(interval);
            return prev - 1;
        });
    }, 1000);

    return () => clearInterval(interval);
}, []); // runs only once on mount
    return <div className={`w-full bg-primary ${second > 0 ? "block" : "hidden"}`}>
        <p className="py-4 mt-3 text-center px-4  bg-red-200 w-max mx-auto rounded-xl border border-red-400">This site is still in development. Sorry for the inconvenience! Closing in {second}.</p>
    </div>
}