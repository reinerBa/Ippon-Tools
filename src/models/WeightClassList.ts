import { MatchBase } from "./Match"
import { ParticipantBase } from "./Participant"
import WeightClass from "./WeightClass"
import WeightClassSettings from "./WeightClassSettings"

export default class WeightClassList {
    public Name!: string
    public ListSystem!: ListSystem
    public WeightClass!: WeightClass
    public Settings: WeightClassSettings
    public Participants: ParticipantBase[] = []
    public Matches: MatchBase[] = []
    
    public constructor (name: string, listSystem: ListSystem, weightClass: WeightClass, settings: WeightClassSettings) {
        this.Name = name
        this.ListSystem = listSystem
        this.WeightClass= weightClass
        this.Settings= settings
      }
}

export class ListSystem {
    public Name!: string
}