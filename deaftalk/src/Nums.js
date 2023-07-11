import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description

export const one = new GestureDescription('one');

one.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
one.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

one.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    one.addCurl(finger, FingerCurl.FullCurl, 0.8);
    one.addCurl(finger, FingerCurl.HalfCurl, 0.6);
}


export const two = new GestureDescription('two');
// thumb:
two.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
two.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
two.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
two.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
two.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
two.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
two.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
two.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
two.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
two.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
two.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
two.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
two.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export const zero = new GestureDescription('zero');

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    zero.addCurl(finger, FingerCurl.FullCurl, 1.0)
    zero.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}