import { CamLentData } from "./CamLentData"
import "./camLent.css"

export const CamLent = () => {

    const { up, down } = CamLentData

    return (
        

                <div className="cam">
                    <img src={up} className="lent r" />
                    <img src={down} className="lent l" />
                </div>

        
    )
}