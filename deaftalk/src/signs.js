import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description

export const a = new GestureDescription('a');

a.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
a.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
a.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);
a.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    a.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const b = new GestureDescription('b');

b.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    b.addCurl(finger, FingerCurl.NoCurl, 1);
    b.addDirection(finger, FingerDirection.VerticalUp, 1);
}

export const c = new GestureDescription('c');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    c.addCurl(finger, FingerCurl.HalfCurl, 1);
}
c.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

export const d = new GestureDescription('d');

d.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
d.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

d.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    d.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const e = new GestureDescription('e');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    e.addCurl(finger, FingerCurl.FullCurl, 1);
}
e.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);

export const f = new GestureDescription('f');

f.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
f.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

f.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    f.addCurl(finger, FingerCurl.NoCurl, 1);
    f.addDirection(finger, FingerDirection.VerticalUp, 1);
}

export const g = new GestureDescription('g');

g.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
g.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

g.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
g.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    g.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const h = new GestureDescription('h');

h.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
h.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

h.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
h.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Ring, Finger.Pinky, Finger.Thumb]) {
    h.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const i = new GestureDescription('i');

i.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
i.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
    i.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const j = new GestureDescription('j');

j.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
j.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

j.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
    j.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const k = new GestureDescription('k');

k.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
k.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

k.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
k.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

k.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
k.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

for (let finger of [Finger.Ring, Finger.Pinky]) {
    k.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const l = new GestureDescription('l');

l.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
l.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

l.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
l.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    l.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const m = new GestureDescription('m');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    m.addCurl(finger, FingerCurl.FullCurl, 1);
    m.addDirection(finger, FingerDirection.HorizontalLeft, 1);
}
m.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
m.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

export const n = new GestureDescription('n');

for (let finger of [Finger.Index, Finger.Middle]) {
    n.addCurl(finger, FingerCurl.FullCurl, 1);
    n.addDirection(finger, FingerDirection.HorizontalLeft, 1);
}
n.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
n.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
n.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

export const o = new GestureDescription('o');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    o.addCurl(finger, FingerCurl.HalfCurl, 1);
    o.addDirection(finger, FingerDirection.VerticalUp, 1);
}
o.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
o.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

export const p = new GestureDescription('p');

p.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
p.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1);

p.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
p.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1);

p.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
p.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Ring, Finger.Pinky]) {
    p.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const q = new GestureDescription('q');

q.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
q.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);

q.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
q.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    q.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const r = new GestureDescription('r');

r.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
r.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

r.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
r.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Ring, Finger.Pinky, Finger.Thumb]) {
    r.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const s = new GestureDescription('s');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    s.addCurl(finger, FingerCurl.FullCurl, 1);
}
s.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);

export const t = new GestureDescription('t');

t.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
t.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

t.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);

t.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    t.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const u = new GestureDescription('u');

u.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
u.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

u.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
u.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Ring, Finger.Pinky, Finger.Thumb]) {
    u.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const v = new GestureDescription('v');

v.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
v.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

v.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
v.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Ring, Finger.Pinky, Finger.Thumb]) {
    v.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const w = new GestureDescription('w');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    w.addCurl(finger, FingerCurl.NoCurl, 1);
    w.addDirection(finger, FingerDirection.VerticalUp, 1);
}
w.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
w.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);

export const x = new GestureDescription('x');

x.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
x.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky, Finger.Thumb]) {
    x.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const y = new GestureDescription('y');

y.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
y.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

y.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
y.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    y.addCurl(finger, FingerCurl.FullCurl, 1);
}

export const z = new GestureDescription('z');

z.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
z.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    z.addCurl(finger, FingerCurl.FullCurl, 1);
}
