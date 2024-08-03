import { Advanced, Arcade, Check, Pro } from "../assets"

export const navbar = [

    {
        li: "STEP 1",
        h4: "YOUR INFO"
    },
    {
        li: "STEP 2",
        h4: "SELECT PLAN"
    },
    {
        li: "STEP 3",
        h4: "ADD-ONS"
    },
    {
        li: "STEP 4",
        h4: "SUMMARY"
    },
    // {
    //     button:"Next Step",
    //     button:"Go Back" 
    // }
]


export const InfoText = [
    {
        h3: "Personal info",
        p: "Please provide your name, email address, and phone number.",
    },
    {
        h3: "Name",
        label: "Name",
        plHolder: "Enter your name...",
        type: "text"
    },
    {
        h3: "Email",
        label: "Email",
        plHolder: "Enter email...",
        type: "Email"

    },
    {
        h3: "Number",
        label: "Number",
        plHolder: "Enter your number...",
        type: "number"
    },
]

export const selectText = [
    {
        h3: "Select your plan",
        p: "you have th option of monthly or year billing.",
    }
]


export const SelectDiv = [

    {
        img: Arcade,
        span: "Arcade",
        money: "$9/mo"
    },
    {
        img: Advanced,
        span: "Advanced",
        money: "$12/mo"
    },
    {

        img: Pro,
        span: "Pro",
        money: "$15/mo"
    }

]

export const OnsctText = [
    {
        h3: "Pick add-ons",
        pm: "Add-ons help enhance your gaming experience.a",


    }
]

export const OnsctDiv = [

    {
        img: Check,
        p: "Online service",
        p1: "Access to multiplayer games",
        span: "+$1/mo"
    },
    {
        img: Check,
        p: "Larger storage",
        p1: "Extra 1TB of cloud save",
        span: "+$2/mo"
    },
    {
        img: Check,
        p: "Customizable Profile",
        p1: "Custom theme on your profile",
        span: "+$2/mo"
    }
]

export const SummaryText = [
    {
        h3: "Finishing up",
        p: "Double-check everything looks OK before confirming.",


    }
]
export const SummaryDiv = [

    {
        h4: "Arcade(Monthly)",
        u: "change",
        money0: "$9/mo",

    },
    {
        span: "Online service",
        money: "+$1/mo",
        span1: "Larger storage",
        money1: "+$2/mo",

    },
    {
        total: "Total (per month)",
        tomoney: "$12/mo",

    }
]