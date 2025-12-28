function switchplate_tb_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[90,-160],[90,-83]]).appendPoint([109,-83]).appendPoint([109,-81.1]).appendPoint([128,-81.1]).appendPoint([128,-68.56]).appendPoint([147,-68.56]).appendPoint([147,-63.81]).appendPoint([167,-63.81]).appendPoint([167,-68.56]).appendPoint([186,-68.56]).appendPoint([186,-71.41]).appendPoint([204,-71.41]).appendPoint([204,-127.9302041]).appendArc([205.4797959,-129.41],{"radius":1.1,"clockwise":false,"large":true}).appendPoint([224,-129.41]).appendPoint([224,-147.41]).appendPoint([213.75,-147.41]).appendPoint([213.75,-167.41]).appendPoint([166.5,-167.41]).appendPoint([147.2742905,-170.5419278]).appendPoint([129,-158.1]).appendPoint([110,-158.1]).appendPoint([110,-160]).appendPoint([90,-160]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[204.5,-147.41],"radius":1.1})
.union(
    CAG.circle({"center":[185.5,-127.485],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-108.485],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-89.485],"radius":1.1})
).union(
    CAG.circle({"center":[156.2875,-144.965],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-139.55],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-120.55],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-101.55],"radius":1.1})
).union(
    new CSG.Path2D([[149.896883,-167.2291915],[163.6841915,-164.798117]]).appendPoint([161.253117,-151.0108085]).appendPoint([147.4658085,-153.441883]).appendPoint([149.896883,-167.2291915]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-145.41],[221,-145.41]]).appendPoint([221,-131.41]).appendPoint([207,-131.41]).appendPoint([207,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.5,-164.41],[206.5,-164.41]]).appendPoint([206.5,-150.41]).appendPoint([192.5,-150.41]).appendPoint([192.5,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-164.41],[183,-164.41]]).appendPoint([183,-150.41]).appendPoint([169,-150.41]).appendPoint([169,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-88.41],[202,-88.41]]).appendPoint([202,-74.41]).appendPoint([188,-74.41]).appendPoint([188,-88.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-107.41],[202,-107.41]]).appendPoint([202,-93.41]).appendPoint([188,-93.41]).appendPoint([188,-107.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-126.41],[202,-126.41]]).appendPoint([202,-112.41]).appendPoint([188,-112.41]).appendPoint([188,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-145.41],[202,-145.41]]).appendPoint([202,-131.41]).appendPoint([188,-131.41]).appendPoint([188,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-85.56],[183,-85.56]]).appendPoint([183,-71.56]).appendPoint([169,-71.56]).appendPoint([169,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-104.56],[183,-104.56]]).appendPoint([183,-90.56]).appendPoint([169,-90.56]).appendPoint([169,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-123.56],[183,-123.56]]).appendPoint([183,-109.56]).appendPoint([169,-109.56]).appendPoint([169,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-142.56],[183,-142.56]]).appendPoint([183,-128.56]).appendPoint([169,-128.56]).appendPoint([169,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-80.81],[164,-80.81]]).appendPoint([164,-66.81]).appendPoint([150,-66.81]).appendPoint([150,-80.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-99.81],[164,-99.81]]).appendPoint([164,-85.81]).appendPoint([150,-85.81]).appendPoint([150,-99.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-118.81],[164,-118.81]]).appendPoint([164,-104.81]).appendPoint([150,-104.81]).appendPoint([150,-118.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-137.81],[164,-137.81]]).appendPoint([164,-123.81]).appendPoint([150,-123.81]).appendPoint([150,-137.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-85.56],[145,-85.56]]).appendPoint([145,-71.56]).appendPoint([131,-71.56]).appendPoint([131,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-104.56],[145,-104.56]]).appendPoint([145,-90.56]).appendPoint([131,-90.56]).appendPoint([131,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-123.56],[145,-123.56]]).appendPoint([145,-109.56]).appendPoint([131,-109.56]).appendPoint([131,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-142.56],[145,-142.56]]).appendPoint([145,-128.56]).appendPoint([131,-128.56]).appendPoint([131,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-98.1],[126,-98.1]]).appendPoint([126,-84.1]).appendPoint([112,-84.1]).appendPoint([112,-98.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-117.1],[126,-117.1]]).appendPoint([126,-103.1]).appendPoint([112,-103.1]).appendPoint([112,-117.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-136.1],[126,-136.1]]).appendPoint([126,-122.1]).appendPoint([112,-122.1]).appendPoint([112,-136.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-155.1],[126,-155.1]]).appendPoint([126,-141.1]).appendPoint([112,-141.1]).appendPoint([112,-155.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-100],[107,-100]]).appendPoint([107,-86]).appendPoint([93,-86]).appendPoint([93,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-119],[107,-119]]).appendPoint([107,-105]).appendPoint([93,-105]).appendPoint([93,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-138],[107,-138]]).appendPoint([107,-124]).appendPoint([93,-124]).appendPoint([93,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-157],[107,-157]]).appendPoint([107,-143]).appendPoint([93,-143]).appendPoint([93,-157]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.6] });
}


