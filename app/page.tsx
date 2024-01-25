'use client'

import { Fragment } from "react";

let a = 10;
function increaseA()
{
    a++;
}

export default function Home()
{
    return <Fragment>
        <button onClick={() => increaseA}>УВЕЛИЧИТЬ</button>
        <div style={{ width: '100px', height: `${a}px` }}></div>
    </Fragment>;
}