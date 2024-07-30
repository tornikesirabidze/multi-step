import { Advanced, Arcade, Pro } from "../assets"

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


export const InfoText =[
    {
        h3:"Personal info",
        p:"Please provide your name, email address, and phone number.",
        li1:"Name",
        li2:"Email Address",
        li3:"Phone Number",
    
    }
]




export const SelectText = [
    {
        h3:"Select your plan",
        p:"you have th option of monthly or year billing.",

    },
    {
        img:Arcade,
        p:"Arcade",
        p:"$9/mo"
    },
    {
        img:Advanced,
        p:"Advanced",
        p:"$12/mo"
    },
    {

        img:Pro,
        p:"Pro",
        p:"$15/mo"
    }
]


export const OnsctText = [
    {
        h3:"Pick add-ons",
        p:"Add-ons help enhance your gaming experience.a",


    },
    {
        p:"Online service",
        p:"Access to multiplayer games",
        span:"+$1/mo"
    },
    {
        p:"Larger storage",
        p:"Extra 1TB of cloud save",
        span:"+$2/mo"
    },
    {
        p:"Customizable Profile",
        p:"Custom theme on your profile",
        span:"+$2/mo"
    }
]

export const SummaryText = [
    {
        h3:"Finishing up",
        p:"Double-check everything looks OK before confirming.",


    }
]