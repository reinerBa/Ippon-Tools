import Competition from "../models/Competition"
import Tournament from "../models/Tournament"

const t:Tournament = {
    Name: "Kindertournier 2000",
    ContactEmail: "contact@mail.de",
    Url: "www.de",
    registrationDeadline: new Date().toISOString(),
    Competitions: [
      {
        EventDate: new Date(),
        Name: "U11m",
        Participants: [
        {
            Key: '001',
            Name: "Anna Müller",
            numberOnList: 1,
            SportClub: "JC Westerwald",
            type: 0
        },
        {
            Key: '002',
            Name: "Jenny Schmidt",
            numberOnList: 1,
            SportClub: "JC Eifel",
            type: 0
        }
        ],
        CompetitionLists: [],
        WeightClasses: [
            {
                Key: 'x21',
                maxWeight: 35,
                minWeight: 30,
                Name: "-35w",
                Participants: []
            }
        ]
    }
]
} 
export default t 