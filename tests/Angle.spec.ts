// <auto-generated>
// This code was generated by the UnitCodeGenerator tool
//
// Changes to this file will be lost if the code is regenerated
// </auto-generated>

import * as fc from 'fast-check';
import { Angle } from '../src/Angle';

it('From Degrees to Radians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Degrees.toRadians(value)
            const convertBack = Angle.Radians.toDegrees(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Degrees to Radians', () => {
    expect(Angle.Degrees.toRadians(98.8)).toBeCloseTo(1.724385, 1);
    expect(Angle.Degrees.toRadians(8000.0)).toBeCloseTo(139.6263, 1);
    expect(Angle.Degrees.toRadians(8.0)).toBeCloseTo(0.139626, 1);
});

it('From Degrees to Gradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Degrees.toGradians(value)
            const convertBack = Angle.Gradians.toDegrees(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Degrees to Gradians', () => {
    expect(Angle.Degrees.toGradians(123.0)).toBeCloseTo(136.667, 1);
    expect(Angle.Degrees.toGradians(65.0)).toBeCloseTo(72.2222, 1);
    expect(Angle.Degrees.toGradians(900.0)).toBeCloseTo(1000.0, 1);
});

it('From Degrees to Milliradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Degrees.toMilliradians(value)
            const convertBack = Angle.Milliradians.toDegrees(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Degrees to Milliradians', () => {
    expect(Angle.Degrees.toMilliradians(900.0)).toBeCloseTo(15707.969, 1);
    expect(Angle.Degrees.toMilliradians(76.0)).toBeCloseTo(1326.45, 1);
    expect(Angle.Degrees.toMilliradians(4.5)).toBeCloseTo(78.5398, 1);
    expect(Angle.Degrees.toMilliradians(23333.11)).toBeCloseTo(407239.5873, 1);
});

it('From Degrees to Minute Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Degrees.toMinuteOfArc(value)
            const convertBack = Angle.MinuteOfArc.toDegrees(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Degrees to Minute Of Arc', () => {
    expect(Angle.Degrees.toMinuteOfArc(97.0)).toBeCloseTo(5820.0, 1);
    expect(Angle.Degrees.toMinuteOfArc(8.65)).toBeCloseTo(519.0, 1);
    expect(Angle.Degrees.toMinuteOfArc(12.0)).toBeCloseTo(720.0, 1);
});

it('From Degrees to Seconds Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Degrees.toSecondsOfArc(value)
            const convertBack = Angle.SecondsOfArc.toDegrees(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Degrees to Seconds Of Arc', () => {
    expect(Angle.Degrees.toSecondsOfArc(12.0)).toBeCloseTo(43200.0, 1);
    expect(Angle.Degrees.toSecondsOfArc(910.4)).toBeCloseTo(3277440.0, 1);
    expect(Angle.Degrees.toSecondsOfArc(5.6)).toBeCloseTo(20160.0, 1);
});

it('From Gradians to Degrees and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Gradians.toDegrees(value)
            const convertBack = Angle.Degrees.toGradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Gradians to Degrees', () => {
    expect(Angle.Gradians.toDegrees(5.6)).toBeCloseTo(5.04, 1);
    expect(Angle.Gradians.toDegrees(167.0)).toBeCloseTo(150.3, 1);
    expect(Angle.Gradians.toDegrees(0.1)).toBeCloseTo(0.09, 1);
});

it('From Gradians to Radians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Gradians.toRadians(value)
            const convertBack = Angle.Radians.toGradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Gradians to Radians', () => {
    expect(Angle.Gradians.toRadians(67.9)).toBeCloseTo(1.066571, 1);
    expect(Angle.Gradians.toRadians(8000.0)).toBeCloseTo(125.6637, 1);
    expect(Angle.Gradians.toRadians(6.5)).toBeCloseTo(0.102102, 1);
});

it('From Gradians to Milliradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Gradians.toMilliradians(value)
            const convertBack = Angle.Milliradians.toGradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Gradians to Milliradians', () => {
    expect(Angle.Gradians.toMilliradians(8.1)).toBeCloseTo(127.2348, 1);
    expect(Angle.Gradians.toMilliradians(900.0)).toBeCloseTo(14137.167, 1);
    expect(Angle.Gradians.toMilliradians(1902.5)).toBeCloseTo(29884.4, 1);
});

