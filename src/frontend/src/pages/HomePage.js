import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

import './HomePage.scss';

export const HomePage = () => {
  
  const [team, setTeams] = useState([]);
  
  useEffect(
    () => {
      const fetchAllTeams = async () => {
        const response = await fetch(`http://localhost:8080/team`);
        const data = await response.json();
        setTeams(data);
      };
      fetchAllTeams();
    }, []
  );

  return (
    <div className="HomePage">
      <div className="header-section"><h1 className="app-name">IPL Dashboard</h1></div>
      <div className="team-grid">
          { team.map(team => <TeamTile teamName={team.teamName} />)}
      </div>
    </div>
  );
}
