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
        h3: "Email Address",
        label: "Email Address",
        plHolder: "Enter email...",
        type: "Email"


    },
    {
        h3: "Phone Number",
        label: "Phone Number",
        plHolder: "Enter your number...",
        type: "number"


    }
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
        money: "9",
        year:"90"
    },
    {
        img: Advanced,
        span: "Advanced",
        money: "12",
        year:"120"

    },
    {

        img: Pro,
        span: "Pro",
        money: "15",
        year:"150"

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
        span: "+1",
        year:"+10"
    },
    {
        img: Check,
        p: "Larger storage",
        p1: "Extra 1TB of cloud save",
        span: "+2",
        year:"+20"

    },
    {
        img: Check,
        p: "Customizable Profile",
        p1: "Custom theme on your profile",
        span: "+2",
        year:"+20"

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
        money0: "9",
        year: "9",

    },
    {
        span: "Online service",
        money: "+1",
        span1: "Larger storage",
        money1: "+2",
        year1: "10",
        year2: "20",


    },
    {
        total: "Total (per month)",
        tomoney: "12",
        tomoneyyr: "120",


    }
]