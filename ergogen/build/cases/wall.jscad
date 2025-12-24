function xlBoard_extrude_18_outline_fn(){
    return new CSG.Path2D([[89,-159],[89,-84]]).appendArc([91,-82],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.0025016,-82]).appendArc([110,-80.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([127,-80.1]).appendPoint([127,-69.56]).appendArc([129,-67.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([146,-67.56]).appendPoint([146,-64.81]).appendArc([148,-62.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([166,-62.81]).appendArc([168,-64.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([168,-67.56]).appendPoint([185,-67.56]).appendArc([187,-69.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([187,-70.41]).appendPoint([224,-70.41]).appendArc([226,-72.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([226,-166.41]).appendArc([224,-168.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.6708175,-168.41]).appendPoint([148.6137251,-171.517136]).appendArc([147.2282325,-171.2505654],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.4350968,-159.1]).appendPoint([110.9974984,-159.1]).appendArc([109,-161],{"radius":2,"clockwise":true,"large":false}).appendPoint([91,-161]).appendArc([89,-159],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 18] });
}


function pcb_extrude_18_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 18] });
}


function usb_wall_extrude_17_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-70.41]]).appendPoint([207,-70.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 17] });
}


function usb_wall_extrude_10_outline_fn(){
    return new CSG.Path2D([[221,-72.41],[221,-70.41]]).appendPoint([207,-70.41]).appendPoint([207,-72.41]).appendPoint([221,-72.41]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function button_wall_extrude_11_5_outline_fn(){
    return new CSG.Path2D([[144.1893411,-167.0382761],[143.6174808,-169.0340053]]).appendPoint([128.9847877,-160.0513208]).appendPoint([128.0773359,-157.1474748]).appendPoint([144.1893411,-167.0382761]).close().innerToCAG()
.extrude({ offset: [0, 0, 11.5] });
}


function button_wall_extrude_10_outline_fn(){
    return new CSG.Path2D([[144.1893411,-167.0382761],[143.6174808,-169.0340053]]).appendPoint([128.9847877,-160.0513208]).appendPoint([128.0773359,-157.1474748]).appendPoint([144.1893411,-167.0382761]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function cover_extrude_20_outline_fn(){
    return new CSG.Path2D([[224,-70.41],[206,-70.41]]).appendArc([204,-72.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([204,-126.41]).appendArc([206,-128.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([226,-126.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([226,-72.41]).appendArc([224,-70.41],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 20] });
}


function cover_extrude_17_outline_fn(){
    return new CSG.Path2D([[224,-70.41],[206,-70.41]]).appendArc([204,-72.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([204,-126.41]).appendArc([206,-128.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([224,-128.41]).appendArc([226,-126.41],{"radius":2,"clockwise":false,"large":false}).appendPoint([226,-72.41]).appendArc([224,-70.41],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 17] });
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
                let _button_access_cut__part_0 = button_wall_extrude_11_5_outline_fn();

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
                let _button_access_fill__part_0 = button_wall_extrude_10_outline_fn();

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
            
            

                function _cover_cap_case_fn() {
                    

                // creating part 0 of case _cover_cap
                let _cover_cap__part_0 = cover_extrude_20_outline_fn();

                // make sure that rotations are relative
                let _cover_cap__part_0_bounds = _cover_cap__part_0.getBounds();
                let _cover_cap__part_0_x = _cover_cap__part_0_bounds[0].x + (_cover_cap__part_0_bounds[1].x - _cover_cap__part_0_bounds[0].x) / 2
                let _cover_cap__part_0_y = _cover_cap__part_0_bounds[0].y + (_cover_cap__part_0_bounds[1].y - _cover_cap__part_0_bounds[0].y) / 2
                _cover_cap__part_0 = translate([-_cover_cap__part_0_x, -_cover_cap__part_0_y, 0], _cover_cap__part_0);
                _cover_cap__part_0 = rotate([0,0,0], _cover_cap__part_0);
                _cover_cap__part_0 = translate([_cover_cap__part_0_x, _cover_cap__part_0_y, 0], _cover_cap__part_0);

                _cover_cap__part_0 = translate([0,0,0], _cover_cap__part_0);
                let result = _cover_cap__part_0;
                
            

                // creating part 1 of case _cover_cap
                let _cover_cap__part_1 = cover_extrude_17_outline_fn();

                // make sure that rotations are relative
                let _cover_cap__part_1_bounds = _cover_cap__part_1.getBounds();
                let _cover_cap__part_1_x = _cover_cap__part_1_bounds[0].x + (_cover_cap__part_1_bounds[1].x - _cover_cap__part_1_bounds[0].x) / 2
                let _cover_cap__part_1_y = _cover_cap__part_1_bounds[0].y + (_cover_cap__part_1_bounds[1].y - _cover_cap__part_1_bounds[0].y) / 2
                _cover_cap__part_1 = translate([-_cover_cap__part_1_x, -_cover_cap__part_1_y, 0], _cover_cap__part_1);
                _cover_cap__part_1 = rotate([0,0,0], _cover_cap__part_1);
                _cover_cap__part_1 = translate([_cover_cap__part_1_x, _cover_cap__part_1_y, 0], _cover_cap__part_1);

                _cover_cap__part_1 = translate([0,0,0], _cover_cap__part_1);
                result = result.subtract(_cover_cap__part_1);
                
            
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
                let wall__part_2 = _usb_access_cut_case_fn();

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
                let wall__part_3 = _usb_access_fill_case_fn();

                // make sure that rotations are relative
                let wall__part_3_bounds = wall__part_3.getBounds();
                let wall__part_3_x = wall__part_3_bounds[0].x + (wall__part_3_bounds[1].x - wall__part_3_bounds[0].x) / 2
                let wall__part_3_y = wall__part_3_bounds[0].y + (wall__part_3_bounds[1].y - wall__part_3_bounds[0].y) / 2
                wall__part_3 = translate([-wall__part_3_x, -wall__part_3_y, 0], wall__part_3);
                wall__part_3 = rotate([0,0,0], wall__part_3);
                wall__part_3 = translate([wall__part_3_x, wall__part_3_y, 0], wall__part_3);

                wall__part_3 = translate([0,0,0], wall__part_3);
                result = result.union(wall__part_3);
                
            

                // creating part 4 of case wall
                let wall__part_4 = _button_access_cut_case_fn();

                // make sure that rotations are relative
                let wall__part_4_bounds = wall__part_4.getBounds();
                let wall__part_4_x = wall__part_4_bounds[0].x + (wall__part_4_bounds[1].x - wall__part_4_bounds[0].x) / 2
                let wall__part_4_y = wall__part_4_bounds[0].y + (wall__part_4_bounds[1].y - wall__part_4_bounds[0].y) / 2
                wall__part_4 = translate([-wall__part_4_x, -wall__part_4_y, 0], wall__part_4);
                wall__part_4 = rotate([0,0,0], wall__part_4);
                wall__part_4 = translate([wall__part_4_x, wall__part_4_y, 0], wall__part_4);

                wall__part_4 = translate([0,0,0], wall__part_4);
                result = result.subtract(wall__part_4);
                
            

                // creating part 5 of case wall
                let wall__part_5 = _button_access_fill_case_fn();

                // make sure that rotations are relative
                let wall__part_5_bounds = wall__part_5.getBounds();
                let wall__part_5_x = wall__part_5_bounds[0].x + (wall__part_5_bounds[1].x - wall__part_5_bounds[0].x) / 2
                let wall__part_5_y = wall__part_5_bounds[0].y + (wall__part_5_bounds[1].y - wall__part_5_bounds[0].y) / 2
                wall__part_5 = translate([-wall__part_5_x, -wall__part_5_y, 0], wall__part_5);
                wall__part_5 = rotate([0,0,0], wall__part_5);
                wall__part_5 = translate([wall__part_5_x, wall__part_5_y, 0], wall__part_5);

                wall__part_5 = translate([0,0,0], wall__part_5);
                result = result.union(wall__part_5);
                
            

                // creating part 6 of case wall
                let wall__part_6 = _cover_cap_case_fn();

                // make sure that rotations are relative
                let wall__part_6_bounds = wall__part_6.getBounds();
                let wall__part_6_x = wall__part_6_bounds[0].x + (wall__part_6_bounds[1].x - wall__part_6_bounds[0].x) / 2
                let wall__part_6_y = wall__part_6_bounds[0].y + (wall__part_6_bounds[1].y - wall__part_6_bounds[0].y) / 2
                wall__part_6 = translate([-wall__part_6_x, -wall__part_6_y, 0], wall__part_6);
                wall__part_6 = rotate([0,0,0], wall__part_6);
                wall__part_6 = translate([wall__part_6_x, wall__part_6_y, 0], wall__part_6);

                wall__part_6 = translate([0,0,0], wall__part_6);
                result = result.union(wall__part_6);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        