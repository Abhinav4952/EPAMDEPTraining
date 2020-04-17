describe("Checking the button display",function(){
    
    var pageNo;
    var utubedata;
    var temp="temp global";
    var pagetoken;
    var inputVal;
    var division;
    var youtuberesponse;
    beforeAll(function(){
        youtuberesponse = {items:
            [{id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
            {id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}]
        };
        
        pageNo=0;
        var inputfield=document.createElement("input");
        document.body.appendChild(inputfield);
        inputfield.id="myInput"
        inputfield.value="js"
        var prevbtn = document.createElement("BUTTON");
        document.body.appendChild(prevbtn);
        prevbtn.id="previousbutton";
        var nextbtn = document.createElement("BUTTON");
        document.body.appendChild(nextbtn);
        nextbtn.id="nextbutton";
        divison=document.createElement("div");
        document.body.appendChild(divison);
        divison.id="div1";
        for(var i=0;i<3;i++){
            var framenumber=i+1;
		    var titlenumber=i+1;
            var descriptionnumber=i+1;
            var iframe=document.createElement('iframe');
            document.body.appendChild(iframe);
            iframe.setAttribute('class','youtubeVideo'+framenumber);
            iframe.setAttribute('src','');
            var title=document.createElement('p');
            document.body.appendChild(title);
            title.setAttribute('id','card_title'+titlenumber)
            var description=document.createElement('p');
            document.body.appendChild(description);
            description.setAttribute('id','card_text'+descriptionnumber);
        }

    })
    
    it("checks disabling and enabling button",function(){
        
        console.log(pagetoken);
        hidebutton("previousbutton");
        expect(document.getElementById("previousbutton").disabled).toBeTruthy();
        showbutton("previousbutton");
        expect(document.getElementById("previousbutton").disabled).toEqual(false);
        
    })

    it("Displaying a div",function(){
        
        showHideDiv("div1");
        expect(divison.style.display).toEqual('block');
    })

    it("Checking if data is set correctly in iframe with title and description",function(){
        pageNo=0;
        setdata(pageNo,youtuberesponse.items);
        utubedata=youtuberesponse.items;
        expect(document.querySelector(".youtubeVideo"+1).src).toEqual("https://www.youtube.com/embed/"+youtuberesponse.items[(pageNo*3)].id.videoId);
        expect(document.getElementById("card_title"+1).innerHTML).toEqual(youtuberesponse.items[(pageNo*3)].snippet.title);
        expect(document.getElementById("card_text"+1).innerHTML).toEqual(youtuberesponse.items[(pageNo*3)].snippet.description.split(":")[0]);
        console.log("Checking if the data is assigned or not");
        console.log(utubedata[1].id);
        pageNo=1;
        
    })

})


