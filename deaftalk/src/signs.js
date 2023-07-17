import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description

export const a = new GestureDescription('a');

a.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
a.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
a.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);
a.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    a.addCurl(finger, FingerCurl.FullCurl, 1);
}


export const b = new GestureDescription('b');

b.addCurl(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
b.addCurl(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    b.addCurl(finger, FingerCurl.NoCurl, 1);
    b.addDirection(finger, FingerDirection.VerticalUp, 1);``
}

export const c = new GestureDescription('c');

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    c.addCurl(finger, FingerCurl.HalfCurl, 1);
}
c.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

export const d = new GestureDescription('d');

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    d.addCurl(finger,FingerCurl.FullCurl, 1);
}

d.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
d.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

d.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);


export const e = new GestureDescription('e');

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    e.addCurl(finger, FingerCurl.FullCurl, 1);
}

e.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);

export const f = new GestureDescription('f');

for(let finger in [Finger.Pinky, Finger.Middle, Finger.Ring]){
    f.addCurl(finger, Finger.NoCurl, 1);
    f.addDirection(finger, Finger.VerticalUp, 1);
}

d.addCurl(Finger.Index, Finger.FullCurl, 1);

d.addCurl(Finger.Thumb, Finger.HalfCurl, 1);


export const g = new GestureDescription('g');

export const h = new GestureDescription('h');

export const i = new GestureDescription('i');

export const j = new GestureDescription('j');

export const k = new GestureDescription('k');

export const l = new GestureDescription('l');

export const m = new GestureDescription('m');

export const n = new GestureDescription('n');

export const o = new GestureDescription('o');

export const p = new GestureDescription('p');

export const q = new GestureDescription('q');

export const r = new GestureDescription('r');

export const s = new GestureDescription('s');

export const t = new GestureDescription('t');

export const u = new GestureDescription('u');

export const v = new GestureDescription('c');

export const w = new GestureDescription('w');

export const x = new GestureDescription('x');

export const y = new GestureDescription('y');

export const z = new GestureDescription('z');


