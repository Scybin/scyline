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




                function top_case_tb_L_case_fn() {
                    

                // creating part 0 of case top_case_tb_L
                let top_case_tb_L__part_0 = _outerWall_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_0_bounds = top_case_tb_L__part_0.getBounds();
                let top_case_tb_L__part_0_x = top_case_tb_L__part_0_bounds[0].x + (top_case_tb_L__part_0_bounds[1].x - top_case_tb_L__part_0_bounds[0].x) / 2
                let top_case_tb_L__part_0_y = top_case_tb_L__part_0_bounds[0].y + (top_case_tb_L__part_0_bounds[1].y - top_case_tb_L__part_0_bounds[0].y) / 2
                top_case_tb_L__part_0 = translate([-top_case_tb_L__part_0_x, -top_case_tb_L__part_0_y, 0], top_case_tb_L__part_0);
                top_case_tb_L__part_0 = rotate([0,0,0], top_case_tb_L__part_0);
                top_case_tb_L__part_0 = translate([top_case_tb_L__part_0_x, top_case_tb_L__part_0_y, 0], top_case_tb_L__part_0);

                top_case_tb_L__part_0 = translate([0,0,0], top_case_tb_L__part_0);
                let result = top_case_tb_L__part_0;
                
            

                // creating part 1 of case top_case_tb_L
                let top_case_tb_L__part_1 = _innerWall_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_1_bounds = top_case_tb_L__part_1.getBounds();
                let top_case_tb_L__part_1_x = top_case_tb_L__part_1_bounds[0].x + (top_case_tb_L__part_1_bounds[1].x - top_case_tb_L__part_1_bounds[0].x) / 2
                let top_case_tb_L__part_1_y = top_case_tb_L__part_1_bounds[0].y + (top_case_tb_L__part_1_bounds[1].y - top_case_tb_L__part_1_bounds[0].y) / 2
                top_case_tb_L__part_1 = translate([-top_case_tb_L__part_1_x, -top_case_tb_L__part_1_y, 0], top_case_tb_L__part_1);
                top_case_tb_L__part_1 = rotate([0,0,0], top_case_tb_L__part_1);
                top_case_tb_L__part_1 = translate([top_case_tb_L__part_1_x, top_case_tb_L__part_1_y, 0], top_case_tb_L__part_1);

                top_case_tb_L__part_1 = translate([0,0,0], top_case_tb_L__part_1);
                result = result.subtract(top_case_tb_L__part_1);
                
            

                // creating part 2 of case top_case_tb_L
                let top_case_tb_L__part_2 = _usb_access_cut_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_2_bounds = top_case_tb_L__part_2.getBounds();
                let top_case_tb_L__part_2_x = top_case_tb_L__part_2_bounds[0].x + (top_case_tb_L__part_2_bounds[1].x - top_case_tb_L__part_2_bounds[0].x) / 2
                let top_case_tb_L__part_2_y = top_case_tb_L__part_2_bounds[0].y + (top_case_tb_L__part_2_bounds[1].y - top_case_tb_L__part_2_bounds[0].y) / 2
                top_case_tb_L__part_2 = translate([-top_case_tb_L__part_2_x, -top_case_tb_L__part_2_y, 0], top_case_tb_L__part_2);
                top_case_tb_L__part_2 = rotate([0,0,0], top_case_tb_L__part_2);
                top_case_tb_L__part_2 = translate([top_case_tb_L__part_2_x, top_case_tb_L__part_2_y, 0], top_case_tb_L__part_2);

                top_case_tb_L__part_2 = translate([0,0,0], top_case_tb_L__part_2);
                result = result.subtract(top_case_tb_L__part_2);
                
            

                // creating part 3 of case top_case_tb_L
                let top_case_tb_L__part_3 = _usb_access_fill_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_3_bounds = top_case_tb_L__part_3.getBounds();
                let top_case_tb_L__part_3_x = top_case_tb_L__part_3_bounds[0].x + (top_case_tb_L__part_3_bounds[1].x - top_case_tb_L__part_3_bounds[0].x) / 2
                let top_case_tb_L__part_3_y = top_case_tb_L__part_3_bounds[0].y + (top_case_tb_L__part_3_bounds[1].y - top_case_tb_L__part_3_bounds[0].y) / 2
                top_case_tb_L__part_3 = translate([-top_case_tb_L__part_3_x, -top_case_tb_L__part_3_y, 0], top_case_tb_L__part_3);
                top_case_tb_L__part_3 = rotate([0,0,0], top_case_tb_L__part_3);
                top_case_tb_L__part_3 = translate([top_case_tb_L__part_3_x, top_case_tb_L__part_3_y, 0], top_case_tb_L__part_3);

                top_case_tb_L__part_3 = translate([0,0,0], top_case_tb_L__part_3);
                result = result.union(top_case_tb_L__part_3);
                
            

                // creating part 4 of case top_case_tb_L
                let top_case_tb_L__part_4 = _button_access_cut_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_4_bounds = top_case_tb_L__part_4.getBounds();
                let top_case_tb_L__part_4_x = top_case_tb_L__part_4_bounds[0].x + (top_case_tb_L__part_4_bounds[1].x - top_case_tb_L__part_4_bounds[0].x) / 2
                let top_case_tb_L__part_4_y = top_case_tb_L__part_4_bounds[0].y + (top_case_tb_L__part_4_bounds[1].y - top_case_tb_L__part_4_bounds[0].y) / 2
                top_case_tb_L__part_4 = translate([-top_case_tb_L__part_4_x, -top_case_tb_L__part_4_y, 0], top_case_tb_L__part_4);
                top_case_tb_L__part_4 = rotate([0,0,0], top_case_tb_L__part_4);
                top_case_tb_L__part_4 = translate([top_case_tb_L__part_4_x, top_case_tb_L__part_4_y, 0], top_case_tb_L__part_4);

                top_case_tb_L__part_4 = translate([0,0,0], top_case_tb_L__part_4);
                result = result.subtract(top_case_tb_L__part_4);
                
            

                // creating part 5 of case top_case_tb_L
                let top_case_tb_L__part_5 = _button_access_fill_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_5_bounds = top_case_tb_L__part_5.getBounds();
                let top_case_tb_L__part_5_x = top_case_tb_L__part_5_bounds[0].x + (top_case_tb_L__part_5_bounds[1].x - top_case_tb_L__part_5_bounds[0].x) / 2
                let top_case_tb_L__part_5_y = top_case_tb_L__part_5_bounds[0].y + (top_case_tb_L__part_5_bounds[1].y - top_case_tb_L__part_5_bounds[0].y) / 2
                top_case_tb_L__part_5 = translate([-top_case_tb_L__part_5_x, -top_case_tb_L__part_5_y, 0], top_case_tb_L__part_5);
                top_case_tb_L__part_5 = rotate([0,0,0], top_case_tb_L__part_5);
                top_case_tb_L__part_5 = translate([top_case_tb_L__part_5_x, top_case_tb_L__part_5_y, 0], top_case_tb_L__part_5);

                top_case_tb_L__part_5 = translate([0,0,0], top_case_tb_L__part_5);
                result = result.union(top_case_tb_L__part_5);
                
            

                // creating part 6 of case top_case_tb_L
                let top_case_tb_L__part_6 = _trackball_wall_cut_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_6_bounds = top_case_tb_L__part_6.getBounds();
                let top_case_tb_L__part_6_x = top_case_tb_L__part_6_bounds[0].x + (top_case_tb_L__part_6_bounds[1].x - top_case_tb_L__part_6_bounds[0].x) / 2
                let top_case_tb_L__part_6_y = top_case_tb_L__part_6_bounds[0].y + (top_case_tb_L__part_6_bounds[1].y - top_case_tb_L__part_6_bounds[0].y) / 2
                top_case_tb_L__part_6 = translate([-top_case_tb_L__part_6_x, -top_case_tb_L__part_6_y, 0], top_case_tb_L__part_6);
                top_case_tb_L__part_6 = rotate([0,0,0], top_case_tb_L__part_6);
                top_case_tb_L__part_6 = translate([top_case_tb_L__part_6_x, top_case_tb_L__part_6_y, 0], top_case_tb_L__part_6);

                top_case_tb_L__part_6 = translate([0,0,0], top_case_tb_L__part_6);
                result = result.subtract(top_case_tb_L__part_6);
                
            

                // creating part 7 of case top_case_tb_L
                let top_case_tb_L__part_7 = _trackball_wall_fill_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_7_bounds = top_case_tb_L__part_7.getBounds();
                let top_case_tb_L__part_7_x = top_case_tb_L__part_7_bounds[0].x + (top_case_tb_L__part_7_bounds[1].x - top_case_tb_L__part_7_bounds[0].x) / 2
                let top_case_tb_L__part_7_y = top_case_tb_L__part_7_bounds[0].y + (top_case_tb_L__part_7_bounds[1].y - top_case_tb_L__part_7_bounds[0].y) / 2
                top_case_tb_L__part_7 = translate([-top_case_tb_L__part_7_x, -top_case_tb_L__part_7_y, 0], top_case_tb_L__part_7);
                top_case_tb_L__part_7 = rotate([0,0,0], top_case_tb_L__part_7);
                top_case_tb_L__part_7 = translate([top_case_tb_L__part_7_x, top_case_tb_L__part_7_y, 0], top_case_tb_L__part_7);

                top_case_tb_L__part_7 = translate([0,0,0], top_case_tb_L__part_7);
                result = result.union(top_case_tb_L__part_7);
                
            

                // creating part 8 of case top_case_tb_L
                let top_case_tb_L__part_8 = _cover_cap_tb_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_8_bounds = top_case_tb_L__part_8.getBounds();
                let top_case_tb_L__part_8_x = top_case_tb_L__part_8_bounds[0].x + (top_case_tb_L__part_8_bounds[1].x - top_case_tb_L__part_8_bounds[0].x) / 2
                let top_case_tb_L__part_8_y = top_case_tb_L__part_8_bounds[0].y + (top_case_tb_L__part_8_bounds[1].y - top_case_tb_L__part_8_bounds[0].y) / 2
                top_case_tb_L__part_8 = translate([-top_case_tb_L__part_8_x, -top_case_tb_L__part_8_y, 0], top_case_tb_L__part_8);
                top_case_tb_L__part_8 = rotate([0,0,0], top_case_tb_L__part_8);
                top_case_tb_L__part_8 = translate([top_case_tb_L__part_8_x, top_case_tb_L__part_8_y, 0], top_case_tb_L__part_8);

                top_case_tb_L__part_8 = translate([0,0,0], top_case_tb_L__part_8);
                result = result.union(top_case_tb_L__part_8);
                
            

                // creating part 9 of case top_case_tb_L
                let top_case_tb_L__part_9 = _wall_insert_L_case_fn();

                // make sure that rotations are relative
                let top_case_tb_L__part_9_bounds = top_case_tb_L__part_9.getBounds();
                let top_case_tb_L__part_9_x = top_case_tb_L__part_9_bounds[0].x + (top_case_tb_L__part_9_bounds[1].x - top_case_tb_L__part_9_bounds[0].x) / 2
                let top_case_tb_L__part_9_y = top_case_tb_L__part_9_bounds[0].y + (top_case_tb_L__part_9_bounds[1].y - top_case_tb_L__part_9_bounds[0].y) / 2
                top_case_tb_L__part_9 = translate([-top_case_tb_L__part_9_x, -top_case_tb_L__part_9_y, 0], top_case_tb_L__part_9);
                top_case_tb_L__part_9 = rotate([0,0,0], top_case_tb_L__part_9);
                top_case_tb_L__part_9 = translate([top_case_tb_L__part_9_x, top_case_tb_L__part_9_y, 0], top_case_tb_L__part_9);

                top_case_tb_L__part_9 = translate([0,0,0], top_case_tb_L__part_9);
                result = result.subtract(top_case_tb_L__part_9);
                
            
                    return result;
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
            
            

                function full_case_case_fn() {
                    

                // creating part 0 of case full_case
                let full_case__part_0 = top_case_tb_L_case_fn();

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
                let full_case__part_1 = bottom_case_L_case_fn();

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

        