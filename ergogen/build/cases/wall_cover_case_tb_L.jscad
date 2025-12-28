function xlBoard_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[85,-160],[85,-83]]).appendArc([90,-78],{"radius":5,"clockwise":true,"large":false}).appendPoint([105.076991,-78]).appendArc([109,-76.1],{"radius":5,"clockwise":true,"large":false}).appendPoint([123,-76.1]).appendPoint([123,-68.56]).appendArc([128,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([142.0062539,-63.56]).appendArc([147,-58.81],{"radius":5,"clockwise":true,"large":false}).appendPoint([167,-58.81]).appendArc([171.9937461,-63.56],{"radius":5,"clockwise":true,"large":false}).appendPoint([186,-63.56]).appendArc([190.5141444,-66.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([224,-66.41]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-167.41]).appendArc([224,-172.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([166.9045908,-172.41]).appendPoint([148.0782089,-175.4768761]).appendArc([144.4603576,-174.674939],{"radius":5,"clockwise":true,"large":false}).appendPoint([127.4594715,-163.1]).appendPoint([113.923009,-163.1]).appendArc([110,-165],{"radius":5,"clockwise":true,"large":false}).appendPoint([90,-165]).appendArc([85,-160],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function pcb_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[90,-160],[90,-83]]).appendPoint([109,-83]).appendPoint([109,-81.1]).appendPoint([128,-81.1]).appendPoint([128,-68.56]).appendPoint([147,-68.56]).appendPoint([147,-63.81]).appendPoint([167,-63.81]).appendPoint([167,-68.56]).appendPoint([186,-68.56]).appendPoint([186,-71.41]).appendPoint([224,-71.41]).appendPoint([224,-167.41]).appendPoint([166.5,-167.41]).appendPoint([147.2742905,-170.5419278]).appendPoint([129,-158.1]).appendPoint([110,-158.1]).appendPoint([110,-160]).appendPoint([90,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function usb_wall_L_extrude_22_3_outline_fn(){
    return new CSG.Path2D([[221,-71.41],[221,-66.41]]).appendPoint([207,-66.41]).appendPoint([207,-71.41]).appendPoint([221,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 22.3] });
}


function usb_wall_L_extrude_13_outline_fn(){
    return new CSG.Path2D([[221,-71.41],[221,-66.41]]).appendPoint([207,-66.41]).appendPoint([207,-71.41]).appendPoint([221,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 13] });
}


function button_wall_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[146.2922217,-169.8732928],[144.0817173,-174.4171443]]).appendPoint([127.4594715,-163.1]).appendPoint([127.4375,-163.1]).appendPoint([128.975,-158.1]).appendPoint([129,-158.1]).appendPoint([146.2922217,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function button_wall_L_extrude_12_outline_fn(){
    return new CSG.Path2D([[146.2922217,-169.8732928],[144.0817173,-174.4171443]]).appendPoint([127.4594715,-163.1]).appendPoint([127.4375,-163.1]).appendPoint([128.975,-158.1]).appendPoint([129,-158.1]).appendPoint([146.2922217,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function trackball_wall_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[224,-124.41],[229,-124.41]]).appendPoint([229,-107.41]).appendPoint([224,-107.41]).appendPoint([224,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function trackball_wall_L_extrude_17_3_outline_fn(){
    return new CSG.Path2D([[224,-124.41],[229,-124.41]]).appendPoint([229,-107.41]).appendPoint([224,-107.41]).appendPoint([224,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 17.3] });
}


function cover_tb_L_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[205,-66.41],[224,-66.41]]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-128.41]).appendPoint([206,-128.41]).appendArc([205,-127.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([205,-124.01]).appendArc([205.0172551,-123.8250339],{"radius":1,"clockwise":true,"large":false}).appendArc([205,-123.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([205,-66.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function cover_tb_L_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[205,-66.41],[224,-66.41]]).appendArc([229,-71.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([229,-128.41]).appendPoint([206,-128.41]).appendArc([205,-127.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([205,-124.01]).appendArc([205.0172551,-123.8250339],{"radius":1,"clockwise":true,"large":false}).appendArc([205,-123.41],{"radius":5,"clockwise":true,"large":false}).appendPoint([205,-66.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function cover_tb_cut_L_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[207.85,-123.06],[218.15,-123.06]]).appendArc([220.15,-121.06],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.15,-110.76]).appendArc([218.15,-108.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.85,-108.76]).appendArc([205.85,-110.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.85,-121.06]).appendArc([207.85,-123.06],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function trackball_screw_holes_L_extrude_28_3_outline_fn(){
    return CAG.circle({"center":[266.5,-125.71],"radius":1.35})
.union(
    CAG.circle({"center":[277.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[266.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[277.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[218.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[207.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[218.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[207.5,-106.11],"radius":1.35})
).extrude({ offset: [0, 0, 28.3] });
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
                let _usb_access_cut_L__part_0 = usb_wall_L_extrude_22_3_outline_fn();

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
                let _usb_access_fill_L__part_0 = usb_wall_L_extrude_13_outline_fn();

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
                let _button_access_fill_L__part_0 = button_wall_L_extrude_12_outline_fn();

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
            
            

                function _trackball_wall_cut_L_case_fn() {
                    

                // creating part 0 of case _trackball_wall_cut_L
                let _trackball_wall_cut_L__part_0 = trackball_wall_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_cut_L__part_0_bounds = _trackball_wall_cut_L__part_0.getBounds();
                let _trackball_wall_cut_L__part_0_x = _trackball_wall_cut_L__part_0_bounds[0].x + (_trackball_wall_cut_L__part_0_bounds[1].x - _trackball_wall_cut_L__part_0_bounds[0].x) / 2
                let _trackball_wall_cut_L__part_0_y = _trackball_wall_cut_L__part_0_bounds[0].y + (_trackball_wall_cut_L__part_0_bounds[1].y - _trackball_wall_cut_L__part_0_bounds[0].y) / 2
                _trackball_wall_cut_L__part_0 = translate([-_trackball_wall_cut_L__part_0_x, -_trackball_wall_cut_L__part_0_y, 0], _trackball_wall_cut_L__part_0);
                _trackball_wall_cut_L__part_0 = rotate([0,0,0], _trackball_wall_cut_L__part_0);
                _trackball_wall_cut_L__part_0 = translate([_trackball_wall_cut_L__part_0_x, _trackball_wall_cut_L__part_0_y, 0], _trackball_wall_cut_L__part_0);

                _trackball_wall_cut_L__part_0 = translate([0,0,0], _trackball_wall_cut_L__part_0);
                let result = _trackball_wall_cut_L__part_0;
                
            
                    return result;
                }
            
            

                function _trackball_wall_fill_L_case_fn() {
                    

                // creating part 0 of case _trackball_wall_fill_L
                let _trackball_wall_fill_L__part_0 = trackball_wall_L_extrude_17_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_fill_L__part_0_bounds = _trackball_wall_fill_L__part_0.getBounds();
                let _trackball_wall_fill_L__part_0_x = _trackball_wall_fill_L__part_0_bounds[0].x + (_trackball_wall_fill_L__part_0_bounds[1].x - _trackball_wall_fill_L__part_0_bounds[0].x) / 2
                let _trackball_wall_fill_L__part_0_y = _trackball_wall_fill_L__part_0_bounds[0].y + (_trackball_wall_fill_L__part_0_bounds[1].y - _trackball_wall_fill_L__part_0_bounds[0].y) / 2
                _trackball_wall_fill_L__part_0 = translate([-_trackball_wall_fill_L__part_0_x, -_trackball_wall_fill_L__part_0_y, 0], _trackball_wall_fill_L__part_0);
                _trackball_wall_fill_L__part_0 = rotate([0,0,0], _trackball_wall_fill_L__part_0);
                _trackball_wall_fill_L__part_0 = translate([_trackball_wall_fill_L__part_0_x, _trackball_wall_fill_L__part_0_y, 0], _trackball_wall_fill_L__part_0);

                _trackball_wall_fill_L__part_0 = translate([0,0,0], _trackball_wall_fill_L__part_0);
                let result = _trackball_wall_fill_L__part_0;
                
            
                    return result;
                }
            
            

                function _cover_cap_tb_L_case_fn() {
                    

                // creating part 0 of case _cover_cap_tb_L
                let _cover_cap_tb_L__part_0 = cover_tb_L_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_L__part_0_bounds = _cover_cap_tb_L__part_0.getBounds();
                let _cover_cap_tb_L__part_0_x = _cover_cap_tb_L__part_0_bounds[0].x + (_cover_cap_tb_L__part_0_bounds[1].x - _cover_cap_tb_L__part_0_bounds[0].x) / 2
                let _cover_cap_tb_L__part_0_y = _cover_cap_tb_L__part_0_bounds[0].y + (_cover_cap_tb_L__part_0_bounds[1].y - _cover_cap_tb_L__part_0_bounds[0].y) / 2
                _cover_cap_tb_L__part_0 = translate([-_cover_cap_tb_L__part_0_x, -_cover_cap_tb_L__part_0_y, 0], _cover_cap_tb_L__part_0);
                _cover_cap_tb_L__part_0 = rotate([0,0,0], _cover_cap_tb_L__part_0);
                _cover_cap_tb_L__part_0 = translate([_cover_cap_tb_L__part_0_x, _cover_cap_tb_L__part_0_y, 0], _cover_cap_tb_L__part_0);

                _cover_cap_tb_L__part_0 = translate([0,0,0], _cover_cap_tb_L__part_0);
                let result = _cover_cap_tb_L__part_0;
                
            

                // creating part 1 of case _cover_cap_tb_L
                let _cover_cap_tb_L__part_1 = cover_tb_L_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_L__part_1_bounds = _cover_cap_tb_L__part_1.getBounds();
                let _cover_cap_tb_L__part_1_x = _cover_cap_tb_L__part_1_bounds[0].x + (_cover_cap_tb_L__part_1_bounds[1].x - _cover_cap_tb_L__part_1_bounds[0].x) / 2
                let _cover_cap_tb_L__part_1_y = _cover_cap_tb_L__part_1_bounds[0].y + (_cover_cap_tb_L__part_1_bounds[1].y - _cover_cap_tb_L__part_1_bounds[0].y) / 2
                _cover_cap_tb_L__part_1 = translate([-_cover_cap_tb_L__part_1_x, -_cover_cap_tb_L__part_1_y, 0], _cover_cap_tb_L__part_1);
                _cover_cap_tb_L__part_1 = rotate([0,0,0], _cover_cap_tb_L__part_1);
                _cover_cap_tb_L__part_1 = translate([_cover_cap_tb_L__part_1_x, _cover_cap_tb_L__part_1_y, 0], _cover_cap_tb_L__part_1);

                _cover_cap_tb_L__part_1 = translate([0,0,0], _cover_cap_tb_L__part_1);
                result = result.subtract(_cover_cap_tb_L__part_1);
                
            

                // creating part 2 of case _cover_cap_tb_L
                let _cover_cap_tb_L__part_2 = cover_tb_cut_L_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_L__part_2_bounds = _cover_cap_tb_L__part_2.getBounds();
                let _cover_cap_tb_L__part_2_x = _cover_cap_tb_L__part_2_bounds[0].x + (_cover_cap_tb_L__part_2_bounds[1].x - _cover_cap_tb_L__part_2_bounds[0].x) / 2
                let _cover_cap_tb_L__part_2_y = _cover_cap_tb_L__part_2_bounds[0].y + (_cover_cap_tb_L__part_2_bounds[1].y - _cover_cap_tb_L__part_2_bounds[0].y) / 2
                _cover_cap_tb_L__part_2 = translate([-_cover_cap_tb_L__part_2_x, -_cover_cap_tb_L__part_2_y, 0], _cover_cap_tb_L__part_2);
                _cover_cap_tb_L__part_2 = rotate([0,0,0], _cover_cap_tb_L__part_2);
                _cover_cap_tb_L__part_2 = translate([_cover_cap_tb_L__part_2_x, _cover_cap_tb_L__part_2_y, 0], _cover_cap_tb_L__part_2);

                _cover_cap_tb_L__part_2 = translate([0,0,0], _cover_cap_tb_L__part_2);
                result = result.subtract(_cover_cap_tb_L__part_2);
                
            

                // creating part 3 of case _cover_cap_tb_L
                let _cover_cap_tb_L__part_3 = trackball_screw_holes_L_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_L__part_3_bounds = _cover_cap_tb_L__part_3.getBounds();
                let _cover_cap_tb_L__part_3_x = _cover_cap_tb_L__part_3_bounds[0].x + (_cover_cap_tb_L__part_3_bounds[1].x - _cover_cap_tb_L__part_3_bounds[0].x) / 2
                let _cover_cap_tb_L__part_3_y = _cover_cap_tb_L__part_3_bounds[0].y + (_cover_cap_tb_L__part_3_bounds[1].y - _cover_cap_tb_L__part_3_bounds[0].y) / 2
                _cover_cap_tb_L__part_3 = translate([-_cover_cap_tb_L__part_3_x, -_cover_cap_tb_L__part_3_y, 0], _cover_cap_tb_L__part_3);
                _cover_cap_tb_L__part_3 = rotate([0,0,0], _cover_cap_tb_L__part_3);
                _cover_cap_tb_L__part_3 = translate([_cover_cap_tb_L__part_3_x, _cover_cap_tb_L__part_3_y, 0], _cover_cap_tb_L__part_3);

                _cover_cap_tb_L__part_3 = translate([0,0,0], _cover_cap_tb_L__part_3);
                result = result.subtract(_cover_cap_tb_L__part_3);
                
            
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
            
            

                function wall_cover_case_tb_L_case_fn() {
                    

                // creating part 0 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_0 = _outerWall_L_case_fn();

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
                let wall_cover_case_tb_L__part_1 = _innerWall_L_case_fn();

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
                let wall_cover_case_tb_L__part_2 = _usb_access_cut_L_case_fn();

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
                let wall_cover_case_tb_L__part_3 = _usb_access_fill_L_case_fn();

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
                let wall_cover_case_tb_L__part_4 = _button_access_cut_L_case_fn();

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
                let wall_cover_case_tb_L__part_5 = _button_access_fill_L_case_fn();

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
                let wall_cover_case_tb_L__part_6 = _trackball_wall_cut_L_case_fn();

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
                let wall_cover_case_tb_L__part_7 = _trackball_wall_fill_L_case_fn();

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
                let wall_cover_case_tb_L__part_8 = _cover_cap_tb_L_case_fn();

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
                let wall_cover_case_tb_L__part_9 = _wall_insert_L_case_fn();

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
            
            
        
            function main() {
                return wall_cover_case_tb_L_case_fn();
            }

        