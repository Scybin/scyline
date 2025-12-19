function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-159],[89,-84]]).appendArc([91,-82],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.2089429,-82]).appendArc([108.1392953,-81.3666667],{"radius":1,"clockwise":false,"large":false}).appendArc([110,-80.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([126,-80.1]).appendArc([127,-79.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([127,-69.56]).appendArc([129,-67.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([145,-67.56]).appendArc([146,-66.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-64.81]).appendArc([148,-62.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([166,-62.81]).appendArc([168,-64.81],{"radius":2,"clockwise":true,"large":false}).appendPoint([168,-66.56]).appendArc([169,-67.56],{"radius":1,"clockwise":false,"large":false}).appendPoint([185,-67.56]).appendArc([187,-69.56],{"radius":2,"clockwise":true,"large":false}).appendPoint([187,-70.41]).appendPoint([222.85,-70.41]).appendArc([224.85,-72.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.85,-166.41]).appendArc([222.85,-168.41],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.7562262,-168.41]).appendArc([166.5866456,-168.4244837],{"radius":1,"clockwise":false,"large":false}).appendPoint([148.6137251,-171.517136]).appendArc([147.2282325,-171.2505654],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.6758109,-159.247769]).appendArc([127.1526453,-159.1],{"radius":1,"clockwise":false,"large":false}).appendPoint([111.7910571,-159.1]).appendArc([110.8607047,-159.7333333],{"radius":1,"clockwise":false,"large":false}).appendArc([109,-161],{"radius":2,"clockwise":true,"large":false}).appendPoint([91,-161]).appendArc([89,-159],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        