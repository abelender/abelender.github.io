let druidbalance = [

    {   
        name: 'Starlight Wrath',
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_abolishmagic.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Nature's Grasp",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_natureswrath.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: true,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Improved Nature's Grasp",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_natureswrath.jpg',
        pointSpent: 0,
        pointLimit: 4,
        isEnable: true,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidbalance[1].pointSpent != druidbalance[1].pointLimit) {
                
            return `Requires ${druidbalance[1].pointLimit - druidbalance[1].pointSpent} points in 'Nature's Grasp'`;
            
        } else {

            return "";
        } }
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Control of Nature",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_stranglevines.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Focused Starlight",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_01.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 2,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Improved Moonfire",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 2,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 2,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Brambles",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_thorns.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 3,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 3,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Insect Swarm",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_insectswarm.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 3,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Nature's Reach",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturetouchgrow.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 3,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Vengeance",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_purge.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidbalance[5].pointSpent != druidbalance[5].pointLimit) {
                
            return `Requires ${druidbalance[5].pointLimit - druidbalance[5].pointSpent} points in 'Focused Starlight'`;
            
        } else {

            return "";
        } }
     
    },

    {   
        name: "Celestial Focus",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_starfire.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Lunar Guidance",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_lunarguidance.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 5,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Nature's Grace",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturesblessing.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 5,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Moonglow",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sentinal.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 5,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Moonfury",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_moonglow.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 6,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidbalance[17].pointSpent != druidbalance[17].pointLimit) {
                
            return `Requires ${druidbalance[17].pointLimit - druidbalance[17].pointSpent} points in 'Nature's Grace'`;
            
        } else {

            return "";
        } }
     
    },

    {   
        name: "Balance of Power",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_balanceofpower.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 6,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Dreamstate",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_dreamstate.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 7,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Moonkin Form",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_forceofnature.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 7,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Improved Faerie Fire",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_faeriefire.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 7,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Wrath of Cenarius",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_twilightswrath.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 8,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Force of Nature",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_forceofnature.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    
]