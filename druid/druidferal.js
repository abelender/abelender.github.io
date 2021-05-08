let druidferal = [

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
        name: "Ferocity",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_hyena.jpg',
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
        name: "Feral Aggression",
        src: 'https://wow.zamimg.com/images/wow/icons/large/classic_ability_druid_demoralizingroar.jpg',
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
        name: "Feral Instinct",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_ambush.jpg',
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
        name: "Brutal Impact",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_bash.jpg',
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
        name: "Thick Hide",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_pelt_bear_03.jpg',
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
        name: "Feral Swiftness",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_spiritwolf.jpg',
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
        name: "Feral Charge",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_bear.jpg',
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
        name: "Sharpened Claaws",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterclaw_04.jpg',
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
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Shredding Attacks",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_vampiricaura.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
     
    },

    {   
        name: "Predatory Strikes",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_cat.jpg',
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
        name: "Primal Fury",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_racial_cannibalize.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidferal[10].pointSpent != druidferal[10].pointLimit) {
                
            return `Requires ${druidferal[10].pointLimit - druidferal[10].pointSpent} points in 'Sharpened Claws'`;
            
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
        name: "Savage Fury",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_ravage.jpg',
        pointSpent: 0,
        pointLimit: 2,
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
        name: "Faerie Fire (Feral)",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_faeriefire.jpg',
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
        name: "Nurturing Instinct",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_healinginstincts.jpg',
        pointSpent: 0,
        pointLimit: 2,
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
        name: "Heart of the Wild",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofagility.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 6,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidferal[13].pointSpent != druidferal[13].pointLimit) {
                
            return `Requires ${druidferal[13].pointLimit - druidferal[13].pointSpent} points in 'Predatory Strikes'`;
            
        } else {

            return "";
        } }
     
    },

    {   
        name: "Survival of the Fittest",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_enrage.jpg',
        pointSpent: 0,
        pointLimit: 3,
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
        name: "Primal Tenacity",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_primaltenacity.jpg',
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
        name: "Leader of the Pack",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_unyeildingstamina.jpg',
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
        name: "Improved Leader of the Pack",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_unyeildingstamina.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 7,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidferal[25].pointSpent != druidferal[25].pointLimit) {
                
            return `Requires ${druidferal[25].pointLimit - druidferal[25].pointSpent} points in 'Leader of the Pack'`;
            
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
        name: "Predatory Instincts",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_predatoryinstincts.jpg',
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
        name: "Mangle",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_mangle2.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() {  
            
            if(druidferal[25].pointSpent != druidferal[25].pointLimit) {
                
            return `Requires ${druidferal[25].pointLimit - druidferal[25].pointSpent} points in 'Leader of the Pack'`;
            
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