it('From Gradians to Minute Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Gradians.toMinuteOfArc(value)
            const convertBack = Angle.MinuteOfArc.toGradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Gradians to Minute Of Arc', () => {
    expect(Angle.Gradians.toMinuteOfArc(80.9)).toBeCloseTo(4368.6, 1);
    expect(Angle.Gradians.toMinuteOfArc(1678.0)).toBeCloseTo(90612.0, 1);
    expect(Angle.Gradians.toMinuteOfArc(900.0)).toBeCloseTo(48600.0, 1);
});

it('From Gradians to Seconds Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Gradians.toSecondsOfArc(value)
            const convertBack = Angle.SecondsOfArc.toGradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Gradians to Seconds Of Arc', () => {
    expect(Angle.Gradians.toSecondsOfArc(0.9)).toBeCloseTo(2916.0, 1);
    expect(Angle.Gradians.toSecondsOfArc(12.3)).toBeCloseTo(39852.0, 1);
    expect(Angle.Gradians.toSecondsOfArc(5.1)).toBeCloseTo(16524.0, 1);
});

it('From Milliradians to Degrees and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Milliradians.toDegrees(value)
            const convertBack = Angle.Degrees.toMilliradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Milliradians to Degrees', () => {
    expect(Angle.Milliradians.toDegrees(5.9)).toBeCloseTo(0.338045, 1);
    expect(Angle.Milliradians.toDegrees(109.0)).toBeCloseTo(6.24524, 1);
    expect(Angle.Milliradians.toDegrees(7009.0)).toBeCloseTo(401.5861, 1);
    expect(Angle.Milliradians.toDegrees(407239.5873)).toBeCloseTo(23333.11, 1);
});

it('From Milliradians to Radians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Milliradians.toRadians(value)
            const convertBack = Angle.Radians.toMilliradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Milliradians to Radians', () => {
    expect(Angle.Milliradians.toRadians(8011.0)).toBeCloseTo(8.011, 1);
    expect(Angle.Milliradians.toRadians(7689.0)).toBeCloseTo(7.689, 1);
    expect(Angle.Milliradians.toRadians(129.0)).toBeCloseTo(0.129, 1);
});

it('From Milliradians to Gradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Milliradians.toGradians(value)
            const convertBack = Angle.Gradians.toMilliradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Milliradians to Gradians', () => {
    expect(Angle.Milliradians.toGradians(129.0)).toBeCloseTo(8.2124, 1);
    expect(Angle.Milliradians.toGradians(800.0)).toBeCloseTo(50.9296, 1);
    expect(Angle.Milliradians.toGradians(12.89)).toBeCloseTo(0.8206029, 1);
});

it('From Milliradians to Minute Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Milliradians.toMinuteOfArc(value)
            const convertBack = Angle.MinuteOfArc.toMilliradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Milliradians to Minute Of Arc', () => {
    expect(Angle.Milliradians.toMinuteOfArc(12.0)).toBeCloseTo(41.253, 1);
    expect(Angle.Milliradians.toMinuteOfArc(0.9)).toBeCloseTo(3.09397, 1);
    expect(Angle.Milliradians.toMinuteOfArc(800.0)).toBeCloseTo(2750.2, 1);
});

it('From Milliradians to Seconds Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Milliradians.toSecondsOfArc(value)
            const convertBack = Angle.SecondsOfArc.toMilliradians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Milliradians to Seconds Of Arc', () => {
    expect(Angle.Milliradians.toSecondsOfArc(67.0)).toBeCloseTo(13819.742, 1);
    expect(Angle.Milliradians.toSecondsOfArc(900.0)).toBeCloseTo(185638.32562238674, 1);
    expect(Angle.Milliradians.toSecondsOfArc(812.5)).toBeCloseTo(167590.16, 1);
});

