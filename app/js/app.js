(function() {
  var app = angular.module('app', []);

  app.controller('StoreController', function($rootScope){
    $rootScope.menuItem = menuJSON;
    $rootScope.table = tableJSON;

    this.orderView = true;
    this.tables = $rootScope.table;
    $rootScope.noOfPeople = {
        no: 12
    };
      this.clearCart = function(index){
      var tempTable = this.tables[index];
      tempTable.occupied=false;
      tempTable.orders = [];
      tempTable.total = 0;
    };
  });

  app.controller('MenuController',['$rootScope', '$filter', function($rootScope,$filter){
    this.menuItem = $rootScope.menuItem;
    this.table = $rootScope.table;
    this.people = $rootScope.noOfPeople.no;
    console.log(this.people);

    this.tableNo = 1;
    this.item = function(name, price, cost, quantity){
      this.name = name,
      this.price = price,
      this.cost = cost,
      this.quantity = quantity
    };

    this.addMenu = function(item){
      var tempTable = this.table[this.tableNo-1];
      if(tempTable == undefined){
        alert('Please select a table first!');
        return;
      }
      tempTable.occupied=true;
      var found = $filter('filter')(tempTable.orders, {name:item.name}, true)[0];
      if(found == undefined){
        tempTable.orders.push(new this.item(item.name, item.price, item.price, 1));
      }
      else{
        found.quantity++;
        found.price += item.price;
      }
    };

    this.removeItem = function(order)
    {
        var tempTable = this.table[this.tableNo-1];
        var index = tempTable.orders.indexOf(order);
        tempTable.orders.splice(index, 1);
    };

    this.clearCart = function(){
      var tempTable = this.table[this.tableNo-1];
      tempTable.occupied=false;
      tempTable.orders = [];
      tempTable.total = 0;
    };

    this.getTotal = function(tempTable){
      var total = 0;
      angular.forEach(tempTable.orders, function(item){
        total += item.price;
      });
      tempTable.total = total;
      return total;
    };

    this.getItems = function(menu){
      var total = 0;
      angular.forEach(menu, function(item){
        total += item.quantity;
      });
      return total;
    };

    this.removeOne = function(order){
      if(order.quantity == 1){
        var tempTable = this.table[this.tableNo -1];
        var index = tempTable.orders.indexOf(order);
        //console.log(index);
        if(index > -1)
          tempTable.orders.splice(index, 1);
      }
      else{
        order.price -= order.cost;
        order.quantity--;
      }
    };

    this.addOne = function(order){
      order.quantity++;
      order.price += order.cost;
    }

    this.mainsSelection = function(){
      console.log("");
    }

// Raw printing with single string

this.printBill = function(){
      console.log('Entering printBill');
      var items = this.table[this.tableNo - 1].orders;
      var printString = '';
      var count = 0;
      var total = 0;
      //var date = new Date;
      printString += '\x1B\x40';
      printString += '\x1B\x61\x31';
      printString += '\x1B\x45\x0D';
      printString += '\x1D\x21\x11';// double font size
      printString += 'Papa Satay\x0A';
      printString += '\x0A'; //line Space
      printString += '\x1D\x21\x00' // standard font size;
      printString += '22 Allen Street, Te Aro, Wellington\x0A';
      printString += '\x0A'; //line Break
      printString += 'ph: 04 385 7709\x0A';
      printString += '\x0A';
      printString += 'GST No: 119-960-851';
      printString += '\x0A\x0A';
      printString += '\x1B\x61\x30';
      printString += '__________________________________________';
      printString += 'Item Name      ' + '\x09' + '   Quantity' + '\x09' + 'Price' + '\x0A';
      printString += '__________________________________________';
      printString += '\x0A'; //line Break\
      printString += '\x1B\x45\x0A';

      angular.forEach(items, function(item){
        var tab = '';
    		if(item.name.length >= 15)
    			tab = '\x09';
    		else if (item.name.length <= 7) {
    		  tab = '\x09\x09\x09';
    		}
        else {
          tab = '\x09\x09';
        }

        printString += item.name + tab + item.quantity + '\x09' + $filter('currency')(item.price) + '\x0A';
        total += item.price;

      })

      printString += '\x1B\x45\x0D';
      // printString += '-------------------------------';
      printString += '__________________________________________';
      printString += '\x0A'; //line Break
      printString += '\x09\x09\x09';
      printString += 'Total:  '+ $filter('currency')(total);
      printString += '\x0A'; //line Break
      // printString += '------------------------------------------';
      printString += '__________________________________________';
      printString += '\x0A'; //line Break
      printString += '\x1B\x45\x0A';
      printString += '\x1B\x61\x31';
      printString += '\x0A'; //line Break
      printString += '!!!    Thankyou    !!!';
      printString += '\x0A'; //line Break
      printString += 'Please Come Again';
      printString += '\x0A'; //line Break
      printString += 'please give feedback on tripadvisor';
      printString += '\x0A'; //line Break
      printString += '\x0A\x0A\x0A\x0A\x0A\x0A';
      printString += '\x1B\x69'; //paper cut
      printString += '\x10\x14\x01\x00\x05'; //tilt opening
      printerPrint(printString);

    }

    this.buttonNumber = function(num){
      this.tableNo = num;
      console.log(this.tableNo);
    }

    this.setPeople = function(){
      console.log('calling setPeople');
      var tablePeople = this.table[this.tableNo - 1].people;
      tablePeople = this.people;
      console.log(tablePeople);
    }


  }]);

})();
