


classIconNavBuilder(classIcons);


let divTalentTreeWrapper = document.createElement('div');
    divTalentTreeWrapper.className = 'talent-tree-wrapper';

document.body.appendChild(divTalentTreeWrapper);





talentTreeBuilder(paladinHoly, 
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
