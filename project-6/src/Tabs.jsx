const Tabs = () => {
  return (
    <div>
            <nav>
        <ul className="tabs">
          <li data-tab-target="synopsis">Synopsis</li>
          <li data-tab-target="series-info-tab">Series Info</li>
          <li data-tab-target="episodes-tab">Episodes</li>
          <li data-tab-target="gallery-tab">Art Gallery</li>
        </ul>
      </nav>
    </div>
  )
}

export default Tabs;
