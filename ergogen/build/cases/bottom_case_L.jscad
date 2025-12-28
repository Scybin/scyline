function bottom_lip_wall_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[90,-160],[90,-83]]).appendPoint([109,-83]).appendPoint([109,-81.1]).appendPoint([128,-81.1]).appendPoint([128,-68.56]).appendPoint([147,-68.56]).appendPoint([147,-63.81]).appendPoint([167,-63.81]).appendPoint([167,-68.56]).appendPoint([186,-68.56]).appendPoint([186,-71.41]).appendPoint([224,-71.41]).appendPoint([224,-167.41]).appendPoint([166.5,-167.41]).appendPoint([147.2742905,-170.5419278]).appendPoint([129,-158.1]).appendPoint([110,-158.1]).appendPoint([110,-160]).appendPoint([90,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_cut_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([109,-84]).appendPoint([110,-83]).appendPoint([110,-82.1]).appendPoint([128,-82.1]).appendPoint([129,-81.1]).appendPoint([129,-69.56]).appendPoint([147,-69.56]).appendPoint([148,-68.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-68.56]).appendPoint([167,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-71.41]).appendPoint([186,-72.41]).appendPoint([223,-72.41]).appendPoint([223,-166.41]).appendPoint([166.5,-166.41]).appendPoint([166.3392163,-166.4230103]).appendPoint([147.5072868,-169.4907901]).appendPoint([129.5627866,-157.2733978]).appendPoint([129,-157.1]).appendPoint([110,-157.1]).appendPoint([109,-158.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function xlBoard_L_extrude_2_outline_fn(){
    return new CSG.Path2D([[85,-160],[85,-83]]).appendArc([90,-78],{"radius":5,"clockwise":true,"large":false}).appendPoint([105.076991,-78]).appendArc([109,-76.1],{"radius":5,"clockwise":true,"large":false}).appendPoint([123,-76.1]).appendPoint([123,-68.56]).appendArc([128,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([142.0062539,-63.56]).appendArc([147,-58.81],{"radius":5,"clockwise":true,"large":false}).appendPoint([167,-58.81]).appendArc([171.9937461,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([186,-63.56]).appendArc([190.5141444,-66.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([224,-66.41]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-167.41]).appendArc([224,-172.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([166.9045908,-172.41]).appendPoint([148.0782089,-175.4768761]).appendArc([144.4603576,-174.674939],{"radius":5,"clockwise":true,"large":false}).appendPoint([127.4594715,-163.1]).appendPoint([113.923009,-163.1]).appendArc([110,-165],{"radius":5,"clockwise":true,"large":false}).appendPoint([90,-165]).appendArc([85,-160],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function mcu_lip_clear_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[222,-105.21],[226,-105.21]]).appendPoint([226,-73.61]).appendPoint([222,-73.61]).appendPoint([222,-105.21]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[215.5,-167.41],[221.5,-167.41]]).appendPoint([221.5,-165.41]).appendPoint([215.5,-165.41]).appendPoint([215.5,-167.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_L_extrude_2_outline_fn(){
    return new CSG.Path2D([[215.5,-167.41],[221.5,-167.41]]).appendPoint([221.5,-165.41]).appendPoint([215.5,-165.41]).appendPoint([215.5,-167.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function inner_lip_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[167,-167.41],[167,-134.06]]).appendPoint([166,-134.06]).appendPoint([166,-167.41]).appendPoint([167,-167.41]).close().innerToCAG()
.union(
    new CSG.Path2D([[166,-130.06],[166,-68.56]]).appendPoint([167,-68.56]).appendPoint([167,-130.06]).appendPoint([166,-130.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-158.1],[129,-81.1]]).appendPoint([128,-81.1]).appendPoint([128,-158.1]).appendPoint([129,-158.1]).close().innerToCAG()
).extrude({ offset: [0, 0, 12] });
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


function wall_clearance_extrude_2_outline_fn(){
    return CAG.circle({"center":[262.25,-169.91],"radius":1.1})
.union(
    CAG.circle({"center":[394,-162.5],"radius":1.1})
).union(
    CAG.circle({"center":[261,-68.91],"radius":1.1})
).union(
    CAG.circle({"center":[394,-80.5],"radius":1.1})
).union(
    CAG.circle({"center":[222.75,-169.91],"radius":1.1})
).union(
    CAG.circle({"center":[91,-162.5],"radius":1.1})
).union(
    CAG.circle({"center":[224,-68.91],"radius":1.1})
).union(
    CAG.circle({"center":[91,-80.5],"radius":1.1})
).extrude({ offset: [0, 0, 2] });
}




                function _mcu_lip_wall_clear_L_case_fn() {
                    

                // creating part 0 of case _mcu_lip_wall_clear_L
                let _mcu_lip_wall_clear_L__part_0 = mcu_lip_clear_L_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _mcu_lip_wall_clear_L__part_0_bounds = _mcu_lip_wall_clear_L__part_0.getBounds();
                let _mcu_lip_wall_clear_L__part_0_x = _mcu_lip_wall_clear_L__part_0_bounds[0].x + (_mcu_lip_wall_clear_L__part_0_bounds[1].x - _mcu_lip_wall_clear_L__part_0_bounds[0].x) / 2
                let _mcu_lip_wall_clear_L__part_0_y = _mcu_lip_wall_clear_L__part_0_bounds[0].y + (_mcu_lip_wall_clear_L__part_0_bounds[1].y - _mcu_lip_wall_clear_L__part_0_bounds[0].y) / 2
                _mcu_lip_wall_clear_L__part_0 = translate([-_mcu_lip_wall_clear_L__part_0_x, -_mcu_lip_wall_clear_L__part_0_y, 0], _mcu_lip_wall_clear_L__part_0);
                _mcu_lip_wall_clear_L__part_0 = rotate([0,0,0], _mcu_lip_wall_clear_L__part_0);
                _mcu_lip_wall_clear_L__part_0 = translate([_mcu_lip_wall_clear_L__part_0_x, _mcu_lip_wall_clear_L__part_0_y, 0], _mcu_lip_wall_clear_L__part_0);

                _mcu_lip_wall_clear_L__part_0 = translate([0,0,0], _mcu_lip_wall_clear_L__part_0);
                let result = _mcu_lip_wall_clear_L__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_L_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch_L
                let _bottom_lip_notch_L__part_0 = bottom_lip_rect_L_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch_L__part_0_bounds = _bottom_lip_notch_L__part_0.getBounds();
                let _bottom_lip_notch_L__part_0_x = _bottom_lip_notch_L__part_0_bounds[0].x + (_bottom_lip_notch_L__part_0_bounds[1].x - _bottom_lip_notch_L__part_0_bounds[0].x) / 2
                let _bottom_lip_notch_L__part_0_y = _bottom_lip_notch_L__part_0_bounds[0].y + (_bottom_lip_notch_L__part_0_bounds[1].y - _bottom_lip_notch_L__part_0_bounds[0].y) / 2
                _bottom_lip_notch_L__part_0 = translate([-_bottom_lip_notch_L__part_0_x, -_bottom_lip_notch_L__part_0_y, 0], _bottom_lip_notch_L__part_0);
                _bottom_lip_notch_L__part_0 = rotate([0,0,0], _bottom_lip_notch_L__part_0);
                _bottom_lip_notch_L__part_0 = translate([_bottom_lip_notch_L__part_0_x, _bottom_lip_notch_L__part_0_y, 0], _bottom_lip_notch_L__part_0);

                _bottom_lip_notch_L__part_0 = translate([0,0,0], _bottom_lip_notch_L__part_0);
                let result = _bottom_lip_notch_L__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_raise_L_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch_raise_L
                let _bottom_lip_notch_raise_L__part_0 = bottom_lip_rect_L_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch_raise_L__part_0_bounds = _bottom_lip_notch_raise_L__part_0.getBounds();
                let _bottom_lip_notch_raise_L__part_0_x = _bottom_lip_notch_raise_L__part_0_bounds[0].x + (_bottom_lip_notch_raise_L__part_0_bounds[1].x - _bottom_lip_notch_raise_L__part_0_bounds[0].x) / 2
                let _bottom_lip_notch_raise_L__part_0_y = _bottom_lip_notch_raise_L__part_0_bounds[0].y + (_bottom_lip_notch_raise_L__part_0_bounds[1].y - _bottom_lip_notch_raise_L__part_0_bounds[0].y) / 2
                _bottom_lip_notch_raise_L__part_0 = translate([-_bottom_lip_notch_raise_L__part_0_x, -_bottom_lip_notch_raise_L__part_0_y, 0], _bottom_lip_notch_raise_L__part_0);
                _bottom_lip_notch_raise_L__part_0 = rotate([0,0,0], _bottom_lip_notch_raise_L__part_0);
                _bottom_lip_notch_raise_L__part_0 = translate([_bottom_lip_notch_raise_L__part_0_x, _bottom_lip_notch_raise_L__part_0_y, 0], _bottom_lip_notch_raise_L__part_0);

                _bottom_lip_notch_raise_L__part_0 = translate([0,0,0], _bottom_lip_notch_raise_L__part_0);
                let result = _bottom_lip_notch_raise_L__part_0;
                
            
                    return result;
                }
            
            

                function _inner_lip_L_case_fn() {
                    

                // creating part 0 of case _inner_lip_L
                let _inner_lip_L__part_0 = inner_lip_L_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _inner_lip_L__part_0_bounds = _inner_lip_L__part_0.getBounds();
                let _inner_lip_L__part_0_x = _inner_lip_L__part_0_bounds[0].x + (_inner_lip_L__part_0_bounds[1].x - _inner_lip_L__part_0_bounds[0].x) / 2
                let _inner_lip_L__part_0_y = _inner_lip_L__part_0_bounds[0].y + (_inner_lip_L__part_0_bounds[1].y - _inner_lip_L__part_0_bounds[0].y) / 2
                _inner_lip_L__part_0 = translate([-_inner_lip_L__part_0_x, -_inner_lip_L__part_0_y, 0], _inner_lip_L__part_0);
                _inner_lip_L__part_0 = rotate([0,0,0], _inner_lip_L__part_0);
                _inner_lip_L__part_0 = translate([_inner_lip_L__part_0_x, _inner_lip_L__part_0_y, 0], _inner_lip_L__part_0);

                _inner_lip_L__part_0 = translate([0,0,0], _inner_lip_L__part_0);
                let result = _inner_lip_L__part_0;
                
            
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
            
            

                function bottom_case_L_case_fn() {
                    

                // creating part 0 of case bottom_case_L
                let bottom_case_L__part_0 = bottom_lip_wall_L_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_0_bounds = bottom_case_L__part_0.getBounds();
                let bottom_case_L__part_0_x = bottom_case_L__part_0_bounds[0].x + (bottom_case_L__part_0_bounds[1].x - bottom_case_L__part_0_bounds[0].x) / 2
                let bottom_case_L__part_0_y = bottom_case_L__part_0_bounds[0].y + (bottom_case_L__part_0_bounds[1].y - bottom_case_L__part_0_bounds[0].y) / 2
                bottom_case_L__part_0 = translate([-bottom_case_L__part_0_x, -bottom_case_L__part_0_y, 0], bottom_case_L__part_0);
                bottom_case_L__part_0 = rotate([0,0,0], bottom_case_L__part_0);
                bottom_case_L__part_0 = translate([bottom_case_L__part_0_x, bottom_case_L__part_0_y, 0], bottom_case_L__part_0);

                bottom_case_L__part_0 = translate([0,0,0], bottom_case_L__part_0);
                let result = bottom_case_L__part_0;
                
            

                // creating part 1 of case bottom_case_L
                let bottom_case_L__part_1 = bottom_lip_cut_L_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_1_bounds = bottom_case_L__part_1.getBounds();
                let bottom_case_L__part_1_x = bottom_case_L__part_1_bounds[0].x + (bottom_case_L__part_1_bounds[1].x - bottom_case_L__part_1_bounds[0].x) / 2
                let bottom_case_L__part_1_y = bottom_case_L__part_1_bounds[0].y + (bottom_case_L__part_1_bounds[1].y - bottom_case_L__part_1_bounds[0].y) / 2
                bottom_case_L__part_1 = translate([-bottom_case_L__part_1_x, -bottom_case_L__part_1_y, 0], bottom_case_L__part_1);
                bottom_case_L__part_1 = rotate([0,0,0], bottom_case_L__part_1);
                bottom_case_L__part_1 = translate([bottom_case_L__part_1_x, bottom_case_L__part_1_y, 0], bottom_case_L__part_1);

                bottom_case_L__part_1 = translate([0,0,0], bottom_case_L__part_1);
                result = result.subtract(bottom_case_L__part_1);
                
            

                // creating part 2 of case bottom_case_L
                let bottom_case_L__part_2 = _mcu_lip_wall_clear_L_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_2_bounds = bottom_case_L__part_2.getBounds();
                let bottom_case_L__part_2_x = bottom_case_L__part_2_bounds[0].x + (bottom_case_L__part_2_bounds[1].x - bottom_case_L__part_2_bounds[0].x) / 2
                let bottom_case_L__part_2_y = bottom_case_L__part_2_bounds[0].y + (bottom_case_L__part_2_bounds[1].y - bottom_case_L__part_2_bounds[0].y) / 2
                bottom_case_L__part_2 = translate([-bottom_case_L__part_2_x, -bottom_case_L__part_2_y, 0], bottom_case_L__part_2);
                bottom_case_L__part_2 = rotate([0,0,0], bottom_case_L__part_2);
                bottom_case_L__part_2 = translate([bottom_case_L__part_2_x, bottom_case_L__part_2_y, 0], bottom_case_L__part_2);

                bottom_case_L__part_2 = translate([0,0,0], bottom_case_L__part_2);
                result = result.subtract(bottom_case_L__part_2);
                
            

                // creating part 3 of case bottom_case_L
                let bottom_case_L__part_3 = xlBoard_L_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_3_bounds = bottom_case_L__part_3.getBounds();
                let bottom_case_L__part_3_x = bottom_case_L__part_3_bounds[0].x + (bottom_case_L__part_3_bounds[1].x - bottom_case_L__part_3_bounds[0].x) / 2
                let bottom_case_L__part_3_y = bottom_case_L__part_3_bounds[0].y + (bottom_case_L__part_3_bounds[1].y - bottom_case_L__part_3_bounds[0].y) / 2
                bottom_case_L__part_3 = translate([-bottom_case_L__part_3_x, -bottom_case_L__part_3_y, 0], bottom_case_L__part_3);
                bottom_case_L__part_3 = rotate([0,0,0], bottom_case_L__part_3);
                bottom_case_L__part_3 = translate([bottom_case_L__part_3_x, bottom_case_L__part_3_y, 0], bottom_case_L__part_3);

                bottom_case_L__part_3 = translate([0,0,0], bottom_case_L__part_3);
                result = result.union(bottom_case_L__part_3);
                
            

                // creating part 4 of case bottom_case_L
                let bottom_case_L__part_4 = _bottom_lip_notch_L_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_4_bounds = bottom_case_L__part_4.getBounds();
                let bottom_case_L__part_4_x = bottom_case_L__part_4_bounds[0].x + (bottom_case_L__part_4_bounds[1].x - bottom_case_L__part_4_bounds[0].x) / 2
                let bottom_case_L__part_4_y = bottom_case_L__part_4_bounds[0].y + (bottom_case_L__part_4_bounds[1].y - bottom_case_L__part_4_bounds[0].y) / 2
                bottom_case_L__part_4 = translate([-bottom_case_L__part_4_x, -bottom_case_L__part_4_y, 0], bottom_case_L__part_4);
                bottom_case_L__part_4 = rotate([0,0,0], bottom_case_L__part_4);
                bottom_case_L__part_4 = translate([bottom_case_L__part_4_x, bottom_case_L__part_4_y, 0], bottom_case_L__part_4);

                bottom_case_L__part_4 = translate([0,0,0], bottom_case_L__part_4);
                result = result.subtract(bottom_case_L__part_4);
                
            

                // creating part 5 of case bottom_case_L
                let bottom_case_L__part_5 = _bottom_lip_notch_raise_L_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_5_bounds = bottom_case_L__part_5.getBounds();
                let bottom_case_L__part_5_x = bottom_case_L__part_5_bounds[0].x + (bottom_case_L__part_5_bounds[1].x - bottom_case_L__part_5_bounds[0].x) / 2
                let bottom_case_L__part_5_y = bottom_case_L__part_5_bounds[0].y + (bottom_case_L__part_5_bounds[1].y - bottom_case_L__part_5_bounds[0].y) / 2
                bottom_case_L__part_5 = translate([-bottom_case_L__part_5_x, -bottom_case_L__part_5_y, 0], bottom_case_L__part_5);
                bottom_case_L__part_5 = rotate([0,0,0], bottom_case_L__part_5);
                bottom_case_L__part_5 = translate([bottom_case_L__part_5_x, bottom_case_L__part_5_y, 0], bottom_case_L__part_5);

                bottom_case_L__part_5 = translate([0,0,0], bottom_case_L__part_5);
                result = result.union(bottom_case_L__part_5);
                
            

                // creating part 6 of case bottom_case_L
                let bottom_case_L__part_6 = _inner_lip_L_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_6_bounds = bottom_case_L__part_6.getBounds();
                let bottom_case_L__part_6_x = bottom_case_L__part_6_bounds[0].x + (bottom_case_L__part_6_bounds[1].x - bottom_case_L__part_6_bounds[0].x) / 2
                let bottom_case_L__part_6_y = bottom_case_L__part_6_bounds[0].y + (bottom_case_L__part_6_bounds[1].y - bottom_case_L__part_6_bounds[0].y) / 2
                bottom_case_L__part_6 = translate([-bottom_case_L__part_6_x, -bottom_case_L__part_6_y, 0], bottom_case_L__part_6);
                bottom_case_L__part_6 = rotate([0,0,0], bottom_case_L__part_6);
                bottom_case_L__part_6 = translate([bottom_case_L__part_6_x, bottom_case_L__part_6_y, 0], bottom_case_L__part_6);

                bottom_case_L__part_6 = translate([0,0,0], bottom_case_L__part_6);
                result = result.union(bottom_case_L__part_6);
                
            

                // creating part 7 of case bottom_case_L
                let bottom_case_L__part_7 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_7_bounds = bottom_case_L__part_7.getBounds();
                let bottom_case_L__part_7_x = bottom_case_L__part_7_bounds[0].x + (bottom_case_L__part_7_bounds[1].x - bottom_case_L__part_7_bounds[0].x) / 2
                let bottom_case_L__part_7_y = bottom_case_L__part_7_bounds[0].y + (bottom_case_L__part_7_bounds[1].y - bottom_case_L__part_7_bounds[0].y) / 2
                bottom_case_L__part_7 = translate([-bottom_case_L__part_7_x, -bottom_case_L__part_7_y, 0], bottom_case_L__part_7);
                bottom_case_L__part_7 = rotate([0,0,0], bottom_case_L__part_7);
                bottom_case_L__part_7 = translate([bottom_case_L__part_7_x, bottom_case_L__part_7_y, 0], bottom_case_L__part_7);

                bottom_case_L__part_7 = translate([0,0,0], bottom_case_L__part_7);
                result = result.subtract(bottom_case_L__part_7);
                
            

                // creating part 8 of case bottom_case_L
                let bottom_case_L__part_8 = _base_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case_L__part_8_bounds = bottom_case_L__part_8.getBounds();
                let bottom_case_L__part_8_x = bottom_case_L__part_8_bounds[0].x + (bottom_case_L__part_8_bounds[1].x - bottom_case_L__part_8_bounds[0].x) / 2
                let bottom_case_L__part_8_y = bottom_case_L__part_8_bounds[0].y + (bottom_case_L__part_8_bounds[1].y - bottom_case_L__part_8_bounds[0].y) / 2
                bottom_case_L__part_8 = translate([-bottom_case_L__part_8_x, -bottom_case_L__part_8_y, 0], bottom_case_L__part_8);
                bottom_case_L__part_8 = rotate([0,0,0], bottom_case_L__part_8);
                bottom_case_L__part_8 = translate([bottom_case_L__part_8_x, bottom_case_L__part_8_y, 0], bottom_case_L__part_8);

                bottom_case_L__part_8 = translate([0,0,0], bottom_case_L__part_8);
                result = result.subtract(bottom_case_L__part_8);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_L_case_fn();
            }

        