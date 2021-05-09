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

function createMage () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(magearcane[i].name !== undefined) {
                magearcane[i].pointSpent = 0;
            }

            if(magefire[i].name !== undefined) {
                magefire[i].pointSpent = 0;
            }

            if(magefrost[i].name !== undefined) {
                magefrost[i].pointSpent = 0;
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
     sharedLink( addClassToURL('mage'), divGlobalWrapper);


        talentTreeBuilder(magearcane, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/81.eb205a84.png', 
                        'Arcane', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(magefire, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/41.c5a0f5db.png', 
                        'Fire', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(magefrost, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/61.b742d948.png', 
                        'Frost', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'mage') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createPriest () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(priestdiscipline[i].name !== undefined) {
                priestdiscipline[i].pointSpent = 0;
            }

            if(priestholy[i].name !== undefined) {
                priestholy[i].pointSpent = 0;
            }

            if(priestshadow[i].name !== undefined) {
                priestshadow[i].pointSpent = 0;
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
     sharedLink( addClassToURL('priest'), divGlobalWrapper);


        talentTreeBuilder(priestdiscipline, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/201.b742c780.png', 
                        'Discipline', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(priestholy, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/202.8fab87bf.png', 
                        'Holy', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(priestshadow, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/203.77cf9ad3.png', 
                        'Shadow', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'priest') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createRogue () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(rogueassassination[i].name !== undefined) {
                rogueassassination[i].pointSpent = 0;
            }

            if(roguecombat[i].name !== undefined) {
                roguecombat[i].pointSpent = 0;
            }

            if(roguesubtlety[i].name !== undefined) {
                roguesubtlety[i].pointSpent = 0;
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
     sharedLink( addClassToURL('rogue'), divGlobalWrapper);


        talentTreeBuilder(rogueassassination, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/182.0c65eb99.png', 
                        'Assassination', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(roguecombat, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/181.6bf66582.png', 
                        'Combat', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(roguesubtlety, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/183.4e921c4e.png', 
                        'Subtlety', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'rogue') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createShaman () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(shamanelemental[i].name !== undefined) {
                shamanelemental[i].pointSpent = 0;
            }

            if(shamanenhancement[i].name !== undefined) {
                shamanenhancement[i].pointSpent = 0;
            }

            if(shamanrestoration[i].name !== undefined) {
                shamanrestoration[i].pointSpent = 0;
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
     sharedLink( addClassToURL('shaman'), divGlobalWrapper);


        talentTreeBuilder(shamanelemental, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/261.e7a6cc06.png', 
                        'Elemental', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(shamanenhancement, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/263.893b34eb.png', 
                        'Enhancement', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_improvedstormstrike.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(shamanrestoration, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/262.48cc6bae.png', 
                        'Restoration', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'shaman') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createWarlock () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(warlockaffliction[i].name !== undefined) {
                warlockaffliction[i].pointSpent = 0;
            }

            if(warlockdemonology[i].name !== undefined) {
                warlockdemonology[i].pointSpent = 0;
            }

            if(warlockdestruction[i].name !== undefined) {
                warlockdestruction[i].pointSpent = 0;
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
     sharedLink( addClassToURL('warlock'), divGlobalWrapper);


        talentTreeBuilder(warlockaffliction, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/302.bc7b667f.png', 
                        'Affliction', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(warlockdemonology, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/303.17bca742.png', 
                        'Demonology', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(warlockdestruction, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/301.e9ccb0ef.png', 
                        'Destruction', 
                        'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'warlock') {
            
            buildTree(divTalentTreeWrapper, url);

        }

        

}

function createWarrior () {    

    if(document.getElementById('globalwrapper')) {

        document.getElementById('globalwrapper').remove();

        for(i = 0; i <= 35; i++){

            if(warriorarms[i].name !== undefined) {
                warriorarms[i].pointSpent = 0;
            }

            if(warriorfury[i].name !== undefined) {
                warriorfury[i].pointSpent = 0;
            }

            if(warriorprotection[i].name !== undefined) {
                warriorprotection[i].pointSpent = 0;
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
     sharedLink( addClassToURL('warrior'), divGlobalWrapper);


        talentTreeBuilder(warriorarms, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/161.20cf33cb.png', 
                        'Arms', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg', divTalentTreeWrapper, 'A');

        talentTreeBuilder(warriorfury, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/164.cf26c558.png', 
                        'Fury', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg', divTalentTreeWrapper, 'B');

        talentTreeBuilder(warriorprotection, 
                        'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/163.c970f597.png', 
                        'Protection', 
                        'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg', divTalentTreeWrapper, 'C');



        divGlobalWrapper.appendChild(divTalentTreeWrapper);                
        document.body.appendChild(divGlobalWrapper);

        let url = new URL(window.location.href);

        if(url.searchParams.get('class') == 'warrior') {
            
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