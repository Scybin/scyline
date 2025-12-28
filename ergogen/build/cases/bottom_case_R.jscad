function bottom_lip_wall_R_extrude_12_outline_fn(){
    return new CSG.Path2D([[395,-160],[395,-83]]).appendPoint([376,-83]).appendPoint([376,-81.1]).appendPoint([357,-81.1]).appendPoint([357,-68.56]).appendPoint([338,-68.56]).appendPoint([338,-63.81]).appendPoint([318,-63.81]).appendPoint([318,-68.56]).appendPoint([299,-68.56]).appendPoint([299,-71.41]).appendPoint([261,-71.41]).appendPoint([261,-167.41]).appendPoint([318.5,-167.41]).appendPoint([337.7257095,-170.5419278]).appendPoint([356,-158.1]).appendPoint([375,-158.1]).appendPoint([375,-160]).appendPoint([395,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_cut_R_extrude_12_outline_fn(){
    return new CSG.Path2D([[394,-159],[394,-84]]).appendPoint([375,-84]).appendPoint([375,-82.1]).appendPoint([356,-82.1]).appendPoint([356,-69.56]).appendPoint([337,-69.56]).appendPoint([337,-64.81]).appendPoint([319,-64.81]).appendPoint([319,-69.56]).appendPoint([300,-69.56]).appendPoint([300,-72.41]).appendPoint([262,-72.41]).appendPoint([262,-166.41]).appendPoint([318.5809182,-166.41]).appendPoint([337.4927132,-169.4907901]).appendPoint([355.6918943,-157.1]).appendPoint([376,-157.1]).appendPoint([376,-159]).appendPoint([394,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function xlBoard_R_extrude_2_outline_fn(){
    return new CSG.Path2D([[400,-160],[400,-83]]).appendArc([395,-78],{"radius":5,"clockwise":false,"large":false}).appendPoint([379.923009,-78]).appendArc([376,-76.1],{"radius":5,"clockwise":false,"large":false}).appendPoint([362,-76.1]).appendPoint([362,-68.56]).appendArc([357,-63.56],{"radius":5,"clockwise":false,"large":false}).appendPoint([342.9937461,-63.56]).appendArc([338,-58.81],{"radius":5,"clockwise":false,"large":false}).appendPoint([318,-58.81]).appendArc([313.0062539,-63.56],{"radius":5,"clockwise":false,"large":false}).appendPoint([299,-63.56]).appendArc([294.4858556,-66.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([261,-66.41]).appendArc([256,-71.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([256,-167.41]).appendArc([261,-172.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([318.0954092,-172.41]).appendPoint([336.9217911,-175.4768761]).appendArc([340.5396424,-174.674939],{"radius":5,"clockwise":false,"large":false}).appendPoint([357.5405285,-163.1]).appendPoint([371.076991,-163.1]).appendArc([375,-165],{"radius":5,"clockwise":false,"large":false}).appendPoint([395,-165]).appendArc([400,-160],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function mcu_lip_clear_R_extrude_12_outline_fn(){
    return new CSG.Path2D([[259,-105.21],[263,-105.21]]).appendPoint([263,-73.61]).appendPoint([259,-73.61]).appendPoint([259,-105.21]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_R_extrude_12_outline_fn(){
    return new CSG.Path2D([[263.5,-167.41],[269.5,-167.41]]).appendPoint([269.5,-165.41]).appendPoint([263.5,-165.41]).appendPoint([263.5,-167.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function bottom_lip_rect_R_extrude_2_outline_fn(){
    return new CSG.Path2D([[263.5,-167.41],[269.5,-167.41]]).appendPoint([269.5,-165.41]).appendPoint([263.5,-165.41]).appendPoint([263.5,-167.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function inner_lip_R_extrude_12_outline_fn(){
    return new CSG.Path2D([[318,-167.41],[318,-134.06]]).appendPoint([319,-134.06]).appendPoint([319,-167.41]).appendPoint([318,-167.41]).close().innerToCAG()
.union(
    new CSG.Path2D([[319,-130.06],[319,-68.56]]).appendPoint([318,-68.56]).appendPoint([318,-130.06]).appendPoint([319,-130.06]).close().innerToCAG()
).union(
    new CSG.Path2D([[356,-158.1],[356,-81.1]]).appendPoint([357,-81.1]).appendPoint([357,-158.1]).appendPoint([356,-158.1]).close().innerToCAG()
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




                function _mcu_lip_wall_clear_R_case_fn() {
                    

                // creating part 0 of case _mcu_lip_wall_clear_R
                let _mcu_lip_wall_clear_R__part_0 = mcu_lip_clear_R_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _mcu_lip_wall_clear_R__part_0_bounds = _mcu_lip_wall_clear_R__part_0.getBounds();
                let _mcu_lip_wall_clear_R__part_0_x = _mcu_lip_wall_clear_R__part_0_bounds[0].x + (_mcu_lip_wall_clear_R__part_0_bounds[1].x - _mcu_lip_wall_clear_R__part_0_bounds[0].x) / 2
                let _mcu_lip_wall_clear_R__part_0_y = _mcu_lip_wall_clear_R__part_0_bounds[0].y + (_mcu_lip_wall_clear_R__part_0_bounds[1].y - _mcu_lip_wall_clear_R__part_0_bounds[0].y) / 2
                _mcu_lip_wall_clear_R__part_0 = translate([-_mcu_lip_wall_clear_R__part_0_x, -_mcu_lip_wall_clear_R__part_0_y, 0], _mcu_lip_wall_clear_R__part_0);
                _mcu_lip_wall_clear_R__part_0 = rotate([0,0,0], _mcu_lip_wall_clear_R__part_0);
                _mcu_lip_wall_clear_R__part_0 = translate([_mcu_lip_wall_clear_R__part_0_x, _mcu_lip_wall_clear_R__part_0_y, 0], _mcu_lip_wall_clear_R__part_0);

                _mcu_lip_wall_clear_R__part_0 = translate([0,0,0], _mcu_lip_wall_clear_R__part_0);
                let result = _mcu_lip_wall_clear_R__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_R_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch_R
                let _bottom_lip_notch_R__part_0 = bottom_lip_rect_R_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch_R__part_0_bounds = _bottom_lip_notch_R__part_0.getBounds();
                let _bottom_lip_notch_R__part_0_x = _bottom_lip_notch_R__part_0_bounds[0].x + (_bottom_lip_notch_R__part_0_bounds[1].x - _bottom_lip_notch_R__part_0_bounds[0].x) / 2
                let _bottom_lip_notch_R__part_0_y = _bottom_lip_notch_R__part_0_bounds[0].y + (_bottom_lip_notch_R__part_0_bounds[1].y - _bottom_lip_notch_R__part_0_bounds[0].y) / 2
                _bottom_lip_notch_R__part_0 = translate([-_bottom_lip_notch_R__part_0_x, -_bottom_lip_notch_R__part_0_y, 0], _bottom_lip_notch_R__part_0);
                _bottom_lip_notch_R__part_0 = rotate([0,0,0], _bottom_lip_notch_R__part_0);
                _bottom_lip_notch_R__part_0 = translate([_bottom_lip_notch_R__part_0_x, _bottom_lip_notch_R__part_0_y, 0], _bottom_lip_notch_R__part_0);

                _bottom_lip_notch_R__part_0 = translate([0,0,0], _bottom_lip_notch_R__part_0);
                let result = _bottom_lip_notch_R__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_lip_notch_raise_R_case_fn() {
                    

                // creating part 0 of case _bottom_lip_notch_raise_R
                let _bottom_lip_notch_raise_R__part_0 = bottom_lip_rect_R_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _bottom_lip_notch_raise_R__part_0_bounds = _bottom_lip_notch_raise_R__part_0.getBounds();
                let _bottom_lip_notch_raise_R__part_0_x = _bottom_lip_notch_raise_R__part_0_bounds[0].x + (_bottom_lip_notch_raise_R__part_0_bounds[1].x - _bottom_lip_notch_raise_R__part_0_bounds[0].x) / 2
                let _bottom_lip_notch_raise_R__part_0_y = _bottom_lip_notch_raise_R__part_0_bounds[0].y + (_bottom_lip_notch_raise_R__part_0_bounds[1].y - _bottom_lip_notch_raise_R__part_0_bounds[0].y) / 2
                _bottom_lip_notch_raise_R__part_0 = translate([-_bottom_lip_notch_raise_R__part_0_x, -_bottom_lip_notch_raise_R__part_0_y, 0], _bottom_lip_notch_raise_R__part_0);
                _bottom_lip_notch_raise_R__part_0 = rotate([0,0,0], _bottom_lip_notch_raise_R__part_0);
                _bottom_lip_notch_raise_R__part_0 = translate([_bottom_lip_notch_raise_R__part_0_x, _bottom_lip_notch_raise_R__part_0_y, 0], _bottom_lip_notch_raise_R__part_0);

                _bottom_lip_notch_raise_R__part_0 = translate([0,0,0], _bottom_lip_notch_raise_R__part_0);
                let result = _bottom_lip_notch_raise_R__part_0;
                
            
                    return result;
                }
            
            

                function _inner_lip_R_case_fn() {
                    

                // creating part 0 of case _inner_lip_R
                let _inner_lip_R__part_0 = inner_lip_R_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _inner_lip_R__part_0_bounds = _inner_lip_R__part_0.getBounds();
                let _inner_lip_R__part_0_x = _inner_lip_R__part_0_bounds[0].x + (_inner_lip_R__part_0_bounds[1].x - _inner_lip_R__part_0_bounds[0].x) / 2
                let _inner_lip_R__part_0_y = _inner_lip_R__part_0_bounds[0].y + (_inner_lip_R__part_0_bounds[1].y - _inner_lip_R__part_0_bounds[0].y) / 2
                _inner_lip_R__part_0 = translate([-_inner_lip_R__part_0_x, -_inner_lip_R__part_0_y, 0], _inner_lip_R__part_0);
                _inner_lip_R__part_0 = rotate([0,0,0], _inner_lip_R__part_0);
                _inner_lip_R__part_0 = translate([_inner_lip_R__part_0_x, _inner_lip_R__part_0_y, 0], _inner_lip_R__part_0);

                _inner_lip_R__part_0 = translate([0,0,0], _inner_lip_R__part_0);
                let result = _inner_lip_R__part_0;
                
            
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
            
            

                function bottom_case_R_case_fn() {
                    

                // creating part 0 of case bottom_case_R
                let bottom_case_R__part_0 = bottom_lip_wall_R_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_0_bounds = bottom_case_R__part_0.getBounds();
                let bottom_case_R__part_0_x = bottom_case_R__part_0_bounds[0].x + (bottom_case_R__part_0_bounds[1].x - bottom_case_R__part_0_bounds[0].x) / 2
                let bottom_case_R__part_0_y = bottom_case_R__part_0_bounds[0].y + (bottom_case_R__part_0_bounds[1].y - bottom_case_R__part_0_bounds[0].y) / 2
                bottom_case_R__part_0 = translate([-bottom_case_R__part_0_x, -bottom_case_R__part_0_y, 0], bottom_case_R__part_0);
                bottom_case_R__part_0 = rotate([0,0,0], bottom_case_R__part_0);
                bottom_case_R__part_0 = translate([bottom_case_R__part_0_x, bottom_case_R__part_0_y, 0], bottom_case_R__part_0);

                bottom_case_R__part_0 = translate([0,0,0], bottom_case_R__part_0);
                let result = bottom_case_R__part_0;
                
            

                // creating part 1 of case bottom_case_R
                let bottom_case_R__part_1 = bottom_lip_cut_R_extrude_12_outline_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_1_bounds = bottom_case_R__part_1.getBounds();
                let bottom_case_R__part_1_x = bottom_case_R__part_1_bounds[0].x + (bottom_case_R__part_1_bounds[1].x - bottom_case_R__part_1_bounds[0].x) / 2
                let bottom_case_R__part_1_y = bottom_case_R__part_1_bounds[0].y + (bottom_case_R__part_1_bounds[1].y - bottom_case_R__part_1_bounds[0].y) / 2
                bottom_case_R__part_1 = translate([-bottom_case_R__part_1_x, -bottom_case_R__part_1_y, 0], bottom_case_R__part_1);
                bottom_case_R__part_1 = rotate([0,0,0], bottom_case_R__part_1);
                bottom_case_R__part_1 = translate([bottom_case_R__part_1_x, bottom_case_R__part_1_y, 0], bottom_case_R__part_1);

                bottom_case_R__part_1 = translate([0,0,0], bottom_case_R__part_1);
                result = result.subtract(bottom_case_R__part_1);
                
            

                // creating part 2 of case bottom_case_R
                let bottom_case_R__part_2 = _mcu_lip_wall_clear_R_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_2_bounds = bottom_case_R__part_2.getBounds();
                let bottom_case_R__part_2_x = bottom_case_R__part_2_bounds[0].x + (bottom_case_R__part_2_bounds[1].x - bottom_case_R__part_2_bounds[0].x) / 2
                let bottom_case_R__part_2_y = bottom_case_R__part_2_bounds[0].y + (bottom_case_R__part_2_bounds[1].y - bottom_case_R__part_2_bounds[0].y) / 2
                bottom_case_R__part_2 = translate([-bottom_case_R__part_2_x, -bottom_case_R__part_2_y, 0], bottom_case_R__part_2);
                bottom_case_R__part_2 = rotate([0,0,0], bottom_case_R__part_2);
                bottom_case_R__part_2 = translate([bottom_case_R__part_2_x, bottom_case_R__part_2_y, 0], bottom_case_R__part_2);

                bottom_case_R__part_2 = translate([0,0,0], bottom_case_R__part_2);
                result = result.subtract(bottom_case_R__part_2);
                
            

                // creating part 3 of case bottom_case_R
                let bottom_case_R__part_3 = xlBoard_R_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_3_bounds = bottom_case_R__part_3.getBounds();
                let bottom_case_R__part_3_x = bottom_case_R__part_3_bounds[0].x + (bottom_case_R__part_3_bounds[1].x - bottom_case_R__part_3_bounds[0].x) / 2
                let bottom_case_R__part_3_y = bottom_case_R__part_3_bounds[0].y + (bottom_case_R__part_3_bounds[1].y - bottom_case_R__part_3_bounds[0].y) / 2
                bottom_case_R__part_3 = translate([-bottom_case_R__part_3_x, -bottom_case_R__part_3_y, 0], bottom_case_R__part_3);
                bottom_case_R__part_3 = rotate([0,0,0], bottom_case_R__part_3);
                bottom_case_R__part_3 = translate([bottom_case_R__part_3_x, bottom_case_R__part_3_y, 0], bottom_case_R__part_3);

                bottom_case_R__part_3 = translate([0,0,0], bottom_case_R__part_3);
                result = result.union(bottom_case_R__part_3);
                
            

                // creating part 4 of case bottom_case_R
                let bottom_case_R__part_4 = _bottom_lip_notch_R_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_4_bounds = bottom_case_R__part_4.getBounds();
                let bottom_case_R__part_4_x = bottom_case_R__part_4_bounds[0].x + (bottom_case_R__part_4_bounds[1].x - bottom_case_R__part_4_bounds[0].x) / 2
                let bottom_case_R__part_4_y = bottom_case_R__part_4_bounds[0].y + (bottom_case_R__part_4_bounds[1].y - bottom_case_R__part_4_bounds[0].y) / 2
                bottom_case_R__part_4 = translate([-bottom_case_R__part_4_x, -bottom_case_R__part_4_y, 0], bottom_case_R__part_4);
                bottom_case_R__part_4 = rotate([0,0,0], bottom_case_R__part_4);
                bottom_case_R__part_4 = translate([bottom_case_R__part_4_x, bottom_case_R__part_4_y, 0], bottom_case_R__part_4);

                bottom_case_R__part_4 = translate([0,0,0], bottom_case_R__part_4);
                result = result.subtract(bottom_case_R__part_4);
                
            

                // creating part 5 of case bottom_case_R
                let bottom_case_R__part_5 = _bottom_lip_notch_raise_R_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_5_bounds = bottom_case_R__part_5.getBounds();
                let bottom_case_R__part_5_x = bottom_case_R__part_5_bounds[0].x + (bottom_case_R__part_5_bounds[1].x - bottom_case_R__part_5_bounds[0].x) / 2
                let bottom_case_R__part_5_y = bottom_case_R__part_5_bounds[0].y + (bottom_case_R__part_5_bounds[1].y - bottom_case_R__part_5_bounds[0].y) / 2
                bottom_case_R__part_5 = translate([-bottom_case_R__part_5_x, -bottom_case_R__part_5_y, 0], bottom_case_R__part_5);
                bottom_case_R__part_5 = rotate([0,0,0], bottom_case_R__part_5);
                bottom_case_R__part_5 = translate([bottom_case_R__part_5_x, bottom_case_R__part_5_y, 0], bottom_case_R__part_5);

                bottom_case_R__part_5 = translate([0,0,0], bottom_case_R__part_5);
                result = result.union(bottom_case_R__part_5);
                
            

                // creating part 6 of case bottom_case_R
                let bottom_case_R__part_6 = _inner_lip_R_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_6_bounds = bottom_case_R__part_6.getBounds();
                let bottom_case_R__part_6_x = bottom_case_R__part_6_bounds[0].x + (bottom_case_R__part_6_bounds[1].x - bottom_case_R__part_6_bounds[0].x) / 2
                let bottom_case_R__part_6_y = bottom_case_R__part_6_bounds[0].y + (bottom_case_R__part_6_bounds[1].y - bottom_case_R__part_6_bounds[0].y) / 2
                bottom_case_R__part_6 = translate([-bottom_case_R__part_6_x, -bottom_case_R__part_6_y, 0], bottom_case_R__part_6);
                bottom_case_R__part_6 = rotate([0,0,0], bottom_case_R__part_6);
                bottom_case_R__part_6 = translate([bottom_case_R__part_6_x, bottom_case_R__part_6_y, 0], bottom_case_R__part_6);

                bottom_case_R__part_6 = translate([0,0,0], bottom_case_R__part_6);
                result = result.union(bottom_case_R__part_6);
                
            

                // creating part 7 of case bottom_case_R
                let bottom_case_R__part_7 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_7_bounds = bottom_case_R__part_7.getBounds();
                let bottom_case_R__part_7_x = bottom_case_R__part_7_bounds[0].x + (bottom_case_R__part_7_bounds[1].x - bottom_case_R__part_7_bounds[0].x) / 2
                let bottom_case_R__part_7_y = bottom_case_R__part_7_bounds[0].y + (bottom_case_R__part_7_bounds[1].y - bottom_case_R__part_7_bounds[0].y) / 2
                bottom_case_R__part_7 = translate([-bottom_case_R__part_7_x, -bottom_case_R__part_7_y, 0], bottom_case_R__part_7);
                bottom_case_R__part_7 = rotate([0,0,0], bottom_case_R__part_7);
                bottom_case_R__part_7 = translate([bottom_case_R__part_7_x, bottom_case_R__part_7_y, 0], bottom_case_R__part_7);

                bottom_case_R__part_7 = translate([0,0,0], bottom_case_R__part_7);
                result = result.subtract(bottom_case_R__part_7);
                
            

                // creating part 8 of case bottom_case_R
                let bottom_case_R__part_8 = _base_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case_R__part_8_bounds = bottom_case_R__part_8.getBounds();
                let bottom_case_R__part_8_x = bottom_case_R__part_8_bounds[0].x + (bottom_case_R__part_8_bounds[1].x - bottom_case_R__part_8_bounds[0].x) / 2
                let bottom_case_R__part_8_y = bottom_case_R__part_8_bounds[0].y + (bottom_case_R__part_8_bounds[1].y - bottom_case_R__part_8_bounds[0].y) / 2
                bottom_case_R__part_8 = translate([-bottom_case_R__part_8_x, -bottom_case_R__part_8_y, 0], bottom_case_R__part_8);
                bottom_case_R__part_8 = rotate([0,0,0], bottom_case_R__part_8);
                bottom_case_R__part_8 = translate([bottom_case_R__part_8_x, bottom_case_R__part_8_y, 0], bottom_case_R__part_8);

                bottom_case_R__part_8 = translate([0,0,0], bottom_case_R__part_8);
                result = result.subtract(bottom_case_R__part_8);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_R_case_fn();
            }

        