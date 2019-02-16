import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class VideoComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the video',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the video component',
          properties: [
            {
              id: 'load',
              name: 'Load Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/video-component.png',
      name: 'Video',
      type: 'ui-component',
      componentType: 'video',
      category: 'Views',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  componentDidMount() {
    this.triggerGraphEvent('load');
  }

  triggerGraphEvent = (eventId) => {
    const graphId = this.getPropertyData(eventId);
    this.getElementProps().onEvent(graphId);
  }

  renderContent() {
    return (
      <div 
        className="video-container"
        onMouseOver={() => this.triggerGraphEvent('hover')}
      >
        <img src="/assets/images/video-cam.svg" />
      </div>
    );
  }
}

export default VideoComponent;
