var teacherName = "Susan Baylor";
var teacherDepartment = "Physics";
var mrJones = [2.0, 5.0, 3.5, 4.8, 7.4];


//var teacherAvgRating = (teacherRating1 + teacherRating2 + teacherRating3) / 3;
//teacherAvgRating = Math.round( teacherAvgRating * 10 ) / 10;//

//turn the above into a function//


function getRatingAvg (teacherRating) {
  var total = 0;
  for (var i=0; i < teacherRating.length; i++ ) {
     total += teacherRating[i]
  }
var avg = total / teacherRating.length;
avg = avg.toFixed((2));
console.log (avg);
}


getRatingAvg(mrJones);
