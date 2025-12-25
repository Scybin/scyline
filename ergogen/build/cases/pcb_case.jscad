function pcb_notched_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([221.4580399,-166.41]).appendArc([215.5419601,-166.41],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function switch_cutout_test_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[150.3892868,-167.1423674],[163.1917876,-164.8849411]]).appendPoint([160.7607132,-151.0976326]).appendPoint([147.9582124,-153.3550589]).appendPoint([150.3892868,-167.1423674]).close().innerToCAG()
.union(
    new CSG.Path2D([[207.5,-126.41],[220.5,-126.41]]).appendPoint([220.5,-112.41]).appendPoint([207.5,-112.41]).appendPoint([207.5,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.5,-145.41],[220.5,-145.41]]).appendPoint([220.5,-131.41]).appendPoint([207.5,-131.41]).appendPoint([207.5,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-164.41],[206,-164.41]]).appendPoint([206,-150.41]).appendPoint([193,-150.41]).appendPoint([193,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-164.41],[182.5,-164.41]]).appendPoint([182.5,-150.41]).appendPoint([169.5,-150.41]).appendPoint([169.5,-164.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-88.41],[201.5,-88.41]]).appendPoint([201.5,-74.41]).appendPoint([188.5,-74.41]).appendPoint([188.5,-88.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-107.41],[201.5,-107.41]]).appendPoint([201.5,-93.41]).appendPoint([188.5,-93.41]).appendPoint([188.5,-107.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-126.41],[201.5,-126.41]]).appendPoint([201.5,-112.41]).appendPoint([188.5,-112.41]).appendPoint([188.5,-126.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-145.41],[201.5,-145.41]]).appendPoint([201.5,-131.41]).appendPoint([188.5,-131.41]).appendPoint([188.5,-145.41]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-85.56],[182.5,-85.56]]).appendPoint([182.5,-71.56]).appendPoint([169.5,-71.56]).appendPoint([169.5,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-104.56],[182.5,-104.56]]).appendPoint([182.5,-90.56]).appendPoint([169.5,-90.56]).appendPoint([169.5,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-123.56],[182.5,-123.56]]).appendPoint([182.5,-109.56]).appendPoint([169.5,-109.56]).appendPoint([169.5,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-142.56],[182.5,-142.56]]).appendPoint([182.5,-128.56]).appendPoint([169.5,-128.56]).appendPoint([169.5,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-80.81],[163.5,-80.81]]).appendPoint([163.5,-66.81]).appendPoint([150.5,-66.81]).appendPoint([150.5,-80.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-99.81],[163.5,-99.81]]).appendPoint([163.5,-85.81]).appendPoint([150.5,-85.81]).appendPoint([150.5,-99.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-118.81],[163.5,-118.81]]).appendPoint([163.5,-104.81]).appendPoint([150.5,-104.81]).appendPoint([150.5,-118.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-137.81],[163.5,-137.81]]).appendPoint([163.5,-123.81]).appendPoint([150.5,-123.81]).appendPoint([150.5,-137.81]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-85.56],[144.5,-85.56]]).appendPoint([144.5,-71.56]).appendPoint([131.5,-71.56]).appendPoint([131.5,-85.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-104.56],[144.5,-104.56]]).appendPoint([144.5,-90.56]).appendPoint([131.5,-90.56]).appendPoint([131.5,-104.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-123.56],[144.5,-123.56]]).appendPoint([144.5,-109.56]).appendPoint([131.5,-109.56]).appendPoint([131.5,-123.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-142.56],[144.5,-142.56]]).appendPoint([144.5,-128.56]).appendPoint([131.5,-128.56]).appendPoint([131.5,-142.56]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-98.1],[125.5,-98.1]]).appendPoint([125.5,-84.1]).appendPoint([112.5,-84.1]).appendPoint([112.5,-98.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-117.1],[125.5,-117.1]]).appendPoint([125.5,-103.1]).appendPoint([112.5,-103.1]).appendPoint([112.5,-117.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-136.1],[125.5,-136.1]]).appendPoint([125.5,-122.1]).appendPoint([112.5,-122.1]).appendPoint([112.5,-136.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-155.1],[125.5,-155.1]]).appendPoint([125.5,-141.1]).appendPoint([112.5,-141.1]).appendPoint([112.5,-155.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-100],[106.5,-100]]).appendPoint([106.5,-86]).appendPoint([93.5,-86]).appendPoint([93.5,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-119],[106.5,-119]]).appendPoint([106.5,-105]).appendPoint([93.5,-105]).appendPoint([93.5,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-138],[106.5,-138]]).appendPoint([106.5,-124]).appendPoint([93.5,-124]).appendPoint([93.5,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-157],[106.5,-157]]).appendPoint([106.5,-143]).appendPoint([93.5,-143]).appendPoint([93.5,-157]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.6] });
}


function standoff_hole_extrude_1_6_outline_fn(){
    return CAG.circle({"center":[218.5,-124.91],"radius":2.15})
.union(
    CAG.circle({"center":[207.5,-124.91],"radius":2.15})
).union(
    CAG.circle({"center":[218.5,-106.91],"radius":2.15})
).union(
    CAG.circle({"center":[207.5,-106.91],"radius":2.15})
).union(
    CAG.circle({"center":[204.5,-147.41],"radius":2.15})
).union(
    CAG.circle({"center":[204.5,-128.91],"radius":2.15})
).union(
    CAG.circle({"center":[185.5,-127.485],"radius":2.15})
).union(
    CAG.circle({"center":[185.5,-108.485],"radius":2.15})
).union(
    CAG.circle({"center":[185.5,-89.485],"radius":2.15})
).union(
    CAG.circle({"center":[156.2875,-144.965],"radius":2.15})
).union(
    CAG.circle({"center":[109.5,-139.55],"radius":2.15})
).union(
    CAG.circle({"center":[109.5,-120.55],"radius":2.15})
).union(
    CAG.circle({"center":[109.5,-101.55],"radius":2.15})
).extrude({ offset: [0, 0, 1.6] });
}




                function _switch_holes_test_case_fn() {
                    

                // creating part 0 of case _switch_holes_test
                let _switch_holes_test__part_0 = switch_cutout_test_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switch_holes_test__part_0_bounds = _switch_holes_test__part_0.getBounds();
                let _switch_holes_test__part_0_x = _switch_holes_test__part_0_bounds[0].x + (_switch_holes_test__part_0_bounds[1].x - _switch_holes_test__part_0_bounds[0].x) / 2
                let _switch_holes_test__part_0_y = _switch_holes_test__part_0_bounds[0].y + (_switch_holes_test__part_0_bounds[1].y - _switch_holes_test__part_0_bounds[0].y) / 2
                _switch_holes_test__part_0 = translate([-_switch_holes_test__part_0_x, -_switch_holes_test__part_0_y, 0], _switch_holes_test__part_0);
                _switch_holes_test__part_0 = rotate([0,0,0], _switch_holes_test__part_0);
                _switch_holes_test__part_0 = translate([_switch_holes_test__part_0_x, _switch_holes_test__part_0_y, 0], _switch_holes_test__part_0);

                _switch_holes_test__part_0 = translate([0,0,0], _switch_holes_test__part_0);
                let result = _switch_holes_test__part_0;
                
            
                    return result;
                }
            
            

                function _mounting_holes_case_fn() {
                    

                // creating part 0 of case _mounting_holes
                let _mounting_holes__part_0 = standoff_hole_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _mounting_holes__part_0_bounds = _mounting_holes__part_0.getBounds();
                let _mounting_holes__part_0_x = _mounting_holes__part_0_bounds[0].x + (_mounting_holes__part_0_bounds[1].x - _mounting_holes__part_0_bounds[0].x) / 2
                let _mounting_holes__part_0_y = _mounting_holes__part_0_bounds[0].y + (_mounting_holes__part_0_bounds[1].y - _mounting_holes__part_0_bounds[0].y) / 2
                _mounting_holes__part_0 = translate([-_mounting_holes__part_0_x, -_mounting_holes__part_0_y, 0], _mounting_holes__part_0);
                _mounting_holes__part_0 = rotate([0,0,0], _mounting_holes__part_0);
                _mounting_holes__part_0 = translate([_mounting_holes__part_0_x, _mounting_holes__part_0_y, 0], _mounting_holes__part_0);

                _mounting_holes__part_0 = translate([0,0,0], _mounting_holes__part_0);
                let result = _mounting_holes__part_0;
                
            
                    return result;
                }
            
            

                function pcb_case_case_fn() {
                    

                // creating part 0 of case pcb_case
                let pcb_case__part_0 = pcb_notched_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let pcb_case__part_0_bounds = pcb_case__part_0.getBounds();
                let pcb_case__part_0_x = pcb_case__part_0_bounds[0].x + (pcb_case__part_0_bounds[1].x - pcb_case__part_0_bounds[0].x) / 2
                let pcb_case__part_0_y = pcb_case__part_0_bounds[0].y + (pcb_case__part_0_bounds[1].y - pcb_case__part_0_bounds[0].y) / 2
                pcb_case__part_0 = translate([-pcb_case__part_0_x, -pcb_case__part_0_y, 0], pcb_case__part_0);
                pcb_case__part_0 = rotate([0,0,0], pcb_case__part_0);
                pcb_case__part_0 = translate([pcb_case__part_0_x, pcb_case__part_0_y, 0], pcb_case__part_0);

                pcb_case__part_0 = translate([0,0,0], pcb_case__part_0);
                let result = pcb_case__part_0;
                
            

                // creating part 1 of case pcb_case
                let pcb_case__part_1 = _switch_holes_test_case_fn();

                // make sure that rotations are relative
                let pcb_case__part_1_bounds = pcb_case__part_1.getBounds();
                let pcb_case__part_1_x = pcb_case__part_1_bounds[0].x + (pcb_case__part_1_bounds[1].x - pcb_case__part_1_bounds[0].x) / 2
                let pcb_case__part_1_y = pcb_case__part_1_bounds[0].y + (pcb_case__part_1_bounds[1].y - pcb_case__part_1_bounds[0].y) / 2
                pcb_case__part_1 = translate([-pcb_case__part_1_x, -pcb_case__part_1_y, 0], pcb_case__part_1);
                pcb_case__part_1 = rotate([0,0,0], pcb_case__part_1);
                pcb_case__part_1 = translate([pcb_case__part_1_x, pcb_case__part_1_y, 0], pcb_case__part_1);

                pcb_case__part_1 = translate([0,0,0], pcb_case__part_1);
                result = result.subtract(pcb_case__part_1);
                
            

                // creating part 2 of case pcb_case
                let pcb_case__part_2 = _mounting_holes_case_fn();

                // make sure that rotations are relative
                let pcb_case__part_2_bounds = pcb_case__part_2.getBounds();
                let pcb_case__part_2_x = pcb_case__part_2_bounds[0].x + (pcb_case__part_2_bounds[1].x - pcb_case__part_2_bounds[0].x) / 2
                let pcb_case__part_2_y = pcb_case__part_2_bounds[0].y + (pcb_case__part_2_bounds[1].y - pcb_case__part_2_bounds[0].y) / 2
                pcb_case__part_2 = translate([-pcb_case__part_2_x, -pcb_case__part_2_y, 0], pcb_case__part_2);
                pcb_case__part_2 = rotate([0,0,0], pcb_case__part_2);
                pcb_case__part_2 = translate([pcb_case__part_2_x, pcb_case__part_2_y, 0], pcb_case__part_2);

                pcb_case__part_2 = translate([0,0,0], pcb_case__part_2);
                result = result.subtract(pcb_case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return pcb_case_case_fn();
            }

        