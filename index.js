var finances = [
                        //            0     1
  ['Jan-2010', 867884], // array 0 [date][amount] 
  ['Feb-2010', 984655], // array 1 [date][amount] total = array 1 - array 0 then push value to array 1
  ['Mar-2010', 322013], // array 2 [date][amount] total = array 2 - array 1 then push value to array 2
  ['Apr-2010', -69417], // array 3 [date][amount] 
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099]
  ];


var dollar = new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD', 
  maximumFractionDigits: 0,
});

console.log('Financial Analysis')
console.log('------------------')

// The total number of months included in the dataset.
console.log('Total Months:',finances.length)

// The net total amount of Profit/Losses over the entire period.
var total = 0;
for (var i = 0; i < finances.length; i++) { 
  total += finances[i][1];
}
console.log('Total:', dollar.format(total));


// The average of the changes in Profit/Losses over the entire period.
// You will need to track what the total change in profits is from month to month and then find the average.
var averageNumber = [];
for (var i = 1; i < finances.length; i++) {
  finances[i][1] -= finances[i-1][1];
  averageNumber.push(finances[i][1]);
}

//(Total/Number of months)
var aveTotal = 0;
for (var i = 0; i < averageNumber.length; i++) { 
  aveTotal += averageNumber[i] /= finances.length;
}
console.log('Average Change:', dollar.format(aveTotal));

// let averageChange = [];
// for (let i = 1; i < finances.length; i++) {
//   if (finances[i] % 1) {
//     averageChange = finances[i][1] - finances[i-1]
//   }
// }
// console.log(averageChange);

//2010
// var aba = ''; 
// var acb = '';
// var adc = '';
// var aed = '';
// var afe = '';
// var agf = '';
// var ahg = '';
// var aih = '';
// var aji = '';
// var akj = '';
// var alk = '';
// var aml = '';
// //2011
// var bba = '';
// var bcb = '';
// var bdc = '';
// var bed = '';
// var bfe = '';
// var bgf = '';
// var bhg = '';
// var bih = '';
// var bji = '';
// var bkj = '';
// var blk = '';
// var bml = '';
// //2012
// var cba = '';
// var ccb = '';
// var cdc = '';
// var ced = '';
// var cfe = '';
// var cgf = '';
// var chg = '';
// var cih = '';
// var cji = '';
// var ckj = '';
// var clk = '';
// var cml = '';
// //2013
// var dba = '';
// var dcb = '';
// var ddc = '';
// var ded = '';
// var dfe = '';
// var dgf = '';
// var dhg = '';
// var dih = '';
// var dji = '';
// var dkj = '';
// var dlk = '';
// var dml = '';
// //2014
// var eba = '';
// var ecb = '';
// var edc = '';
// var eed = '';
// var efe = '';
// var egf = '';
// var ehg = '';
// var eih = '';
// var eji = '';
// var ekj = '';
// var elk = '';
// var eml = '';
// //2015
// var fba = '';
// var fcb = '';
// var fdc = '';
// var fed = '';
// var ffe = '';
// var fgf = '';
// var fhg = '';
// var fih = '';
// var fji = '';
// var fkj = '';
// var flk = '';
// var fml = '';
// //2016
// var gba = '';
// var gcb = '';
// var gdc = '';
// var ged = '';
// var gfe = '';
// var ggf = '';
// var ghg = '';
// var gih = '';
// var gji = '';
// var gkj = '';
// var glk = '';
// var gml = '';
// //2017
// var hba = '';
// var hcb = '';

// //2010
// if (finances[1]) {
//   aba = finances[1][1] - finances[0][1];
// }
// if (finances[2]) {
//   acb = finances[2][1] - Number(aba);
// }
// if (finances[3]) {
//   adc = finances[3][1] - Number(acb);
// }
// if (finances[4]) {
//   aed = finances[4][1] - Number(adc);
// }
// if (finances[5]) {
//   afe = finances[5][1] - Number(aed);
// }
// if (finances[6]) {
//   agf = finances[6][1] - Number(afe);
// }
// if (finances[7]) {
//   ahg = finances[7][1] - Number(agf);
// }
// if (finances[8]) {
//   aih = finances[8][1] - Number(ahg);
// }
// if (finances[9]) {
//   aji = finances[9][1] - Number(aih);
// }
// if (finances[10]) {
//   akj = finances[10][1] - Number(aji);
// }
// if (finances[11]) {
//   alk = finances[10][1] - Number(akj);
// }
// if (finances[12]) {
//   aml = finances[10][1] - Number(alk);
// }

// console.log(aba);
// console.log(acb);

//-------------------------------------------------------//

//let dateValue = [];
// let amountValue = [];

// for (let i = 0; i < finances.length; i++) {
//   dateValue.push(finances[i][0]);
// }
// console.log(dateValue);


// for (let i = 0; i < finances.length; i++) {
//   if (finances[i] % 2){
  
//   }
// }
// console.log(amountValue);


// The greatest increase in profits (date and amount) over the entire period.
var largest = 0;
for (var l = 0; l < finances.length; l++) {
  if (finances[l][1] > largest) {
  largest = finances[l][1];
  }
}
console.log('Greatest Increase in Profits: ',finances[l], dollar.format(largest));

// The greatest decrease in losses (date and amount) over the entire period.
var largest = 0;
for (var d = 0; l < finances.length; d++) {
  if (finances[d][1] >= largest) {
  largest = finances[d][1];
  }
}
console.log('Greatest decrease in Profits: ',finances[d], dollar.format(largest));
