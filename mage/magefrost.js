let magefrost = [

    {   
        name: "Frost Warding",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostward.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
            2: "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 30%. In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Frostbolt",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
            2: "Reduces the casting time of your Frostbolt spell by 0.2 sec.",
            3: "Reduces the casting time of your Frostbolt spell by 0.3 sec.",
            4: "Reduces the casting time of your Frostbolt spell by 0.4 sec.",
            5: "Reduces the casting time of your Frostbolt spell by 0.5 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Elemental Precision",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_ice_magicdamage.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces the mana cost and chance targets resist your Frost and Fire spells by 1%.",
            2: "Reduces the mana cost and chance targets resist your Frost and Fire spells by 2%.",
            3: "Reduces the mana cost and chance targets resist your Frost and Fire spells by 3%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: true,
        lineNumber: 1,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Ice Shards",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_iceshard.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases the critical strike damage bonus of your Frost spells by 20%.",
            2: "Increases the critical strike damage bonus of your Frost spells by 40%.",
            3: "Increases the critical strike damage bonus of your Frost spells by 60%.",
            4: "Increases the critical strike damage bonus of your Frost spells by 80%.",
            5: "Increases the critical strike damage bonus of your Frost spells by 100%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Frostbite",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostarmor.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
            2: "Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
            3: "Gives your Chill effects a 15% chance to freeze the target for 5 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Frost Nova",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_freezingbreath.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Reduces the cooldown of your Frost Nova spell by 2 sec.",
            2: "Reduces the cooldown of your Frost Nova spell by 4 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Permafrost",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_wisp.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases the duration of your Chill effects by 1 sec and reduces the target's speed by an additional 4%.",
            2: "Increases the duration of your Chill effects by 2 sec and reduces the target's speed by an additional 7%.",
            3: "Increases the duration of your Chill effects by 3 sec and reduces the target's speed by an additional 10%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Piercing Ice",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases the damage done by your Frost spells by 2%.",
            2: "Increases the damage done by your Frost spells by 4%.",
            3: "Increases the damage done by your Frost spells by 6%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Icy Veins",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_coldhearted.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Hastens your spellcasting, increasing spellcasting speed by 20% and gives you 100% chance to avoid interruption caused by damage while casting. Lasts 20 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 3,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Blizzard",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_icestorm.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 30%. Lasts 1.50 sec.",
            2: "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 50%. Lasts 1.50 sec.",
            3: "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 65%. Lasts 1.50 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Artic Reach",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_darkritual.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
            2: "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Frost Channeling",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_stun.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Reduces the mana cost of your frost spells by 5% and reduces the threat caused by your Frost spells by 4%.",
            2: "Reduces the mana cost of your frost spells by 10% and reduces the threat caused by your Frost spells by 7%.",
            3: "Reduces the mana cost of your frost spells by 15% and reduces the threat caused by your Frost spells by 10%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Shatter",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostshock.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Increases the critical strike chance of all your spells against frozen targets by 10%.",
            2: "Increases the critical strike chance of all your spells against frozen targets by 20%.",
            3: "Increases the critical strike chance of all your spells against frozen targets by 30%.",
            4: "Increases the critical strike chance of all your spells against frozen targets by 40%.",
            5: "Increases the critical strike chance of all your spells against frozen targets by 50%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 4,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Frozen Core",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frozencore.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Reduces the damage taken by Frost and Fire effects by 2%.",
            2: "Reduces the damage taken by Frost and Fire effects by 4%.",
            3: "Reduces the damage taken by Frost and Fire effects by 6%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Cold Snap",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_wizardmark.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "When activated, this spell finishes the cooldown on all Frost spells you recently cast."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Cone of Cold",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_glacier.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Increases the damage dealt by your Cone of Cold spell by 15%.",
            2: "Increases the damage dealt by your Cone of Cold spell by 25%.",
            3: "Increases the damage dealt by your Cone of Cold spell by 35%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 5,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Ice Floes",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_icefloes.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 10%.",
            2: "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 20%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 6,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Winter's Chill",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            2: "Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            3: "Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            4: "Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            5: "Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
        pointLimit: undefined,
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
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 7,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Ice Barrier",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_ice_lament.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Instantly shields you, absorbing 1075 damage. Lasts 1 min. While the shield holds, spells will not be interrupted."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Artic Winds",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_arcticwinds.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.",
            2: "Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.",
            3: "Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.",
            4: "Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.",
            5: "Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
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
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 8,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Empowered Frostbolt",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 8,
        rankText: {
            1: "Your Frostbolt spell gains an additional 2% of your bonus spell damage effects and an additional 1% chance to critically strike.",
            2: "Your Frostbolt spell gains an additional 4% of your bonus spell damage effects and an additional 2% chance to critically strike.",
            3: "Your Frostbolt spell gains an additional 6% of your bonus spell damage effects and an additional 3% chance to critically strike.",
            4: "Your Frostbolt spell gains an additional 8% of your bonus spell damage effects and an additional 4% chance to critically strike.",
            5: "Your Frostbolt spell gains an additional 10% of your bonus spell damage effects and an additional 5% chance to critically strike."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
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
        pointSpent: 0,
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
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Summon Water Elemental",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_summonwaterelemental_2.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {
            1: "Summon a Water Elemental to fight for the caster for 45 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: undefined,
        src: undefined,
        pointSpent: 0,
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
        pointSpent: 0,
        pointLimit: undefined,
        isEnable: false,
        lineNumber: 9,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    }
]