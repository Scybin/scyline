function xlBoard_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[86,-159],[86,-84]]).appendArc([91,-79],{"radius":5,"clockwise":true,"large":false}).appendPoint([106.076991,-79]).appendArc([110,-77.1],{"radius":5,"clockwise":true,"large":false}).appendPoint([124,-77.1]).appendPoint([124,-69.56]).appendArc([129,-64.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([143.0062539,-64.56]).appendArc([148,-59.81],{"radius":5,"clockwise":true,"large":false}).appendPoint([166,-59.81]).appendArc([170.9937461,-64.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([185,-64.56]).appendArc([189.5141444,-67.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([224,-67.41]).appendArc([229,-72.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-166.41]).appendArc([224,-171.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([166.9270443,-171.41]).appendPoint([149.122467,-174.473685]).appendArc([145.6587356,-173.8072585],{"radius":5,"clockwise":true,"large":false}).appendPoint([126.5877419,-162.1]).appendPoint([112.923009,-162.1]).appendArc([109,-164],{"radius":5,"clockwise":true,"large":false}).appendPoint([91,-164]).appendArc([86,-159],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function pcb_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function usb_wall_extrude_22_3_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-67.41]]).appendPoint([207,-67.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 22.3] });
}


function usb_wall_extrude_13_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-67.41]]).appendPoint([207,-67.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 13] });
}


