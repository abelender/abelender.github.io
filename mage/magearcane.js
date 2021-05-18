let magearcane = [

    {   
        name: "Arcane Subtlety",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_dispelmagic.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces your target's resistance to all your spells by 5 and reduces threat of Arcane spells by 20%.",
            2: "Reduces your target's resistance to all your spells by 10 and reduces threat of Arcane spells by 40%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Focus",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotion.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces the chance that the opponent can resist your Arcane spells by 2%.",
            2: "Reduces the chance that the opponent can resist your Arcane spells by 4%.",
            3: "Reduces the chance that the opponent can resist your Arcane spells by 6%.",
            4: "Reduces the chance that the opponent can resist your Arcane spells by 8%.",
            5: "Reduces the chance that the opponent can resist your Arcane spells by 10%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Arcane Missiles",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            2: "Gives you a 40% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            3: "Gives you a 60% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            4: "Gives you a 80% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            5: "Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missiles."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: undefined,
        pointLimit: undefined,
        isEnable: true,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Wand Specialization",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_wand_01.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases your damage with Wands by 13%.",
            2: "Increases your damage with Wands by 25%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Magic Absorption",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_astralrecalgroup.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases all resistances by 2 and causes all spells you fully resist to restore 1% of your total mana.  1 sec. cooldown.",
            2: "Increases all resistances by 4 and causes all spells you fully resist to restore 2% of your total mana.  1 sec. cooldown.",
            3: "Increases all resistances by 6 and causes all spells you fully resist to restore 3% of your total mana.  1 sec. cooldown.",
            4: "Increases all resistances by 8 and causes all spells you fully resist to restore 4% of your total mana.  1 sec. cooldown.",
            5: "Increases all resistances by 10 and causes all spells you fully resist to restore 5% of your total mana.  1 sec. cooldown."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Concentration",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_manaburn.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
            2: "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
            3: "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
            4: "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
            5: "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%."
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
        name: "Magic Attunement",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_abolishmagic.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases the effect of your Amplify Magic and Dampen Magic spells by 25%.",
            2: "Increases the effect of your Amplify Magic and Dampen Magic spells by 50%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Impact",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 2%.",
            2: "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 4%.",
            3: "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 6%."
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
        name: "Arcane Fortitude",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcaneresilience.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases your armor by an amount equal to 100% of your Intellect."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Mana Shield",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_detectlesserinvisibility.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Decreases the mana lost per point of damage taken when Mana Shield is active by 10%.",
            2: "Decreases the mana lost per point of damage taken when Mana Shield is active by 20%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Counterspell",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_iceshock.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Gives your Counterspell a 50% chance to silence the target for 4 sec.",
            2: "Gives your Counterspell a 100% chance to silence the target for 4 sec."
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
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Meditation",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_siphonmana.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Allows 10% of your Mana regeneration to continue while casting.",
            2: "Allows 20% of your Mana regeneration to continue while casting.",
            3: "Allows 30% of your Mana regeneration to continue while casting."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Blink",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_blink.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "For 4 sec after casting Blink, your chance to be hit by all attacks and spells is reduced by 13%.",
            2: "For 4 sec after casting Blink, your chance to be hit by all attacks and spells is reduced by 25%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Presence of Mind",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_enchantarmor.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
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
        lineNumber: 5,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Mind",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Increases your total Intellect by 3%.",
            2: "Increases your total Intellect by 6%.",
            3: "Increases your total Intellect by 9%.",
            4: "Increases your total Intellect by 12%.",
            5: "Increases your total Intellect by 15%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Prismatic Cloak",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_prismaticcloak.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Reduces all damage taken by 2%.",
            2: "Reduces all damage taken by 4%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Instability",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_teleport.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Increases your spell damage and critical strike chance by 1%.",
            2: "Increases your spell damage and critical strike chance by 2%.",
            3: "Increases your spell damage and critical strike chance by 3%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Potency",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcanepotency.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Increases the critical strike chance of any spell cast while Clearcasting by 10%.",
            2: "Increases the critical strike chance of any spell cast while Clearcasting by 20%.",
            3: "Increases the critical strike chance of any spell cast while Clearcasting by 30%."
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
        lineNumber: 6,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Empowered Arcane Missiles",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Your Arcane Missiles spell gains an additional 15% of your bonus spell damage effects, but mana cost is increased by 2%.",
            2: "Your Arcane Missiles spell gains an additional 30% of your bonus spell damage effects, but mana cost is increased by 4%.",
            3: "Your Arcane Missiles spell gains an additional 45% of your bonus spell damage effects, but mana cost is increased by 6%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Arcane Power",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 15 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Spell Power",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcanetorrent.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Increases critical strike damage bonus of all spells by 25%.",
            2: "Increases critical strike damage bonus of all spells by 50%."
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
        lineNumber: 8,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Mind Mastery",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_mindmastery.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 8,
        rankText: {
            1: "Increases spell damage by up to 5% of your total intellect.",
            2: "Increases spell damage by up to 10% of your total intellect.",
            3: "Increases spell damage by up to 15% of your total intellect.",
            4: "Increases spell damage by up to 20% of your total intellect.",
            5: "Increases spell damage by up to 25% of your total intellect."
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
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Slow",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {
            1: "Reduces target's movement speed by 50%, increases the time between ranged attacks by 50% and increases casting time by 50%. Lasts 15 sec. Slow can only affect one target at a time."
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
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    }
]