function switch_cutout_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[321.3158085,-164.798117],[335.103117,-167.2291915]]).appendPoint([337.5341915,-153.441883]).appendPoint([323.746883,-151.0108085]).appendPoint([321.3158085,-164.798117]).close().innerToCAG()
.union(
    new CSG.Path2D([[149.896883,-167.2291915],[163.6841915,-164.798117]]).appendPoint([161.253117,-151.0108085]).appendPoint([147.4658085,-153.441883]).appendPoint([149.896883,-167.2291915]).close().innerToCAG()
).union(
    new CSG.Path2D([[264,-126.41],[278,-126.41]]).appendPoint([278,-112.41]).appendPoint([264,-112.41]).appendPoint([264,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[264,-145.41],[278,-145.41]]).appendPoint([278,-131.41]).appendPoint([264,-131.41]).appendPoint([264,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.5,-164.41],[292.5,-164.41]]).appendPoint([292.5,-150.41]).appendPoint([278.5,-150.41]).appendPoint([278.5,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[302,-164.41],[316,-164.41]]).appendPoint([316,-150.41]).appendPoint([302,-150.41]).appendPoint([302,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[283,-88.41],[297,-88.41]]).appendPoint([297,-74.41]).appendPoint([283,-74.41]).appendPoint([283,-88.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[283,-107.41],[297,-107.41]]).appendPoint([297,-93.41]).appendPoint([283,-93.41]).appendPoint([283,-107.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[283,-126.41],[297,-126.41]]).appendPoint([297,-112.41]).appendPoint([283,-112.41]).appendPoint([283,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[283,-145.41],[297,-145.41]]).appendPoint([297,-131.41]).appendPoint([283,-131.41]).appendPoint([283,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[302,-85.56],[316,-85.56]]).appendPoint([316,-71.56]).appendPoint([302,-71.56]).appendPoint([302,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[302,-104.56],[316,-104.56]]).appendPoint([316,-90.56]).appendPoint([302,-90.56]).appendPoint([302,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[302,-123.56],[316,-123.56]]).appendPoint([316,-109.56]).appendPoint([302,-109.56]).appendPoint([302,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[302,-142.56],[316,-142.56]]).appendPoint([316,-128.56]).appendPoint([302,-128.56]).appendPoint([302,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[321,-80.81],[335,-80.81]]).appendPoint([335,-66.81]).appendPoint([321,-66.81]).appendPoint([321,-80.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[321,-99.81],[335,-99.81]]).appendPoint([335,-85.81]).appendPoint([321,-85.81]).appendPoint([321,-99.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[321,-118.81],[335,-118.81]]).appendPoint([335,-104.81]).appendPoint([321,-104.81]).appendPoint([321,-118.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[321,-137.81],[335,-137.81]]).appendPoint([335,-123.81]).appendPoint([321,-123.81]).appendPoint([321,-137.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[340,-85.56],[354,-85.56]]).appendPoint([354,-71.56]).appendPoint([340,-71.56]).appendPoint([340,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[340,-104.56],[354,-104.56]]).appendPoint([354,-90.56]).appendPoint([340,-90.56]).appendPoint([340,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[340,-123.56],[354,-123.56]]).appendPoint([354,-109.56]).appendPoint([340,-109.56]).appendPoint([340,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[340,-142.56],[354,-142.56]]).appendPoint([354,-128.56]).appendPoint([340,-128.56]).appendPoint([340,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[359,-98.1],[373,-98.1]]).appendPoint([373,-84.1]).appendPoint([359,-84.1]).appendPoint([359,-98.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[359,-117.1],[373,-117.1]]).appendPoint([373,-103.1]).appendPoint([359,-103.1]).appendPoint([359,-117.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[359,-136.1],[373,-136.1]]).appendPoint([373,-122.1]).appendPoint([359,-122.1]).appendPoint([359,-136.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[359,-155.1],[373,-155.1]]).appendPoint([373,-141.1]).appendPoint([359,-141.1]).appendPoint([359,-155.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[378,-100],[392,-100]]).appendPoint([392,-86]).appendPoint([378,-86]).appendPoint([378,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[378,-119],[392,-119]]).appendPoint([392,-105]).appendPoint([378,-105]).appendPoint([378,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[378,-138],[392,-138]]).appendPoint([392,-124]).appendPoint([378,-124]).appendPoint([378,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[378,-157],[392,-157]]).appendPoint([392,-143]).appendPoint([378,-143]).appendPoint([378,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-126.41],[221,-126.41]]).appendPoint([221,-112.41]).appendPoint([207,-112.41]).appendPoint([207,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-145.41],[221,-145.41]]).appendPoint([221,-131.41]).appendPoint([207,-131.41]).appendPoint([207,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.5,-164.41],[206.5,-164.41]]).appendPoint([206.5,-150.41]).appendPoint([192.5,-150.41]).appendPoint([192.5,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-164.41],[183,-164.41]]).appendPoint([183,-150.41]).appendPoint([169,-150.41]).appendPoint([169,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-88.41],[202,-88.41]]).appendPoint([202,-74.41]).appendPoint([188,-74.41]).appendPoint([188,-88.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-107.41],[202,-107.41]]).appendPoint([202,-93.41]).appendPoint([188,-93.41]).appendPoint([188,-107.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-126.41],[202,-126.41]]).appendPoint([202,-112.41]).appendPoint([188,-112.41]).appendPoint([188,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-145.41],[202,-145.41]]).appendPoint([202,-131.41]).appendPoint([188,-131.41]).appendPoint([188,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-85.56],[183,-85.56]]).appendPoint([183,-71.56]).appendPoint([169,-71.56]).appendPoint([169,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-104.56],[183,-104.56]]).appendPoint([183,-90.56]).appendPoint([169,-90.56]).appendPoint([169,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-123.56],[183,-123.56]]).appendPoint([183,-109.56]).appendPoint([169,-109.56]).appendPoint([169,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-142.56],[183,-142.56]]).appendPoint([183,-128.56]).appendPoint([169,-128.56]).appendPoint([169,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-80.81],[164,-80.81]]).appendPoint([164,-66.81]).appendPoint([150,-66.81]).appendPoint([150,-80.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-99.81],[164,-99.81]]).appendPoint([164,-85.81]).appendPoint([150,-85.81]).appendPoint([150,-99.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-118.81],[164,-118.81]]).appendPoint([164,-104.81]).appendPoint([150,-104.81]).appendPoint([150,-118.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-137.81],[164,-137.81]]).appendPoint([164,-123.81]).appendPoint([150,-123.81]).appendPoint([150,-137.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-85.56],[145,-85.56]]).appendPoint([145,-71.56]).appendPoint([131,-71.56]).appendPoint([131,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-104.56],[145,-104.56]]).appendPoint([145,-90.56]).appendPoint([131,-90.56]).appendPoint([131,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-123.56],[145,-123.56]]).appendPoint([145,-109.56]).appendPoint([131,-109.56]).appendPoint([131,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-142.56],[145,-142.56]]).appendPoint([145,-128.56]).appendPoint([131,-128.56]).appendPoint([131,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-98.1],[126,-98.1]]).appendPoint([126,-84.1]).appendPoint([112,-84.1]).appendPoint([112,-98.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-117.1],[126,-117.1]]).appendPoint([126,-103.1]).appendPoint([112,-103.1]).appendPoint([112,-117.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-136.1],[126,-136.1]]).appendPoint([126,-122.1]).appendPoint([112,-122.1]).appendPoint([112,-136.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-155.1],[126,-155.1]]).appendPoint([126,-141.1]).appendPoint([112,-141.1]).appendPoint([112,-155.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-100],[107,-100]]).appendPoint([107,-86]).appendPoint([93,-86]).appendPoint([93,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-119],[107,-119]]).appendPoint([107,-105]).appendPoint([93,-105]).appendPoint([93,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-138],[107,-138]]).appendPoint([107,-124]).appendPoint([93,-124]).appendPoint([93,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-157],[107,-157]]).appendPoint([107,-143]).appendPoint([93,-143]).appendPoint([93,-157]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.6] });
}