it('From Minute Of Arc to Degrees and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.MinuteOfArc.toDegrees(value)
            const convertBack = Angle.Degrees.toMinuteOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Minute Of Arc to Degrees', () => {
    expect(Angle.MinuteOfArc.toDegrees(89.0)).toBeCloseTo(1.48333, 1);
    expect(Angle.MinuteOfArc.toDegrees(160.5)).toBeCloseTo(2.675, 1);
    expect(Angle.MinuteOfArc.toDegrees(0.9)).toBeCloseTo(0.015, 1);
});

it('From Minute Of Arc to Radians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.MinuteOfArc.toRadians(value)
            const convertBack = Angle.Radians.toMinuteOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Minute Of Arc to Radians', () => {
    expect(Angle.MinuteOfArc.toRadians(1790.0)).toBeCloseTo(0.5206899, 1);
    expect(Angle.MinuteOfArc.toRadians(9999.0)).toBeCloseTo(2.908591, 1);
    expect(Angle.MinuteOfArc.toRadians(12345.0)).toBeCloseTo(3.5910149, 1);
});

it('From Minute Of Arc to Gradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.MinuteOfArc.toGradians(value)
            const convertBack = Angle.Gradians.toMinuteOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Minute Of Arc to Gradians', () => {
    expect(Angle.MinuteOfArc.toGradians(300.0)).toBeCloseTo(5.55556, 1);
    expect(Angle.MinuteOfArc.toGradians(1009.0)).toBeCloseTo(18.68519, 1);
    expect(Angle.MinuteOfArc.toGradians(6700.5)).toBeCloseTo(124.083335, 1);
});

it('From Minute Of Arc to Milliradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.MinuteOfArc.toMilliradians(value)
            const convertBack = Angle.Milliradians.toMinuteOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Minute Of Arc to Milliradians', () => {
    expect(Angle.MinuteOfArc.toMilliradians(600.0)).toBeCloseTo(174.533, 1);
    expect(Angle.MinuteOfArc.toMilliradians(90.7)).toBeCloseTo(26.38356, 1);
    expect(Angle.MinuteOfArc.toMilliradians(1700.0)).toBeCloseTo(494.51, 1);
});

it('From Minute Of Arc to Seconds Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.MinuteOfArc.toSecondsOfArc(value)
            const convertBack = Angle.SecondsOfArc.toMinuteOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Minute Of Arc to Seconds Of Arc', () => {
    expect(Angle.MinuteOfArc.toSecondsOfArc(0.9)).toBeCloseTo(54.0, 1);
    expect(Angle.MinuteOfArc.toSecondsOfArc(70.0)).toBeCloseTo(4200.0, 1);
    expect(Angle.MinuteOfArc.toSecondsOfArc(901.6)).toBeCloseTo(54096.0, 1);
});

it('From Radians to Degrees and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Radians.toDegrees(value)
            const convertBack = Angle.Degrees.toRadians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Radians to Degrees', () => {
    expect(Angle.Radians.toDegrees(4.5)).toBeCloseTo(257.831, 1);
    expect(Angle.Radians.toDegrees(0.9)).toBeCloseTo(51.5662, 1);
    expect(Angle.Radians.toDegrees(78.9)).toBeCloseTo(4520.637, 1);
});

it('From Radians to Gradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Radians.toGradians(value)
            const convertBack = Angle.Gradians.toRadians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Radians to Gradians', () => {
    expect(Angle.Radians.toGradians(5.0)).toBeCloseTo(318.31, 1);
    expect(Angle.Radians.toGradians(0.9)).toBeCloseTo(57.2958, 1);
    expect(Angle.Radians.toGradians(89.0)).toBeCloseTo(5665.92, 1);
});

it('From Radians to Milliradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Radians.toMilliradians(value)
            const convertBack = Angle.Milliradians.toRadians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Radians to Milliradians', () => {
    expect(Angle.Radians.toMilliradians(5.0)).toBeCloseTo(5000.0, 1);
    expect(Angle.Radians.toMilliradians(0.13)).toBeCloseTo(130.0, 1);
    expect(Angle.Radians.toMilliradians(0.13)).toBeCloseTo(130.0, 1);
    expect(Angle.Radians.toMilliradians(89.1)).toBeCloseTo(89100.0, 1);
});

