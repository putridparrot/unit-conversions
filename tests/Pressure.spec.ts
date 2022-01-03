// <auto-generated>
// This code was generated by the UnitCodeGenerator tool
//
// Changes to this file will be lost if the code is regenerated
// </auto-generated>

import * as fc from 'fast-check';
import { Pressure } from '../src/Pressure';

it('From Atmospheres to Bars and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Atmospheres.toBars(value)
            const convertBack = Pressure.Bars.toAtmospheres(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Atmospheres to Bars', () => {
    expect(Pressure.Atmospheres.toBars(6.0)).toBeCloseTo(6.0795, 1);
    expect(Pressure.Atmospheres.toBars(1.2)).toBeCloseTo(1.2159, 1);
    expect(Pressure.Atmospheres.toBars(0.8)).toBeCloseTo(0.8106, 1);
});

it('From Atmospheres to Pascals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Atmospheres.toPascals(value)
            const convertBack = Pressure.Pascals.toAtmospheres(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Atmospheres to Pascals', () => {
    expect(Pressure.Atmospheres.toPascals(0.8)).toBeCloseTo(81060.0, 1);
    expect(Pressure.Atmospheres.toPascals(1.2)).toBeCloseTo(121590.0, 1);
    expect(Pressure.Atmospheres.toPascals(0.45)).toBeCloseTo(45596.25, 1);
});

it('From Atmospheres to Torrs and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Atmospheres.toTorrs(value)
            const convertBack = Pressure.Torrs.toAtmospheres(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Atmospheres to Torrs', () => {
    expect(Pressure.Atmospheres.toTorrs(0.45)).toBeCloseTo(342.0, 1);
    expect(Pressure.Atmospheres.toTorrs(1.2)).toBeCloseTo(912.0, 1);
    expect(Pressure.Atmospheres.toTorrs(6.0)).toBeCloseTo(4560.0, 1);
});

it('From Atmospheres to Psi and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Atmospheres.toPsi(value)
            const convertBack = Pressure.Psi.toAtmospheres(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Atmospheres to Psi', () => {
    expect(Pressure.Atmospheres.toPsi(6.0)).toBeCloseTo(88.1757, 1);
    expect(Pressure.Atmospheres.toPsi(0.4)).toBeCloseTo(5.87838, 1);
    expect(Pressure.Atmospheres.toPsi(1.2)).toBeCloseTo(17.6351, 1);
});

it('From Bars to Atmospheres and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Bars.toAtmospheres(value)
            const convertBack = Pressure.Atmospheres.toBars(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Bars to Atmospheres', () => {
    expect(Pressure.Bars.toAtmospheres(800.0)).toBeCloseTo(789.539, 1);
    expect(Pressure.Bars.toAtmospheres(123.0)).toBeCloseTo(121.392, 1);
    expect(Pressure.Bars.toAtmospheres(89.0)).toBeCloseTo(87.8362, 1);
});

it('From Bars to Pascals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Bars.toPascals(value)
            const convertBack = Pressure.Pascals.toBars(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Bars to Pascals', () => {
    expect(Pressure.Bars.toPascals(0.89)).toBeCloseTo(89000.0, 1);
    expect(Pressure.Bars.toPascals(0.01)).toBeCloseTo(1000.0, 1);
    expect(Pressure.Bars.toPascals(0.123)).toBeCloseTo(12300.0, 1);
});

it('From Bars to Torrs and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Bars.toTorrs(value)
            const convertBack = Pressure.Torrs.toBars(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Bars to Torrs', () => {
    expect(Pressure.Bars.toTorrs(0.123)).toBeCloseTo(92.257587, 1);
    expect(Pressure.Bars.toTorrs(2.0)).toBeCloseTo(1500.12, 1);
    expect(Pressure.Bars.toTorrs(8.9)).toBeCloseTo(6675.55, 1);
});

it('From Bars to Psi and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Bars.toPsi(value)
            const convertBack = Pressure.Psi.toBars(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Bars to Psi', () => {
    expect(Pressure.Bars.toPsi(8.1)).toBeCloseTo(117.481, 1);
    expect(Pressure.Bars.toPsi(1001.0)).toBeCloseTo(14518.29290, 1);
    expect(Pressure.Bars.toPsi(6.0)).toBeCloseTo(87.0226, 1);
});

it('From Pascals to Atmospheres and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Pascals.toAtmospheres(value)
            const convertBack = Pressure.Atmospheres.toPascals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Pascals to Atmospheres', () => {
    expect(Pressure.Pascals.toAtmospheres(90000.0)).toBeCloseTo(0.88823094, 1);
    expect(Pressure.Pascals.toAtmospheres(1234567.0)).toBeCloseTo(12.18422897, 1);
    expect(Pressure.Pascals.toAtmospheres(204060.0)).toBeCloseTo(2.01391562, 1);
});

it('From Pascals to Bars and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Pascals.toBars(value)
            const convertBack = Pressure.Bars.toPascals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Pascals to Bars', () => {
    expect(Pressure.Pascals.toBars(10000.0)).toBeCloseTo(0.1, 1);
    expect(Pressure.Pascals.toBars(12345.0)).toBeCloseTo(0.12345, 1);
    expect(Pressure.Pascals.toBars(80000.0)).toBeCloseTo(0.8, 1);
});

