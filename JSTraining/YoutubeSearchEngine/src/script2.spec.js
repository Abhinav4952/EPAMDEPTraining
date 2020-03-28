describe("Youtube data fetching",function(){
    const youtubeResponse = {items:
        [{id:{videoId:"UeQ7hJ8-XNA"},snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}},
        {id:{videoId:"UeQ7hJ8-XNA",snippet:{title:"I married my Girlfriend ❤️",description:"Buy my Official Merchandise: https://bit.ly/2DedHWW Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless ..."}}}]
    };
    it("Checks if 15 results are being fetched",function(){
        spyOn(window,'fetch').and.returnValue(Promise.resolve({
            json: function () {
                return youtubeResponse;
            }
        }));
        setutubedata("js")
        .then(function(dataitems){
            console.log("Printing 0 data items:-");
            console.log(dataitems);
            console.log("Printed 0 data items:-");
            expect(dataitems.items.length).toEqual(15);
        })
    })
})


describe("Fetching next page youtube data",function(){
    const youtubeResponse = {nextPageToken: 34,prevPageToken:34
    };
    it("Checks if next pages results are fetched or not",function(){
        spyOn(window,'fetch').and.returnValue(Promise.resolve({
            json: function () {
                return youtubeResponse;
            }
        }));
        var nextPageToken="";
        setutubedata("js")
        .then(function(dataitems){
            console.log("Printing data items:-");
            console.log(dataitems);
            console.log("Printed data items:-");
            nextPageToken=dataitems.nextPageToken;
            console.log("In test Next Page Toke:- "+nextPageToken);
        })
        .then(function(){
            retriveNextPageData("js",nextPageToken)
            .then(function(dataitems){
                console.log("Printing 2 data items:-");
                console.log(dataitems);
                console.log("Printed 2 data items:-");
                var previoudPageToken=dataitems.prevPageToken;
                console.log("In test Previous Page token:- "+previoudPageToken);
                console.log("In test 2 Next Page Toke:- "+nextPageToken);
                expect(nextPageToken).toEqual(previoudPageToken);
            })
        })

    })
})


