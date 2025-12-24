function switchplate_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([204,-72.41]).appendPoint([204,-110.41]).appendPoint([223,-110.41]).appendPoint([223,-129.41]).appendPoint([222.75,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function switch_cutout_extrude_1_outline_fn(){
    return new CSG.Path2D([[149.896883,-167.2291915],[163.6841915,-164.798117]]).appendPoint([161.253117,-151.0108085]).appendPoint([147.4658085,-153.441883]).appendPoint([149.896883,-167.2291915]).close().innerToCAG()
.union(
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
).extrude({ offset: [0, 0, 1] });
}


function plate_hole_extrude_1_outline_fn(){
    return CAG.circle({"center":[185.5,-127.485],"radius":1.1})
.union(
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
).extrude({ offset: [0, 0, 1] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switchplate_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            

                function _switch_holes_case_fn() {
                    

                // creating part 0 of case _switch_holes
                let _switch_holes__part_0 = switch_cutout_extrude_1_outline_fn();

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
                let _plate_holes__part_0 = plate_hole_extrude_1_outline_fn();

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
            
            

                function switchplate_case_case_fn() {
                    

                // creating part 0 of case switchplate_case
                let switchplate_case__part_0 = switchplate_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_0_bounds = switchplate_case__part_0.getBounds();
                let switchplate_case__part_0_x = switchplate_case__part_0_bounds[0].x + (switchplate_case__part_0_bounds[1].x - switchplate_case__part_0_bounds[0].x) / 2
                let switchplate_case__part_0_y = switchplate_case__part_0_bounds[0].y + (switchplate_case__part_0_bounds[1].y - switchplate_case__part_0_bounds[0].y) / 2
                switchplate_case__part_0 = translate([-switchplate_case__part_0_x, -switchplate_case__part_0_y, 0], switchplate_case__part_0);
                switchplate_case__part_0 = rotate([0,0,0], switchplate_case__part_0);
                switchplate_case__part_0 = translate([switchplate_case__part_0_x, switchplate_case__part_0_y, 0], switchplate_case__part_0);

                switchplate_case__part_0 = translate([0,0,0], switchplate_case__part_0);
                let result = switchplate_case__part_0;
                
            

                // creating part 1 of case switchplate_case
                let switchplate_case__part_1 = _switch_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_1_bounds = switchplate_case__part_1.getBounds();
                let switchplate_case__part_1_x = switchplate_case__part_1_bounds[0].x + (switchplate_case__part_1_bounds[1].x - switchplate_case__part_1_bounds[0].x) / 2
                let switchplate_case__part_1_y = switchplate_case__part_1_bounds[0].y + (switchplate_case__part_1_bounds[1].y - switchplate_case__part_1_bounds[0].y) / 2
                switchplate_case__part_1 = translate([-switchplate_case__part_1_x, -switchplate_case__part_1_y, 0], switchplate_case__part_1);
                switchplate_case__part_1 = rotate([0,0,0], switchplate_case__part_1);
                switchplate_case__part_1 = translate([switchplate_case__part_1_x, switchplate_case__part_1_y, 0], switchplate_case__part_1);

                switchplate_case__part_1 = translate([0,0,0], switchplate_case__part_1);
                result = result.subtract(switchplate_case__part_1);
                
            

                // creating part 2 of case switchplate_case
                let switchplate_case__part_2 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_2_bounds = switchplate_case__part_2.getBounds();
                let switchplate_case__part_2_x = switchplate_case__part_2_bounds[0].x + (switchplate_case__part_2_bounds[1].x - switchplate_case__part_2_bounds[0].x) / 2
                let switchplate_case__part_2_y = switchplate_case__part_2_bounds[0].y + (switchplate_case__part_2_bounds[1].y - switchplate_case__part_2_bounds[0].y) / 2
                switchplate_case__part_2 = translate([-switchplate_case__part_2_x, -switchplate_case__part_2_y, 0], switchplate_case__part_2);
                switchplate_case__part_2 = rotate([0,0,0], switchplate_case__part_2);
                switchplate_case__part_2 = translate([switchplate_case__part_2_x, switchplate_case__part_2_y, 0], switchplate_case__part_2);

                switchplate_case__part_2 = translate([0,0,0], switchplate_case__part_2);
                result = result.subtract(switchplate_case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_case_fn();
            }

        