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
              id: 'event',
              name: 'Events',
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

  renderContent() {
    return (
      <div className="video-container">
        <img src="/assets/images/video-cam.svg" />
      </div>
    );
  }
}

export default VideoComponent;
