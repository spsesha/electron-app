// function receiving the total and stuff

//
var config;
// var printerName;
// (function(){
//   console.log("THE function is running");
//   qz.websocket.connect().then(function() {
//      alert("Connected!");
//   });
//   //console.log(loadDataFromStorage());
// })();

(function(){
  console.log("Establishing connection");
  qz.websocket.connect().then(function() {
    return qz.printers.find("EPSON");
  }).then(function(printer){
    config = qz.configs.create(printer);
    console.log(config);
  });
})();

function printerPrint(printString){
  console.log("Printer Function running");
  console.log(printString);
  var data = [printString];
  qz.print(config, data).then(function(){
    alert('Printed!');
  });
}


// function printerPrint(printData){
//   // console.log("Printer Function running");
//   // console.log(printData);
//   // var data = [
//   //    '\x1B' + '\x40',          // init
//   //    '\x1B' + '\x61' + '\x31', // center align
//   //    '\x1B' + '\x45' + '\x0D', // bold on
//   //    'Papa Satay' + '\x0A',
//   //    '\x1B' + '\x45' + '\x0A', // bold off
//   //    '\x0A',                   // line break
//   //    '22 Allen Street, Te Aro, Wellington' + '\x0A',     // text and line break
//   //    '\x0A',                   // line break
//   //    '\x0A',                   // line break
//   //    'July 20, 2017 05:13 PM' + '\x0A',
//   //    '\x0A',                   // line break
//   //    '\x0A',                   // line break
//   //    'GST No : 119-960-851' + '\x0A',
//   //    '\x0A',
//   //    '\x0A',
//   //    '\x0A',
//   //    '\x1B' + '\x61' + '\x30', // left align
//   //    printData,
//   //    '\x1B' + '\x74' + '\x13' + '\xAA', //print special char symbol after numeric
//   //    '\x0A',
//   //    '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A',
//   //    '\x1B' + '\x69',          // cut paper
//   //    '\x10' + '\x14' + '\x01' + '\x00' + '\x05',  // Generate Pulse to kick-out cash drawer**
//   //                                                 // **for legacy drawer cable CD-005A.  Research before using.
//   // ];
//   // qz.print(config, data).then(function(){
//   //   alert('Printed!');
//   // });
//
//   var data = [{
//      type: 'html',
//      format: 'file', // or 'plain' if the data is raw HTML
//      data: 'print.html'
//   }];
//   qz.print(config, data).catch(function(e) { console.error(e); });
//
// }

// testing the print.js with QZ
//
// var printerName
//
// (function(){
//   console.log("THE function is running");
//   qz.websocket.connect().then(function() {
//      alert("Connected!");
//     //  var total = MenuController.getTotal();
//      console.log("total is ="+total);
//   });
// })();
//
// function findPrinters() {
//   qz.printers.find("EPSON").then(function(found) {
//     // console.log("printers");
//     alert("Printer: " + found);
//     printerName = found;
//     printPos(found);
//
//   });
// }
//
// function printToPos (data){
// var config = qz.configs.create(printerName);
//   console.log(data);
//     var data = [
//        '\x1B' + '\x40',          // init
//        '\x1B' + '\x61' + '\x31', // center align
//         '\x1B' + '\x45' + '\x0D', // bold On
//        'Papa Satay' + '\x0A',
//        '\x0A',                   // line break
//        '18-24 Allen Street, Wellington' + '\x0A',     // text and line break
//        '\x0A',                   // line break
//        '\x0A',                   // line break
//        'May 18, 2016 10:30 AM' + '\x0A',
//        '\x0A',                   // line break
//        '\x0A',                   // line break
//        '\x0A',
//        'GST No : 119-960-851' + '\x0A',
//        '\x0A',
//        '\x0A',
//        '\x0A',
//        '\x1B' + '\x45' + '\x0A', // bold off
//        '\x1B' + '\x61' + '\x30', // left align
//        'Baklava (Qty 4)       9.00' + '\x1B' + '\x74' + '\x13' + '\xAA', //print special char symbol after numeric
//        '\x0A',
//        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\x0A',
//        '\x1B' + '\x45' + '\x0D', // bold on
//        'Here\'s some bold text!',
//        '\x0A',
//        '\x1B' + '\x45' + '\x0A', // bold off
//        '\x1D' + '\x21' + '\x11', // double font size
//        'Here\'s large text!',
//        '\x0A',
//        '\x1D' + '\x21' + '\x00', // standard font size
//        '\x1B' + '\x61' + '\x32', // right align
//        '\x1B' + '\x21' + '\x30', // em mode on
//        'DRINK ME',
//        '\x1B' + '\x21' + '\x0A' + '\x1B' + '\x45' + '\x0A', // em mode off
//        '\x0A' + '\x0A',
//        '\x1B' + '\x61' + '\x30', // left align
//        '------------------------------------------' + '\x0A',
//        '\x1B' + '\x4D' + '\x31', // small text
//        'EAT ME' + '\x0A',
//        '\x1B' + '\x4D' + '\x30', // normal text
//        '------------------------------------------' + '\x0A',
//        'normal text',
//        '\x1B' + '\x61' + '\x30', // left align
//        '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A',
//        '\x1B' + '\x69',          // cut paper
//        '\x10' + '\x14' + '\x01' + '\x00' + '\x05',  // Generate Pulse to kick-out cash drawer**
//                                                     // **for legacy drawer cable CD-005A.  Research before using.
//     ];
//
//     qz.print(config, data).catch(function(e) { console.error(e); });
// }
