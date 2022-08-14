const fakeController=(req,recp)=>{

    function getRamdomDateInBetween(start, end) {
        //start = Date.parse(2021-01-01);
        //start = Date.parse('2022-07-30');
       // end = Date.parse('2022-08-15');
       //7 day before
  
       var date1 = new Date();
        var start=  date1.setDate(date1.getDate() - 7);
        // console.log(start)

       //var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
       //after 7 day
       const date2 = new Date();
         var end=  date2. setDate(date2. getDate() + 7)
        //console.log(end)
    
         let date3=new Date(Math.floor(Math.random() * (end - start + 1) + start));
         //const unixTimestamp = Math.floor(date.getTime() / 1000);
         const unixTT=Math.floor(date3);
        return unixTT;
       //return date2;
    }
    if(Math.random()> 0.5 ? true: false){
        var arrayData=[];
        let count=Math.ceil(Math.random()*20)
   console.log(count,'count foo')
      
        for(let i=1;i<=count;i++){
           let data={
               "order_id":Math.floor(Math.random() * (99999 -1000 + 1)) + 1000, // min 1000 max 99999 Math.floor(Math.random() * (max - min + 1)) + min
               "arrives_at_utc":getRamdomDateInBetween(),
               "paid_with": Math.random()<0.5?"Cash":"Wallet",
               "total_paid": 10.99
            }   
            arrayData=[...arrayData ,data]
   
   
        }
   
       recp.send(arrayData)

    }
    else{
        recp.send("No data")

    }
    

}
module.exports=fakeController;
