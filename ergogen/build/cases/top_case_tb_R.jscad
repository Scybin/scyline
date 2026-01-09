function xlBoard_R_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[400,-160],[400,-83]]).appendArc([395,-78],{"radius":5,"clockwise":false,"large":false}).appendPoint([379.923009,-78]).appendArc([376,-76.1],{"radius":5,"clockwise":false,"large":false}).appendPoint([362,-76.1]).appendPoint([362,-68.56]).appendArc([357,-63.56],{"radius":5,"clockwise":false,"large":false}).appendPoint([342.9937461,-63.56]).appendArc([338,-58.81],{"radius":5,"clockwise":false,"large":false}).appendPoint([318,-58.81]).appendArc([313.0062539,-63.56],{"radius":5,"clockwise":false,"large":false}).appendPoint([299,-63.56]).appendArc([294.4858556,-66.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([261,-66.41]).appendArc([256,-71.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([256,-167.41]).appendArc([261,-172.41],{"radius":5,"clockwise":false,"large":false}).appendPoint([318.0954092,-172.41]).appendPoint([336.9217911,-175.4768761]).appendArc([340.5396424,-174.674939],{"radius":5,"clockwise":false,"large":false}).appendPoint([357.5405285,-163.1]).appendPoint([371.076991,-163.1]).appendArc([375,-165],{"radius":5,"clockwise":false,"large":false}).appendPoint([395,-165]).appendArc([400,-160],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function pcb_R_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[395,-160],[395,-83]]).appendPoint([376,-83]).appendPoint([376,-81.1]).appendPoint([357,-81.1]).appendPoint([357,-68.56]).appendPoint([338,-68.56]).appendPoint([338,-63.81]).appendPoint([318,-63.81]).appendPoint([318,-68.56]).appendPoint([299,-68.56]).appendPoint([299,-71.41]).appendPoint([261,-71.41]).appendPoint([261,-167.41]).appendPoint([318.5,-167.41]).appendPoint([337.7257095,-170.5419278]).appendPoint([356,-158.1]).appendPoint([375,-158.1]).appendPoint([375,-160]).appendPoint([395,-160]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function usb_wall_R_extrude_22_outline_fn(){
    return new CSG.Path2D([[278,-71.41],[278,-66.41]]).appendPoint([264,-66.41]).appendPoint([264,-71.41]).appendPoint([278,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 22] });
}


function usb_wall_R_extrude_11_outline_fn(){
    return new CSG.Path2D([[278,-71.41],[278,-66.41]]).appendPoint([264,-66.41]).appendPoint([264,-71.41]).appendPoint([278,-71.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 11] });
}


function button_wall_R_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[338.7077783,-169.8732928],[340.9182827,-174.4171443]]).appendPoint([357.5405285,-163.1]).appendPoint([357.5625,-163.1]).appendPoint([356.025,-158.1]).appendPoint([356,-158.1]).appendPoint([338.7077783,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function button_wall_R_extrude_10_outline_fn(){
    return new CSG.Path2D([[338.7077783,-169.8732928],[340.9182827,-174.4171443]]).appendPoint([357.5405285,-163.1]).appendPoint([357.5625,-163.1]).appendPoint([356.025,-158.1]).appendPoint([356,-158.1]).appendPoint([338.7077783,-169.8732928]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function trackball_wall_R_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[256,-124.41],[261,-124.41]]).appendPoint([261,-107.41]).appendPoint([256,-107.41]).appendPoint([256,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function trackball_wall_R_extrude_17_3_outline_fn(){
    return new CSG.Path2D([[256,-124.41],[261,-124.41]]).appendPoint([261,-107.41]).appendPoint([256,-107.41]).appendPoint([256,-124.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 17.3] });
}


function cover_tb_R_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[261,-66.41],[280,-66.41]]).appendPoint([280,-123.41]).appendArc([279.9827449,-123.8250339],{"radius":5,"clockwise":true,"large":false}).appendArc([280,-124.01],{"radius":1,"clockwise":true,"large":false}).appendPoint([280,-127.41]).appendArc([279,-128.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([256,-128.41]).appendPoint([256,-71.41]).appendArc([261,-66.41],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function cover_tb_R_extrude_24_3_outline_fn(){
    return new CSG.Path2D([[261,-66.41],[280,-66.41]]).appendPoint([280,-123.41]).appendArc([279.9827449,-123.8250339],{"radius":5,"clockwise":true,"large":false}).appendArc([280,-124.01],{"radius":1,"clockwise":true,"large":false}).appendPoint([280,-127.41]).appendArc([279,-128.41],{"radius":1,"clockwise":true,"large":false}).appendPoint([256,-128.41]).appendPoint([256,-71.41]).appendArc([261,-66.41],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 24.3] });
}


function cover_tb_cut_R_extrude_28_3_outline_fn(){
    return new CSG.Path2D([[266.85,-123.06],[277.15,-123.06]]).appendArc([279.15,-121.06],{"radius":2,"clockwise":false,"large":false}).appendPoint([279.15,-110.76]).appendArc([277.15,-108.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([266.85,-108.76]).appendArc([264.85,-110.76],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.85,-121.06]).appendArc([266.85,-123.06],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 28.3] });
}


function trackball_screw_holes_R_extrude_28_3_outline_fn(){
    return CAG.circle({"center":[218.5,-125.71],"radius":1.35})
.union(
    CAG.circle({"center":[207.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[218.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[207.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[266.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[277.5,-125.71],"radius":1.35})
).union(
    CAG.circle({"center":[266.5,-106.11],"radius":1.35})
).union(
    CAG.circle({"center":[277.5,-106.11],"radius":1.35})
).extrude({ offset: [0, 0, 28.3] });
}


function wall_insert_R_extrude_3_outline_fn(){
    return CAG.circle({"center":[222.75,-169.91],"radius":1.25})
.union(
    CAG.circle({"center":[91,-162.5],"radius":1.25})
).union(
    CAG.circle({"center":[224,-68.91],"radius":1.25})
).union(
    CAG.circle({"center":[91,-80.5],"radius":1.25})
).union(
    CAG.circle({"center":[262.25,-169.91],"radius":1.25})
).union(
    CAG.circle({"center":[394,-162.5],"radius":1.25})
).union(
    CAG.circle({"center":[261,-68.91],"radius":1.25})
).union(
    CAG.circle({"center":[394,-80.5],"radius":1.25})
).extrude({ offset: [0, 0, 3] });
}




                function _outerWall_R_case_fn() {
                    

                // creating part 0 of case _outerWall_R
                let _outerWall_R__part_0 = xlBoard_R_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _outerWall_R__part_0_bounds = _outerWall_R__part_0.getBounds();
                let _outerWall_R__part_0_x = _outerWall_R__part_0_bounds[0].x + (_outerWall_R__part_0_bounds[1].x - _outerWall_R__part_0_bounds[0].x) / 2
                let _outerWall_R__part_0_y = _outerWall_R__part_0_bounds[0].y + (_outerWall_R__part_0_bounds[1].y - _outerWall_R__part_0_bounds[0].y) / 2
                _outerWall_R__part_0 = translate([-_outerWall_R__part_0_x, -_outerWall_R__part_0_y, 0], _outerWall_R__part_0);
                _outerWall_R__part_0 = rotate([0,0,0], _outerWall_R__part_0);
                _outerWall_R__part_0 = translate([_outerWall_R__part_0_x, _outerWall_R__part_0_y, 0], _outerWall_R__part_0);

                _outerWall_R__part_0 = translate([0,0,0], _outerWall_R__part_0);
                let result = _outerWall_R__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_R_case_fn() {
                    

                // creating part 0 of case _innerWall_R
                let _innerWall_R__part_0 = pcb_R_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _innerWall_R__part_0_bounds = _innerWall_R__part_0.getBounds();
                let _innerWall_R__part_0_x = _innerWall_R__part_0_bounds[0].x + (_innerWall_R__part_0_bounds[1].x - _innerWall_R__part_0_bounds[0].x) / 2
                let _innerWall_R__part_0_y = _innerWall_R__part_0_bounds[0].y + (_innerWall_R__part_0_bounds[1].y - _innerWall_R__part_0_bounds[0].y) / 2
                _innerWall_R__part_0 = translate([-_innerWall_R__part_0_x, -_innerWall_R__part_0_y, 0], _innerWall_R__part_0);
                _innerWall_R__part_0 = rotate([0,0,0], _innerWall_R__part_0);
                _innerWall_R__part_0 = translate([_innerWall_R__part_0_x, _innerWall_R__part_0_y, 0], _innerWall_R__part_0);

                _innerWall_R__part_0 = translate([0,0,0], _innerWall_R__part_0);
                let result = _innerWall_R__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_cut_R_case_fn() {
                    

                // creating part 0 of case _usb_access_cut_R
                let _usb_access_cut_R__part_0 = usb_wall_R_extrude_22_outline_fn();

                // make sure that rotations are relative
                let _usb_access_cut_R__part_0_bounds = _usb_access_cut_R__part_0.getBounds();
                let _usb_access_cut_R__part_0_x = _usb_access_cut_R__part_0_bounds[0].x + (_usb_access_cut_R__part_0_bounds[1].x - _usb_access_cut_R__part_0_bounds[0].x) / 2
                let _usb_access_cut_R__part_0_y = _usb_access_cut_R__part_0_bounds[0].y + (_usb_access_cut_R__part_0_bounds[1].y - _usb_access_cut_R__part_0_bounds[0].y) / 2
                _usb_access_cut_R__part_0 = translate([-_usb_access_cut_R__part_0_x, -_usb_access_cut_R__part_0_y, 0], _usb_access_cut_R__part_0);
                _usb_access_cut_R__part_0 = rotate([0,0,0], _usb_access_cut_R__part_0);
                _usb_access_cut_R__part_0 = translate([_usb_access_cut_R__part_0_x, _usb_access_cut_R__part_0_y, 0], _usb_access_cut_R__part_0);

                _usb_access_cut_R__part_0 = translate([0,0,0], _usb_access_cut_R__part_0);
                let result = _usb_access_cut_R__part_0;
                
            
                    return result;
                }
            
            

                function _usb_access_fill_R_case_fn() {
                    

                // creating part 0 of case _usb_access_fill_R
                let _usb_access_fill_R__part_0 = usb_wall_R_extrude_11_outline_fn();

                // make sure that rotations are relative
                let _usb_access_fill_R__part_0_bounds = _usb_access_fill_R__part_0.getBounds();
                let _usb_access_fill_R__part_0_x = _usb_access_fill_R__part_0_bounds[0].x + (_usb_access_fill_R__part_0_bounds[1].x - _usb_access_fill_R__part_0_bounds[0].x) / 2
                let _usb_access_fill_R__part_0_y = _usb_access_fill_R__part_0_bounds[0].y + (_usb_access_fill_R__part_0_bounds[1].y - _usb_access_fill_R__part_0_bounds[0].y) / 2
                _usb_access_fill_R__part_0 = translate([-_usb_access_fill_R__part_0_x, -_usb_access_fill_R__part_0_y, 0], _usb_access_fill_R__part_0);
                _usb_access_fill_R__part_0 = rotate([0,0,0], _usb_access_fill_R__part_0);
                _usb_access_fill_R__part_0 = translate([_usb_access_fill_R__part_0_x, _usb_access_fill_R__part_0_y, 0], _usb_access_fill_R__part_0);

                _usb_access_fill_R__part_0 = translate([0,0,0], _usb_access_fill_R__part_0);
                let result = _usb_access_fill_R__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_cut_R_case_fn() {
                    

                // creating part 0 of case _button_access_cut_R
                let _button_access_cut_R__part_0 = button_wall_R_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _button_access_cut_R__part_0_bounds = _button_access_cut_R__part_0.getBounds();
                let _button_access_cut_R__part_0_x = _button_access_cut_R__part_0_bounds[0].x + (_button_access_cut_R__part_0_bounds[1].x - _button_access_cut_R__part_0_bounds[0].x) / 2
                let _button_access_cut_R__part_0_y = _button_access_cut_R__part_0_bounds[0].y + (_button_access_cut_R__part_0_bounds[1].y - _button_access_cut_R__part_0_bounds[0].y) / 2
                _button_access_cut_R__part_0 = translate([-_button_access_cut_R__part_0_x, -_button_access_cut_R__part_0_y, 0], _button_access_cut_R__part_0);
                _button_access_cut_R__part_0 = rotate([0,0,0], _button_access_cut_R__part_0);
                _button_access_cut_R__part_0 = translate([_button_access_cut_R__part_0_x, _button_access_cut_R__part_0_y, 0], _button_access_cut_R__part_0);

                _button_access_cut_R__part_0 = translate([0,0,0], _button_access_cut_R__part_0);
                let result = _button_access_cut_R__part_0;
                
            
                    return result;
                }
            
            

                function _button_access_fill_R_case_fn() {
                    

                // creating part 0 of case _button_access_fill_R
                let _button_access_fill_R__part_0 = button_wall_R_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _button_access_fill_R__part_0_bounds = _button_access_fill_R__part_0.getBounds();
                let _button_access_fill_R__part_0_x = _button_access_fill_R__part_0_bounds[0].x + (_button_access_fill_R__part_0_bounds[1].x - _button_access_fill_R__part_0_bounds[0].x) / 2
                let _button_access_fill_R__part_0_y = _button_access_fill_R__part_0_bounds[0].y + (_button_access_fill_R__part_0_bounds[1].y - _button_access_fill_R__part_0_bounds[0].y) / 2
                _button_access_fill_R__part_0 = translate([-_button_access_fill_R__part_0_x, -_button_access_fill_R__part_0_y, 0], _button_access_fill_R__part_0);
                _button_access_fill_R__part_0 = rotate([0,0,0], _button_access_fill_R__part_0);
                _button_access_fill_R__part_0 = translate([_button_access_fill_R__part_0_x, _button_access_fill_R__part_0_y, 0], _button_access_fill_R__part_0);

                _button_access_fill_R__part_0 = translate([0,0,0], _button_access_fill_R__part_0);
                let result = _button_access_fill_R__part_0;
                
            
                    return result;
                }
            
            

                function _trackball_wall_cut_R_case_fn() {
                    

                // creating part 0 of case _trackball_wall_cut_R
                let _trackball_wall_cut_R__part_0 = trackball_wall_R_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_cut_R__part_0_bounds = _trackball_wall_cut_R__part_0.getBounds();
                let _trackball_wall_cut_R__part_0_x = _trackball_wall_cut_R__part_0_bounds[0].x + (_trackball_wall_cut_R__part_0_bounds[1].x - _trackball_wall_cut_R__part_0_bounds[0].x) / 2
                let _trackball_wall_cut_R__part_0_y = _trackball_wall_cut_R__part_0_bounds[0].y + (_trackball_wall_cut_R__part_0_bounds[1].y - _trackball_wall_cut_R__part_0_bounds[0].y) / 2
                _trackball_wall_cut_R__part_0 = translate([-_trackball_wall_cut_R__part_0_x, -_trackball_wall_cut_R__part_0_y, 0], _trackball_wall_cut_R__part_0);
                _trackball_wall_cut_R__part_0 = rotate([0,0,0], _trackball_wall_cut_R__part_0);
                _trackball_wall_cut_R__part_0 = translate([_trackball_wall_cut_R__part_0_x, _trackball_wall_cut_R__part_0_y, 0], _trackball_wall_cut_R__part_0);

                _trackball_wall_cut_R__part_0 = translate([0,0,0], _trackball_wall_cut_R__part_0);
                let result = _trackball_wall_cut_R__part_0;
                
            
                    return result;
                }
            
            

                function _trackball_wall_fill_R_case_fn() {
                    

                // creating part 0 of case _trackball_wall_fill_R
                let _trackball_wall_fill_R__part_0 = trackball_wall_R_extrude_17_3_outline_fn();

                // make sure that rotations are relative
                let _trackball_wall_fill_R__part_0_bounds = _trackball_wall_fill_R__part_0.getBounds();
                let _trackball_wall_fill_R__part_0_x = _trackball_wall_fill_R__part_0_bounds[0].x + (_trackball_wall_fill_R__part_0_bounds[1].x - _trackball_wall_fill_R__part_0_bounds[0].x) / 2
                let _trackball_wall_fill_R__part_0_y = _trackball_wall_fill_R__part_0_bounds[0].y + (_trackball_wall_fill_R__part_0_bounds[1].y - _trackball_wall_fill_R__part_0_bounds[0].y) / 2
                _trackball_wall_fill_R__part_0 = translate([-_trackball_wall_fill_R__part_0_x, -_trackball_wall_fill_R__part_0_y, 0], _trackball_wall_fill_R__part_0);
                _trackball_wall_fill_R__part_0 = rotate([0,0,0], _trackball_wall_fill_R__part_0);
                _trackball_wall_fill_R__part_0 = translate([_trackball_wall_fill_R__part_0_x, _trackball_wall_fill_R__part_0_y, 0], _trackball_wall_fill_R__part_0);

                _trackball_wall_fill_R__part_0 = translate([0,0,0], _trackball_wall_fill_R__part_0);
                let result = _trackball_wall_fill_R__part_0;
                
            
                    return result;
                }
            
            

                function _cover_cap_tb_R_case_fn() {
                    

                // creating part 0 of case _cover_cap_tb_R
                let _cover_cap_tb_R__part_0 = cover_tb_R_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_R__part_0_bounds = _cover_cap_tb_R__part_0.getBounds();
                let _cover_cap_tb_R__part_0_x = _cover_cap_tb_R__part_0_bounds[0].x + (_cover_cap_tb_R__part_0_bounds[1].x - _cover_cap_tb_R__part_0_bounds[0].x) / 2
                let _cover_cap_tb_R__part_0_y = _cover_cap_tb_R__part_0_bounds[0].y + (_cover_cap_tb_R__part_0_bounds[1].y - _cover_cap_tb_R__part_0_bounds[0].y) / 2
                _cover_cap_tb_R__part_0 = translate([-_cover_cap_tb_R__part_0_x, -_cover_cap_tb_R__part_0_y, 0], _cover_cap_tb_R__part_0);
                _cover_cap_tb_R__part_0 = rotate([0,0,0], _cover_cap_tb_R__part_0);
                _cover_cap_tb_R__part_0 = translate([_cover_cap_tb_R__part_0_x, _cover_cap_tb_R__part_0_y, 0], _cover_cap_tb_R__part_0);

                _cover_cap_tb_R__part_0 = translate([0,0,0], _cover_cap_tb_R__part_0);
                let result = _cover_cap_tb_R__part_0;
                
            

                // creating part 1 of case _cover_cap_tb_R
                let _cover_cap_tb_R__part_1 = cover_tb_R_extrude_24_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_R__part_1_bounds = _cover_cap_tb_R__part_1.getBounds();
                let _cover_cap_tb_R__part_1_x = _cover_cap_tb_R__part_1_bounds[0].x + (_cover_cap_tb_R__part_1_bounds[1].x - _cover_cap_tb_R__part_1_bounds[0].x) / 2
                let _cover_cap_tb_R__part_1_y = _cover_cap_tb_R__part_1_bounds[0].y + (_cover_cap_tb_R__part_1_bounds[1].y - _cover_cap_tb_R__part_1_bounds[0].y) / 2
                _cover_cap_tb_R__part_1 = translate([-_cover_cap_tb_R__part_1_x, -_cover_cap_tb_R__part_1_y, 0], _cover_cap_tb_R__part_1);
                _cover_cap_tb_R__part_1 = rotate([0,0,0], _cover_cap_tb_R__part_1);
                _cover_cap_tb_R__part_1 = translate([_cover_cap_tb_R__part_1_x, _cover_cap_tb_R__part_1_y, 0], _cover_cap_tb_R__part_1);

                _cover_cap_tb_R__part_1 = translate([0,0,0], _cover_cap_tb_R__part_1);
                result = result.subtract(_cover_cap_tb_R__part_1);
                
            

                // creating part 2 of case _cover_cap_tb_R
                let _cover_cap_tb_R__part_2 = cover_tb_cut_R_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_R__part_2_bounds = _cover_cap_tb_R__part_2.getBounds();
                let _cover_cap_tb_R__part_2_x = _cover_cap_tb_R__part_2_bounds[0].x + (_cover_cap_tb_R__part_2_bounds[1].x - _cover_cap_tb_R__part_2_bounds[0].x) / 2
                let _cover_cap_tb_R__part_2_y = _cover_cap_tb_R__part_2_bounds[0].y + (_cover_cap_tb_R__part_2_bounds[1].y - _cover_cap_tb_R__part_2_bounds[0].y) / 2
                _cover_cap_tb_R__part_2 = translate([-_cover_cap_tb_R__part_2_x, -_cover_cap_tb_R__part_2_y, 0], _cover_cap_tb_R__part_2);
                _cover_cap_tb_R__part_2 = rotate([0,0,0], _cover_cap_tb_R__part_2);
                _cover_cap_tb_R__part_2 = translate([_cover_cap_tb_R__part_2_x, _cover_cap_tb_R__part_2_y, 0], _cover_cap_tb_R__part_2);

                _cover_cap_tb_R__part_2 = translate([0,0,0], _cover_cap_tb_R__part_2);
                result = result.subtract(_cover_cap_tb_R__part_2);
                
            

                // creating part 3 of case _cover_cap_tb_R
                let _cover_cap_tb_R__part_3 = trackball_screw_holes_R_extrude_28_3_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb_R__part_3_bounds = _cover_cap_tb_R__part_3.getBounds();
                let _cover_cap_tb_R__part_3_x = _cover_cap_tb_R__part_3_bounds[0].x + (_cover_cap_tb_R__part_3_bounds[1].x - _cover_cap_tb_R__part_3_bounds[0].x) / 2
                let _cover_cap_tb_R__part_3_y = _cover_cap_tb_R__part_3_bounds[0].y + (_cover_cap_tb_R__part_3_bounds[1].y - _cover_cap_tb_R__part_3_bounds[0].y) / 2
                _cover_cap_tb_R__part_3 = translate([-_cover_cap_tb_R__part_3_x, -_cover_cap_tb_R__part_3_y, 0], _cover_cap_tb_R__part_3);
                _cover_cap_tb_R__part_3 = rotate([0,0,0], _cover_cap_tb_R__part_3);
                _cover_cap_tb_R__part_3 = translate([_cover_cap_tb_R__part_3_x, _cover_cap_tb_R__part_3_y, 0], _cover_cap_tb_R__part_3);

                _cover_cap_tb_R__part_3 = translate([0,0,0], _cover_cap_tb_R__part_3);
                result = result.subtract(_cover_cap_tb_R__part_3);
                
            
                    return result;
                }
            
            

                function _wall_insert_R_case_fn() {
                    

                // creating part 0 of case _wall_insert_R
                let _wall_insert_R__part_0 = wall_insert_R_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _wall_insert_R__part_0_bounds = _wall_insert_R__part_0.getBounds();
                let _wall_insert_R__part_0_x = _wall_insert_R__part_0_bounds[0].x + (_wall_insert_R__part_0_bounds[1].x - _wall_insert_R__part_0_bounds[0].x) / 2
                let _wall_insert_R__part_0_y = _wall_insert_R__part_0_bounds[0].y + (_wall_insert_R__part_0_bounds[1].y - _wall_insert_R__part_0_bounds[0].y) / 2
                _wall_insert_R__part_0 = translate([-_wall_insert_R__part_0_x, -_wall_insert_R__part_0_y, 0], _wall_insert_R__part_0);
                _wall_insert_R__part_0 = rotate([0,0,0], _wall_insert_R__part_0);
                _wall_insert_R__part_0 = translate([_wall_insert_R__part_0_x, _wall_insert_R__part_0_y, 0], _wall_insert_R__part_0);

                _wall_insert_R__part_0 = translate([0,0,0], _wall_insert_R__part_0);
                let result = _wall_insert_R__part_0;
                
            
                    return result;
                }
            
            

                function top_case_tb_R_case_fn() {
                    

                // creating part 0 of case top_case_tb_R
                let top_case_tb_R__part_0 = _outerWall_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_0_bounds = top_case_tb_R__part_0.getBounds();
                let top_case_tb_R__part_0_x = top_case_tb_R__part_0_bounds[0].x + (top_case_tb_R__part_0_bounds[1].x - top_case_tb_R__part_0_bounds[0].x) / 2
                let top_case_tb_R__part_0_y = top_case_tb_R__part_0_bounds[0].y + (top_case_tb_R__part_0_bounds[1].y - top_case_tb_R__part_0_bounds[0].y) / 2
                top_case_tb_R__part_0 = translate([-top_case_tb_R__part_0_x, -top_case_tb_R__part_0_y, 0], top_case_tb_R__part_0);
                top_case_tb_R__part_0 = rotate([0,0,0], top_case_tb_R__part_0);
                top_case_tb_R__part_0 = translate([top_case_tb_R__part_0_x, top_case_tb_R__part_0_y, 0], top_case_tb_R__part_0);

                top_case_tb_R__part_0 = translate([0,0,0], top_case_tb_R__part_0);
                let result = top_case_tb_R__part_0;
                
            

                // creating part 1 of case top_case_tb_R
                let top_case_tb_R__part_1 = _innerWall_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_1_bounds = top_case_tb_R__part_1.getBounds();
                let top_case_tb_R__part_1_x = top_case_tb_R__part_1_bounds[0].x + (top_case_tb_R__part_1_bounds[1].x - top_case_tb_R__part_1_bounds[0].x) / 2
                let top_case_tb_R__part_1_y = top_case_tb_R__part_1_bounds[0].y + (top_case_tb_R__part_1_bounds[1].y - top_case_tb_R__part_1_bounds[0].y) / 2
                top_case_tb_R__part_1 = translate([-top_case_tb_R__part_1_x, -top_case_tb_R__part_1_y, 0], top_case_tb_R__part_1);
                top_case_tb_R__part_1 = rotate([0,0,0], top_case_tb_R__part_1);
                top_case_tb_R__part_1 = translate([top_case_tb_R__part_1_x, top_case_tb_R__part_1_y, 0], top_case_tb_R__part_1);

                top_case_tb_R__part_1 = translate([0,0,0], top_case_tb_R__part_1);
                result = result.subtract(top_case_tb_R__part_1);
                
            

                // creating part 2 of case top_case_tb_R
                let top_case_tb_R__part_2 = _usb_access_cut_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_2_bounds = top_case_tb_R__part_2.getBounds();
                let top_case_tb_R__part_2_x = top_case_tb_R__part_2_bounds[0].x + (top_case_tb_R__part_2_bounds[1].x - top_case_tb_R__part_2_bounds[0].x) / 2
                let top_case_tb_R__part_2_y = top_case_tb_R__part_2_bounds[0].y + (top_case_tb_R__part_2_bounds[1].y - top_case_tb_R__part_2_bounds[0].y) / 2
                top_case_tb_R__part_2 = translate([-top_case_tb_R__part_2_x, -top_case_tb_R__part_2_y, 0], top_case_tb_R__part_2);
                top_case_tb_R__part_2 = rotate([0,0,0], top_case_tb_R__part_2);
                top_case_tb_R__part_2 = translate([top_case_tb_R__part_2_x, top_case_tb_R__part_2_y, 0], top_case_tb_R__part_2);

                top_case_tb_R__part_2 = translate([0,0,0], top_case_tb_R__part_2);
                result = result.subtract(top_case_tb_R__part_2);
                
            

                // creating part 3 of case top_case_tb_R
                let top_case_tb_R__part_3 = _usb_access_fill_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_3_bounds = top_case_tb_R__part_3.getBounds();
                let top_case_tb_R__part_3_x = top_case_tb_R__part_3_bounds[0].x + (top_case_tb_R__part_3_bounds[1].x - top_case_tb_R__part_3_bounds[0].x) / 2
                let top_case_tb_R__part_3_y = top_case_tb_R__part_3_bounds[0].y + (top_case_tb_R__part_3_bounds[1].y - top_case_tb_R__part_3_bounds[0].y) / 2
                top_case_tb_R__part_3 = translate([-top_case_tb_R__part_3_x, -top_case_tb_R__part_3_y, 0], top_case_tb_R__part_3);
                top_case_tb_R__part_3 = rotate([0,0,0], top_case_tb_R__part_3);
                top_case_tb_R__part_3 = translate([top_case_tb_R__part_3_x, top_case_tb_R__part_3_y, 0], top_case_tb_R__part_3);

                top_case_tb_R__part_3 = translate([0,0,0], top_case_tb_R__part_3);
                result = result.union(top_case_tb_R__part_3);
                
            

                // creating part 4 of case top_case_tb_R
                let top_case_tb_R__part_4 = _button_access_cut_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_4_bounds = top_case_tb_R__part_4.getBounds();
                let top_case_tb_R__part_4_x = top_case_tb_R__part_4_bounds[0].x + (top_case_tb_R__part_4_bounds[1].x - top_case_tb_R__part_4_bounds[0].x) / 2
                let top_case_tb_R__part_4_y = top_case_tb_R__part_4_bounds[0].y + (top_case_tb_R__part_4_bounds[1].y - top_case_tb_R__part_4_bounds[0].y) / 2
                top_case_tb_R__part_4 = translate([-top_case_tb_R__part_4_x, -top_case_tb_R__part_4_y, 0], top_case_tb_R__part_4);
                top_case_tb_R__part_4 = rotate([0,0,0], top_case_tb_R__part_4);
                top_case_tb_R__part_4 = translate([top_case_tb_R__part_4_x, top_case_tb_R__part_4_y, 0], top_case_tb_R__part_4);

                top_case_tb_R__part_4 = translate([0,0,0], top_case_tb_R__part_4);
                result = result.subtract(top_case_tb_R__part_4);
                
            

                // creating part 5 of case top_case_tb_R
                let top_case_tb_R__part_5 = _button_access_fill_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_5_bounds = top_case_tb_R__part_5.getBounds();
                let top_case_tb_R__part_5_x = top_case_tb_R__part_5_bounds[0].x + (top_case_tb_R__part_5_bounds[1].x - top_case_tb_R__part_5_bounds[0].x) / 2
                let top_case_tb_R__part_5_y = top_case_tb_R__part_5_bounds[0].y + (top_case_tb_R__part_5_bounds[1].y - top_case_tb_R__part_5_bounds[0].y) / 2
                top_case_tb_R__part_5 = translate([-top_case_tb_R__part_5_x, -top_case_tb_R__part_5_y, 0], top_case_tb_R__part_5);
                top_case_tb_R__part_5 = rotate([0,0,0], top_case_tb_R__part_5);
                top_case_tb_R__part_5 = translate([top_case_tb_R__part_5_x, top_case_tb_R__part_5_y, 0], top_case_tb_R__part_5);

                top_case_tb_R__part_5 = translate([0,0,0], top_case_tb_R__part_5);
                result = result.union(top_case_tb_R__part_5);
                
            

                // creating part 6 of case top_case_tb_R
                let top_case_tb_R__part_6 = _trackball_wall_cut_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_6_bounds = top_case_tb_R__part_6.getBounds();
                let top_case_tb_R__part_6_x = top_case_tb_R__part_6_bounds[0].x + (top_case_tb_R__part_6_bounds[1].x - top_case_tb_R__part_6_bounds[0].x) / 2
                let top_case_tb_R__part_6_y = top_case_tb_R__part_6_bounds[0].y + (top_case_tb_R__part_6_bounds[1].y - top_case_tb_R__part_6_bounds[0].y) / 2
                top_case_tb_R__part_6 = translate([-top_case_tb_R__part_6_x, -top_case_tb_R__part_6_y, 0], top_case_tb_R__part_6);
                top_case_tb_R__part_6 = rotate([0,0,0], top_case_tb_R__part_6);
                top_case_tb_R__part_6 = translate([top_case_tb_R__part_6_x, top_case_tb_R__part_6_y, 0], top_case_tb_R__part_6);

                top_case_tb_R__part_6 = translate([0,0,0], top_case_tb_R__part_6);
                result = result.subtract(top_case_tb_R__part_6);
                
            

                // creating part 7 of case top_case_tb_R
                let top_case_tb_R__part_7 = _trackball_wall_fill_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_7_bounds = top_case_tb_R__part_7.getBounds();
                let top_case_tb_R__part_7_x = top_case_tb_R__part_7_bounds[0].x + (top_case_tb_R__part_7_bounds[1].x - top_case_tb_R__part_7_bounds[0].x) / 2
                let top_case_tb_R__part_7_y = top_case_tb_R__part_7_bounds[0].y + (top_case_tb_R__part_7_bounds[1].y - top_case_tb_R__part_7_bounds[0].y) / 2
                top_case_tb_R__part_7 = translate([-top_case_tb_R__part_7_x, -top_case_tb_R__part_7_y, 0], top_case_tb_R__part_7);
                top_case_tb_R__part_7 = rotate([0,0,0], top_case_tb_R__part_7);
                top_case_tb_R__part_7 = translate([top_case_tb_R__part_7_x, top_case_tb_R__part_7_y, 0], top_case_tb_R__part_7);

                top_case_tb_R__part_7 = translate([0,0,0], top_case_tb_R__part_7);
                result = result.union(top_case_tb_R__part_7);
                
            

                // creating part 8 of case top_case_tb_R
                let top_case_tb_R__part_8 = _cover_cap_tb_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_8_bounds = top_case_tb_R__part_8.getBounds();
                let top_case_tb_R__part_8_x = top_case_tb_R__part_8_bounds[0].x + (top_case_tb_R__part_8_bounds[1].x - top_case_tb_R__part_8_bounds[0].x) / 2
                let top_case_tb_R__part_8_y = top_case_tb_R__part_8_bounds[0].y + (top_case_tb_R__part_8_bounds[1].y - top_case_tb_R__part_8_bounds[0].y) / 2
                top_case_tb_R__part_8 = translate([-top_case_tb_R__part_8_x, -top_case_tb_R__part_8_y, 0], top_case_tb_R__part_8);
                top_case_tb_R__part_8 = rotate([0,0,0], top_case_tb_R__part_8);
                top_case_tb_R__part_8 = translate([top_case_tb_R__part_8_x, top_case_tb_R__part_8_y, 0], top_case_tb_R__part_8);

                top_case_tb_R__part_8 = translate([0,0,0], top_case_tb_R__part_8);
                result = result.union(top_case_tb_R__part_8);
                
            

                // creating part 9 of case top_case_tb_R
                let top_case_tb_R__part_9 = _wall_insert_R_case_fn();

                // make sure that rotations are relative
                let top_case_tb_R__part_9_bounds = top_case_tb_R__part_9.getBounds();
                let top_case_tb_R__part_9_x = top_case_tb_R__part_9_bounds[0].x + (top_case_tb_R__part_9_bounds[1].x - top_case_tb_R__part_9_bounds[0].x) / 2
                let top_case_tb_R__part_9_y = top_case_tb_R__part_9_bounds[0].y + (top_case_tb_R__part_9_bounds[1].y - top_case_tb_R__part_9_bounds[0].y) / 2
                top_case_tb_R__part_9 = translate([-top_case_tb_R__part_9_x, -top_case_tb_R__part_9_y, 0], top_case_tb_R__part_9);
                top_case_tb_R__part_9 = rotate([0,0,0], top_case_tb_R__part_9);
                top_case_tb_R__part_9 = translate([top_case_tb_R__part_9_x, top_case_tb_R__part_9_y, 0], top_case_tb_R__part_9);

                top_case_tb_R__part_9 = translate([0,0,0], top_case_tb_R__part_9);
                result = result.subtract(top_case_tb_R__part_9);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_case_tb_R_case_fn();
            }

        