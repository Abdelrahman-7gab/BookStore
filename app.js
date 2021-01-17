var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
var olddataArray = [];
var fs = require('fs');
var booksarray = ["Lord of the Flies","The Grapes of Wrath","Leaves of Grass","The Sun and Her Flowers","Dune","To Kill a Mockingbird"];
var userwishlist=[];
var Arraynumber = -1;
//var Uname = "";
var UUarray = [];
const { render } = require('ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.get('/',function(req,res){
  res.render('login',{status: ""});
}); 

app.get('/novel',function(req,res){
  res.render('novel')
});

app.get('/poetry',function(req,res){
  res.render('poetry')
}); 

app.get('/fiction',function(req,res){
  res.render('fiction')
}); 

app.get('/readlist',function(req,res){

var book1 = "";
var book2 = ""; 
var book3 = ""; 
var book4 = ""; 
var book5 = ""; 
var book6 = "";

  if(UUarray[1] == true)
  book1 = "Lord of the Flies"

  if(UUarray[2] == true)
  book2 = "The Grapes of Wrath"

  if(UUarray[3] == true)
  book3 = "Leaves of Grass"

  if(UUarray[4] == true)
  book4 = "The Sun and Her Flowers"

  if(UUarray[5] == true)
  book5 = "Dune"

  if(UUarray[6] == true)
  book6 = "To Kill a Mockingbird"

  res.render('readlist', {bookOne: book1,bookTwo: book2,bookThree: book3,bookFour: book4,bookFive: book5,bookSix: book6})
  
}); 

app.get('/registration',function(req,res){
  res.render('registration',{status: ""})
}); 

app.get('/flies',function(req,res){
  res.render('flies',{status:""})
}); 

app.get('/grapes',function(req,res){
  res.render('grapes',{status:""})
}); 

app.get('/leaves',function(req,res){
  res.render('leaves',{status:""})
}); 

app.get('/sun',function(req,res){
  res.render('sun',{status:""})
}); 

app.get('/dune',function(req,res){
  res.render('dune',{status:""})
}); 

app.get('/mockingbird',function(req,res){
  res.render('mockingbird',{status:""})
}); 

app.get('/book1wishlist',function(req,res){
 if(UUarray[1] == false){
   UUarray[1] = true;
   userwishlist[Arraynumber] = UUarray;
   fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
   res.render('flies',{status:"Book Successfully added to your wishlist"})
  }
  else{
    res.render('flies',{status:"Error, Book already exists in the wishlist"})
  }
}); 

app.get('/book2wishlist',function(req,res){
  if(UUarray[2] == false){
    UUarray[2] = true;
    userwishlist[Arraynumber] = UUarray;
    fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
    res.render('grapes',{status:"Book Successfully added to your wishlist"})
   }
   else{
     res.render('grapes',{status:"Error, Book already exists in the wishlist"})
   }
 });
 
 app.get('/book3wishlist',function(req,res){
  if(UUarray[3] == false){
    UUarray[3] = true;
    userwishlist[Arraynumber] = UUarray;
    fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
    res.render('leaves',{status:"Book Successfully added to your wishlist"})
   }
   else{
     res.render('leaves',{status:"Error, Book already exists in the wishlist"})
   }
 }); 

 app.get('/book4wishlist',function(req,res){
  if(UUarray[4] == false){
    UUarray[4] = true;
    userwishlist[Arraynumber] = UUarray;
    fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
    res.render('sun',{status:"Book Successfully added to your wishlist"})
   }
   else{
     res.render('sun',{status:"Error, Book already exists in the wishlist"})
   }
 }); 

 app.get('/book5wishlist',function(req,res){
  if(UUarray[5] == false){
    UUarray[5] = true;
    userwishlist[Arraynumber] = UUarray;
    fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
    res.render('dune',{status:"Book Successfully added to your wishlist"})
   }
   else{
     res.render('dune',{status:"Error, Book already exists in the wishlist"})
   }
 }); 

 app.get('/book6wishlist',function(req,res){
  if(UUarray[6] == false){
    UUarray[6] = true;
    userwishlist[Arraynumber] = UUarray;
    fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));
    res.render('mockingbird',{status:"Book Successfully added to your wishlist"})
   }
   else{
     res.render('mockingbird',{status:"Error, Book already exists in the wishlist"})
   }
 }); 


app.post('/search',function(req,res){

var bookboolean = [false,false,false,false,false,false];
var bookfound = false;
var userinput = req.body.Search;
var book1 = "";
var book2 = ""; 
var book3 = ""; 
var book4 = ""; 
var book5 = ""; 
var book6 = "";

  for(i = 0; i<6;i++){
    if (booksarray[i].toUpperCase().includes(userinput.toUpperCase())){

      bookboolean[i] = true;
      bookfound = true;
    }

    
  }

  if(bookboolean[0] == true)
  book1 = "Lord of the Flies"

  if(bookboolean[1] == true)
  book2 = "The Grapes of Wrath"

  if(bookboolean[2] == true)
  book3 = "Leaves of Grass"

  if(bookboolean[3] == true)
  book4 = "The Sun and Her Flowers"

  if(bookboolean[4] == true)
  book5 = "Dune"

  if(bookboolean[5] == true)
  book6 = "To Kill a Mockingbird"

  if(bookfound == true)
  res.render('searchresults', {status: "",bookOne: book1,bookTwo: book2,bookThree: book3,bookFour: book4,bookFive: book5,bookSix: book6})
  if(bookfound == false)
  res.render('searchresults',{status: "This book is not found",bookOne:"",bookTwo:"",bookThree:"",bookFour:"",bookFive:"",bookSix:""})
}); 

app.post('/',function(req,res){
  var flag = false;
  var user = {
    name : req.body.username,
    password : req.body.password
  };
  olddataArray = JSON.parse(fs.readFileSync('users.json'));
  for(i =0;i<olddataArray.length;i++){
    if(JSON.stringify(user) === JSON.stringify(olddataArray[i]))
    flag = true;
  }
  if(flag){
  res.render('home',{Name:req.body.username });
  //Uname = req.body.username;
  req.session.user = user.name
    req.session.save()
    userwishlist = JSON.parse(fs.readFileSync('wishlist.json'));
  for(i=0;i<userwishlist.length;i++){
    if((userwishlist[i])[0] == req.session.user){
    UUarray = userwishlist[i];
    Arraynumber = i;
  }}}
  else{
    res.render('login', {status: "Wrong username or password"});
  }
  
}); 

app.post('/register',function(req,res){
       var user = {
       name : req.body.username,
       password : req.body.password
                };

var flag = false;
olddataArray = JSON.parse(fs.readFileSync('users.json'));
for(i = 0; i<olddataArray.length;i++){
  if(JSON.stringify(user.name) === JSON.stringify(olddataArray[i].name))
  flag = true;
}

 if(flag == true)
  res.render('registration',{status: "Username already exists"})


if(flag == false){
res.render('registration',{status: "Registration successful"})
olddataArray.push(user);
arrayString = JSON.stringify(olddataArray);
fs.writeFileSync('users.json',arrayString);
userwishlist = JSON.parse(fs.readFileSync('wishlist.json'));

var userarray=[req.body.username,false,false,false,false,false,false];
userwishlist.push(userarray);
fs.writeFileSync('wishlist.json',JSON.stringify(userwishlist));

}
}); 


if(process.env.PORT){
	app.listen(process.env.PORT,function() {console.log('Server started')});
}

else{
	app.listen(3000,function() {console.log('Server started on port 3000')});
}


module.exports = app;