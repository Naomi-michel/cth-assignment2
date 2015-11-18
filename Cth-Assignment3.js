    console.log("Connect to JS")
    //my key: bhmDo3G6K
    //http://www.europeana.eu/api/v2/search.json?wskey=bhmDo3G6K&query=painting+acryl&start=1&rows=24&profile=standard&reusability=open



var dataParsed;
var i = 0;
    
    var myRequest = new XMLHttpRequest();
            //var query = "schilderij veenstra";
            var method = "GET";
            var url = "http://www.europeana.eu/api/v2/search.json?wskey=bhmDo3G6K&query=schilderij+veenstra&start=1&rows=24&profile=standard&reusability=open" +  ".json?details=true";
            myRequest.open(method, url);
            
            myRequest.send();
            console.log(document);
            
    myRequest.onreadystatechange = function(){
    console.log(myRequest.readyState); 
    myRequest.onreadystatechange = function () {
                if (myRequest.readyState === 4){
                    var data = myRequest.response;
                    var dataParsed = JSON.parse(data);
                 for (i = 0; i < dataParsed.items.length; i++){
                    imgArray.push(dataParsed.items[i].edmPreview[0]);
                    console.log(dataParsed.items[i].edmPreview[0]);
                    console.log(imgArray);
                     }
    
            }   else{ console.log("Fout");}
        
    }
        
    };
    
