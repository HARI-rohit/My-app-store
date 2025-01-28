import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl} = details

  return (
    <li className="AppItem" key={appId}>
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
