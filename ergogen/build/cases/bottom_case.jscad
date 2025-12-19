function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-159],[89,-84]]).appendArc([91,-82],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.2089429,-82]).appendArc([108.1392953,-81.3666667],{"radius":1,"clockwise":false,"large":false}).appendArc([110,-80.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([126,-80.1]).appendArc([127,-79.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([127,-69.56]).appendArc([129,-67.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([145,-67.56]).appendArc([146,-66.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-64.81]).appendArc([148,-62.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([166,-62.81]).appendArc([168,-64.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([168,-66.56]).appendArc([169,-67.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([185,-67.56]).appendArc([187,-69.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([187,-70.41]).appendPoint([224,-70.41]).appendArc([226,-72.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([226,-166.41]).appendArc([224,-168.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.7562262,-168.41]).appendArc([166.5866456,-168.4244837],{"radius":1,"clockwise":false,"large":false}).appendPoint([148.6137251,-171.517136]).appendArc([147.2282325,-171.2505654],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.6758109,-159.247769]).appendArc([127.1526453,-159.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([111.7910571,-159.1]).appendArc([110.8607047,-159.7333333],{"radius":1,"clockwise":false,"large":false}).appendArc([109,-161],{"radius":2,"clockwise":true,"large":false}).appendPoint([91,-161]).appendArc([89,-159],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_9_5_outline_fn(){
    return new CSG.Path2D([[89,-159],[89,-84]]).appendArc([91,-82],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.2089429,-82]).appendArc([108.1392953,-81.3666667],{"radius":1,"clockwise":false,"large":false}).appendArc([110,-80.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([126,-80.1]).appendArc([127,-79.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([127,-69.56]).appendArc([129,-67.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([145,-67.56]).appendArc([146,-66.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-64.81]).appendArc([148,-62.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([166,-62.81]).appendArc([168,-64.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([168,-66.56]).appendArc([169,-67.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([185,-67.56]).appendArc([187,-69.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([187,-70.41]).appendPoint([224,-70.41]).appendArc([226,-72.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([226,-166.41]).appendArc([224,-168.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.7562262,-168.41]).appendArc([166.5866456,-168.4244837],{"radius":1,"clockwise":false,"large":false}).appendPoint([148.6137251,-171.517136]).appendArc([147.2282325,-171.2505654],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.6758109,-159.247769]).appendArc([127.1526453,-159.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([111.7910571,-159.1]).appendArc([110.8607047,-159.7333333],{"radius":1,"clockwise":false,"large":false}).appendArc([109,-161],{"radius":2,"clockwise":true,"large":false}).appendPoint([91,-161]).appendArc([89,-159],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.5] });
}


function pcb_extrude_9_5_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.5] });
}


function button_wall_extrude_6_outline_fn(){
    return new CSG.Path2D([[135.9058389,-164.3],[139.7287198,-164.3]]).appendPoint([128.2510532,-157.254116]).appendArc([128.25,-157.3],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.25,-159.6002509]).appendPoint([135.9058389,-164.3]).close().innerToCAG()
.extrude({ offset: [0, 0, 6] });
}


function button_wall_extrude_2_outline_fn(){
    return new CSG.Path2D([[135.9058389,-164.3],[139.7287198,-164.3]]).appendPoint([128.2510532,-157.254116]).appendArc([128.25,-157.3],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.25,-159.6002509]).appendPoint([135.9058389,-164.3]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function standoff_extrude_1_outline_fn(){
    return CAG.circle({"center":[185.5,-127.485],"radius":2.5})
.union(
    CAG.circle({"center":[185.5,-108.485],"radius":2.5})
).union(
    CAG.circle({"center":[185.5,-89.485],"radius":2.5})
).union(
    CAG.circle({"center":[156.2875,-144.965],"radius":2.5})
).union(
    CAG.circle({"center":[109.5,-139.55],"radius":2.5})
).union(
    CAG.circle({"center":[109.5,-120.55],"radius":2.5})
).union(
    CAG.circle({"center":[109.5,-101.55],"radius":2.5})
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




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            

                // creating part 2 of case wall
                let wall__part_2 = _button_access_cut_case_fn();

                // make sure that rotations are relative
                let wall__part_2_bounds = wall__part_2.getBounds();
                let wall__part_2_x = wall__part_2_bounds[0].x + (wall__part_2_bounds[1].x - wall__part_2_bounds[0].x) / 2
                let wall__part_2_y = wall__part_2_bounds[0].y + (wall__part_2_bounds[1].y - wall__part_2_bounds[0].y) / 2
                wall__part_2 = translate([-wall__part_2_x, -wall__part_2_y, 0], wall__part_2);
                wall__part_2 = rotate([0,0,0], wall__part_2);
                wall__part_2 = translate([wall__part_2_x, wall__part_2_y, 0], wall__part_2);

                wall__part_2 = translate([0,0,0], wall__part_2);
                result = result.subtract(wall__part_2);
                
            

                // creating part 3 of case wall
                let wall__part_3 = _button_access_fill_case_fn();

                // make sure that rotations are relative
                let wall__part_3_bounds = wall__part_3.getBounds();
                let wall__part_3_x = wall__part_3_bounds[0].x + (wall__part_3_bounds[1].x - wall__part_3_bounds[0].x) / 2
                let wall__part_3_y = wall__part_3_bounds[0].y + (wall__part_3_bounds[1].y - wall__part_3_bounds[0].y) / 2
                wall__part_3 = translate([-wall__part_3_x, -wall__part_3_y, 0], wall__part_3);
                wall__part_3 = rotate([0,0,0], wall__part_3);
                wall__part_3 = translate([wall__part_3_x, wall__part_3_y, 0], wall__part_3);

                wall__part_3 = translate([0,0,0], wall__part_3);
                result = result.union(wall__part_3);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_9_5_outline_fn();

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
                let _innerWall__part_0 = pcb_extrude_9_5_outline_fn();

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
            
            

                function _button_access_cut_case_fn() {
                    

                // creating part 0 of case _button_access_cut
                let _button_access_cut__part_0 = button_wall_extrude_6_outline_fn();

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
                let _button_access_fill__part_0 = button_wall_extrude_2_outline_fn();

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
            
            

                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
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
            
            

                function bottom_case_case_fn() {
                    

                // creating part 0 of case bottom_case
                let bottom_case__part_0 = xlBottom_case_fn();

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
                let bottom_case__part_1 = wall_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_1_bounds = bottom_case__part_1.getBounds();
                let bottom_case__part_1_x = bottom_case__part_1_bounds[0].x + (bottom_case__part_1_bounds[1].x - bottom_case__part_1_bounds[0].x) / 2
                let bottom_case__part_1_y = bottom_case__part_1_bounds[0].y + (bottom_case__part_1_bounds[1].y - bottom_case__part_1_bounds[0].y) / 2
                bottom_case__part_1 = translate([-bottom_case__part_1_x, -bottom_case__part_1_y, 0], bottom_case__part_1);
                bottom_case__part_1 = rotate([0,0,0], bottom_case__part_1);
                bottom_case__part_1 = translate([bottom_case__part_1_x, bottom_case__part_1_y, 0], bottom_case__part_1);

                bottom_case__part_1 = translate([0,0,0], bottom_case__part_1);
                result = result.union(bottom_case__part_1);
                
            

                // creating part 2 of case bottom_case
                let bottom_case__part_2 = _standoffs_case_fn();

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
                let bottom_case__part_3 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_3_bounds = bottom_case__part_3.getBounds();
                let bottom_case__part_3_x = bottom_case__part_3_bounds[0].x + (bottom_case__part_3_bounds[1].x - bottom_case__part_3_bounds[0].x) / 2
                let bottom_case__part_3_y = bottom_case__part_3_bounds[0].y + (bottom_case__part_3_bounds[1].y - bottom_case__part_3_bounds[0].y) / 2
                bottom_case__part_3 = translate([-bottom_case__part_3_x, -bottom_case__part_3_y, 0], bottom_case__part_3);
                bottom_case__part_3 = rotate([0,0,0], bottom_case__part_3);
                bottom_case__part_3 = translate([bottom_case__part_3_x, bottom_case__part_3_y, 0], bottom_case__part_3);

                bottom_case__part_3 = translate([0,0,0], bottom_case__part_3);
                result = result.subtract(bottom_case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_case_fn();
            }

        