it('From Pascals to Torrs and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Pascals.toTorrs(value)
            const convertBack = Pressure.Torrs.toPascals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Pascals to Torrs', () => {
    expect(Pressure.Pascals.toTorrs(80000.0)).toBeCloseTo(600.04935, 1);
    expect(Pressure.Pascals.toTorrs(1234.0)).toBeCloseTo(9.255761, 1);
    expect(Pressure.Pascals.toTorrs(80.0)).toBeCloseTo(0.600049, 1);
});

it('From Pascals to Psi and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Pascals.toPsi(value)
            const convertBack = Pressure.Psi.toPascals(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Pascals to Psi', () => {
    expect(Pressure.Pascals.toPsi(800.0)).toBeCloseTo(0.11603, 1);
    expect(Pressure.Pascals.toPsi(8670.0)).toBeCloseTo(1.257477, 1);
    expect(Pressure.Pascals.toPsi(1000.0)).toBeCloseTo(0.145038, 1);
});

it('From Psi to Bars and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Psi.toBars(value)
            const convertBack = Pressure.Bars.toPsi(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Psi to Bars', () => {
    expect(Pressure.Psi.toBars(900.0)).toBeCloseTo(62.0528, 1);
    expect(Pressure.Psi.toBars(134.0)).toBeCloseTo(9.23897, 1);
    expect(Pressure.Psi.toBars(111.2)).toBeCloseTo(7.6669701, 1);
});

it('From Psi to Pascals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Psi.toPascals(value)
            const convertBack = Pressure.Pascals.toPsi(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Psi to Pascals', () => {
    expect(Pressure.Psi.toPascals(0.9)).toBeCloseTo(6205.28, 1);
    expect(Pressure.Psi.toPascals(0.03)).toBeCloseTo(206.8427, 1);
    expect(Pressure.Psi.toPascals(2.0)).toBeCloseTo(13789.5, 1);
});

it('From Psi to Atmospheres and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Psi.toAtmospheres(value)
            const convertBack = Pressure.Atmospheres.toPsi(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Psi to Atmospheres', () => {
    expect(Pressure.Psi.toAtmospheres(2.0)).toBeCloseTo(0.136092, 1);
    expect(Pressure.Psi.toAtmospheres(109.0)).toBeCloseTo(7.41701, 1);
    expect(Pressure.Psi.toAtmospheres(8.0)).toBeCloseTo(0.544368, 1);
});

it('From Psi to Torrs and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Psi.toTorrs(value)
            const convertBack = Pressure.Torrs.toPsi(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Psi to Torrs', () => {
    expect(Pressure.Psi.toTorrs(6.0)).toBeCloseTo(310.29, 1);
    expect(Pressure.Psi.toTorrs(3.4)).toBeCloseTo(175.831, 1);
    expect(Pressure.Psi.toTorrs(0.5)).toBeCloseTo(25.8575, 1);
});

it('From Torrs to Bars and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Torrs.toBars(value)
            const convertBack = Pressure.Bars.toTorrs(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Torrs to Bars', () => {
    expect(Pressure.Torrs.toBars(100.0)).toBeCloseTo(0.133322, 1);
    expect(Pressure.Torrs.toBars(9000.1)).toBeCloseTo(11.9991465, 1);
    expect(Pressure.Torrs.toBars(1234.0)).toBeCloseTo(1.645198, 1);
});

it('From Torrs to Pascals and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Torrs.toPascals(value)
            const convertBack = Pressure.Pascals.toTorrs(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Torrs to Pascals', () => {
    expect(Pressure.Torrs.toPascals(190.0)).toBeCloseTo(25331.2499, 1);
    expect(Pressure.Torrs.toPascals(6.5)).toBeCloseTo(866.595, 1);
    expect(Pressure.Torrs.toPascals(3.4)).toBeCloseTo(453.296, 1);
});

it('From Torrs to Atmospheres and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Torrs.toAtmospheres(value)
            const convertBack = Pressure.Atmospheres.toTorrs(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Torrs to Atmospheres', () => {
    expect(Pressure.Torrs.toAtmospheres(5678.0)).toBeCloseTo(7.471053, 1);
    expect(Pressure.Torrs.toAtmospheres(100.0)).toBeCloseTo(0.131579, 1);
    expect(Pressure.Torrs.toAtmospheres(4509.0)).toBeCloseTo(5.932895, 1);
});

it('From Torrs to Psi and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Pressure.Torrs.toPsi(value)
            const convertBack = Pressure.Psi.toTorrs(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Torrs to Psi', () => {
    expect(Pressure.Torrs.toPsi(4500.0)).toBeCloseTo(87.01549, 1);
    expect(Pressure.Torrs.toPsi(1234.0)).toBeCloseTo(23.86158, 1);
    expect(Pressure.Torrs.toPsi(900.0)).toBeCloseTo(17.4031, 1);
});

