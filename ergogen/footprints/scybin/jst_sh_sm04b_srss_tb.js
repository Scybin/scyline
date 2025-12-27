//
// qwiik_jst – JST SH SM04B-SRSS-TB, 1x04, horizontal
//
// Copyright (c) 2025 @Scybin
//
// This footprint generator and the footprint it produces are licensed
// under the Creative Commons Attribution-ShareAlike 4.0 International
// License (CC BY-SA 4.0).
// See https://creativecommons.org/licenses/by-sa/4.0/
//
// Based on the KiCad footprint
//   Connector_JST:JST_SH_SM04B-SRSS-TB_1x04-1MP_P1.00mm_Horizontal
// from the official kicad-footprints library.
// Modifications by @Scybin.
//  - Add F & B parameters
//  - Assign logical names to footprint
//  - Add Qwiic nets for signal pins

module.exports = {
  params: {
    designator: 'J',
    side: 'F',              // "F" or "B"
    reversible: false,      // if "true", pads and silk on both F and B

    include_silkscreen: true,
    include_courtyard: true,

    // Nets for the 4 signal pins
    GND: { type: 'net', value: 'GND' },
    VCC: { type: 'net', value: 'VCC' },
    SDA: { type: 'net', value: 'SDA' },
    SCL: { type: 'net', value: 'SCL' },
  },

  body: (p) => {
    const common_start = `
    (footprint "scybin:qwiik_jst"
      (layer "${p.side}.Cu")
      ${p.at}
      (descr "JST SH series connector, SM04B-SRSS-TB (http://www.jst-mfg.com/product/pdf/eng/eSH.pdf)")
      (tags "connector JST SH horizontal")
      (property "Reference" "${p.ref}"
        (at 0 -3.98 ${p.r})
        (layer "${p.side}.SilkS")
        ${p.ref_hide || ''}
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Value" "qwiik_jst"
        (at 0 3.98 ${p.r})
        (layer "F.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (attr smd)
    `;

    const silk_front = `
      (fp_line
        (start -3.11 -1.785)
        (end -2.06 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
      (fp_line
        (start -3.11 0.715)
        (end -3.11 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
      (fp_line
        (start -2.06 -1.785)
        (end -2.06 -2.775)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
      (fp_line
        (start -1.94 2.685)
        (end 1.94 2.685)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
      (fp_line
        (start 3.11 -1.785)
        (end 2.06 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
      (fp_line
        (start 3.11 0.715)
        (end 3.11 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "F.SilkS")
      )
    `;

    const silk_back = `
      (fp_line
        (start -3.11 -1.785)
        (end -2.06 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
      (fp_line
        (start -3.11 0.715)
        (end -3.11 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
      (fp_line
        (start -2.06 -1.785)
        (end -2.06 -2.775)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
      (fp_line
        (start -1.94 2.685)
        (end 1.94 2.685)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
      (fp_line
        (start 3.11 -1.785)
        (end 2.06 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
      (fp_line
        (start 3.11 0.715)
        (end 3.11 -1.785)
        (stroke (width 0.12) (type solid))
        (layer "B.SilkS")
      )
    `;

    const courtyard_front = `
      (fp_line
        (start -3.9 0.47)
        (end -3.5 0.47)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -3.9 3.28)
        (end -3.9 0.47)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -3.5 -2.18)
        (end -2.3 -2.18)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -3.5 0.47)
        (end -3.5 -2.18)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -2.3 -3.28)
        (end 2.3 -3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -2.3 -2.18)
        (end -2.3 -3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -1.69 3.08)
        (end -1.69 3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start -1.69 3.28)
        (end -3.9 3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 1.69 3.08)
        (end -1.69 3.08)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 1.69 3.28)
        (end 1.69 3.08)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 2.3 -3.28)
        (end 2.3 -2.18)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 2.3 -2.18)
        (end 3.5 -2.18)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 3.5 -2.18)
        (end 3.5 0.47)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 3.5 0.47)
        (end 3.9 0.47)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 3.9 0.47)
        (end 3.9 3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
      (fp_line
        (start 3.9 3.28)
        (end 1.69 3.28)
        (stroke (width 0.05) (type solid))
        (layer "F.CrtYd")
      )
    `;

    const fab_front = `
      (fp_line
        (start -3 -1.675)
        (end -3 2.575)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_line
        (start -3 -1.675)
        (end 3 -1.675)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_line
        (start -3 2.575)
        (end 3 2.575)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_line
        (start -2 -1.675)
        (end -1.5 -0.967893)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_line
        (start -1.5 -0.967893)
        (end -1 -1.675)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_line
        (start 3 -1.675)
        (end 3 2.575)
        (stroke (width 0.1) (type solid))
        (layer "F.Fab")
      )
      (fp_text user "${p.ref}"
        (at 0 0 ${p.r})
        (layer "F.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
    `;

    const pads_front = `
      (pad "1" smd roundrect
        (at -1.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.25)
        ${p.GND}
      )
      (pad "2" smd roundrect
        (at -0.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.25)
        ${p.VCC}
      )
      (pad "3" smd roundrect
        (at 0.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.25)
        ${p.SDA}
      )
      (pad "4" smd roundrect
        (at 1.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.25)
        ${p.SCL}
      )
      (pad "MP" smd roundrect
        (at -2.8 1.875 ${p.r})
        (size 1.2 1.8)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.208333)
      )
      (pad "MP" smd roundrect
        (at 2.8 1.875 ${p.r})
        (size 1.2 1.8)
        (layers "F.Cu" "F.Mask" "F.Paste")
        (roundrect_rratio 0.208333)
      )
    `;

    const pads_back = `
      (pad "1" smd roundrect
        (at -1.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.25)
        ${p.GND}
      )
      (pad "2" smd roundrect
        (at -0.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.25)
        ${p.VCC}
      )
      (pad "3" smd roundrect
        (at 0.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.25)
        ${p.SDA}
      )
      (pad "4" smd roundrect
        (at 1.5 -2 ${p.r})
        (size 0.6 1.55)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.25)
        ${p.SCL}
      )
      (pad "MP" smd roundrect
        (at -2.8 1.875 ${p.r})
        (size 1.2 1.8)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.208333)
      )
      (pad "MP" smd roundrect
        (at 2.8 1.875 ${p.r})
        (size 1.2 1.8)
        (layers "B.Cu" "B.Mask" "B.Paste")
        (roundrect_rratio 0.208333)
      )
    `;

    let out = common_start;

    if (p.side === 'F' || p.reversible) {
      if (p.include_silkscreen) {
        out += silk_front;
      }
      if (p.include_courtyard) {
        out += courtyard_front;
      }
      out += fab_front;
      out += pads_front;
    }

    if (p.side === 'B' || p.reversible) {
      if (p.include_silkscreen) {
        out += silk_back;
      }
      out += pads_back;
    }

    out += `
    )
    `;
    return out;
  },
};
