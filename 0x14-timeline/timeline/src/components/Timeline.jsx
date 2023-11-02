import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component"
import Work from "./Work"
import School from "./School"
import items from "../dump/items"

const Timeline = () => {
  const workIconStyles = {
    background: "#06d6a0",
  }
  const schoolIconStyles = {
    background: "#f9c74f"
  }

  return (
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline>
        {items.map(item => {
          let isWorkIcon = item.icon === "work"
          return(
            <VerticalTimelineElement key={item.id}
              date={item.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <Work/> : <School/>}
            >
              //
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline