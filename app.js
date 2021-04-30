classIconNavBuilder(classIcons);

let url = new URL(window.location.href);
if(url.searchParams.get('class') == 'paladin') {
            

    createPaladin();
}




function createPaladin () {    

    // let url = (new URL(document.location.href));

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(paladinholy[i].name !== undefined) {
               paladinholy[i].pointSpent = 0;
            }

            if(paladinprotection[i].name !== undefined) {
                paladinprotection[i].pointSpent = 0;
            }

            if(paladinretribution[i].name !== undefined) {
                paladinretribution[i].pointSpent = 0;
            }
            
        }
        globalTalentLimit = 0
    }
    
    let divGlobalWrapper = document.createElement('div');
        divGlobalWrapper.className = 'global-wrapper';
        divGlobalWrapper.id = "globalwrapper"; 
    
    let divTalentTreeWrapper = document.createElement('div');
        divTalentTreeWrapper.className = 'talent-tree-wrapper';
        divTalentTreeWrapper.id = "treewrapper"; 

     globalSpanPoints(divGlobalWrapper);
     sharedLink( addClassToURL('paladin'), divGlobalWrapper);

    // let url = new URL(window.location.href);

    
    // if(url.searchParams.get('class') == paladin) {
     
    //     console.log(url.searchParams.get('class'));

        talentTreeBuilder(paladinholy, 
                        'https://wallpapercave.com/wp/wp3449930.jpg', 
                        'Holy', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(paladinprotection, 
                        'https://static.icy-veins.com/images/classic/og-images/paladin.jpg', 
                        'Protection', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(paladinretribution, 
                        'https://legacy-wow.com/images/default/paladin.jpg', 
                        'Retribution', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);
    // }
  

}


function addClassToURL(classname) {
   
    let url = new URL(window.location.href);
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);


    if(urlParams.get('class') != null) {
        url.searchParams.delete('class');
    } else {
        url.searchParams.set('class', classname);

        
    }

    history.pushState(null, '', url.searchParams.set('class', classname));   

    // window.location.href = url;
    console.log('Esto es en la funcion: '+url.search);
    return url;


}