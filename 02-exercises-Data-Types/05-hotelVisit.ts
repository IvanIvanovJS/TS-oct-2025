type Floor1A = {
    number: 1;
    hallway: 'A';
    pass?: 'Guest';
    train(): void;
}
type Floor1C = {
    number: 1;
    hallway: 'C';
    train(): void;
}
type Floor2 = {
    number: 2;
    hallway: 'A' | 'C';
    pass?: 'Guest';
    dine(): void;
}
type Floor3 = {
    number: 3;
    hallway: 'A' | 'C';
    sleep(): void;
}

function visitFloor(floor: Floor1A | Floor1C | Floor2 | Floor3
) {
    switch (floor.number) {
        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;
    }
}

visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });

/**Must return TS error */
visitFloor({ train() { }, number: 4, hallway: 'A' });
visitFloor({ train() { }, number: 1, hallway: 'C', pass: 'Guest' });
visitFloor({ train() { }, number: 2, hallway: 'A' });
visitFloor({ train() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 3, hallway: 'C', pass: 'Guest' });

visitFloor({ dine() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 1, hallway: 'B' });
visitFloor({ dine() { }, number: 1, hallway: 'C' });
visitFloor({ dine() { }, number: 3, hallway: 'C' });
visitFloor({ dine() { }, number: 2, hallway: 'C', pass: 'Guest' });
visitFloor({ dine() { }, number: 1, hallway: 'A', pass: 'Guest' });

visitFloor({ sleep() { }, number: 3, hallway: 'D' });
visitFloor({ sleep() { }, number: 4, hallway: 'C' });
visitFloor({ sleep() { }, number: 1, hallway: 'C' });
visitFloor({ sleep() { }, number: 1, hallway: 'A' });
visitFloor({ sleep() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 2, hallway: 'C' });