function plate_hole_extrude_2_outline_fn(){
    return CAG.circle({"center":[280.5,-147.41],"radius":1.1})
.union(
    CAG.circle({"center":[280.5,-128.91],"radius":1.1})
).union(
    CAG.circle({"center":[299.5,-127.485],"radius":1.1})
).union(
    CAG.circle({"center":[299.5,-108.485],"radius":1.1})
).union(
    CAG.circle({"center":[299.5,-89.485],"radius":1.1})
).union(
    CAG.circle({"center":[328.7125,-144.965],"radius":1.1})
).union(
    CAG.circle({"center":[375.5,-139.55],"radius":1.1})
).union(
    CAG.circle({"center":[375.5,-120.55],"radius":1.1})
).union(
    CAG.circle({"center":[375.5,-101.55],"radius":1.1})
).union(
    CAG.circle({"center":[204.5,-147.41],"radius":1.1})
).union(
    CAG.circle({"center":[204.5,-128.91],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-127.485],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-108.485],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-89.485],"radius":1.1})
).union(
    CAG.circle({"center":[156.2875,-144.965],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-139.55],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-120.55],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-101.55],"radius":1.1})
).extrude({ offset: [0, 0, 2] });
}




                function _switchplate_tb_case_fn() {
                    

                // creating part 0 of case _switchplate_tb
                let _switchplate_tb__part_0 = switchplate_tb_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switchplate_tb__part_0_bounds = _switchplate_tb__part_0.getBounds();
                let _switchplate_tb__part_0_x = _switchplate_tb__part_0_bounds[0].x + (_switchplate_tb__part_0_bounds[1].x - _switchplate_tb__part_0_bounds[0].x) / 2
                let _switchplate_tb__part_0_y = _switchplate_tb__part_0_bounds[0].y + (_switchplate_tb__part_0_bounds[1].y - _switchplate_tb__part_0_bounds[0].y) / 2
                _switchplate_tb__part_0 = translate([-_switchplate_tb__part_0_x, -_switchplate_tb__part_0_y, 0], _switchplate_tb__part_0);
                _switchplate_tb__part_0 = rotate([0,0,0], _switchplate_tb__part_0);
                _switchplate_tb__part_0 = translate([_switchplate_tb__part_0_x, _switchplate_tb__part_0_y, 0], _switchplate_tb__part_0);

                _switchplate_tb__part_0 = translate([0,0,0], _switchplate_tb__part_0);
                let result = _switchplate_tb__part_0;
                
            
                    return result;
                }
            
            

                function _switch_holes_case_fn() {
                    

                // creating part 0 of case _switch_holes
                let _switch_holes__part_0 = switch_cutout_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switch_holes__part_0_bounds = _switch_holes__part_0.getBounds();
                let _switch_holes__part_0_x = _switch_holes__part_0_bounds[0].x + (_switch_holes__part_0_bounds[1].x - _switch_holes__part_0_bounds[0].x) / 2
                let _switch_holes__part_0_y = _switch_holes__part_0_bounds[0].y + (_switch_holes__part_0_bounds[1].y - _switch_holes__part_0_bounds[0].y) / 2
                _switch_holes__part_0 = translate([-_switch_holes__part_0_x, -_switch_holes__part_0_y, 0], _switch_holes__part_0);
                _switch_holes__part_0 = rotate([0,0,0], _switch_holes__part_0);
                _switch_holes__part_0 = translate([_switch_holes__part_0_x, _switch_holes__part_0_y, 0], _switch_holes__part_0);

                _switch_holes__part_0 = translate([0,0,0], _switch_holes__part_0);
                let result = _switch_holes__part_0;
                
            
                    return result;
                }
            
            

                function _plate_holes_case_fn() {
                    

                // creating part 0 of case _plate_holes
                let _plate_holes__part_0 = plate_hole_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _plate_holes__part_0_bounds = _plate_holes__part_0.getBounds();
                let _plate_holes__part_0_x = _plate_holes__part_0_bounds[0].x + (_plate_holes__part_0_bounds[1].x - _plate_holes__part_0_bounds[0].x) / 2
                let _plate_holes__part_0_y = _plate_holes__part_0_bounds[0].y + (_plate_holes__part_0_bounds[1].y - _plate_holes__part_0_bounds[0].y) / 2
                _plate_holes__part_0 = translate([-_plate_holes__part_0_x, -_plate_holes__part_0_y, 0], _plate_holes__part_0);
                _plate_holes__part_0 = rotate([0,0,0], _plate_holes__part_0);
                _plate_holes__part_0 = translate([_plate_holes__part_0_x, _plate_holes__part_0_y, 0], _plate_holes__part_0);

                _plate_holes__part_0 = translate([0,0,0], _plate_holes__part_0);
                let result = _plate_holes__part_0;
                
            
                    return result;
                }
            
            

                function switchplate_case_tb_case_fn() {
                    

                // creating part 0 of case switchplate_case_tb
                let switchplate_case_tb__part_0 = _switchplate_tb_case_fn();

                // make sure that rotations are relative
                let switchplate_case_tb__part_0_bounds = switchplate_case_tb__part_0.getBounds();
                let switchplate_case_tb__part_0_x = switchplate_case_tb__part_0_bounds[0].x + (switchplate_case_tb__part_0_bounds[1].x - switchplate_case_tb__part_0_bounds[0].x) / 2
                let switchplate_case_tb__part_0_y = switchplate_case_tb__part_0_bounds[0].y + (switchplate_case_tb__part_0_bounds[1].y - switchplate_case_tb__part_0_bounds[0].y) / 2
                switchplate_case_tb__part_0 = translate([-switchplate_case_tb__part_0_x, -switchplate_case_tb__part_0_y, 0], switchplate_case_tb__part_0);
                switchplate_case_tb__part_0 = rotate([0,0,0], switchplate_case_tb__part_0);
                switchplate_case_tb__part_0 = translate([switchplate_case_tb__part_0_x, switchplate_case_tb__part_0_y, 0], switchplate_case_tb__part_0);

                switchplate_case_tb__part_0 = translate([0,0,0], switchplate_case_tb__part_0);
                let result = switchplate_case_tb__part_0;
                
            

                // creating part 1 of case switchplate_case_tb
                let switchplate_case_tb__part_1 = _switch_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case_tb__part_1_bounds = switchplate_case_tb__part_1.getBounds();
                let switchplate_case_tb__part_1_x = switchplate_case_tb__part_1_bounds[0].x + (switchplate_case_tb__part_1_bounds[1].x - switchplate_case_tb__part_1_bounds[0].x) / 2
                let switchplate_case_tb__part_1_y = switchplate_case_tb__part_1_bounds[0].y + (switchplate_case_tb__part_1_bounds[1].y - switchplate_case_tb__part_1_bounds[0].y) / 2
                switchplate_case_tb__part_1 = translate([-switchplate_case_tb__part_1_x, -switchplate_case_tb__part_1_y, 0], switchplate_case_tb__part_1);
                switchplate_case_tb__part_1 = rotate([0,0,0], switchplate_case_tb__part_1);
                switchplate_case_tb__part_1 = translate([switchplate_case_tb__part_1_x, switchplate_case_tb__part_1_y, 0], switchplate_case_tb__part_1);

                switchplate_case_tb__part_1 = translate([0,0,0], switchplate_case_tb__part_1);
                result = result.subtract(switchplate_case_tb__part_1);
                
            

                // creating part 2 of case switchplate_case_tb
                let switchplate_case_tb__part_2 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case_tb__part_2_bounds = switchplate_case_tb__part_2.getBounds();
                let switchplate_case_tb__part_2_x = switchplate_case_tb__part_2_bounds[0].x + (switchplate_case_tb__part_2_bounds[1].x - switchplate_case_tb__part_2_bounds[0].x) / 2
                let switchplate_case_tb__part_2_y = switchplate_case_tb__part_2_bounds[0].y + (switchplate_case_tb__part_2_bounds[1].y - switchplate_case_tb__part_2_bounds[0].y) / 2
                switchplate_case_tb__part_2 = translate([-switchplate_case_tb__part_2_x, -switchplate_case_tb__part_2_y, 0], switchplate_case_tb__part_2);
                switchplate_case_tb__part_2 = rotate([0,0,0], switchplate_case_tb__part_2);
                switchplate_case_tb__part_2 = translate([switchplate_case_tb__part_2_x, switchplate_case_tb__part_2_y, 0], switchplate_case_tb__part_2);

                switchplate_case_tb__part_2 = translate([0,0,0], switchplate_case_tb__part_2);
                result = result.subtract(switchplate_case_tb__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_tb_case_fn();
            }

        