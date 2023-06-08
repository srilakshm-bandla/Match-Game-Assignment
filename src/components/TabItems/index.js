import './index.css'

const TabItems = props => {
  const {tabsList, isActive, updateTabId} = props

  const {tabId, displayText} = tabsList

  const onClickTab = () => {
    updateTabId(tabId)
  }

  const activeClass = isActive ? 'add-color' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeClass}`}
        onClick={() => onClickTab(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