it('From Radians to Minute Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Radians.toMinuteOfArc(value)
            const convertBack = Angle.MinuteOfArc.toRadians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Radians to Minute Of Arc', () => {
    expect(Angle.Radians.toMinuteOfArc(6.0)).toBeCloseTo(20626.480624709635, 1);
    expect(Angle.Radians.toMinuteOfArc(0.8)).toBeCloseTo(2750.2, 1);
    expect(Angle.Radians.toMinuteOfArc(2.3)).toBeCloseTo(7906.82, 1);
});

it('From Radians to Seconds Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.Radians.toSecondsOfArc(value)
            const convertBack = Angle.SecondsOfArc.toRadians(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Radians to Seconds Of Arc', () => {
    expect(Angle.Radians.toSecondsOfArc(0.8)).toBeCloseTo(165011.84499767708, 1);
    expect(Angle.Radians.toSecondsOfArc(0.001)).toBeCloseTo(206.26481, 1);
    expect(Angle.Radians.toSecondsOfArc(0.9)).toBeCloseTo(185638.32562238674, 1);
});

it('From Seconds Of Arc to Degrees and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.SecondsOfArc.toDegrees(value)
            const convertBack = Angle.Degrees.toSecondsOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Seconds Of Arc to Degrees', () => {
    expect(Angle.SecondsOfArc.toDegrees(900.0)).toBeCloseTo(0.25, 1);
    expect(Angle.SecondsOfArc.toDegrees(123.4)).toBeCloseTo(0.034277778, 1);
    expect(Angle.SecondsOfArc.toDegrees(8000.0)).toBeCloseTo(2.222222, 1);
});

it('From Seconds Of Arc to Radians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.SecondsOfArc.toRadians(value)
            const convertBack = Angle.Radians.toSecondsOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Seconds Of Arc to Radians', () => {
    expect(Angle.SecondsOfArc.toRadians(190000.0)).toBeCloseTo(0.921145994, 1);
    expect(Angle.SecondsOfArc.toRadians(88990.0)).toBeCloseTo(0.43143569, 1);
    expect(Angle.SecondsOfArc.toRadians(100000.0)).toBeCloseTo(0.48481368, 1);
});

it('From Seconds Of Arc to Gradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.SecondsOfArc.toGradians(value)
            const convertBack = Angle.Gradians.toSecondsOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Seconds Of Arc to Gradians', () => {
    expect(Angle.SecondsOfArc.toGradians(1000.0)).toBeCloseTo(0.308642, 1);
    expect(Angle.SecondsOfArc.toGradians(809.0)).toBeCloseTo(0.249691, 1);
    expect(Angle.SecondsOfArc.toGradians(1567.9)).toBeCloseTo(0.483919761, 1);
});

it('From Seconds Of Arc to Milliradians and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.SecondsOfArc.toMilliradians(value)
            const convertBack = Angle.Milliradians.toSecondsOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Seconds Of Arc to Milliradians', () => {
    expect(Angle.SecondsOfArc.toMilliradians(1234.0)).toBeCloseTo(5.982601, 1);
    expect(Angle.SecondsOfArc.toMilliradians(909.0)).toBeCloseTo(4.40696, 1);
    expect(Angle.SecondsOfArc.toMilliradians(190009.0)).toBeCloseTo(921.189627, 1);
});

it('From Seconds Of Arc to Minute Of Arc and back', () => {
    fc.assert(
        fc.property(fc.float(), value => {
            const convertTo = Angle.SecondsOfArc.toMinuteOfArc(value)
            const convertBack = Angle.MinuteOfArc.toSecondsOfArc(convertTo)

            expect(convertBack).toBeCloseTo(convertBack, 1);
        })
    )
});

it('Convert known Seconds Of Arc to Minute Of Arc', () => {
    expect(Angle.SecondsOfArc.toMinuteOfArc(100.0)).toBeCloseTo(1.66667, 1);
    expect(Angle.SecondsOfArc.toMinuteOfArc(908.0)).toBeCloseTo(15.1333, 1);
    expect(Angle.SecondsOfArc.toMinuteOfArc(8091.0)).toBeCloseTo(134.85, 1);
});

