from abstra_internals.repositories.project.project import AgentStage, ProjectRepository


def add_agent(agent_project_id: str, agent_title: str):
    stage = AgentStage.create(
        title=agent_title,
        project_id=agent_project_id,
    )
    project = ProjectRepository.load()
    project.add_stage(stage)
    ProjectRepository.save(project)
