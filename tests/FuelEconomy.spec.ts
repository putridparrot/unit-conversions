// <auto-generated>
// This code was generated by the UnitCodeGenerator tool
//
// Changes to this file will be lost if the code is regenerated
// </auto-generated>

import * as fc from 'fast-check';
import { FuelEconomy } from '../src/FuelEconomy';

it('From Kilometre Per Litre to US Miles Per Gallon and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.KilometrePerLitre.toUSMilesPerGallon(value)
            const convertBack = FuelEconomy.USMilesPerGallon.toKilometrePerLitre(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Kilometre Per Litre to US Miles Per Gallon', () => {
    expect(FuelEconomy.KilometrePerLitre.toUSMilesPerGallon(109.0)).toBeCloseTo(256.384, 1);
    expect(FuelEconomy.KilometrePerLitre.toUSMilesPerGallon(9.4)).toBeCloseTo(22.1102, 1);
    expect(FuelEconomy.KilometrePerLitre.toUSMilesPerGallon(1.3)).toBeCloseTo(3.05779, 1);
});

it('From Kilometre Per Litre to Miles Per Gallon and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.KilometrePerLitre.toMilesPerGallon(value)
            const convertBack = FuelEconomy.MilesPerGallon.toKilometrePerLitre(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Kilometre Per Litre to Miles Per Gallon', () => {
    expect(FuelEconomy.KilometrePerLitre.toMilesPerGallon(5.0)).toBeCloseTo(14.124, 1);
    expect(FuelEconomy.KilometrePerLitre.toMilesPerGallon(180.0)).toBeCloseTo(508.466, 1);
    expect(FuelEconomy.KilometrePerLitre.toMilesPerGallon(5.4)).toBeCloseTo(15.254, 1);
});

it('From Miles Per Gallon to Kilometre Per Litre and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.MilesPerGallon.toKilometrePerLitre(value)
            const convertBack = FuelEconomy.KilometrePerLitre.toMilesPerGallon(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Miles Per Gallon to Kilometre Per Litre', () => {
    expect(FuelEconomy.MilesPerGallon.toKilometrePerLitre(12.0)).toBeCloseTo(4.24807, 1);
    expect(FuelEconomy.MilesPerGallon.toKilometrePerLitre(8.2)).toBeCloseTo(2.90285, 1);
    expect(FuelEconomy.MilesPerGallon.toKilometrePerLitre(0.5)).toBeCloseTo(0.177003, 1);
});

it('From Miles Per Gallon to US Miles Per Gallon and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.MilesPerGallon.toUSMilesPerGallon(value)
            const convertBack = FuelEconomy.USMilesPerGallon.toMilesPerGallon(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Miles Per Gallon to US Miles Per Gallon', () => {
    expect(FuelEconomy.MilesPerGallon.toUSMilesPerGallon(1.4)).toBeCloseTo(1.16574, 1);
    expect(FuelEconomy.MilesPerGallon.toUSMilesPerGallon(709.0)).toBeCloseTo(590.36575, 1);
    expect(FuelEconomy.MilesPerGallon.toUSMilesPerGallon(0.9)).toBeCloseTo(0.74941, 1);
});

it('From US Miles Per Gallon to Kilometre Per Litre and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.USMilesPerGallon.toKilometrePerLitre(value)
            const convertBack = FuelEconomy.KilometrePerLitre.toUSMilesPerGallon(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known US Miles Per Gallon to Kilometre Per Litre', () => {
    expect(FuelEconomy.USMilesPerGallon.toKilometrePerLitre(23.0)).toBeCloseTo(9.77831, 1);
    expect(FuelEconomy.USMilesPerGallon.toKilometrePerLitre(7.0)).toBeCloseTo(2.97601, 1);
    expect(FuelEconomy.USMilesPerGallon.toKilometrePerLitre(0.9)).toBeCloseTo(0.382629, 1);
});

it('From US Miles Per Gallon to Miles Per Gallon and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = FuelEconomy.USMilesPerGallon.toMilesPerGallon(value)
            const convertBack = FuelEconomy.MilesPerGallon.toUSMilesPerGallon(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known US Miles Per Gallon to Miles Per Gallon', () => {
    expect(FuelEconomy.USMilesPerGallon.toMilesPerGallon(109.0)).toBeCloseTo(130.9036, 1);
    expect(FuelEconomy.USMilesPerGallon.toMilesPerGallon(78.2)).toBeCloseTo(93.91432, 1);
    expect(FuelEconomy.USMilesPerGallon.toMilesPerGallon(0.9)).toBeCloseTo(1.08086, 1);
});

