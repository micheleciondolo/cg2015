var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];


function select (data,key,values) {
  return data.filter(function(item,index,array) {
       if (key =="name") return values.some(function(a,b,c) {return a== item.name;})
        else return values.some(function(a,b,c) {return a== item.id;})
}
)

}
select(data, key, values); // [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]

