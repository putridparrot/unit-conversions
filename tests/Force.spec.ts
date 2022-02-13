// <auto-generated>
// This code was generated by the UnitCodeGenerator tool
//
// Changes to this file will be lost if the code is regenerated
// </auto-generated>

import * as fc from 'fast-check';
import { Force } from '../src/Force';

it('From Dynes to Newtons and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Dynes.toNewtons(value)
            const convertBack = Force.Newtons.toDynes(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Dynes to Newtons', () => {
    expect(Force.Dynes.toNewtons(900.0)).toBeCloseTo(0.009, 1);
    expect(Force.Dynes.toNewtons(1234.0)).toBeCloseTo(0.01234, 1);
    expect(Force.Dynes.toNewtons(46.0)).toBeCloseTo(0.00046, 1);
});

it('From Dynes to Poundals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Dynes.toPoundals(value)
            const convertBack = Force.Poundals.toDynes(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Dynes to Poundals', () => {
    expect(Force.Dynes.toPoundals(10099.0)).toBeCloseTo(0.73046207, 1);
    expect(Force.Dynes.toPoundals(80000.0)).toBeCloseTo(5.7864111, 1);
    expect(Force.Dynes.toPoundals(12345.0)).toBeCloseTo(0.89291556, 1);
});

it('From Dynes to Kilogram-force and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Dynes.toKilogramforce(value)
            const convertBack = Force.Kilogramforce.toDynes(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Dynes to Kilogram-force', () => {
    expect(Force.Dynes.toKilogramforce(123456.0)).toBeCloseTo(0.125890085, 1);
    expect(Force.Dynes.toKilogramforce(80000.0)).toBeCloseTo(0.081577297, 1);
    expect(Force.Dynes.toKilogramforce(987654321.0)).toBeCloseTo(1007.12712394, 1);
});

it('From Kilogram-force to Newtons and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Kilogramforce.toNewtons(value)
            const convertBack = Force.Newtons.toKilogramforce(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Kilogram-force to Newtons', () => {
    expect(Force.Kilogramforce.toNewtons(16.0)).toBeCloseTo(156.906, 1);
    expect(Force.Kilogramforce.toNewtons(9.3)).toBeCloseTo(91.2018, 1);
    expect(Force.Kilogramforce.toNewtons(5.0)).toBeCloseTo(49.0332, 1);
});

it('From Kilogram-force to Dynes and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Kilogramforce.toDynes(value)
            const convertBack = Force.Dynes.toKilogramforce(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Kilogram-force to Dynes', () => {
    expect(Force.Kilogramforce.toDynes(0.1)).toBeCloseTo(98066.5, 1);
    expect(Force.Kilogramforce.toDynes(0.009)).toBeCloseTo(8825.985, 1);
    expect(Force.Kilogramforce.toDynes(2.0)).toBeCloseTo(1961330.0, 1);
});

it('From Kilogram-force to Poundals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Kilogramforce.toPoundals(value)
            const convertBack = Force.Poundals.toKilogramforce(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Kilogram-force to Poundals', () => {
    expect(Force.Kilogramforce.toPoundals(2.0)).toBeCloseTo(141.863, 1);
    expect(Force.Kilogramforce.toPoundals(8.4)).toBeCloseTo(595.826, 1);
    expect(Force.Kilogramforce.toPoundals(0.9)).toBeCloseTo(63.8385, 1);
});

it('From Newtons to Dynes and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Newtons.toDynes(value)
            const convertBack = Force.Dynes.toNewtons(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Newtons to Dynes', () => {
    expect(Force.Newtons.toDynes(0.7)).toBeCloseTo(70000.0, 1);
    expect(Force.Newtons.toDynes(0.08)).toBeCloseTo(8000.0, 1);
    expect(Force.Newtons.toDynes(2.3)).toBeCloseTo(230000.0, 1);
});

it('From Newtons to Poundals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Newtons.toPoundals(value)
            const convertBack = Force.Poundals.toNewtons(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Newtons to Poundals', () => {
    expect(Force.Newtons.toPoundals(190.0)).toBeCloseTo(1374.27, 1);
    expect(Force.Newtons.toPoundals(0.7)).toBeCloseTo(5.06311, 1);
    expect(Force.Newtons.toPoundals(89.0)).toBeCloseTo(643.738, 1);
});

it('From Newtons to Kilogram-force and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Newtons.toKilogramforce(value)
            const convertBack = Force.Kilogramforce.toNewtons(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Newtons to Kilogram-force', () => {
    expect(Force.Newtons.toKilogramforce(8.7)).toBeCloseTo(0.887153, 1);
    expect(Force.Newtons.toKilogramforce(109.0)).toBeCloseTo(11.1149, 1);
    expect(Force.Newtons.toKilogramforce(6.9)).toBeCloseTo(0.703604, 1);
});

it('From Poundals to Newtons and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Poundals.toNewtons(value)
            const convertBack = Force.Newtons.toPoundals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Poundals to Newtons', () => {
    expect(Force.Poundals.toNewtons(800.0)).toBeCloseTo(110.604, 1);
    expect(Force.Poundals.toNewtons(8.2)).toBeCloseTo(1.13369, 1);
    expect(Force.Poundals.toNewtons(190.0)).toBeCloseTo(26.2684, 1);
});

it('From Poundals to Dynes and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Poundals.toDynes(value)
            const convertBack = Force.Dynes.toPoundals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Poundals to Dynes', () => {
    expect(Force.Poundals.toDynes(0.01)).toBeCloseTo(138.255, 1);
    expect(Force.Poundals.toDynes(2.0)).toBeCloseTo(27651.0, 1);
    expect(Force.Poundals.toDynes(0.9)).toBeCloseTo(12442.94589384, 1);
});

it('From Poundals to Kilogram-force and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Force.Poundals.toKilogramforce(value)
            const convertBack = Force.Kilogramforce.toPoundals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Poundals to Kilogram-force', () => {
    expect(Force.Poundals.toKilogramforce(34.0)).toBeCloseTo(0.479335, 1);
    expect(Force.Poundals.toKilogramforce(101.1)).toBeCloseTo(1.4253161, 1);
    expect(Force.Poundals.toKilogramforce(9.5)).toBeCloseTo(0.133932, 1);
});

