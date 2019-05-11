var app = angular.module("myApp", ["ngRoute"]);



app.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    templateUrl : "templates/home.html",
    controller: "homeController"
  })
  .when("/mobile", {
    templateUrl : "templates/mobile.html",
    controller: "mobileController"
  })
  .when("/laptop", {
    templateUrl : "templates/laptop.html",
    controller: "laptopController"
  })
  .when("/clothes", {
    templateUrl : "templates/clothes.html",
    controller: "clothesController"
  })
  .when("/soft_toys", {
    templateUrl : "templates/soft_toys.html",
    controller: "softToysController"
  })
  .when("/pendrive", {
    templateUrl : "templates/pendrive.html",
    controller: "pendriveController"
  })
  .otherwise({
    redirectTo: "/home"
  });
});

app.controller('homeController', function($scope) {
  $scope.products = [
      {name: "Apple iPhone 8", 
       srce:"images/mobile/mobile5.jpeg" ,
       price: 67499,
       desc: "* 64 GB ROM * 12MP Rear camera * 7MP Front Camera * lithium-ion Battery "
      },
      {name: "Levi's boys cotton T shirt", 
       srce:"images/clothes/clothe6.jpeg", 
       price : 749, 
       desc: "Levi's Boys Solid Cotton T Shirt  (Blue, Pack of 1) * age : 12-13 yrs " , 
       category : "kids" 
      },
      {name: "SHOPMELIVE SML-ELEP", 
       srce:"images/soft_toys/toy3.jpeg",
       price : 262 , 
       desc: " Mother elephant with two babies soft toy - 40 cm - 41 cm (Bron) " 
      }, 
      {name: "Hello Kitty Pendrive", 
       srce:"images/pendrives/pendrive4.jpeg", 
       price : 699, 
       desc: "* USB 2.0 | 8 GB *  Rubber * For Laptop, Audio Player, Desktop Computer, Televison * Color : Muticolor " , 
       capacity : 8 
     }              
  ];
  $scope.corosel_image=["images/coro/image1.jpg","images/coro/image2.jpg","images/coro/image3.jpg"];
  $scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }
});

app.controller('mobileController', function($scope) {
 $scope.mobiles =[
            {name: "Samsung Galaxy S9 plus", 
            srce:"images/mobile/mobile1.png", 
            price : 68900, 
            desc: "* 6 GB RAM | 128 GB ROM\n* 12MP + 12MP dual rear camera\n* 8MP front camera\n* battery : 3500 mAh" 
            },
            {name: "Samsung J4", 
            srce:"images/mobile/mobile2.jpg",  
            price: 9990, 
            desc:"* 2 gb RAM | 16 GB ROM\n* 13MP rear camera\n* 5MP front camera\n*battery 3000 mAh"
            },
            {name: "Redmie Note 5 pro", 
            srce:"images/mobile/mobile3.jpg", 
            price: 14999,
            desc : "*4 GB RAM | 64 GB ROM\n* 12MP + 5MP dual rear camera\n* 20MP front camera\n* battery : 4000 mAh li polymer battery" 
            }, 
            {name: "Redmie Note 5", 
             srce:"images/mobile/mobile4.jpg" , 
             price: 9999,
             desc: "* 3 GB RAM | 32 GB ROM\n*  12 MP rear camera\n* 5 MP front camera\n* 4000 mAh li polymer battery" 
             },
            {name: "Apple iPhone 8", 
             srce:"images/mobile/mobile5.jpeg" ,
             price: 67499,
            desc: "* 64 GB ROM * 12MP Rear camera * 7MP Front Camera * lithium-ion Battery "
            },
            {name: "VIVO V9 Youth", 
            srce:"images/mobile/mobile6.jpg" ,
            price:18990, 
            desc: "* 4GB RAM | 32 GB ROM * 16MP + 2MP Dual Rear Camera | 16MP Front camera * 3260 mAh li-ion Battery "
            }];
  
  $scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }
});

app.controller('laptopController', function($scope) {
  $scope.laptops=[
                 {name: "Acer Aspire 3", 
                srce:"images/laptop/laptop2.jpeg", 
                price : 27990, 
                desc: "* Intel Core i3 Processor (7th Gen) * 4 GB DDR4 RAM * 1 TB HDD * Linux/Ubuntu Operating System * 15.6 inch Display" 
                },
                {name: "Lenovo Ideapad 320", 
                srce:"images/laptop/laptop1.jpg",  
                price: 30990 ,
                 desc:"* Intel Core i3 Processor (6th Gen) * 4 GB DDR4 RAM * 1 TB HDD * DOS Operating System * 15.6 inch Display "
                },
                {name: "HP Pavilion x360", 
                srce:"images/laptop/laptop5.jpeg", 
                price: 55990 ,
                desc :"* Intel Core i5 Processor (8th Gen) * 8 GB DDR4 RAM * 1 TB HDD|8 GB SSD * 64 bit windows 10 Operating System * 14 inch touchscreen Display " 
                },
                {name: "Acer Aspire 5", 
                srce:"images/laptop/laptop3.jpeg",
                price: 47490, 
                desc: "Intel Core i5 Processor (8th Gen) * 8 GB DDR4 RAM * 1 TB HDD * Linux/Ubuntu Operating System * 15.6 inch Display"
                },
                {name: "Dell inspiron 14 3000", 
                srce:"images/laptop/laptop6.jpeg" ,
                price: 26989,
                desc: "* Intel Core i3 Processor (6th Gen) * 4 GB DDR4 RAM * 1 TB HDD * 64 bit Windows 10 Operating System * 14 Display "
                },
                {name: "Apple MacBook Air", 
                srce:"images/laptop/laptop4.jpeg" ,
                price:54989, 
                desc: "* Intel Core i5 Processor (5th Gen) * 8 GB DDR3 RAM * 1 TB HDD|128 GB SSD * 64 bit Mac OS Operating System * 13.3 inch touchscreen Display " 
                }];

  $scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }
  
});

