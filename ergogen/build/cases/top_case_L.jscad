function xlBoard_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[85,-160],[85,-83]]).appendArc([90,-78],{"radius":5,"clockwise":true,"large":false}).appendPoint([105.076991,-78]).appendArc([109,-76.1],{"radius":5,"clockwise":true,"large":false}).appendPoint([123,-76.1]).appendPoint([123,-68.56]).appendArc([128,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([142.0062539,-63.56]).appendArc([147,-58.81],{"radius":5,"clockwise":true,"large":false}).appendPoint([167,-58.81]).appendArc([171.9937461,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([186,-63.56]).appendArc([190.5141444,-66.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([224,-66.41]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-167.41]).appendArc([224,-172.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([166.9045908,-172.41]).appendPoint([148.0782089,-175.4768761]).appendArc([144.4603576,-174.674939],{"radius":5,"clockwise":true,"large":false}).appendPoint([127.4594715,-163.1]).appendPoint([113.923009,-163.1]).appendArc([110,-165],{"radius":5,"clockwise":true,"large":false}).appendPoint([90,-165]).appendArc([85,-160],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function pcb_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[90,-160],[90,-83]]).appendPoint([109,-83]).appendPoint([109,-81.1]).appendPoint([128,-81.1]).appendPoint([128,-68.56]).appendPoint([147,-68.56]).appendPoint([147,-63.81]).appendPoint([167,-63.81]).appendPoint([167,-68.56]).appendPoint([186,-68.56]).appendPoint([186,-71.41]).appendPoint([224,-71.41]).appendPoint([224,-167.41]).appendPoint([166.5,-167.41]).appendPoint([147.2742905,-170.5419278]).appendPoint([129,-158.1]).appendPoint([110,-158.1]).appendPoint([110,-160]).appendPoint([90,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function usb_wall_L_extrude_22_outline_fn(){
    return new CSG.Path2D([[221,-71.41],[221,-66.41]]).appendPoint([207,-66.41]).appendPoint([207,-71.41]).appendPoint([221,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 22] });
}


function usb_wall_L_extrude_11_outline_fn(){
    return new CSG.Path2D([[221,-71.41],[221,-66.41]]).appendPoint([207,-66.41]).appendPoint([207,-71.41]).appendPoint([221,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 11] });
}


function button_wall_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[146.2922217,-169.8732928],[144.0817173,-174.4171443]]).appendPoint([127.4594715,-163.1]).appendPoint([127.4375,-163.1]).appendPoint([128.975,-158.1]).appendPoint([129,-158.1]).appendPoint([146.2922217,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function button_wall_L_extrude_10_outline_fn(){
    return new CSG.Path2D([[146.2922217,-169.8732928],[144.0817173,-174.4171443]]).appendPoint([127.4594715,-163.1]).appendPoint([127.4375,-163.1]).appendPoint([128.975,-158.1]).appendPoint([129,-158.1]).appendPoint([146.2922217,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function cover_L_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[205,-66.41],[224,-66.41]]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-110.41]).appendPoint([206,-110.41]).appendArc([205,-109.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([205,-106.01]).appendArc([205.0172551,-105.8250339],{"radius":1,"clockwise":true,"large":false}).appendArc([205,-105.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([205,-66.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function cover_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[205,-66.41],[224,-66.41]]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-110.41]).appendPoint([206,-110.41]).appendArc([205,-109.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([205,-106.01]).appendArc([205.0172551,-105.8250339],{"radius":1,"clockwise":true,"large":false}).appendArc([205,-105.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([205,-66.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function wall_insert_L_extrude_3_outline_fn(){
    return CAG.circle({"center":[262.25,-169.91],"radius":1.25})
.union(
    CAG.circle({"center":[394,-162.5],"radius":1.25})
).union(
    CAG.circle({"center":[261,-68.91],"radius":1.25})
).union(
    CAG.circle({"center":[394,-80.5],"radius":1.25})
).union(
    CAG.circle({"center":[222.75,-169.91],"radius":1.25})
).union(
    CAG.circle({"center":[91,-162.5],"radius":1.25})
).union(
    CAG.circle({"center":[224,-68.91],"radius":1.25})
).union(
    CAG.circle({"center":[91,-80.5],"radius":1.25})
).extrude({ offset: [0, 0, 3] });
}




                function _outerWall_L_case_fn() {
                    

                // creating part 0 of case _outerWall_L
                let _outerWall_L__part_0 = xlBoard_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _outerWall_L__part_0_bounds = _outerWall_L__part_0.getBounds();
                let _outerWall_L__part_0_x = _outerWall_L__part_0_bounds[0].x + (_outerWall_L__part_0_bounds[1].x - _outerWall_L__part_0_bounds[0].x) / 2
                let _outerWall_L__part_0_y = _outerWall_L__part_0_bounds[0].y + (_outerWall_L__part_0_bounds[1].y - _outerWall_L__part_0_bounds[0].y) / 2
                _outerWall_L__part_0 = translate([-_outerWall_L__part_0_x, -_outerWall_L__part_0_y, 0], _outerWall_L__part_0);
                _outerWall_L__part_0 = rotate([0,0,0], _outerWall_L__part_0);
                _outerWall_L__part_0 = translate([_outerWall_L__part_0_x, _outerWall_L__part_0_y, 0], _outerWall_L__part_0);

                _outerWall_L__part_0 = translate([0,0,0], _outerWall_L__part_0);
                let result = _outerWall_L__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_L_case_fn() {
                    

                // creating part 0 of case _innerWall_L
                let _innerWall_L__part_0 = pcb_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _innerWall_L__part_0_bounds = _innerWall_L__part_0.getBounds();
                let _innerWall_L__part_0_x = _innerWall_L__part_0_bounds[0].x + (_innerWall_L__part_0_bounds[1].x - _innerWall_L__part_0_bounds[0].x) / 2
                let _innerWall_L__part_0_y = _innerWall_L__part_0_bounds[0].y + (_innerWall_L__part_0_bounds[1].y - _innerWall_L__part_0_bounds[0].y) / 2
                _innerWall_L__part_0 = translate([-_innerWall_L__part_0_x, -_innerWall_L__part_0_y, 0], _innerWall_L__part_0);
                _innerWall_L__part_0 = rotate([0,0,0], _innerWall_L__part_0);
                _innerWall_L__part_0 = translate([_innerWall_L__part_0_x, _innerWall_L__part_0_y, 0], _innerWall_L__part_0);

                _innerWall_L__part_0 = translate([0,0,0], _innerWall_L__part_0);
                let result = _innerWall_L__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_cut_L_case_fn() {
                    

                // creating part 0 of case _usb_access_cut_L
                let _usb_access_cut_L__part_0 = usb_wall_L_extrude_22_outline_fn();

                // make sure that rotations are relative
                let _usb_access_cut_L__part_0_bounds = _usb_access_cut_L__part_0.getBounds();
                let _usb_access_cut_L__part_0_x = _usb_access_cut_L__part_0_bounds[0].x + (_usb_access_cut_L__part_0_bounds[1].x - _usb_access_cut_L__part_0_bounds[0].x) / 2
                let _usb_access_cut_L__part_0_y = _usb_access_cut_L__part_0_bounds[0].y + (_usb_access_cut_L__part_0_bounds[1].y - _usb_access_cut_L__part_0_bounds[0].y) / 2
                _usb_access_cut_L__part_0 = translate([-_usb_access_cut_L__part_0_x, -_usb_access_cut_L__part_0_y, 0], _usb_access_cut_L__part_0);
                _usb_access_cut_L__part_0 = rotate([0,0,0], _usb_access_cut_L__part_0);
                _usb_access_cut_L__part_0 = translate([_usb_access_cut_L__part_0_x, _usb_access_cut_L__part_0_y, 0], _usb_access_cut_L__part_0);

                _usb_access_cut_L__part_0 = translate([0,0,0], _usb_access_cut_L__part_0);
                let result = _usb_access_cut_L__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_fill_L_case_fn() {
                    

                // creating part 0 of case _usb_access_fill_L
                let _usb_access_fill_L__part_0 = usb_wall_L_extrude_11_outline_fn();

                // make sure that rotations are relative
                let _usb_access_fill_L__part_0_bounds = _usb_access_fill_L__part_0.getBounds();
                let _usb_access_fill_L__part_0_x = _usb_access_fill_L__part_0_bounds[0].x + (_usb_access_fill_L__part_0_bounds[1].x - _usb_access_fill_L__part_0_bounds[0].x) / 2
                let _usb_access_fill_L__part_0_y = _usb_access_fill_L__part_0_bounds[0].y + (_usb_access_fill_L__part_0_bounds[1].y - _usb_access_fill_L__part_0_bounds[0].y) / 2
                _usb_access_fill_L__part_0 = translate([-_usb_access_fill_L__part_0_x, -_usb_access_fill_L__part_0_y, 0], _usb_access_fill_L__part_0);
                _usb_access_fill_L__part_0 = rotate([0,0,0], _usb_access_fill_L__part_0);
                _usb_access_fill_L__part_0 = translate([_usb_access_fill_L__part_0_x, _usb_access_fill_L__part_0_y, 0], _usb_access_fill_L__part_0);

                _usb_access_fill_L__part_0 = translate([0,0,0], _usb_access_fill_L__part_0);
                let result = _usb_access_fill_L__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_cut_L_case_fn() {
                    

                // creating part 0 of case _button_access_cut_L
                let _button_access_cut_L__part_0 = button_wall_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _button_access_cut_L__part_0_bounds = _button_access_cut_L__part_0.getBounds();
                let _button_access_cut_L__part_0_x = _button_access_cut_L__part_0_bounds[0].x + (_button_access_cut_L__part_0_bounds[1].x - _button_access_cut_L__part_0_bounds[0].x) / 2
                let _button_access_cut_L__part_0_y = _button_access_cut_L__part_0_bounds[0].y + (_button_access_cut_L__part_0_bounds[1].y - _button_access_cut_L__part_0_bounds[0].y) / 2
                _button_access_cut_L__part_0 = translate([-_button_access_cut_L__part_0_x, -_button_access_cut_L__part_0_y, 0], _button_access_cut_L__part_0);
                _button_access_cut_L__part_0 = rotate([0,0,0], _button_access_cut_L__part_0);
                _button_access_cut_L__part_0 = translate([_button_access_cut_L__part_0_x, _button_access_cut_L__part_0_y, 0], _button_access_cut_L__part_0);

                _button_access_cut_L__part_0 = translate([0,0,0], _button_access_cut_L__part_0);
                let result = _button_access_cut_L__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_fill_L_case_fn() {
                    

                // creating part 0 of case _button_access_fill_L
                let _button_access_fill_L__part_0 = button_wall_L_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _button_access_fill_L__part_0_bounds = _button_access_fill_L__part_0.getBounds();
                let _button_access_fill_L__part_0_x = _button_access_fill_L__part_0_bounds[0].x + (_button_access_fill_L__part_0_bounds[1].x - _button_access_fill_L__part_0_bounds[0].x) / 2
                let _button_access_fill_L__part_0_y = _button_access_fill_L__part_0_bounds[0].y + (_button_access_fill_L__part_0_bounds[1].y - _button_access_fill_L__part_0_bounds[0].y) / 2
                _button_access_fill_L__part_0 = translate([-_button_access_fill_L__part_0_x, -_button_access_fill_L__part_0_y, 0], _button_access_fill_L__part_0);
                _button_access_fill_L__part_0 = rotate([0,0,0], _button_access_fill_L__part_0);
                _button_access_fill_L__part_0 = translate([_button_access_fill_L__part_0_x, _button_access_fill_L__part_0_y, 0], _button_access_fill_L__part_0);

                _button_access_fill_L__part_0 = translate([0,0,0], _button_access_fill_L__part_0);
                let result = _button_access_fill_L__part_0;
                
            
                    return result;
                }
            
            

                function _cover_cap_L_case_fn() {
                    

                // creating part 0 of case _cover_cap_L
                let _cover_cap_L__part_0 = cover_L_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_L__part_0_bounds = _cover_cap_L__part_0.getBounds();
                let _cover_cap_L__part_0_x = _cover_cap_L__part_0_bounds[0].x + (_cover_cap_L__part_0_bounds[1].x - _cover_cap_L__part_0_bounds[0].x) / 2
                let _cover_cap_L__part_0_y = _cover_cap_L__part_0_bounds[0].y + (_cover_cap_L__part_0_bounds[1].y - _cover_cap_L__part_0_bounds[0].y) / 2
                _cover_cap_L__part_0 = translate([-_cover_cap_L__part_0_x, -_cover_cap_L__part_0_y, 0], _cover_cap_L__part_0);
                _cover_cap_L__part_0 = rotate([0,0,0], _cover_cap_L__part_0);
                _cover_cap_L__part_0 = translate([_cover_cap_L__part_0_x, _cover_cap_L__part_0_y, 0], _cover_cap_L__part_0);

                _cover_cap_L__part_0 = translate([0,0,0], _cover_cap_L__part_0);
                let result = _cover_cap_L__part_0;
                
            

                // creating part 1 of case _cover_cap_L
                let _cover_cap_L__part_1 = cover_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_L__part_1_bounds = _cover_cap_L__part_1.getBounds();
                let _cover_cap_L__part_1_x = _cover_cap_L__part_1_bounds[0].x + (_cover_cap_L__part_1_bounds[1].x - _cover_cap_L__part_1_bounds[0].x) / 2
                let _cover_cap_L__part_1_y = _cover_cap_L__part_1_bounds[0].y + (_cover_cap_L__part_1_bounds[1].y - _cover_cap_L__part_1_bounds[0].y) / 2
                _cover_cap_L__part_1 = translate([-_cover_cap_L__part_1_x, -_cover_cap_L__part_1_y, 0], _cover_cap_L__part_1);
                _cover_cap_L__part_1 = rotate([0,0,0], _cover_cap_L__part_1);
                _cover_cap_L__part_1 = translate([_cover_cap_L__part_1_x, _cover_cap_L__part_1_y, 0], _cover_cap_L__part_1);

                _cover_cap_L__part_1 = translate([0,0,0], _cover_cap_L__part_1);
                result = result.subtract(_cover_cap_L__part_1);
                
            
                    return result;
                }
            
            

                function _wall_insert_L_case_fn() {
                    

                // creating part 0 of case _wall_insert_L
                let _wall_insert_L__part_0 = wall_insert_L_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _wall_insert_L__part_0_bounds = _wall_insert_L__part_0.getBounds();
                let _wall_insert_L__part_0_x = _wall_insert_L__part_0_bounds[0].x + (_wall_insert_L__part_0_bounds[1].x - _wall_insert_L__part_0_bounds[0].x) / 2
                let _wall_insert_L__part_0_y = _wall_insert_L__part_0_bounds[0].y + (_wall_insert_L__part_0_bounds[1].y - _wall_insert_L__part_0_bounds[0].y) / 2
                _wall_insert_L__part_0 = translate([-_wall_insert_L__part_0_x, -_wall_insert_L__part_0_y, 0], _wall_insert_L__part_0);
                _wall_insert_L__part_0 = rotate([0,0,0], _wall_insert_L__part_0);
                _wall_insert_L__part_0 = translate([_wall_insert_L__part_0_x, _wall_insert_L__part_0_y, 0], _wall_insert_L__part_0);

                _wall_insert_L__part_0 = translate([0,0,0], _wall_insert_L__part_0);
                let result = _wall_insert_L__part_0;
                
            
                    return result;
                }
            
            

                function top_case_L_case_fn() {
                    

                // creating part 0 of case top_case_L
                let top_case_L__part_0 = _outerWall_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_0_bounds = top_case_L__part_0.getBounds();
                let top_case_L__part_0_x = top_case_L__part_0_bounds[0].x + (top_case_L__part_0_bounds[1].x - top_case_L__part_0_bounds[0].x) / 2
                let top_case_L__part_0_y = top_case_L__part_0_bounds[0].y + (top_case_L__part_0_bounds[1].y - top_case_L__part_0_bounds[0].y) / 2
                top_case_L__part_0 = translate([-top_case_L__part_0_x, -top_case_L__part_0_y, 0], top_case_L__part_0);
                top_case_L__part_0 = rotate([0,0,0], top_case_L__part_0);
                top_case_L__part_0 = translate([top_case_L__part_0_x, top_case_L__part_0_y, 0], top_case_L__part_0);

                top_case_L__part_0 = translate([0,0,0], top_case_L__part_0);
                let result = top_case_L__part_0;
                
            

                // creating part 1 of case top_case_L
                let top_case_L__part_1 = _innerWall_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_1_bounds = top_case_L__part_1.getBounds();
                let top_case_L__part_1_x = top_case_L__part_1_bounds[0].x + (top_case_L__part_1_bounds[1].x - top_case_L__part_1_bounds[0].x) / 2
                let top_case_L__part_1_y = top_case_L__part_1_bounds[0].y + (top_case_L__part_1_bounds[1].y - top_case_L__part_1_bounds[0].y) / 2
                top_case_L__part_1 = translate([-top_case_L__part_1_x, -top_case_L__part_1_y, 0], top_case_L__part_1);
                top_case_L__part_1 = rotate([0,0,0], top_case_L__part_1);
                top_case_L__part_1 = translate([top_case_L__part_1_x, top_case_L__part_1_y, 0], top_case_L__part_1);

                top_case_L__part_1 = translate([0,0,0], top_case_L__part_1);
                result = result.subtract(top_case_L__part_1);
                
            

                // creating part 2 of case top_case_L
                let top_case_L__part_2 = _usb_access_cut_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_2_bounds = top_case_L__part_2.getBounds();
                let top_case_L__part_2_x = top_case_L__part_2_bounds[0].x + (top_case_L__part_2_bounds[1].x - top_case_L__part_2_bounds[0].x) / 2
                let top_case_L__part_2_y = top_case_L__part_2_bounds[0].y + (top_case_L__part_2_bounds[1].y - top_case_L__part_2_bounds[0].y) / 2
                top_case_L__part_2 = translate([-top_case_L__part_2_x, -top_case_L__part_2_y, 0], top_case_L__part_2);
                top_case_L__part_2 = rotate([0,0,0], top_case_L__part_2);
                top_case_L__part_2 = translate([top_case_L__part_2_x, top_case_L__part_2_y, 0], top_case_L__part_2);

                top_case_L__part_2 = translate([0,0,0], top_case_L__part_2);
                result = result.subtract(top_case_L__part_2);
                
            

                // creating part 3 of case top_case_L
                let top_case_L__part_3 = _usb_access_fill_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_3_bounds = top_case_L__part_3.getBounds();
                let top_case_L__part_3_x = top_case_L__part_3_bounds[0].x + (top_case_L__part_3_bounds[1].x - top_case_L__part_3_bounds[0].x) / 2
                let top_case_L__part_3_y = top_case_L__part_3_bounds[0].y + (top_case_L__part_3_bounds[1].y - top_case_L__part_3_bounds[0].y) / 2
                top_case_L__part_3 = translate([-top_case_L__part_3_x, -top_case_L__part_3_y, 0], top_case_L__part_3);
                top_case_L__part_3 = rotate([0,0,0], top_case_L__part_3);
                top_case_L__part_3 = translate([top_case_L__part_3_x, top_case_L__part_3_y, 0], top_case_L__part_3);

                top_case_L__part_3 = translate([0,0,0], top_case_L__part_3);
                result = result.union(top_case_L__part_3);
                
            

                // creating part 4 of case top_case_L
                let top_case_L__part_4 = _button_access_cut_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_4_bounds = top_case_L__part_4.getBounds();
                let top_case_L__part_4_x = top_case_L__part_4_bounds[0].x + (top_case_L__part_4_bounds[1].x - top_case_L__part_4_bounds[0].x) / 2
                let top_case_L__part_4_y = top_case_L__part_4_bounds[0].y + (top_case_L__part_4_bounds[1].y - top_case_L__part_4_bounds[0].y) / 2
                top_case_L__part_4 = translate([-top_case_L__part_4_x, -top_case_L__part_4_y, 0], top_case_L__part_4);
                top_case_L__part_4 = rotate([0,0,0], top_case_L__part_4);
                top_case_L__part_4 = translate([top_case_L__part_4_x, top_case_L__part_4_y, 0], top_case_L__part_4);

                top_case_L__part_4 = translate([0,0,0], top_case_L__part_4);
                result = result.subtract(top_case_L__part_4);
                
            

                // creating part 5 of case top_case_L
                let top_case_L__part_5 = _button_access_fill_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_5_bounds = top_case_L__part_5.getBounds();
                let top_case_L__part_5_x = top_case_L__part_5_bounds[0].x + (top_case_L__part_5_bounds[1].x - top_case_L__part_5_bounds[0].x) / 2
                let top_case_L__part_5_y = top_case_L__part_5_bounds[0].y + (top_case_L__part_5_bounds[1].y - top_case_L__part_5_bounds[0].y) / 2
                top_case_L__part_5 = translate([-top_case_L__part_5_x, -top_case_L__part_5_y, 0], top_case_L__part_5);
                top_case_L__part_5 = rotate([0,0,0], top_case_L__part_5);
                top_case_L__part_5 = translate([top_case_L__part_5_x, top_case_L__part_5_y, 0], top_case_L__part_5);

                top_case_L__part_5 = translate([0,0,0], top_case_L__part_5);
                result = result.union(top_case_L__part_5);
                
            

                // creating part 6 of case top_case_L
                let top_case_L__part_6 = _cover_cap_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_6_bounds = top_case_L__part_6.getBounds();
                let top_case_L__part_6_x = top_case_L__part_6_bounds[0].x + (top_case_L__part_6_bounds[1].x - top_case_L__part_6_bounds[0].x) / 2
                let top_case_L__part_6_y = top_case_L__part_6_bounds[0].y + (top_case_L__part_6_bounds[1].y - top_case_L__part_6_bounds[0].y) / 2
                top_case_L__part_6 = translate([-top_case_L__part_6_x, -top_case_L__part_6_y, 0], top_case_L__part_6);
                top_case_L__part_6 = rotate([0,0,0], top_case_L__part_6);
                top_case_L__part_6 = translate([top_case_L__part_6_x, top_case_L__part_6_y, 0], top_case_L__part_6);

                top_case_L__part_6 = translate([0,0,0], top_case_L__part_6);
                result = result.union(top_case_L__part_6);
                
            

                // creating part 7 of case top_case_L
                let top_case_L__part_7 = _wall_insert_L_case_fn();

                // make sure that rotations are relative
                let top_case_L__part_7_bounds = top_case_L__part_7.getBounds();
                let top_case_L__part_7_x = top_case_L__part_7_bounds[0].x + (top_case_L__part_7_bounds[1].x - top_case_L__part_7_bounds[0].x) / 2
                let top_case_L__part_7_y = top_case_L__part_7_bounds[0].y + (top_case_L__part_7_bounds[1].y - top_case_L__part_7_bounds[0].y) / 2
                top_case_L__part_7 = translate([-top_case_L__part_7_x, -top_case_L__part_7_y, 0], top_case_L__part_7);
                top_case_L__part_7 = rotate([0,0,0], top_case_L__part_7);
                top_case_L__part_7 = translate([top_case_L__part_7_x, top_case_L__part_7_y, 0], top_case_L__part_7);

                top_case_L__part_7 = translate([0,0,0], top_case_L__part_7);
                result = result.subtract(top_case_L__part_7);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_case_L_case_fn();
            }

        