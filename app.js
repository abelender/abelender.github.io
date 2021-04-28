classIconNavBuilder(classIcons);


function createPaladin () {    

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
     sharedLink( changeURL('paladin'), divGlobalWrapper);


    talentTreeBuilder(paladinholy, 
                    'https://wallpapercave.com/wp/wp3449930.jpg', 
                    'Holy', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg', divTalentTreeWrapper);

    talentTreeBuilder(paladinprotection, 
                    'https://static.icy-veins.com/images/classic/og-images/paladin.jpg', 
                    'Protection', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg', divTalentTreeWrapper);

    talentTreeBuilder(paladinretribution, 
                    'https://legacy-wow.com/images/default/paladin.jpg', 
                    'Retribution', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg', divTalentTreeWrapper);



    divGlobalWrapper.appendChild(divTalentTreeWrapper);                
    document.body.appendChild(divGlobalWrapper);

  

}

function createDruid () {



    talentTreeBuilder(paladinholy, 
                    'https://wallpapercave.com/wp/wp3449930.jpg', 
                    'Holy', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg');

    talentTreeBuilder(paladinprotection, 
                    'https://static.icy-veins.com/images/classic/og-images/paladin.jpg', 
                    'Protection', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg');

    talentTreeBuilder(paladinretribution, 
                    'https://legacy-wow.com/images/default/paladin.jpg', 
                    'Retribution', 
                    'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg');

    document.body.appendChild(divTalentTreeWrapper);

}

function changeURL(classname) {
   
    let url = new URL(window.location.href);
    console.log(url);
    
    url.searchParams.append('class', classname);

    return url;
}