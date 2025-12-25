function xlBoard_extrude_18_outline_fn(){
    return new CSG.Path2D([[87,-159],[87,-84]]).appendArc([91,-80],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.5955911,-80]).appendArc([110,-78.1],{"radius":4,"clockwise":true,"large":false}).appendPoint([125,-78.1]).appendPoint([125,-69.56]).appendArc([129,-65.56],{"radius":4,"clockwise":true,"large":false}).appendPoint([144,-65.56]).appendPoint([144,-64.81]).appendArc([148,-60.81],{"radius":4,"clockwise":true,"large":false}).appendPoint([166,-60.81]).appendArc([170,-64.81],{"radius":4,"clockwise":true,"large":false}).appendPoint([170,-65.56]).appendPoint([185,-65.56]).appendArc([188.8311226,-68.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([224,-68.41]).appendArc([228,-72.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([228,-166.41]).appendArc([224,-170.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([166.8416355,-170.41]).appendPoint([148.9528863,-173.4881687]).appendArc([146.1819012,-172.9550275],{"radius":4,"clockwise":true,"large":false}).appendPoint([126.8701935,-161.1]).appendPoint([112.4044089,-161.1]).appendArc([109,-163],{"radius":4,"clockwise":true,"large":false}).appendPoint([91,-163]).appendArc([87,-159],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 18] });
}


function pcb_extrude_18_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 18] });
}


function usb_wall_extrude_17_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-68.41]]).appendPoint([207,-68.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 17] });
}


