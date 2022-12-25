const pricingCategoriesData = [
    {   
        id: 1, 
        name: 'Bronze',
        title: 'Branding on a budget',
        price: 'US$299',
        options: [
            {   
                id: 1,
                name: 'prize to Winner - $135 (Included)',
                details: [],
            },
            {   
                id: 2,
                name: 'Validation Services & Upgrades ($39 value)',
                details: [
                    {id: 1, name: 'Matching .com URL'},
                ],
            },
            {   
                id: 3,
                name: 'option2 name',
                details: [
                    {
                        id: 1,
                        name: 'option2 detail1 name',
                    },
                    {
                        id: 2,
                        name: 'option2 detail2 name',
                    },
                ]
            },
            { 
                id: 4,  
                name: 'option3 name',
                details: [],
            },
        ]
    },
    {   
        id: 2, 
        name: 'Gold',
        title: 'Increase participation and basic brand validation',
        price: 'US$449',
        options: [
            {   
                id: 1,
                name: 'prize to Winner - $200 (Included)',
                details: [],
            },
            {   
                id: 2,
                name: 'option1 name',
                details: [],
            },
            {   
                id: 3,
                name: 'option2 name',
                details: [
                    {
                        id: 1,
                        name: 'option2 detail1 name',
                    },
                    {
                        id: 2,
                        name: 'option2 detail2 name',
                    },
                ]
            },
            {   
                id: 4,
                name: 'option3 name',
                details: [],
            },
        ]
    },
    {   
        id: 3, 
        name: 'Platinum',
        title: 'Work with top-level creatives, plus agency-style brand validation',
        price: 'US$749',
        options: [
            {   
                id: 1,
                name: 'prize to Winner - $300 (Included)',
                details: [],
            },
            {   
                id: 2,
                name: 'option1 name',
                details: [],
            },
            {   
                id: 3,
                name: 'option2 name',
                details: [
                    {
                        id: 1,
                        name: 'option2 detail1 name',
                    },
                    {
                        id: 2,
                        name: 'option2 detail2 name',
                    },
                ]
            },
            {   
                id: 4,
                name: 'option3 name',
                details: [],
            },
        ]
    },
    {   
        id: 4, 
        name: 'Managed',
        title: 'A full agency experience without the agency price tag',
        price: 'US$1449',
        options: [
            {   
                id: 1,
                name: 'Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.',
                details: [],
            },
        ]
    },
];

export const getPricingData = async (arg) => (pricingCategoriesData);

