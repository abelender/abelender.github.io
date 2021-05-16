let druidbalance = [

    {   
        name: 'Starlight Wrath',
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_abolishmagic.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
            2: "Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.",
            3: "Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.",
            4: "Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.",
            5: "Reduces the cast time of your Wrath and Starfire spells by 0.5 sec."
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
            1: "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1). Only useable outdoors. 1 charge. Lasts 45 sec."
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
            1: "Increases the chance for your Nature's Grasp to entangle an enemy by 15%.",
            2: "Increases the chance for your Nature's Grasp to entangle an enemy by 30%.",
            3: "Increases the chance for your Nature's Grasp to entangle an enemy by 45%.",
            4: "Increases the chance for your Nature's Grasp to entangle an enemy by 65%."
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
            1: "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
            2: "Gives you a 70% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
            3: "Gives you a 100% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone."
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
            1: "Increases the critical strike chance of your Wrath and Starfire spells by 2%.",
            2: "Increases the critical strike chance of your Wrath and Starfire spells by 4%."
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
            1: "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            2: "Increases the damage and critical strike chance of your Moonfire spell by 10%."
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
            1: "Increases damage caused by your Thorns and Entangling Roots spells by 25%.",
            2: "Increases damage caused by your Thorns and Entangling Roots spells by 50%.",
            3: "Increases damage caused by your Thorns and Entangling Roots spells by 75%."
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
            1: "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 792 Nature damage over 12 sec."
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
            1: "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 10%.",
            2: "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 20%."
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
            1: "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
            2: "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 40%.",
            3: "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 60%.",
            4: "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 80%.",
            5: "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 100%."
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
            1: "Gives your Starfire spell a 5% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 25%.",
            2: "Gives your Starfire spell a 10% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 50%.",
            3: "Gives your Starfire spell a 15% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 70%."
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
            1: "Increases your spell damage and healing by 8% of your total Intellect.",
            2: "Increases your spell damage and healing by 16% of your total Intellect.",
            3: "Increases your spell damage and healing by 25% of your total Intellect."
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
            1: "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec."
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
            1: "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
            2: "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 6%.",
            3: "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%."
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
            1: "Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
            2: "Increases the damage done by your Starfire, Moonfire and Wrath spells by 4%.",
            3: "Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
            4: "Increases the damage done by your Starfire, Moonfire and Wrath spells by 8%.",
            5: "Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
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
            1: "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 2%.",
            2: "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 4%."
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
            1: "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
            2: "Regenerate mana equal to 7% of your Intellect every 5 sec, even while casting.",
            3: "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting."
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
            1: "Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 400%, attack power is increased by 150% of your level and all party members within 30 yards have their spell critical chance increased by 5%. Melee attacks in this form have a chance on hit to regenerate mana based on attack power. The Moonkin can only cast Balance spells while shapeshifted.\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
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
            1: "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 1%.",
            2: "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 2%.",
            3: "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 3%."
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
            1: "Your Starfire spell gains an additional 4% and your Wrath gains an additional 2% of your bonus damage effects.",
            2: "Your Starfire spell gains an additional 8% and your Wrath gains an additional 4% of your bonus damage effects.",
            3: "Your Starfire spell gains an additional 12% and your Wrath gains an additional 6% of your bonus damage effects.",
            4: "Your Starfire spell gains an additional 16% and your Wrath gains an additional 8% of your bonus damage effects.",
            5: "Your Starfire spell gains an additional 20% and your Wrath gains an additional 10% of your bonus damage effects."
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
            1: "Summons 3 treants to attack the enemy target for 30 sec."
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