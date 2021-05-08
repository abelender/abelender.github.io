classIconNavBuilder(classIcons);

let url = new URL(window.location.href);

if(url.searchParams.get('class') == 'paladin') {
    
    createPaladin();
}

if(url.searchParams.get('class') == 'druid') {
    
    createDruid();
}



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
     sharedLink( addClassToURL('paladin'), divGlobalWrapper);


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

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'paladin') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createDruid () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(druidbalance[i].name !== undefined) {
               druidbalance[i].pointSpent = 0;
            }

            if(druidferal[i].name !== undefined) {
                druidferal[i].pointSpent = 0;
            }

            if(druidrestoration[i].name !== undefined) {
                druidrestoration[i].pointSpent = 0;
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
     sharedLink( addClassToURL('druid'), divGlobalWrapper);


        talentTreeBuilder(druidbalance, 
                        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d502015c-36dd-49db-ba9d-9282d94d795a/db2i6k2-15620ca8-b438-41b9-847f-86bf0b675e1d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1MDIwMTVjLTM2ZGQtNDlkYi1iYTlkLTkyODJkOTRkNzk1YVwvZGIyaTZrMi0xNTYyMGNhOC1iNDM4LTQxYjktODQ3Zi04NmJmMGI2NzVlMWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3-NcH41QoewdDuV97kk5ejjl-gumR-rnLla8ZWCs9aM', 
                        'Balance', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(druidferal, 
                        'https://cdnb.artstation.com/p/assets/images/images/027/550/751/large/ilya-generalov-pixiedust.jpg?1591853187', 
                        'Feral', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(druidrestoration, 
                        'https://worldofhealcraft.files.wordpress.com/2014/10/tree-of-life-2.jpg', 
                        'Restoration', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'druid') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createHunter () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(hunterbeastmastery[i].name !== undefined) {
                hunterbeastmastery[i].pointSpent = 0;
            }

            if(huntermarksmanship[i].name !== undefined) {
                huntermarksmanship[i].pointSpent = 0;
            }

            if(huntersurvival[i].name !== undefined) {
                huntersurvival[i].pointSpent = 0;
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
     sharedLink( addClassToURL('hunter'), divGlobalWrapper);


        talentTreeBuilder(hunterbeastmastery, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/361.146ed985.png', 
                        'Beast Mastery', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(huntermarksmanship, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/363.07f93c02.png', 
                        'Marksmanship', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(huntersurvival, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/362.c6cc8609.png', 
                        'Survival', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'hunter') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}


function addClassToURL(classname) {
   
    let url = new URL(window.location.href);

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);


    if(urlParams.get('class') != null) {
        urlParams.delete('class');
    } 
        url.searchParams.set('class', classname);
        url.searchParams.set('A', talentControlA);
        url.searchParams.set('B', talentControlB);
        url.searchParams.set('C', talentControlC);

    return url;


}