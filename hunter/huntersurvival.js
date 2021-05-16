let huntersurvival = [

    {   
        name: "Monster Slaying",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_head_dragon_black.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases all damage caused against Beast, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 1%.",
            2: "Increases all damage caused against Beast, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 2%.",
            3: "Increases all damage caused against Beast, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 3%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Humanoid Slaying",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_prayerofhealing.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.",
            2: "Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.",
            3: "Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Hawk Eye",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_townwatch.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases the range of your ranged weapons by 2 yards.",
            2: "Increases the range of your ranged weapons by 4 yards.",
            3: "Increases the range of your ranged weapons by 6 yards."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Savage Strikes",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_racial_bloodrage.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: true,
        lineNumber: 1,
        rankText: {
            1: "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
            2: "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Entrapment",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_stranglevines.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 8% chance to entrap the target, preventing them from moving for 4 sec.",
            2: "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 16% chance to entrap the target, preventing them from moving for 4 sec.",
            3: "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 25% chance to entrap the target, preventing them from moving for 4 sec."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Deflection",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_parry.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 2,
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
        name: "Improved Wing Clip",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_trip.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 2,
        rankText: {
            1: "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
            2: "Gives your Wing Clip ability a 14% chance to immobilize the target for 5 sec.",
            3: "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
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
        name: "Clever Traps",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_timestop.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases the duration of Freezing and Frost trap effects by 15%, the damage of Immolation and Explosive trap effects by 15%, and the number of snakes summoned from Snake Traps by 15%.",
            2: "Increases the duration of Freezing and Frost trap effects by 30%, the damage of Immolation and Explosive trap effects by 30%, and the number of snakes summoned from Snake Traps by 30%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Survivalist",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_twilight.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "Increases total health by 2%.",
            2: "Increases total health by 4%.",
            3: "Increases total health by 6%.",
            4: "Increases total health by 8%.",
            5: "Increases total health by 10%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Deterrence",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_whirlwind.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 3,
        rankText: {
            1: "When activated, increases your Dodge and Parry chance by 25% for 10 sec."
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
        name: "Trap Mastery",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_ensnare.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Decreases the chance enemies will resist trap effects by 5%.",
            2: "Decreases the chance enemies will resist trap effects by 10%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Surefooted",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_kick.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by 5%.",
            2: "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by 10%.",
            3: "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by 15%."
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
        name: "Improved Feign Death",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_feigndeath.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 4,
        rankText: {
            1: "Reduces the chance your Feign Death ability will be resisted by 2%.",
            2: "Reduces the chance your Feign Death ability will be resisted by 4%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Survival Instincts",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_survivalinstincts.jpg',
        pointSpent: 0,
        pointLimit: 2,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Reduces all damage taken by 2% and increases attack power by 2%.",
            2: "Reduces all damage taken by 2% and increases attack power by 4%.",
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Killer Instinct",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofstamina.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "Increases your critical strike chance with all attacks by 1%.",
            2: "Increases your critical strike chance with all attacks by 2%.",
            3: "Increases your critical strike chance with all attacks by 3%."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Counterattack",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_challange.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 5,
        rankText: {
            1: "A strike that becomes active after parrying an opponent's attack. This attack deals 165 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."
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
        name: "Resourcefulness",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_resourcefulness.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Reduces the mana cost of all traps and melee abilities by 20% and reduces the cooldown of all traps by 2 sec.", 
            2: "Reduces the mana cost of all traps and melee abilities by 40% and reduces the cooldown of all traps by 4 sec.",
            3: "Reduces the mana cost of all traps and melee abilities by 60% and reduces the cooldown of all traps by 6 sec."
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
        name: "Lightning Reflexes",
        src: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibilty.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 6,
        rankText: {
            1: "Increases your Agility by 3%.",
            2: "Increases your Agility by 6%.",
            3: "Increases your Agility by 9%.",
            4: "Increases your Agility by 12%.",
            5: "Increases your Agility by 15%."
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
        name: "Thrill of the Hunt",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_thrillofthehunt.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.",
            2: "Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.",
            3: "Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Wyvern Sting",
        src: 'https://wow.zamimg.com/images/wow/icons/large/inv_spear_02.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 942 Nature damage over 12 sec. Only one Sting per Hunter can be active on the target at a time."
        },
        isTalent: false,
        addRequirement: function() { return ""}
        
    },

    {   
        name: "Expose Weakness",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_findweakness.jpg',
        pointSpent: 0,
        pointLimit: 3,
        isEnable: false,
        lineNumber: 7,
        rankText: {
            1: "Your ranged criticals have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec.",
            2: "Your ranged criticals have a 66% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec.",
            3: "Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec."
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
        name: "Master Tactician",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_mastertactitian.jpg',
        pointSpent: 0,
        pointLimit: 5,
        isEnable: false,
        lineNumber: 8,
        rankText: {
            1: "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 2% for 8 sec.",
            2: "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 4% for 8 sec.",
            3: "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 6% for 8 sec.",
            4: "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 8% for 8 sec.",
            5: "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 10% for 8 sec."
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
        name: "Readiness",
        src: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_readiness.jpg',
        pointSpent: 0,
        pointLimit: 1,
        isEnable: false,
        lineNumber: 9,
        rankText: {
            1: "When activated, this ability immediately finishes the cooldown on your other Hunter abilities."
        },
        isTalent: true,
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