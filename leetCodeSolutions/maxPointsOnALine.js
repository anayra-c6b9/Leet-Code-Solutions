// Given an array of points where points[i] = [xi, yi]
// represents a point on the X-Y plane, return the
// maximum number of points that lie on the same straight line.

/* _Constraints_ 
    1 <= points.length <= 300
    points[i].length == 2
    -10^4 <= xi, yi <= 10^4
    All the points are unique.
*/

var maxPoints = function(points) {

  // if there are duplicate points
  // uncomment the below code
  // there were no duplicate points
  // in the testcases in leetcode

  /* points = points
           .map(JSON.stringify)
           .filter((e,i,a) => i === a.indexOf(e))
           .map(JSON.parse) 
  */

  let len = points.length
  let _max = 1 // max number of points

  var _getLine = function(i,j,k) {
    var jx = points[j][0] - points[i][0]
    var jy = points[j][1] - points[i][1]

    var kx = points[k][0] - points[i][0]
    var ky = points[k][1] - points[i][1]

    if(kx*jy-ky*jx == 0) return true
    return false
  }

  for(var i = 0; i < len; i++){
    var pts = 1
    for(var j = i+1; j < len; j++){
      pts = 2
      for(var k = j+1; k < len; k++){
	if(_getLine(i,j,k))
	  pts++
      }
      _max = Math.max(_max,pts)
    }
  }
  

  return _max

};