function button_wall_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[144.9775891,-167.522164],[143.6903575,-172.598915]]).appendPoint([126.7533912,-162.2016884]).appendPoint([127.8375,-157.1]).appendPoint([128,-157.1]).appendPoint([144.9775891,-167.522164]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function button_wall_extrude_12_outline_fn(){
    return new CSG.Path2D([[144.9775891,-167.522164],[143.6903575,-172.598915]]).appendPoint([126.7533912,-162.2016884]).appendPoint([127.8375,-157.1]).appendPoint([128,-157.1]).appendPoint([144.9775891,-167.522164]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function trackball_wall_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[224,-124.41],[229,-124.41]]).appendPoint([229,-107.41]).appendPoint([224,-107.41]).appendPoint([224,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function trackball_wall_extrude_17_3_outline_fn(){
    return new CSG.Path2D([[224,-124.41],[229,-124.41]]).appendPoint([229,-107.41]).appendPoint([224,-107.41]).appendPoint([224,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 17.3] });
}


function cover_tb_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[224,-67.41],[210,-67.41]]).appendArc([205,-72.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([205,-123.41]).appendArc([210,-128.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([229,-123.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([229,-72.41]).appendArc([224,-67.41],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function cover_tb_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[224,-67.41],[210,-67.41]]).appendArc([205,-72.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([205,-123.41]).appendArc([210,-128.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([229,-123.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([229,-72.41]).appendArc([224,-67.41],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function cover_tb_cut_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[207.85,-123.06],[218.15,-123.06]]).appendArc([220.15,-121.06],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.15,-110.76]).appendArc([218.15,-108.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.85,-108.76]).appendArc([205.85,-110.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.85,-121.06]).appendArc([207.85,-123.06],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function trackball_screw_holes_extrude_28_3_outline_fn(){
    return CAG.circle({"center":[218.5,-125.71],"radius":1.1})
.union(
    CAG.circle({"center":[207.5,-125.71],"radius":1.1})
).union(
    CAG.circle({"center":[218.5,-106.11],"radius":1.1})
).union(
    CAG.circle({"center":[207.5,-106.11],"radius":1.1})
).extrude({ offset: [0, 0, 28.3] });
}


function wall_insert_extrude_3_outline_fn(){
    return CAG.circle({"center":[222.75,-168.91],"radius":1.25})
.union(
    CAG.circle({"center":[91,-161.5],"radius":1.25})
).union(
    CAG.circle({"center":[224,-69.91],"radius":1.25})
).union(
    CAG.circle({"center":[91,-81.5],"radius":1.25})
).extrude({ offset: [0, 0, 3] });
}


function bottom_lip_wall_extrude_12_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_cut_extrude_12_outline_fn(){
    return new CSG.Path2D([[93,-157],[93,-86]]).appendPoint([111.9023795,-86]).appendPoint([111.9974984,-84.1]).appendPoint([131,-84.1]).appendPoint([131,-71.56]).appendPoint([150,-71.56]).appendPoint([150,-66.81]).appendPoint([164,-66.81]).appendPoint([164,-71.56]).appendPoint([183,-71.56]).appendPoint([183,-74.41]).appendPoint([222,-74.41]).appendPoint([222,-164.41]).appendPoint([166.3291823,-164.41]).appendPoint([148.6783912,-167.4472226]).appendPoint([128.5649032,-155.1]).appendPoint([107.0976205,-155.1]).appendPoint([107.0025016,-157]).appendPoint([93,-157]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function xlBoard_extrude_2_outline_fn(){
    return new CSG.Path2D([[86,-159],[86,-84]]).appendArc([91,-79],{"radius":5,"clockwise":true,"large":false}).appendPoint([106.076991,-79]).appendArc([110,-77.1],{"radius":5,"clockwise":true,"large":false}).appendPoint([124,-77.1]).appendPoint([124,-69.56]).appendArc([129,-64.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([143.0062539,-64.56]).appendArc([148,-59.81],{"radius":5,"clockwise":true,"large":false}).appendPoint([166,-59.81]).appendArc([170.9937461,-64.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([185,-64.56]).appendArc([189.5141444,-67.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([224,-67.41]).appendArc([229,-72.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-166.41]).appendArc([224,-171.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([166.9270443,-171.41]).appendPoint([149.122467,-174.473685]).appendArc([145.6587356,-173.8072585],{"radius":5,"clockwise":true,"large":false}).appendPoint([126.5877419,-162.1]).appendPoint([112.923009,-162.1]).appendArc([109,-164],{"radius":5,"clockwise":true,"large":false}).appendPoint([91,-164]).appendArc([86,-159],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function mcu_lip_clear_extrude_12_outline_fn(){
    return new CSG.Path2D([[222,-106.21],[226,-106.21]]).appendPoint([226,-74.61]).appendPoint([222,-74.61]).appendPoint([222,-106.21]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_extrude_12_outline_fn(){
    return new CSG.Path2D([[215.5,-166.41],[221.5,-166.41]]).appendPoint([221.5,-164.41]).appendPoint([215.5,-164.41]).appendPoint([215.5,-166.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_extrude_2_outline_fn(){
    return new CSG.Path2D([[215.5,-166.41],[221.5,-166.41]]).appendPoint([221.5,-164.41]).appendPoint([215.5,-164.41]).appendPoint([215.5,-166.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function plate_hole_extrude_2_outline_fn(){
    return CAG.circle({"center":[204.5,-147.41],"radius":1.1})
.union(
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


function wall_clearance_extrude_2_outline_fn(){
    return CAG.circle({"center":[222.75,-168.91],"radius":1.1})
.union(
    CAG.circle({"center":[91,-161.5],"radius":1.1})
).union(
    CAG.circle({"center":[224,-69.91],"radius":1.1})
).union(
    CAG.circle({"center":[91,-81.5],"radius":1.1})
).extrude({ offset: [0, 0, 2] });
}




                function wall_cover_case_tb_L_case_fn() {
                    

                // creating part 0 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_0_bounds = wall_cover_case_tb_L__part_0.getBounds();
                let wall_cover_case_tb_L__part_0_x = wall_cover_case_tb_L__part_0_bounds[0].x + (wall_cover_case_tb_L__part_0_bounds[1].x - wall_cover_case_tb_L__part_0_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_0_y = wall_cover_case_tb_L__part_0_bounds[0].y + (wall_cover_case_tb_L__part_0_bounds[1].y - wall_cover_case_tb_L__part_0_bounds[0].y) / 2
                wall_cover_case_tb_L__part_0 = translate([-wall_cover_case_tb_L__part_0_x, -wall_cover_case_tb_L__part_0_y, 0], wall_cover_case_tb_L__part_0);
                wall_cover_case_tb_L__part_0 = rotate([0,0,0], wall_cover_case_tb_L__part_0);
                wall_cover_case_tb_L__part_0 = translate([wall_cover_case_tb_L__part_0_x, wall_cover_case_tb_L__part_0_y, 0], wall_cover_case_tb_L__part_0);

                wall_cover_case_tb_L__part_0 = translate([0,0,0], wall_cover_case_tb_L__part_0);
                let result = wall_cover_case_tb_L__part_0;
                
            

                // creating part 1 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_1_bounds = wall_cover_case_tb_L__part_1.getBounds();
                let wall_cover_case_tb_L__part_1_x = wall_cover_case_tb_L__part_1_bounds[0].x + (wall_cover_case_tb_L__part_1_bounds[1].x - wall_cover_case_tb_L__part_1_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_1_y = wall_cover_case_tb_L__part_1_bounds[0].y + (wall_cover_case_tb_L__part_1_bounds[1].y - wall_cover_case_tb_L__part_1_bounds[0].y) / 2
                wall_cover_case_tb_L__part_1 = translate([-wall_cover_case_tb_L__part_1_x, -wall_cover_case_tb_L__part_1_y, 0], wall_cover_case_tb_L__part_1);
                wall_cover_case_tb_L__part_1 = rotate([0,0,0], wall_cover_case_tb_L__part_1);
                wall_cover_case_tb_L__part_1 = translate([wall_cover_case_tb_L__part_1_x, wall_cover_case_tb_L__part_1_y, 0], wall_cover_case_tb_L__part_1);

                wall_cover_case_tb_L__part_1 = translate([0,0,0], wall_cover_case_tb_L__part_1);
                result = result.subtract(wall_cover_case_tb_L__part_1);
                
            

                // creating part 2 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_2 = _usb_access_cut_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_2_bounds = wall_cover_case_tb_L__part_2.getBounds();
                let wall_cover_case_tb_L__part_2_x = wall_cover_case_tb_L__part_2_bounds[0].x + (wall_cover_case_tb_L__part_2_bounds[1].x - wall_cover_case_tb_L__part_2_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_2_y = wall_cover_case_tb_L__part_2_bounds[0].y + (wall_cover_case_tb_L__part_2_bounds[1].y - wall_cover_case_tb_L__part_2_bounds[0].y) / 2
                wall_cover_case_tb_L__part_2 = translate([-wall_cover_case_tb_L__part_2_x, -wall_cover_case_tb_L__part_2_y, 0], wall_cover_case_tb_L__part_2);
                wall_cover_case_tb_L__part_2 = rotate([0,0,0], wall_cover_case_tb_L__part_2);
                wall_cover_case_tb_L__part_2 = translate([wall_cover_case_tb_L__part_2_x, wall_cover_case_tb_L__part_2_y, 0], wall_cover_case_tb_L__part_2);

                wall_cover_case_tb_L__part_2 = translate([0,0,0], wall_cover_case_tb_L__part_2);
                result = result.subtract(wall_cover_case_tb_L__part_2);
                
            

                // creating part 3 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_3 = _usb_access_fill_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_3_bounds = wall_cover_case_tb_L__part_3.getBounds();
                let wall_cover_case_tb_L__part_3_x = wall_cover_case_tb_L__part_3_bounds[0].x + (wall_cover_case_tb_L__part_3_bounds[1].x - wall_cover_case_tb_L__part_3_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_3_y = wall_cover_case_tb_L__part_3_bounds[0].y + (wall_cover_case_tb_L__part_3_bounds[1].y - wall_cover_case_tb_L__part_3_bounds[0].y) / 2
                wall_cover_case_tb_L__part_3 = translate([-wall_cover_case_tb_L__part_3_x, -wall_cover_case_tb_L__part_3_y, 0], wall_cover_case_tb_L__part_3);
                wall_cover_case_tb_L__part_3 = rotate([0,0,0], wall_cover_case_tb_L__part_3);
                wall_cover_case_tb_L__part_3 = translate([wall_cover_case_tb_L__part_3_x, wall_cover_case_tb_L__part_3_y, 0], wall_cover_case_tb_L__part_3);

                wall_cover_case_tb_L__part_3 = translate([0,0,0], wall_cover_case_tb_L__part_3);
                result = result.union(wall_cover_case_tb_L__part_3);
                
            

                // creating part 4 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_4 = _button_access_cut_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_4_bounds = wall_cover_case_tb_L__part_4.getBounds();
                let wall_cover_case_tb_L__part_4_x = wall_cover_case_tb_L__part_4_bounds[0].x + (wall_cover_case_tb_L__part_4_bounds[1].x - wall_cover_case_tb_L__part_4_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_4_y = wall_cover_case_tb_L__part_4_bounds[0].y + (wall_cover_case_tb_L__part_4_bounds[1].y - wall_cover_case_tb_L__part_4_bounds[0].y) / 2
                wall_cover_case_tb_L__part_4 = translate([-wall_cover_case_tb_L__part_4_x, -wall_cover_case_tb_L__part_4_y, 0], wall_cover_case_tb_L__part_4);
                wall_cover_case_tb_L__part_4 = rotate([0,0,0], wall_cover_case_tb_L__part_4);
                wall_cover_case_tb_L__part_4 = translate([wall_cover_case_tb_L__part_4_x, wall_cover_case_tb_L__part_4_y, 0], wall_cover_case_tb_L__part_4);

                wall_cover_case_tb_L__part_4 = translate([0,0,0], wall_cover_case_tb_L__part_4);
                result = result.subtract(wall_cover_case_tb_L__part_4);
                
            

                // creating part 5 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_5 = _button_access_fill_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_5_bounds = wall_cover_case_tb_L__part_5.getBounds();
                let wall_cover_case_tb_L__part_5_x = wall_cover_case_tb_L__part_5_bounds[0].x + (wall_cover_case_tb_L__part_5_bounds[1].x - wall_cover_case_tb_L__part_5_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_5_y = wall_cover_case_tb_L__part_5_bounds[0].y + (wall_cover_case_tb_L__part_5_bounds[1].y - wall_cover_case_tb_L__part_5_bounds[0].y) / 2
                wall_cover_case_tb_L__part_5 = translate([-wall_cover_case_tb_L__part_5_x, -wall_cover_case_tb_L__part_5_y, 0], wall_cover_case_tb_L__part_5);
                wall_cover_case_tb_L__part_5 = rotate([0,0,0], wall_cover_case_tb_L__part_5);
                wall_cover_case_tb_L__part_5 = translate([wall_cover_case_tb_L__part_5_x, wall_cover_case_tb_L__part_5_y, 0], wall_cover_case_tb_L__part_5);

                wall_cover_case_tb_L__part_5 = translate([0,0,0], wall_cover_case_tb_L__part_5);
                result = result.union(wall_cover_case_tb_L__part_5);
                
            

                // creating part 6 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_6 = _trackball_wall_cut_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_6_bounds = wall_cover_case_tb_L__part_6.getBounds();
                let wall_cover_case_tb_L__part_6_x = wall_cover_case_tb_L__part_6_bounds[0].x + (wall_cover_case_tb_L__part_6_bounds[1].x - wall_cover_case_tb_L__part_6_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_6_y = wall_cover_case_tb_L__part_6_bounds[0].y + (wall_cover_case_tb_L__part_6_bounds[1].y - wall_cover_case_tb_L__part_6_bounds[0].y) / 2
                wall_cover_case_tb_L__part_6 = translate([-wall_cover_case_tb_L__part_6_x, -wall_cover_case_tb_L__part_6_y, 0], wall_cover_case_tb_L__part_6);
                wall_cover_case_tb_L__part_6 = rotate([0,0,0], wall_cover_case_tb_L__part_6);
                wall_cover_case_tb_L__part_6 = translate([wall_cover_case_tb_L__part_6_x, wall_cover_case_tb_L__part_6_y, 0], wall_cover_case_tb_L__part_6);

                wall_cover_case_tb_L__part_6 = translate([0,0,0], wall_cover_case_tb_L__part_6);
                result = result.subtract(wall_cover_case_tb_L__part_6);
                
            

                // creating part 7 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_7 = _trackball_wall_fill_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_7_bounds = wall_cover_case_tb_L__part_7.getBounds();
                let wall_cover_case_tb_L__part_7_x = wall_cover_case_tb_L__part_7_bounds[0].x + (wall_cover_case_tb_L__part_7_bounds[1].x - wall_cover_case_tb_L__part_7_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_7_y = wall_cover_case_tb_L__part_7_bounds[0].y + (wall_cover_case_tb_L__part_7_bounds[1].y - wall_cover_case_tb_L__part_7_bounds[0].y) / 2
                wall_cover_case_tb_L__part_7 = translate([-wall_cover_case_tb_L__part_7_x, -wall_cover_case_tb_L__part_7_y, 0], wall_cover_case_tb_L__part_7);
                wall_cover_case_tb_L__part_7 = rotate([0,0,0], wall_cover_case_tb_L__part_7);
                wall_cover_case_tb_L__part_7 = translate([wall_cover_case_tb_L__part_7_x, wall_cover_case_tb_L__part_7_y, 0], wall_cover_case_tb_L__part_7);

                wall_cover_case_tb_L__part_7 = translate([0,0,0], wall_cover_case_tb_L__part_7);
                result = result.union(wall_cover_case_tb_L__part_7);
                
            

                // creating part 8 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_8 = _cover_cap_tb_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_8_bounds = wall_cover_case_tb_L__part_8.getBounds();
                let wall_cover_case_tb_L__part_8_x = wall_cover_case_tb_L__part_8_bounds[0].x + (wall_cover_case_tb_L__part_8_bounds[1].x - wall_cover_case_tb_L__part_8_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_8_y = wall_cover_case_tb_L__part_8_bounds[0].y + (wall_cover_case_tb_L__part_8_bounds[1].y - wall_cover_case_tb_L__part_8_bounds[0].y) / 2
                wall_cover_case_tb_L__part_8 = translate([-wall_cover_case_tb_L__part_8_x, -wall_cover_case_tb_L__part_8_y, 0], wall_cover_case_tb_L__part_8);
                wall_cover_case_tb_L__part_8 = rotate([0,0,0], wall_cover_case_tb_L__part_8);
                wall_cover_case_tb_L__part_8 = translate([wall_cover_case_tb_L__part_8_x, wall_cover_case_tb_L__part_8_y, 0], wall_cover_case_tb_L__part_8);

                wall_cover_case_tb_L__part_8 = translate([0,0,0], wall_cover_case_tb_L__part_8);
                result = result.union(wall_cover_case_tb_L__part_8);
                
            

                // creating part 9 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_9 = _wall_insert_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_9_bounds = wall_cover_case_tb_L__part_9.getBounds();
                let wall_cover_case_tb_L__part_9_x = wall_cover_case_tb_L__part_9_bounds[0].x + (wall_cover_case_tb_L__part_9_bounds[1].x - wall_cover_case_tb_L__part_9_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_9_y = wall_cover_case_tb_L__part_9_bounds[0].y + (wall_cover_case_tb_L__part_9_bounds[1].y - wall_cover_case_tb_L__part_9_bounds[0].y) / 2
                wall_cover_case_tb_L__part_9 = translate([-wall_cover_case_tb_L__part_9_x, -wall_cover_case_tb_L__part_9_y, 0], wall_cover_case_tb_L__part_9);
                wall_cover_case_tb_L__part_9 = rotate([0,0,0], wall_cover_case_tb_L__part_9);
                wall_cover_case_tb_L__part_9 = translate([wall_cover_case_tb_L__part_9_x, wall_cover_case_tb_L__part_9_y, 0], wall_cover_case_tb_L__part_9);

                wall_cover_case_tb_L__part_9 = translate([0,0,0], wall_cover_case_tb_L__part_9);
                result = result.subtract(wall_cover_case_tb_L__part_9);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = pcb_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_cut_case_fn() {
                    

                // creating part 0 of case _usb_access_cut
                let _usb_access_cut__part_0 = usb_wall_extrude_22_3_outline_fn();

                // make sure that rotations are relative
                let _usb_access_cut__part_0_bounds = _usb_access_cut__part_0.getBounds();
                let _usb_access_cut__part_0_x = _usb_access_cut__part_0_bounds[0].x + (_usb_access_cut__part_0_bounds[1].x - _usb_access_cut__part_0_bounds[0].x) / 2
                let _usb_access_cut__part_0_y = _usb_access_cut__part_0_bounds[0].y + (_usb_access_cut__part_0_bounds[1].y - _usb_access_cut__part_0_bounds[0].y) / 2
                _usb_access_cut__part_0 = translate([-_usb_access_cut__part_0_x, -_usb_access_cut__part_0_y, 0], _usb_access_cut__part_0);
                _usb_access_cut__part_0 = rotate([0,0,0], _usb_access_cut__part_0);
                _usb_access_cut__part_0 = translate([_usb_access_cut__part_0_x, _usb_access_cut__part_0_y, 0], _usb_access_cut__part_0);

                _usb_access_cut__part_0 = translate([0,0,0], _usb_access_cut__part_0);
                let result = _usb_access_cut__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_fill_case_fn() {
                    

                // creating part 0 of case _usb_access_fill
                let _usb_access_fill__part_0 = usb_wall_extrude_13_outline_fn();

                // make sure that rotations are relative
                let _usb_access_fill__part_0_bounds = _usb_access_fill__part_0.getBounds();
                let _usb_access_fill__part_0_x = _usb_access_fill__part_0_bounds[0].x + (_usb_access_fill__part_0_bounds[1].x - _usb_access_fill__part_0_bounds[0].x) / 2
                let _usb_access_fill__part_0_y = _usb_access_fill__part_0_bounds[0].y + (_usb_access_fill__part_0_bounds[1].y - _usb_access_fill__part_0_bounds[0].y) / 2
                _usb_access_fill__part_0 = translate([-_usb_access_fill__part_0_x, -_usb_access_fill__part_0_y, 0], _usb_access_fill__part_0);
                _usb_access_fill__part_0 = rotate([0,0,0], _usb_access_fill__part_0);
                _usb_access_fill__part_0 = translate([_usb_access_fill__part_0_x, _usb_access_fill__part_0_y, 0], _usb_access_fill__part_0);

                _usb_access_fill__part_0 = translate([0,0,0], _usb_access_fill__part_0);
                let result = _usb_access_fill__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_cut_case_fn() {
                    

                // creating part 0 of case _button_access_cut
                let _button_access_cut__part_0 = button_wall_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _button_access_cut__part_0_bounds = _button_access_cut__part_0.getBounds();
                let _button_access_cut__part_0_x = _button_access_cut__part_0_bounds[0].x + (_button_access_cut__part_0_bounds[1].x - _button_access_cut__part_0_bounds[0].x) / 2
                let _button_access_cut__part_0_y = _button_access_cut__part_0_bounds[0].y + (_button_access_cut__part_0_bounds[1].y - _button_access_cut__part_0_bounds[0].y) / 2
                _button_access_cut__part_0 = translate([-_button_access_cut__part_0_x, -_button_access_cut__part_0_y, 0], _button_access_cut__part_0);
                _button_access_cut__part_0 = rotate([0,0,0], _button_access_cut__part_0);
                _button_access_cut__part_0 = translate([_button_access_cut__part_0_x, _button_access_cut__part_0_y, 0], _button_access_cut__part_0);

                _button_access_cut__part_0 = translate([0,0,0], _button_access_cut__part_0);
                let result = _button_access_cut__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_fill_case_fn() {
                    

                // creating part 0 of case _button_access_fill
                let _button_access_fill__part_0 = button_wall_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _button_access_fill__part_0_bounds = _button_access_fill__part_0.getBounds();
                let _button_access_fill__part_0_x = _button_access_fill__part_0_bounds[0].x + (_button_access_fill__part_0_bounds[1].x - _button_access_fill__part_0_bounds[0].x) / 2
                let _button_access_fill__part_0_y = _button_access_fill__part_0_bounds[0].y + (_button_access_fill__part_0_bounds[1].y - _button_access_fill__part_0_bounds[0].y) / 2
                _button_access_fill__part_0 = translate([-_button_access_fill__part_0_x, -_button_access_fill__part_0_y, 0], _button_access_fill__part_0);
                _button_access_fill__part_0 = rotate([0,0,0], _button_access_fill__part_0);
                _button_access_fill__part_0 = translate([_button_access_fill__part_0_x, _button_access_fill__part_0_y, 0], _button_access_fill__part_0);

                _button_access_fill__part_0 = translate([0,0,0], _button_access_fill__part_0);
                let result = _button_access_fill__part_0;
                
            
                    return result;
                }
            
            

                function _trackball_wall_cut_case_fn() {
                    

                // creating part 0 of case _trackball_wall_cut
                let _trackball_wall_cut__part_0 = trackball_wall_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_cut__part_0_bounds = _trackball_wall_cut__part_0.getBounds();
                let _trackball_wall_cut__part_0_x = _trackball_wall_cut__part_0_bounds[0].x + (_trackball_wall_cut__part_0_bounds[1].x - _trackball_wall_cut__part_0_bounds[0].x) / 2
                let _trackball_wall_cut__part_0_y = _trackball_wall_cut__part_0_bounds[0].y + (_trackball_wall_cut__part_0_bounds[1].y - _trackball_wall_cut__part_0_bounds[0].y) / 2
                _trackball_wall_cut__part_0 = translate([-_trackball_wall_cut__part_0_x, -_trackball_wall_cut__part_0_y, 0], _trackball_wall_cut__part_0);
                _trackball_wall_cut__part_0 = rotate([0,0,0], _trackball_wall_cut__part_0);
                _trackball_wall_cut__part_0 = translate([_trackball_wall_cut__part_0_x, _trackball_wall_cut__part_0_y, 0], _trackball_wall_cut__part_0);

                _trackball_wall_cut__part_0 = translate([0,0,0], _trackball_wall_cut__part_0);
                let result = _trackball_wall_cut__part_0;
                
            
                    return result;
                }
            
            

                function _trackball_wall_fill_case_fn() {
                    

                // creating part 0 of case _trackball_wall_fill
                let _trackball_wall_fill__part_0 = trackball_wall_extrude_17_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_fill__part_0_bounds = _trackball_wall_fill__part_0.getBounds();
                let _trackball_wall_fill__part_0_x = _trackball_wall_fill__part_0_bounds[0].x + (_trackball_wall_fill__part_0_bounds[1].x - _trackball_wall_fill__part_0_bounds[0].x) / 2
                let _trackball_wall_fill__part_0_y = _trackball_wall_fill__part_0_bounds[0].y + (_trackball_wall_fill__part_0_bounds[1].y - _trackball_wall_fill__part_0_bounds[0].y) / 2
                _trackball_wall_fill__part_0 = translate([-_trackball_wall_fill__part_0_x, -_trackball_wall_fill__part_0_y, 0], _trackball_wall_fill__part_0);
                _trackball_wall_fill__part_0 = rotate([0,0,0], _trackball_wall_fill__part_0);
                _trackball_wall_fill__part_0 = translate([_trackball_wall_fill__part_0_x, _trackball_wall_fill__part_0_y, 0], _trackball_wall_fill__part_0);

                _trackball_wall_fill__part_0 = translate([0,0,0], _trackball_wall_fill__part_0);
                let result = _trackball_wall_fill__part_0;
                
            
                    return result;
                }
            
            

                function _cover_cap_tb_case_fn() {
                    

                // creating part 0 of case _cover_cap_tb
                let _cover_cap_tb__part_0 = cover_tb_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb__part_0_bounds = _cover_cap_tb__part_0.getBounds();
                let _cover_cap_tb__part_0_x = _cover_cap_tb__part_0_bounds[0].x + (_cover_cap_tb__part_0_bounds[1].x - _cover_cap_tb__part_0_bounds[0].x) / 2
                let _cover_cap_tb__part_0_y = _cover_cap_tb__part_0_bounds[0].y + (_cover_cap_tb__part_0_bounds[1].y - _cover_cap_tb__part_0_bounds[0].y) / 2
                _cover_cap_tb__part_0 = translate([-_cover_cap_tb__part_0_x, -_cover_cap_tb__part_0_y, 0], _cover_cap_tb__part_0);
                _cover_cap_tb__part_0 = rotate([0,0,0], _cover_cap_tb__part_0);
                _cover_cap_tb__part_0 = translate([_cover_cap_tb__part_0_x, _cover_cap_tb__part_0_y, 0], _cover_cap_tb__part_0);

                _cover_cap_tb__part_0 = translate([0,0,0], _cover_cap_tb__part_0);
                let result = _cover_cap_tb__part_0;
                
            

                // creating part 1 of case _cover_cap_tb
                let _cover_cap_tb__part_1 = cover_tb_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb__part_1_bounds = _cover_cap_tb__part_1.getBounds();
                let _cover_cap_tb__part_1_x = _cover_cap_tb__part_1_bounds[0].x + (_cover_cap_tb__part_1_bounds[1].x - _cover_cap_tb__part_1_bounds[0].x) / 2
                let _cover_cap_tb__part_1_y = _cover_cap_tb__part_1_bounds[0].y + (_cover_cap_tb__part_1_bounds[1].y - _cover_cap_tb__part_1_bounds[0].y) / 2
                _cover_cap_tb__part_1 = translate([-_cover_cap_tb__part_1_x, -_cover_cap_tb__part_1_y, 0], _cover_cap_tb__part_1);
                _cover_cap_tb__part_1 = rotate([0,0,0], _cover_cap_tb__part_1);
                _cover_cap_tb__part_1 = translate([_cover_cap_tb__part_1_x, _cover_cap_tb__part_1_y, 0], _cover_cap_tb__part_1);

                _cover_cap_tb__part_1 = translate([0,0,0], _cover_cap_tb__part_1);
                result = result.subtract(_cover_cap_tb__part_1);
                
            

                // creating part 2 of case _cover_cap_tb
                let _cover_cap_tb__part_2 = cover_tb_cut_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb__part_2_bounds = _cover_cap_tb__part_2.getBounds();
                let _cover_cap_tb__part_2_x = _cover_cap_tb__part_2_bounds[0].x + (_cover_cap_tb__part_2_bounds[1].x - _cover_cap_tb__part_2_bounds[0].x) / 2
                let _cover_cap_tb__part_2_y = _cover_cap_tb__part_2_bounds[0].y + (_cover_cap_tb__part_2_bounds[1].y - _cover_cap_tb__part_2_bounds[0].y) / 2
                _cover_cap_tb__part_2 = translate([-_cover_cap_tb__part_2_x, -_cover_cap_tb__part_2_y, 0], _cover_cap_tb__part_2);
                _cover_cap_tb__part_2 = rotate([0,0,0], _cover_cap_tb__part_2);
                _cover_cap_tb__part_2 = translate([_cover_cap_tb__part_2_x, _cover_cap_tb__part_2_y, 0], _cover_cap_tb__part_2);

                _cover_cap_tb__part_2 = translate([0,0,0], _cover_cap_tb__part_2);
                result = result.subtract(_cover_cap_tb__part_2);
                
            

                // creating part 3 of case _cover_cap_tb
                let _cover_cap_tb__part_3 = trackball_screw_holes_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb__part_3_bounds = _cover_cap_tb__part_3.getBounds();
                let _cover_cap_tb__part_3_x = _cover_cap_tb__part_3_bounds[0].x + (_cover_cap_tb__part_3_bounds[1].x - _cover_cap_tb__part_3_bounds[0].x) / 2
                let _cover_cap_tb__part_3_y = _cover_cap_tb__part_3_bounds[0].y + (_cover_cap_tb__part_3_bounds[1].y - _cover_cap_tb__part_3_bounds[0].y) / 2
                _cover_cap_tb__part_3 = translate([-_cover_cap_tb__part_3_x, -_cover_cap_tb__part_3_y, 0], _cover_cap_tb__part_3);
                _cover_cap_tb__part_3 = rotate([0,0,0], _cover_cap_tb__part_3);
                _cover_cap_tb__part_3 = translate([_cover_cap_tb__part_3_x, _cover_cap_tb__part_3_y, 0], _cover_cap_tb__part_3);

                _cover_cap_tb__part_3 = translate([0,0,0], _cover_cap_tb__part_3);
                result = result.subtract(_cover_cap_tb__part_3);
                
            
                    return result;
                }
            
            

                function _wall_insert_case_fn() {
                    

                // creating part 0 of case _wall_insert
                let _wall_insert__part_0 = wall_insert_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _wall_insert__part_0_bounds = _wall_insert__part_0.getBounds();
                let _wall_insert__part_0_x = _wall_insert__part_0_bounds[0].x + (_wall_insert__part_0_bounds[1].x - _wall_insert__part_0_bounds[0].x) / 2
                let _wall_insert__part_0_y = _wall_insert__part_0_bounds[0].y + (_wall_insert__part_0_bounds[1].y - _wall_insert__part_0_bounds[0].y) / 2
                _wall_insert__part_0 = translate([-_wall_insert__part_0_x, -_wall_insert__part_0_y, 0], _wall_insert__part_0);
                _wall_insert__part_0 = rotate([0,0,0], _wall_insert__part_0);
                _wall_insert__part_0 = translate([_wall_insert__part_0_x, _wall_insert__part_0_y, 0], _wall_insert__part_0);

                _wall_insert__part_0 = translate([0,0,0], _wall_insert__part_0);
                let result = _wall_insert__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_case_fn() {
                    

                // creating part 0 of case bottom_case
                let bottom_case__part_0 = bottom_lip_wall_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_0_bounds = bottom_case__part_0.getBounds();
                let bottom_case__part_0_x = bottom_case__part_0_bounds[0].x + (bottom_case__part_0_bounds[1].x - bottom_case__part_0_bounds[0].x) / 2
                let bottom_case__part_0_y = bottom_case__part_0_bounds[0].y + (bottom_case__part_0_bounds[1].y - bottom_case__part_0_bounds[0].y) / 2
                bottom_case__part_0 = translate([-bottom_case__part_0_x, -bottom_case__part_0_y, 0], bottom_case__part_0);
                bottom_case__part_0 = rotate([0,0,0], bottom_case__part_0);
                bottom_case__part_0 = translate([bottom_case__part_0_x, bottom_case__part_0_y, 0], bottom_case__part_0);

                bottom_case__part_0 = translate([0,0,0], bottom_case__part_0);
                let result = bottom_case__part_0;
                
            

                // creating part 1 of case bottom_case
                let bottom_case__part_1 = bottom_lip_cut_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_1_bounds = bottom_case__part_1.getBounds();
                let bottom_case__part_1_x = bottom_case__part_1_bounds[0].x + (bottom_case__part_1_bounds[1].x - bottom_case__part_1_bounds[0].x) / 2
                let bottom_case__part_1_y = bottom_case__part_1_bounds[0].y + (bottom_case__part_1_bounds[1].y - bottom_case__part_1_bounds[0].y) / 2
                bottom_case__part_1 = translate([-bottom_case__part_1_x, -bottom_case__part_1_y, 0], bottom_case__part_1);
                bottom_case__part_1 = rotate([0,0,0], bottom_case__part_1);
                bottom_case__part_1 = translate([bottom_case__part_1_x, bottom_case__part_1_y, 0], bottom_case__part_1);

                bottom_case__part_1 = translate([0,0,0], bottom_case__part_1);
                result = result.subtract(bottom_case__part_1);
                
            

                // creating part 2 of case bottom_case
                let bottom_case__part_2 = _mcu_lip_wall_clear_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_2_bounds = bottom_case__part_2.getBounds();
                let bottom_case__part_2_x = bottom_case__part_2_bounds[0].x + (bottom_case__part_2_bounds[1].x - bottom_case__part_2_bounds[0].x) / 2
                let bottom_case__part_2_y = bottom_case__part_2_bounds[0].y + (bottom_case__part_2_bounds[1].y - bottom_case__part_2_bounds[0].y) / 2
                bottom_case__part_2 = translate([-bottom_case__part_2_x, -bottom_case__part_2_y, 0], bottom_case__part_2);
                bottom_case__part_2 = rotate([0,0,0], bottom_case__part_2);
                bottom_case__part_2 = translate([bottom_case__part_2_x, bottom_case__part_2_y, 0], bottom_case__part_2);

                bottom_case__part_2 = translate([0,0,0], bottom_case__part_2);
                result = result.subtract(bottom_case__part_2);
                
            

                // creating part 3 of case bottom_case
                let bottom_case__part_3 = xlBoard_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_3_bounds = bottom_case__part_3.getBounds();
                let bottom_case__part_3_x = bottom_case__part_3_bounds[0].x + (bottom_case__part_3_bounds[1].x - bottom_case__part_3_bounds[0].x) / 2
                let bottom_case__part_3_y = bottom_case__part_3_bounds[0].y + (bottom_case__part_3_bounds[1].y - bottom_case__part_3_bounds[0].y) / 2
                bottom_case__part_3 = translate([-bottom_case__part_3_x, -bottom_case__part_3_y, 0], bottom_case__part_3);
                bottom_case__part_3 = rotate([0,0,0], bottom_case__part_3);
                bottom_case__part_3 = translate([bottom_case__part_3_x, bottom_case__part_3_y, 0], bottom_case__part_3);

                bottom_case__part_3 = translate([0,0,0], bottom_case__part_3);
                result = result.union(bottom_case__part_3);
                
            

                // creating part 4 of case bottom_case
                let bottom_case__part_4 = _bottom_lip_notch_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_4_bounds = bottom_case__part_4.getBounds();
                let bottom_case__part_4_x = bottom_case__part_4_bounds[0].x + (bottom_case__part_4_bounds[1].x - bottom_case__part_4_bounds[0].x) / 2
                let bottom_case__part_4_y = bottom_case__part_4_bounds[0].y + (bottom_case__part_4_bounds[1].y - bottom_case__part_4_bounds[0].y) / 2
                bottom_case__part_4 = translate([-bottom_case__part_4_x, -bottom_case__part_4_y, 0], bottom_case__part_4);
                bottom_case__part_4 = rotate([0,0,0], bottom_case__part_4);
                bottom_case__part_4 = translate([bottom_case__part_4_x, bottom_case__part_4_y, 0], bottom_case__part_4);

                bottom_case__part_4 = translate([0,0,0], bottom_case__part_4);
                result = result.subtract(bottom_case__part_4);
                
            

                // creating part 5 of case bottom_case
                let bottom_case__part_5 = _bottom_lip_notch_raise_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_5_bounds = bottom_case__part_5.getBounds();
                let bottom_case__part_5_x = bottom_case__part_5_bounds[0].x + (bottom_case__part_5_bounds[1].x - bottom_case__part_5_bounds[0].x) / 2
                let bottom_case__part_5_y = bottom_case__part_5_bounds[0].y + (bottom_case__part_5_bounds[1].y - bottom_case__part_5_bounds[0].y) / 2
                bottom_case__part_5 = translate([-bottom_case__part_5_x, -bottom_case__part_5_y, 0], bottom_case__part_5);
                bottom_case__part_5 = rotate([0,0,0], bottom_case__part_5);
                bottom_case__part_5 = translate([bottom_case__part_5_x, bottom_case__part_5_y, 0], bottom_case__part_5);

                bottom_case__part_5 = translate([0,0,0], bottom_case__part_5);
                result = result.union(bottom_case__part_5);
                
            

                // creating part 6 of case bottom_case
                let bottom_case__part_6 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_6_bounds = bottom_case__part_6.getBounds();
                let bottom_case__part_6_x = bottom_case__part_6_bounds[0].x + (bottom_case__part_6_bounds[1].x - bottom_case__part_6_bounds[0].x) / 2
                let bottom_case__part_6_y = bottom_case__part_6_bounds[0].y + (bottom_case__part_6_bounds[1].y - bottom_case__part_6_bounds[0].y) / 2
                bottom_case__part_6 = translate([-bottom_case__part_6_x, -bottom_case__part_6_y, 0], bottom_case__part_6);
                bottom_case__part_6 = rotate([0,0,0], bottom_case__part_6);
                bottom_case__part_6 = translate([bottom_case__part_6_x, bottom_case__part_6_y, 0], bottom_case__part_6);

                bottom_case__part_6 = translate([0,0,0], bottom_case__part_6);
                result = result.subtract(bottom_case__part_6);
                
            

                // creating part 7 of case bottom_case
                let bottom_case__part_7 = _base_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_7_bounds = bottom_case__part_7.getBounds();
                let bottom_case__part_7_x = bottom_case__part_7_bounds[0].x + (bottom_case__part_7_bounds[1].x - bottom_case__part_7_bounds[0].x) / 2
                let bottom_case__part_7_y = bottom_case__part_7_bounds[0].y + (bottom_case__part_7_bounds[1].y - bottom_case__part_7_bounds[0].y) / 2
                bottom_case__part_7 = translate([-bottom_case__part_7_x, -bottom_case__part_7_y, 0], bottom_case__part_7);
                bottom_case__part_7 = rotate([0,0,0], bottom_case__part_7);
                bottom_case__part_7 = translate([bottom_case__part_7_x, bottom_case__part_7_y, 0], bottom_case__part_7);

                bottom_case__part_7 = translate([0,0,0], bottom_case__part_7);
                result = result.subtract(bottom_case__part_7);
                
            
                    return result;
                }
            
            

                function _mcu_lip_wall_clear_case_fn() {
                    

                // creating part 0 of case _mcu_lip_wall_clear
                let _mcu_lip_wall_clear__part_0 = mcu_lip_clear_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _mcu_lip_wall_clear__part_0_bounds = _mcu_lip_wall_clear__part_0.getBounds();
                let _mcu_lip_wall_clear__part_0_x = _mcu_lip_wall_clear__part_0_bounds[0].x + (_mcu_lip_wall_clear__part_0_bounds[1].x - _mcu_lip_wall_clear__part_0_bounds[0].x) / 2
                let _mcu_lip_wall_clear__part_0_y = _mcu_lip_wall_clear__part_0_bounds[0].y + (_mcu_lip_wall_clear__part_0_bounds[1].y - _mcu_lip_wall_clear__part_0_bounds[0].y) / 2
                _mcu_lip_wall_clear__part_0 = translate([-_mcu_lip_wall_clear__part_0_x, -_mcu_lip_wall_clear__part_0_y, 0], _mcu_lip_wall_clear__part_0);
                _mcu_lip_wall_clear__part_0 = rotate([0,0,0], _mcu_lip_wall_clear__part_0);
                _mcu_lip_wall_clear__part_0 = translate([_mcu_lip_wall_clear__part_0_x, _mcu_lip_wall_clear__part_0_y, 0], _mcu_lip_wall_clear__part_0);

                _mcu_lip_wall_clear__part_0 = translate([0,0,0], _mcu_lip_wall_clear__part_0);
                let result = _mcu_lip_wall_clear__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch
                let _bottom_lip_notch__part_0 = bottom_lip_rect_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch__part_0_bounds = _bottom_lip_notch__part_0.getBounds();
                let _bottom_lip_notch__part_0_x = _bottom_lip_notch__part_0_bounds[0].x + (_bottom_lip_notch__part_0_bounds[1].x - _bottom_lip_notch__part_0_bounds[0].x) / 2
                let _bottom_lip_notch__part_0_y = _bottom_lip_notch__part_0_bounds[0].y + (_bottom_lip_notch__part_0_bounds[1].y - _bottom_lip_notch__part_0_bounds[0].y) / 2
                _bottom_lip_notch__part_0 = translate([-_bottom_lip_notch__part_0_x, -_bottom_lip_notch__part_0_y, 0], _bottom_lip_notch__part_0);
                _bottom_lip_notch__part_0 = rotate([0,0,0], _bottom_lip_notch__part_0);
                _bottom_lip_notch__part_0 = translate([_bottom_lip_notch__part_0_x, _bottom_lip_notch__part_0_y, 0], _bottom_lip_notch__part_0);

                _bottom_lip_notch__part_0 = translate([0,0,0], _bottom_lip_notch__part_0);
                let result = _bottom_lip_notch__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_raise_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch_raise
                let _bottom_lip_notch_raise__part_0 = bottom_lip_rect_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch_raise__part_0_bounds = _bottom_lip_notch_raise__part_0.getBounds();
                let _bottom_lip_notch_raise__part_0_x = _bottom_lip_notch_raise__part_0_bounds[0].x + (_bottom_lip_notch_raise__part_0_bounds[1].x - _bottom_lip_notch_raise__part_0_bounds[0].x) / 2
                let _bottom_lip_notch_raise__part_0_y = _bottom_lip_notch_raise__part_0_bounds[0].y + (_bottom_lip_notch_raise__part_0_bounds[1].y - _bottom_lip_notch_raise__part_0_bounds[0].y) / 2
                _bottom_lip_notch_raise__part_0 = translate([-_bottom_lip_notch_raise__part_0_x, -_bottom_lip_notch_raise__part_0_y, 0], _bottom_lip_notch_raise__part_0);
                _bottom_lip_notch_raise__part_0 = rotate([0,0,0], _bottom_lip_notch_raise__part_0);
                _bottom_lip_notch_raise__part_0 = translate([_bottom_lip_notch_raise__part_0_x, _bottom_lip_notch_raise__part_0_y, 0], _bottom_lip_notch_raise__part_0);

                _bottom_lip_notch_raise__part_0 = translate([0,0,0], _bottom_lip_notch_raise__part_0);
                let result = _bottom_lip_notch_raise__part_0;
                
            
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
            
            

                function _base_holes_case_fn() {
                    

                // creating part 0 of case _base_holes
                let _base_holes__part_0 = wall_clearance_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _base_holes__part_0_bounds = _base_holes__part_0.getBounds();
                let _base_holes__part_0_x = _base_holes__part_0_bounds[0].x + (_base_holes__part_0_bounds[1].x - _base_holes__part_0_bounds[0].x) / 2
                let _base_holes__part_0_y = _base_holes__part_0_bounds[0].y + (_base_holes__part_0_bounds[1].y - _base_holes__part_0_bounds[0].y) / 2
                _base_holes__part_0 = translate([-_base_holes__part_0_x, -_base_holes__part_0_y, 0], _base_holes__part_0);
                _base_holes__part_0 = rotate([0,0,0], _base_holes__part_0);
                _base_holes__part_0 = translate([_base_holes__part_0_x, _base_holes__part_0_y, 0], _base_holes__part_0);

                _base_holes__part_0 = translate([0,0,0], _base_holes__part_0);
                let result = _base_holes__part_0;
                
            
                    return result;
                }
            
            

                function full_case_case_fn() {
                    

                // creating part 0 of case full_case
                let full_case__part_0 = wall_cover_case_tb_L_case_fn();

                // make sure that rotations are relative
                let full_case__part_0_bounds = full_case__part_0.getBounds();
                let full_case__part_0_x = full_case__part_0_bounds[0].x + (full_case__part_0_bounds[1].x - full_case__part_0_bounds[0].x) / 2
                let full_case__part_0_y = full_case__part_0_bounds[0].y + (full_case__part_0_bounds[1].y - full_case__part_0_bounds[0].y) / 2
                full_case__part_0 = translate([-full_case__part_0_x, -full_case__part_0_y, 0], full_case__part_0);
                full_case__part_0 = rotate([0,0,0], full_case__part_0);
                full_case__part_0 = translate([full_case__part_0_x, full_case__part_0_y, 0], full_case__part_0);

                full_case__part_0 = translate([0,0,0], full_case__part_0);
                let result = full_case__part_0;
                
            

                // creating part 1 of case full_case
                let full_case__part_1 = bottom_case_case_fn();

                // make sure that rotations are relative
                let full_case__part_1_bounds = full_case__part_1.getBounds();
                let full_case__part_1_x = full_case__part_1_bounds[0].x + (full_case__part_1_bounds[1].x - full_case__part_1_bounds[0].x) / 2
                let full_case__part_1_y = full_case__part_1_bounds[0].y + (full_case__part_1_bounds[1].y - full_case__part_1_bounds[0].y) / 2
                full_case__part_1 = translate([-full_case__part_1_x, -full_case__part_1_y, 0], full_case__part_1);
                full_case__part_1 = rotate([0,0,0], full_case__part_1);
                full_case__part_1 = translate([full_case__part_1_x, full_case__part_1_y, 0], full_case__part_1);

                full_case__part_1 = translate([0,0,0], full_case__part_1);
                result = result.union(full_case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return full_case_case_fn();
            }

        