app.controller('clothesController', function($scope) {
  $scope.clothes=[
    {name: "Zeppellin Men's Solid Formal Shirt", 
    srce:"images/clothes/clothe1.jpeg", 
    price : 371, 
    desc: " * mens formal * full hand * free shipping" , 
    category : "men" },
    {name: "BIS creation Men's Shorts", 
    srce:"images/clothes/clothe2.jpeg", 
    price : 400, 
    desc: " BIS Creations Self Design Men Red, Blue, Yellow Regular Shorts " , 
    category : "men" },
    {name: "Embroided Lehenga Choli", 
    srce:"images/clothes/clothe3.jpeg", 
    price : 1199, 
    desc: "* unstitched material * colour: Beige,red * free shipping", 
    category : "women" },
    {name: "Women's 3/4th Sleeve top ", 
    srce:"images/clothes/clothe4.jpeg", 
    price : 405, 
    desc: " Rare Casual 3/4th Sleeve Solid Women's Pink Top * free shipping  * cod not applicable ",
    category : "women" },
    {name: "Full length party dress", 
    srce:"images/clothes/clothe5.jpeg", 
    price : 599, 
    desc: " Tiny Toon Girls Maxi/Full Length Party Dress  (Light Green, Sleeveless) * age : 9-10 yrs ",
    category : "kids" },
    {name: "Levi's boys cotton T shirt", 
    srce:"images/clothes/clothe6.jpeg", 
    price : 749, 
    desc: "Levi's Boys Solid Cotton T Shirt  (Blue, Pack of 1) * age : 12-13 yrs " , 
    category : "kids" }];
  
  $scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }

});

app.controller('softToysController', function($scope) {
  $scope.toys = [
   {name: "Caterpillar soft toy", 
   srce:"images/soft_toys/toy1.jpeg", 
   price : 209 , 
   desc: "PIST Soft Toys Caterpillar 55 Cm Multicolor - 55 cm  (Multicolor)" 
   },
   {name: "Giant Pink Teddy ", 
   srce:"images/soft_toys/toy2.jpeg",
   price : 998, 
   desc: " CLICK4DEAL Soft lovable hugable cute teddy bear Pink - 122 cm  (Pink) " 
   },
   {name: "SHOPMELIVE SML-ELEP", 
   srce:"images/soft_toys/toy3.jpeg",
   price : 262 , 
   desc: " Mother elephant with two babies soft toy - 40 cm - 41 cm (Bron) " 
   },
   {name: "Toy Mela Joker", 
   srce:"images/soft_toys/toy4.jpeg",
   price : 599, 
   desc: " Toy Mela Joker / Clown Multi-Colur Plush Super Cute 38cm Imported Best Cartoon Figure - 38 cm  (Multicolor)" 
   },
   {name: "Pink Teddy bear", 
   srce:"images/soft_toys/toy5.jpeg",
   price : 474, 
   desc: "Ultra Angel Teddy Soft Toy - 15 inch  (Pink)" 
   },
   {name: "Dimpy penguin", 
   srce:"images/soft_toys/toy6.jpg",
  price : 265, 
  desc: "funny land Stuff Penguin with Ear Muffs, Blue (20cm)" 
  }];

$scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }
});

app.controller('pendriveController', function($scope) {
 $scope.pendrives = [
   {name: "Sandisk Cruzer Blade 16 GB", 
    srce:"images/pendrives/pendrive1.jpeg", 
    price : 425 , 
    desc: "* USB 2.0 | 16 GB * plastic * For Laptop, Desktop Computer * Color : Red and Black" , 
    capacity: 16},
   {name: "Sandisk Cruzer Blade 32 GB", 
    srce:"images/pendrives/pendrive2.jpeg", 
    price : 679, 
    desc: "* USB 2.0 | 32 GB * plastic * For Laptop, Desktop Computer * Color : Red and Black" , 
    capacity: 32 },
   {name: "HP V215b USB Flash Drive", 
    srce:"images/pendrives/pendrive3.jpeg", 
    price : 665 , 
    desc: "* USB 2.0 | 32 GB * Metal * For Laptop, Audio Player, Desktop Computer, Televison * Color : Silver " , 
    capacity : 32 },
   {name: "Hello Kitty Pendrive", 
    srce:"images/pendrives/pendrive4.jpeg", 
    price : 699, 
    desc: "* USB 2.0 | 8 GB *  Rubber * For Laptop, Audio Player, Desktop Computer, Televison * Color : Muticolor " , 
    capacity : 8 },
   {name: "Sandisk 64 GB Pendrive", 
    srce:"images/pendrives/pendrive5.jpeg",
    price : 1699, 
    desc: "* USB 3.0 | 64 GB * plastic * For Laptop, Desktop Computer * Color : Black" , 
    capacity: 64 },
   {name: "Microware 16 Gb Pendrive", 
    srce:"images/pendrives/pendrive6.jpeg",
    price : 799, 
    desc: "* Bullet Metal Shape * USB 2.0 | 16 Gb * Metal * Color : Silver" , 
    capacity : 16 }];

  $scope.searchBelow = function(item) {
    if($scope.below == undefined || $scope.below == 0){
      return true;
    }
    else{
      if(item.price < $scope.below){
       return true;
      }
      else{
        false
      }
    }
  }
  $scope.searchAbove = function(item) {
    if($scope.above == undefined ){
      return true;
    }
    else{
      if(item.price > $scope.above){
       return true;
      }
      else{
        false
      }
    }
  }

});



