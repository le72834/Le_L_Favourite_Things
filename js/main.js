import {fetchData, postData} from "./modules/dataMiner.js";

(() => {
    //to check if have error
    //console.log('loaded');
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }
    let userInfo = document.querySelector(".userInfo"),
         close = document.querySelector(".close"),
         titleInfo = document.querySelector(".userInfo h3"),
         descriptionInfo = document.querySelector(".userInfo p");
         

    
        function handleDataSet(data) {
            //console.log(data); 
            //debugger;
            let currentTitle = data[0].title,
                currentDesc = data[0].description;
            titleInfo.innerHTML = currentTitle;
            descriptionInfo.innerHTML = currentDesc;
            //add lightbox here
            userInfo.classList.add("show-lb");
            

        }
        //hide lightbox
        function hideLb() {
            console.log('clicked');
            userInfo.classList.remove("show-lb");
            

        }
        close.addEventListener('click', hideLb);

        function retrieveProjectInfo(event) {
            //test for an ID
            //console.log(this.id);
            //debugger;
            //check for an id, and if there isn't one, then don't try the fetch call
            //because it will break (the PHP will choke)
            
            if (!event.target.id){
                return
            }
            fetchData(`./includes/index.php?id=${event.target.id}`).then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
        }

        function renderPortfolioThumbnails(thumbs) {
            let userSection = document.querySelector('.user-section'),
                userTemplate = document.querySelector('#user-template').content;
                //debugger;

        for (let user in thumbs) {
            //debugger;
            //make a copy of our template here and then populate the children(text element)
            //the static data from the Team object
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${thumbs[user].image}`;
            currentUserText[1].id = thumbs[user].id;
           

            //add this new user to the view
            
            userSection.appendChild(currentUser);

        }
        userSection.addEventListener("click", retrieveProjectInfo)
    }
        fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => { console.log(err); popErrorBox(err); });
        
        
    
    
})();