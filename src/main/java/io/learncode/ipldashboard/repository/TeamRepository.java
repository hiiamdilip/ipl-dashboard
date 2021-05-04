package io.learncode.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.learncode.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    
    Team findByTeamName(String teamName);
}
