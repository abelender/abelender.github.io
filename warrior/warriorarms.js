let warriorarms = [

    {   
        name: "Improved Heroic Strike",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_ambush.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Reduces the cost of your Heroic Strike ability by 1 rage point.",
            2: "Reduces the cost of your Heroic Strike ability by 2 rage point.",
            3: "Reduces the cost of your Heroic Strike ability by 3 rage point."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Deflection",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_parry.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases your Parry chance by 1%.",
            2: "Increases your Parry chance by 2%.",
            3: "Increases your Parry chance by 3%.",
            4: "Increases your Parry chance by 4%.",
            5: "Increases your Parry chance by 5%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Rend",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_gouge.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases the bleed damage done by your Rend ability by 25%.",
            2: "Increases the bleed damage done by your Rend ability by 50%.",
            3: "Increases the bleed damage done by your Rend ability by 75%."
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
        name: "Improved Charge",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_charge.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases the amount of rage generated by your Charge ability by 3.",
            2: "Increases the amount of rage generated by your Charge ability by 6." 
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Iron Will",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Increases your chance to resist stun and charm effects by 3%.",
            2: "Increases your chance to resist stun and charm effects by 6%.",
            3: "Increases your chance to resist stun and charm effects by 9%.",
            4: "Increases your chance to resist stun and charm effects by 12%.",
            5: "Increases your chance to resist stun and charm effects by 15%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Thunder Clap",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_thunderclap.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Reduces the cost of your Thunder Clap ability by 1 rage point and increases the damage by 40% and the slowing effect by an additional 4%.",
            2: "Reduces the cost of your Thunder Clap ability by 2 rage point and increases the damage by 70% and the slowing effect by an additional 7%.",
            3: "Reduces the cost of your Thunder Clap ability by 4 rage point and increases the damage by 100% and the slowing effect by an additional 10%."
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
        lineNumber: 2,
        rankText: {

        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Overpower",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_05.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases the critical strike chance of your Overpower ability by 25%.",
            2: "Increases the critical strike chance of your Overpower ability by 50%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Anger Management",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofstamina.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Generates 1 rage per 3 seconds while in combat."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Deep Wounds",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Your critical strikes cause the opponent to bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
            2: "Your critical strikes cause the opponent to bleed, dealing 40% of your melee weapon's average damage over 12 sec.",
            3: "Your critical strikes cause the opponent to bleed, dealing 60% of your melee weapon's average damage over 12 sec."
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
        name: "Two-Handed Weapon Specialization",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_axe_09.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Increases the damage you deal with two-handed melee weapons by 1%.",
            2: "Increases the damage you deal with two-handed melee weapons by 2%.",
            3: "Increases the damage you deal with two-handed melee weapons by 3%.",
            4: "Increases the damage you deal with two-handed melee weapons by 4%.",
            5: "Increases the damage you deal with two-handed melee weapons by 5%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Impale",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_searingarrow.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 10%.",
            2: "Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 20%."
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
        name: "Poleaxe Specialization",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_axe_06.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Increases your chance to get a critical strike with Axes and Polearms by 1%.",
            2: "Increases your chance to get a critical strike with Axes and Polearms by 2%.",
            3: "Increases your chance to get a critical strike with Axes and Polearms by 3%.",
            4: "Increases your chance to get a critical strike with Axes and Polearms by 4%.",
            5: "Increases your chance to get a critical strike with Axes and Polearms by 5%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Death Wish",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathpact.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "When activated, increases your physical damage by 20% and makes you immune to Fear effects, but increases all damage taken by 5%. Lasts 30 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Mace Specialization",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_mace_01.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Gives your melee attacks a chance to stun your target for 3 sec and generate 7 rage when using a Mace.",
            2: "Gives your melee attacks a chance to stun your target for 3 sec and generate 7 rage when using a Mace. More effective than Mace Specialization (Rank 1)",
            3: "Gives your melee attacks a chance to stun your target for 3 sec and generate 7 rage when using a Mace. More effective than Mace Specialization (Rank 2)",
            4: "Gives your melee attacks a chance to stun your target for 3 sec and generate 7 rage when using a Mace. More effective than Mace Specialization (Rank 3)",
            5: "Gives your melee attacks a chance to stun your target for 3 sec and generate 7 rage when using a Mace. More effective than Mace Specialization (Rank 4)"
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Sword Specialization",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_27.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.",
            2: "Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.",
            3: "Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.",
            4: "Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.",
            5: "Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Intercept",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_sprint.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Reduces the cooldown of your Intercept ability by 5 sec.",
            2: "Reduces the cooldown of your Intercept ability by 10 sec."
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
        name: "Improved Hamstring",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_shockwave.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
            2: "Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
            3: "Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Improved Disciplines",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_improveddisciplines.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Reduces the cooldown of your Retaliation, Recklessness and Shield Wall abilities by 4 min and increases their duration by 2 sec.",
            2: "Reduces the cooldown of your Retaliation, Recklessness and Shield Wall abilities by 7 min and increases their duration by 4 sec.",
            3: "Reduces the cooldown of your Retaliation, Recklessness and Shield Wall abilities by 10 min and increases their duration by 6 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Blood Frenzy",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bloodfrenzy.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Your Rend and Deep Wounds abilities also increase all melee damage caused to that target by 2%.",
            2: "Your Rend and Deep Wounds abilities also increase all melee damage caused to that target by 4%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Mortal Strike",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "A vicious strike that deals weapon damage plus 210 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Second Wind",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_harass.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Whenever you are struck by a Stun or Immobilize effect you will generate 10 rage and 5% of your total health over 10 sec.",
            2: "Whenever you are struck by a Stun or Immobilize effect you will generate 20 rage and 10% of your total health over 10 sec."
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
        name: "Improved Mortal Strike",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 8,
        rankText: {
            1: "Reduces the cooldown of your Mortal Strike ability by 0.2 sec and increases the damage it causes by 1%.",
            2: "Reduces the cooldown of your Mortal Strike ability by 0.4 sec and increases the damage it causes by 2%.",
            3: "Reduces the cooldown of your Mortal Strike ability by 0.6 sec and increases the damage it causes by 3%.",
            4: "Reduces the cooldown of your Mortal Strike ability by 0.8 sec and increases the damage it causes by 4%.",
            5: "Reduces the cooldown of your Mortal Strike ability by 1 sec and increases the damage it causes by 5%."
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
        name: "Endless Rage",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_endlessrage.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {
            1: "You generate 25% more rage from damage dealt."
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