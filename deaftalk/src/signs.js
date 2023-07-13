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
    b.addDirection(finger, FingerDirection.VerticalUp, 1);
}

