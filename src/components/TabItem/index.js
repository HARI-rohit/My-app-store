import './index.css'

const TabItem = props => {
  const {details, updateApp, activeTabId} = props
  const {tabId, displayText} = details

  const onButtonClicked = () => {
    updateApp(tabId)
  }

  return (
    <li className="TabItem">
      <button
        type="button"
        onClick={onButtonClicked}
        className={activeTabId === tabId ? 'active' : ''}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
