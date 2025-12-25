function bottom_lip_wall_extrude_8_outline_fn(){
    return new CSG.Path2D([[91,-159],[91,-84]]).appendPoint([110,-84]).appendPoint([110,-82.1]).appendPoint([129,-82.1]).appendPoint([129,-69.56]).appendPoint([148,-69.56]).appendPoint([148,-64.81]).appendPoint([166,-64.81]).appendPoint([166,-69.56]).appendPoint([185,-69.56]).appendPoint([185,-72.41]).appendPoint([224,-72.41]).appendPoint([224,-166.41]).appendPoint([166.5,-166.41]).appendPoint([148.2745638,-169.5461034]).appendPoint([128,-157.1]).appendPoint([109,-157.1]).appendPoint([109,-159]).appendPoint([91,-159]).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}


function bottom_lip_cut_extrude_8_outline_fn(){
    return new CSG.Path2D([[93,-157],[93,-86]]).appendPoint([111.9023795,-86]).appendPoint([111.9974984,-84.1]).appendPoint([131,-84.1]).appendPoint([131,-71.56]).appendPoint([150,-71.56]).appendPoint([150,-66.81]).appendPoint([164,-66.81]).appendPoint([164,-71.56]).appendPoint([183,-71.56]).appendPoint([183,-74.41]).appendPoint([222,-74.41]).appendPoint([222,-164.41]).appendPoint([166.3291823,-164.41]).appendPoint([148.6783912,-167.4472226]).appendPoint([128.5649032,-155.1]).appendPoint([107.0976205,-155.1]).appendPoint([107.0025016,-157]).appendPoint([93,-157]).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}


function xlBoard_extrude_2_outline_fn(){
    return new CSG.Path2D([[87,-159],[87,-84]]).appendArc([91,-80],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.5955911,-80]).appendArc([110,-78.1],{"radius":4,"clockwise":true,"large":false}).appendPoint([125,-78.1]).appendPoint([125,-69.56]).appendArc([129,-65.56],{"radius":4,"clockwise":true,"large":false}).appendPoint([144,-65.56]).appendPoint([144,-64.81]).appendArc([148,-60.81],{"radius":4,"clockwise":true,"large":false}).appendPoint([166,-60.81]).appendArc([170,-64.81],{"radius":4,"clockwise":true,"large":false}).appendPoint([170,-65.56]).appendPoint([185,-65.56]).appendArc([188.8311226,-68.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([224,-68.41]).appendArc([228,-72.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([228,-166.41]).appendArc([224,-170.41],{"radius":4,"clockwise":true,"large":false}).appendPoint([166.8416355,-170.41]).appendPoint([148.9528863,-173.4881687]).appendArc([146.1819012,-172.9550275],{"radius":4,"clockwise":true,"large":false}).appendPoint([126.8701935,-161.1]).appendPoint([112.4044089,-161.1]).appendArc([109,-163],{"radius":4,"clockwise":true,"large":false}).appendPoint([91,-163]).appendArc([87,-159],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
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
    return CAG.circle({"center":[222.75,-168.41],"radius":1.1})
.union(
    CAG.circle({"center":[91,-161],"radius":1.1})
).union(
    CAG.circle({"center":[224,-70.41],"radius":1.1})
).union(
    CAG.circle({"center":[91,-82],"radius":1.1})
).extrude({ offset: [0, 0, 2] });
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
                let bottom_case__part_0 = bottom_lip_wall_extrude_8_outline_fn();

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
                let bottom_case__part_1 = bottom_lip_cut_extrude_8_outline_fn();

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
                
            

                // creating part 4 of case bottom_case
                let bottom_case__part_4 = _base_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_4_bounds = bottom_case__part_4.getBounds();
                let bottom_case__part_4_x = bottom_case__part_4_bounds[0].x + (bottom_case__part_4_bounds[1].x - bottom_case__part_4_bounds[0].x) / 2
                let bottom_case__part_4_y = bottom_case__part_4_bounds[0].y + (bottom_case__part_4_bounds[1].y - bottom_case__part_4_bounds[0].y) / 2
                bottom_case__part_4 = translate([-bottom_case__part_4_x, -bottom_case__part_4_y, 0], bottom_case__part_4);
                bottom_case__part_4 = rotate([0,0,0], bottom_case__part_4);
                bottom_case__part_4 = translate([bottom_case__part_4_x, bottom_case__part_4_y, 0], bottom_case__part_4);

                bottom_case__part_4 = translate([0,0,0], bottom_case__part_4);
                result = result.subtract(bottom_case__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_case_fn();
            }

        