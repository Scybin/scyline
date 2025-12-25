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
                let bottom_case__part_2 = xlBoard_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_2_bounds = bottom_case__part_2.getBounds();
                let bottom_case__part_2_x = bottom_case__part_2_bounds[0].x + (bottom_case__part_2_bounds[1].x - bottom_case__part_2_bounds[0].x) / 2
                let bottom_case__part_2_y = bottom_case__part_2_bounds[0].y + (bottom_case__part_2_bounds[1].y - bottom_case__part_2_bounds[0].y) / 2
                bottom_case__part_2 = translate([-bottom_case__part_2_x, -bottom_case__part_2_y, 0], bottom_case__part_2);
                bottom_case__part_2 = rotate([0,0,0], bottom_case__part_2);
                bottom_case__part_2 = translate([bottom_case__part_2_x, bottom_case__part_2_y, 0], bottom_case__part_2);

                bottom_case__part_2 = translate([0,0,0], bottom_case__part_2);
                result = result.union(bottom_case__part_2);
                
            

                // creating part 3 of case bottom_case
                let bottom_case__part_3 = _bottom_lip_notch_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_3_bounds = bottom_case__part_3.getBounds();
                let bottom_case__part_3_x = bottom_case__part_3_bounds[0].x + (bottom_case__part_3_bounds[1].x - bottom_case__part_3_bounds[0].x) / 2
                let bottom_case__part_3_y = bottom_case__part_3_bounds[0].y + (bottom_case__part_3_bounds[1].y - bottom_case__part_3_bounds[0].y) / 2
                bottom_case__part_3 = translate([-bottom_case__part_3_x, -bottom_case__part_3_y, 0], bottom_case__part_3);
                bottom_case__part_3 = rotate([0,0,0], bottom_case__part_3);
                bottom_case__part_3 = translate([bottom_case__part_3_x, bottom_case__part_3_y, 0], bottom_case__part_3);

                bottom_case__part_3 = translate([0,0,0], bottom_case__part_3);
                result = result.subtract(bottom_case__part_3);
                
            

                // creating part 4 of case bottom_case
                let bottom_case__part_4 = _bottom_lip_notch_raise_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_4_bounds = bottom_case__part_4.getBounds();
                let bottom_case__part_4_x = bottom_case__part_4_bounds[0].x + (bottom_case__part_4_bounds[1].x - bottom_case__part_4_bounds[0].x) / 2
                let bottom_case__part_4_y = bottom_case__part_4_bounds[0].y + (bottom_case__part_4_bounds[1].y - bottom_case__part_4_bounds[0].y) / 2
                bottom_case__part_4 = translate([-bottom_case__part_4_x, -bottom_case__part_4_y, 0], bottom_case__part_4);
                bottom_case__part_4 = rotate([0,0,0], bottom_case__part_4);
                bottom_case__part_4 = translate([bottom_case__part_4_x, bottom_case__part_4_y, 0], bottom_case__part_4);

                bottom_case__part_4 = translate([0,0,0], bottom_case__part_4);
                result = result.union(bottom_case__part_4);
                
            

                // creating part 5 of case bottom_case
                let bottom_case__part_5 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_5_bounds = bottom_case__part_5.getBounds();
                let bottom_case__part_5_x = bottom_case__part_5_bounds[0].x + (bottom_case__part_5_bounds[1].x - bottom_case__part_5_bounds[0].x) / 2
                let bottom_case__part_5_y = bottom_case__part_5_bounds[0].y + (bottom_case__part_5_bounds[1].y - bottom_case__part_5_bounds[0].y) / 2
                bottom_case__part_5 = translate([-bottom_case__part_5_x, -bottom_case__part_5_y, 0], bottom_case__part_5);
                bottom_case__part_5 = rotate([0,0,0], bottom_case__part_5);
                bottom_case__part_5 = translate([bottom_case__part_5_x, bottom_case__part_5_y, 0], bottom_case__part_5);

                bottom_case__part_5 = translate([0,0,0], bottom_case__part_5);
                result = result.subtract(bottom_case__part_5);
                
            

                // creating part 6 of case bottom_case
                let bottom_case__part_6 = _base_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_6_bounds = bottom_case__part_6.getBounds();
                let bottom_case__part_6_x = bottom_case__part_6_bounds[0].x + (bottom_case__part_6_bounds[1].x - bottom_case__part_6_bounds[0].x) / 2
                let bottom_case__part_6_y = bottom_case__part_6_bounds[0].y + (bottom_case__part_6_bounds[1].y - bottom_case__part_6_bounds[0].y) / 2
                bottom_case__part_6 = translate([-bottom_case__part_6_x, -bottom_case__part_6_y, 0], bottom_case__part_6);
                bottom_case__part_6 = rotate([0,0,0], bottom_case__part_6);
                bottom_case__part_6 = translate([bottom_case__part_6_x, bottom_case__part_6_y, 0], bottom_case__part_6);

                bottom_case__part_6 = translate([0,0,0], bottom_case__part_6);
                result = result.subtract(bottom_case__part_6);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_case_fn();
            }

        