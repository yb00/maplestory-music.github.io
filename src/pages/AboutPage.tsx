import React from 'react';
import GitHubButton from 'react-github-btn';

const AboutPage: React.FC = () => (
  <div>
    <h2>About</h2>
    <div>
      <p>
        Welcome to the MapleStory Music database. This site provides a complete
        listing of the background music (BGM) used in MapleStory. Collectively,
        the songs are also known as MapleStory's original soundtrack (OST). To
        sort by a column, press the column header. Hover over a column header
        and press the menu icon to access the advanced filter dialog. Mobile
        users can access the filter dialog by pressing and holding the column
        header.
      </p>
    </div>
    <p>
      This database catalogs music from every region of MapleStory and aims to
      be the definitive resource for MapleStory music. It will be updated
      whenever new songs are added to the client of any region.
    </p>
    <h2>Source</h2>
    <p>The following GitHub projects power this site.</p>
    <div className='gh-project-entry'>
      <GitHubButton
        href='https://github.com/maplestory-music/maplebgm-db'
        data-size='large'
        data-show-count={true}
        aria-label='Star maplestory-music/maplebgm-db on GitHub'
      >
        Star
      </GitHubButton>
      <h4 className='gh-project-name'>
        maplebgm-db: Definitive MapleStory music database
      </h4>
    </div>
    <div className='gh-project-entry'>
      <GitHubButton
        href='https://github.com/maplestory-music/maplestory-music.github.io'
        data-size='large'
        data-show-count={true}
        aria-label='Star maplestory-music/maplestory-music.github.io on GitHub'
      >
        Star
      </GitHubButton>
      <h4 className='gh-project-name'>
        maplestory-music: MapleStory Music website
      </h4>
    </div>
  </div>
);

export default AboutPage;