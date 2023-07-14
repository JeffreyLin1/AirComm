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

export const d = new GestureDescription('d');

export const e = new GestureDescription('e');

export const f = new GestureDescription('f');

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


