import "./portfolioList.scss";

export default function portfolioList({id, title, active, setSelected}) {
  return (
    <li 
    className={"portfolioList " + (active && "active")} 
    id="portfolioList" 
    onClick={() => setSelected(id)}>
    {title}
    </li>
  )
}
