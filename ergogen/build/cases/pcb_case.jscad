function pcb_notched_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[90,-160],[90,-83]]).appendPoint([109,-83]).appendPoint([109,-81.1]).appendPoint([128,-81.1]).appendPoint([128,-68.56]).appendPoint([147,-68.56]).appendPoint([147,-63.81]).appendPoint([167,-63.81]).appendPoint([167,-68.56]).appendPoint([186,-68.56]).appendPoint([186,-71.41]).appendPoint([224,-71.41]).appendPoint([224,-167.41]).appendPoint([221.4580399,-167.41]).appendArc([215.5419601,-167.41],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.5,-167.41]).appendPoint([147.2742905,-170.5419278]).appendPoint([129,-158.1]).appendPoint([110,-158.1]).appendPoint([110,-160]).appendPoint([90,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function switch_cutout_test_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[150.3024628,-166.6499635],[163.1049635,-164.3925372]]).appendPoint([160.8475372,-151.5900365]).appendPoint([148.0450365,-153.8474628]).appendPoint([150.3024628,-166.6499635]).close().innerToCAG()
.union(
    new CSG.Path2D([[207.5,-125.91],[220.5,-125.91]]).appendPoint([220.5,-112.91]).appendPoint([207.5,-112.91]).appendPoint([207.5,-125.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.5,-144.91],[220.5,-144.91]]).appendPoint([220.5,-131.91]).appendPoint([207.5,-131.91]).appendPoint([207.5,-144.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-163.91],[206,-163.91]]).appendPoint([206,-150.91]).appendPoint([193,-150.91]).appendPoint([193,-163.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-163.91],[182.5,-163.91]]).appendPoint([182.5,-150.91]).appendPoint([169.5,-150.91]).appendPoint([169.5,-163.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-87.91],[201.5,-87.91]]).appendPoint([201.5,-74.91]).appendPoint([188.5,-74.91]).appendPoint([188.5,-87.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-106.91],[201.5,-106.91]]).appendPoint([201.5,-93.91]).appendPoint([188.5,-93.91]).appendPoint([188.5,-106.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-125.91],[201.5,-125.91]]).appendPoint([201.5,-112.91]).appendPoint([188.5,-112.91]).appendPoint([188.5,-125.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.5,-144.91],[201.5,-144.91]]).appendPoint([201.5,-131.91]).appendPoint([188.5,-131.91]).appendPoint([188.5,-144.91]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-85.06],[182.5,-85.06]]).appendPoint([182.5,-72.06]).appendPoint([169.5,-72.06]).appendPoint([169.5,-85.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-104.06],[182.5,-104.06]]).appendPoint([182.5,-91.06]).appendPoint([169.5,-91.06]).appendPoint([169.5,-104.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-123.06],[182.5,-123.06]]).appendPoint([182.5,-110.06]).appendPoint([169.5,-110.06]).appendPoint([169.5,-123.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.5,-142.06],[182.5,-142.06]]).appendPoint([182.5,-129.06]).appendPoint([169.5,-129.06]).appendPoint([169.5,-142.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-80.31],[163.5,-80.31]]).appendPoint([163.5,-67.31]).appendPoint([150.5,-67.31]).appendPoint([150.5,-80.31]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-99.31],[163.5,-99.31]]).appendPoint([163.5,-86.31]).appendPoint([150.5,-86.31]).appendPoint([150.5,-99.31]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-118.31],[163.5,-118.31]]).appendPoint([163.5,-105.31]).appendPoint([150.5,-105.31]).appendPoint([150.5,-118.31]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.5,-137.31],[163.5,-137.31]]).appendPoint([163.5,-124.31]).appendPoint([150.5,-124.31]).appendPoint([150.5,-137.31]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-85.06],[144.5,-85.06]]).appendPoint([144.5,-72.06]).appendPoint([131.5,-72.06]).appendPoint([131.5,-85.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-104.06],[144.5,-104.06]]).appendPoint([144.5,-91.06]).appendPoint([131.5,-91.06]).appendPoint([131.5,-104.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-123.06],[144.5,-123.06]]).appendPoint([144.5,-110.06]).appendPoint([131.5,-110.06]).appendPoint([131.5,-123.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.5,-142.06],[144.5,-142.06]]).appendPoint([144.5,-129.06]).appendPoint([131.5,-129.06]).appendPoint([131.5,-142.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-97.6],[125.5,-97.6]]).appendPoint([125.5,-84.6]).appendPoint([112.5,-84.6]).appendPoint([112.5,-97.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-116.6],[125.5,-116.6]]).appendPoint([125.5,-103.6]).appendPoint([112.5,-103.6]).appendPoint([112.5,-116.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-135.6],[125.5,-135.6]]).appendPoint([125.5,-122.6]).appendPoint([112.5,-122.6]).appendPoint([112.5,-135.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.5,-154.6],[125.5,-154.6]]).appendPoint([125.5,-141.6]).appendPoint([112.5,-141.6]).appendPoint([112.5,-154.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-99.5],[106.5,-99.5]]).appendPoint([106.5,-86.5]).appendPoint([93.5,-86.5]).appendPoint([93.5,-99.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-118.5],[106.5,-118.5]]).appendPoint([106.5,-105.5]).appendPoint([93.5,-105.5]).appendPoint([93.5,-118.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-137.5],[106.5,-137.5]]).appendPoint([106.5,-124.5]).appendPoint([93.5,-124.5]).appendPoint([93.5,-137.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.5,-156.5],[106.5,-156.5]]).appendPoint([106.5,-143.5]).appendPoint([93.5,-143.5]).appendPoint([93.5,-156.5]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.6] });
}


function standoff_hole_extrude_1_6_outline_fn(){
    return CAG.circle({"center":[204.5,-147.41],"radius":2.15})
.union(
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

        