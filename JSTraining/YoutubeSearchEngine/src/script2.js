var pageNo=0;
var utubedata=[];
var pagetoken;
var inputVal;

function loadutubedata(ele,searchterm){

    console.log("Loading Home page");
    inputVal = document.getElementById("myInput").value;
    setutubedata(inputVal)
    .then(function(dataitems){
        console.log("setting data in cards:- ");
        console.log(dataitems);
        pageNo=0;
        pagetoken=dataitems.nextPageToken;
        console.log("Next page token:- "+pagetoken);
        utubedata=dataitems.items;
        return utubedata;
    })
    .then(function(data){
        setdata(pageNo,data);
        hidebutton("previousbutton");
        showHideDiv(ele);
    })
  
}

function setdata(pageNO,data){
    
    console.log("Setting data in cards by calling function");
    for(var i=0;i<3;i++){
        var framenumber=i+1;
		var titlenumber=i+1;
        var descriptionnumber=i+1;
        document.querySelector(".youtubeVideo"+framenumber).src = "https://www.youtube.com/embed/"+data[(pageNO*3)+i].id.videoId;
        document.getElementById("card_title"+titlenumber).innerHTML=data[(pageNO*3)+i].snippet.title;
        document.getElementById("card_text"+descriptionnumber).innerHTML=data[(pageNO*3)+i].snippet.description.split(":")[0];
    }
    

}

function showHideDiv(ele) {
				
    console.log("Displaying div");
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        srcElement.style.display = 'block';
        return false;
    }

}

function hidebutton(buttonId){

    document.getElementById(buttonId).disabled = true;

}

function showbutton(buttonId){

    document.getElementById(buttonId).disabled = false;

}

function previousdata(){

    console.log("Present Fetched data:-");
    pageNo=pageNo-1;
    if(pageNo==0){
        hidebutton("previousbutton");
    }else{
        showbutton("nextbutton");
    }
    console.log("Page No.displaying:- "+pageNo);
    setdata(pageNo,utubedata)

}

function nextdatanew(){

    console.log("Present Fetched data:- ");
    pageNo=pageNo+1;
    if((pageNo+1)%5==0){
        setNextdata();
    }
    if(pageNo==1){
        showbutton("previousbutton");
    }
    console.log("Page No.displaying:- "+pageNo);
    setdata(pageNo,utubedata);

}

function setNextdata(){

    retriveNextPageData(inputVal,pagetoken)
        .then(function(data){
            console.log("Displaying next page token:- "+data.nextPageToken);
            console.log(data);
            pagetoken=data.nextPageToken;
            utubedata=utubedata.concat(data.items);
            console.log("New global data after retriveing next page data");
            console.log(utubedata)
        })

}

function setutubedata(searchterm){

	return new Promise(function(resolve, reject){
		const YOUTUBE_API_KEY = "AIzaSyDv5cC1GFDigsHoVctnAeUSX7-08xcZjvk";
			const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDv5cC1GFDigsHoVctnAeUSX7-08xcZjvk&type=video&part=snippet&maxResults=15&q="+searchterm;
			var x = document.getElementById("card_content1");
			fetch(url)
			  .then(response => response.json())
			  .then(data => {
                resolve(data)
                })
    });

}

function retriveNextPageData(searchterm,token){

        return  new Promise(function(resolve,reject){
            const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDv5cC1GFDigsHoVctnAeUSX7-08xcZjvk&type=video&part=snippet&maxResults=15&q="+searchterm+"&pageToken="+token;
            fetch(url)
            .then(function(response){
                 return response.json()})
            .then(function(data){
                 return resolve(data)
            })
        });

}