function usb_wall_extrude_10_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-68.41]]).appendPoint([207,-68.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function button_wall_extrude_12_outline_fn(){
    return new CSG.Path2D([[144.1893411,-167.0382761],[143.0456205,-171.0297346]]).appendPoint([129.8922397,-162.9551669]).appendPoint([128.0773359,-157.1474748]).appendPoint([144.1893411,-167.0382761]).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function button_wall_extrude_9_5_outline_fn(){
    return new CSG.Path2D([[144.1893411,-167.0382761],[143.0456205,-171.0297346]]).appendPoint([129.8922397,-162.9551669]).appendPoint([128.0773359,-157.1474748]).appendPoint([144.1893411,-167.0382761]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.5] });
}


function cover_tb_extrude_20_outline_fn(){
    return new CSG.Path2D([[224,-68.41],[208,-68.41]]).appendArc([204,-72.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([204,-124.41]).appendArc([208,-128.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([228,-124.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([228,-72.41]).appendArc([224,-68.41],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 20] });
}


function cover_tb_extrude_17_outline_fn(){
    return new CSG.Path2D([[224,-68.41],[208,-68.41]]).appendArc([204,-72.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([204,-124.41]).appendArc([208,-128.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([228,-124.41],{"radius":4,"clockwise":false,"large":false}).appendPoint([228,-72.41]).appendArc([224,-68.41],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 17] });
}


function wall_insert_extrude_3_outline_fn(){
    return CAG.circle({"center":[222.75,-168.41],"radius":1.25})
.union(
    CAG.circle({"center":[91,-161],"radius":1.25})
).union(
    CAG.circle({"center":[224,-70.41],"radius":1.25})
).union(
    CAG.circle({"center":[91,-82],"radius":1.25})
).extrude({ offset: [0, 0, 3] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_18_outline_fn();

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
                let _innerWall__part_0 = pcb_extrude_18_outline_fn();

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
                let _usb_access_cut__part_0 = usb_wall_extrude_17_outline_fn();

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
                let _usb_access_fill__part_0 = usb_wall_extrude_10_outline_fn();

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
                let _button_access_cut__part_0 = button_wall_extrude_12_outline_fn();

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
                let _button_access_fill__part_0 = button_wall_extrude_9_5_outline_fn();

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
            
            

                function _cover_cap_tb_case_fn() {
                    

                // creating part 0 of case _cover_cap_tb
                let _cover_cap_tb__part_0 = cover_tb_extrude_20_outline_fn();

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
                let _cover_cap_tb__part_1 = cover_tb_extrude_17_outline_fn();

                // make sure that rotations are relative
                let _cover_cap_tb__part_1_bounds = _cover_cap_tb__part_1.getBounds();
                let _cover_cap_tb__part_1_x = _cover_cap_tb__part_1_bounds[0].x + (_cover_cap_tb__part_1_bounds[1].x - _cover_cap_tb__part_1_bounds[0].x) / 2
                let _cover_cap_tb__part_1_y = _cover_cap_tb__part_1_bounds[0].y + (_cover_cap_tb__part_1_bounds[1].y - _cover_cap_tb__part_1_bounds[0].y) / 2
                _cover_cap_tb__part_1 = translate([-_cover_cap_tb__part_1_x, -_cover_cap_tb__part_1_y, 0], _cover_cap_tb__part_1);
                _cover_cap_tb__part_1 = rotate([0,0,0], _cover_cap_tb__part_1);
                _cover_cap_tb__part_1 = translate([_cover_cap_tb__part_1_x, _cover_cap_tb__part_1_y, 0], _cover_cap_tb__part_1);

                _cover_cap_tb__part_1 = translate([0,0,0], _cover_cap_tb__part_1);
                result = result.subtract(_cover_cap_tb__part_1);
                
            
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
                let wall_cover_case_tb_L__part_6 = _cover_cap_tb_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_6_bounds = wall_cover_case_tb_L__part_6.getBounds();
                let wall_cover_case_tb_L__part_6_x = wall_cover_case_tb_L__part_6_bounds[0].x + (wall_cover_case_tb_L__part_6_bounds[1].x - wall_cover_case_tb_L__part_6_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_6_y = wall_cover_case_tb_L__part_6_bounds[0].y + (wall_cover_case_tb_L__part_6_bounds[1].y - wall_cover_case_tb_L__part_6_bounds[0].y) / 2
                wall_cover_case_tb_L__part_6 = translate([-wall_cover_case_tb_L__part_6_x, -wall_cover_case_tb_L__part_6_y, 0], wall_cover_case_tb_L__part_6);
                wall_cover_case_tb_L__part_6 = rotate([0,0,0], wall_cover_case_tb_L__part_6);
                wall_cover_case_tb_L__part_6 = translate([wall_cover_case_tb_L__part_6_x, wall_cover_case_tb_L__part_6_y, 0], wall_cover_case_tb_L__part_6);

                wall_cover_case_tb_L__part_6 = translate([0,0,0], wall_cover_case_tb_L__part_6);
                result = result.union(wall_cover_case_tb_L__part_6);
                
            

                // creating part 7 of case wall_cover_case_tb_L
                let wall_cover_case_tb_L__part_7 = _wall_insert_case_fn();

                // make sure that rotations are relative
                let wall_cover_case_tb_L__part_7_bounds = wall_cover_case_tb_L__part_7.getBounds();
                let wall_cover_case_tb_L__part_7_x = wall_cover_case_tb_L__part_7_bounds[0].x + (wall_cover_case_tb_L__part_7_bounds[1].x - wall_cover_case_tb_L__part_7_bounds[0].x) / 2
                let wall_cover_case_tb_L__part_7_y = wall_cover_case_tb_L__part_7_bounds[0].y + (wall_cover_case_tb_L__part_7_bounds[1].y - wall_cover_case_tb_L__part_7_bounds[0].y) / 2
                wall_cover_case_tb_L__part_7 = translate([-wall_cover_case_tb_L__part_7_x, -wall_cover_case_tb_L__part_7_y, 0], wall_cover_case_tb_L__part_7);
                wall_cover_case_tb_L__part_7 = rotate([0,0,0], wall_cover_case_tb_L__part_7);
                wall_cover_case_tb_L__part_7 = translate([wall_cover_case_tb_L__part_7_x, wall_cover_case_tb_L__part_7_y, 0], wall_cover_case_tb_L__part_7);

                wall_cover_case_tb_L__part_7 = translate([0,0,0], wall_cover_case_tb_L__part_7);
                result = result.subtract(wall_cover_case_tb_L__part_7);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_cover_case_tb_L_case_fn();
            }

        