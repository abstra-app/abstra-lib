from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_014 import (
    Migration014,
)


class TestMigration14(TestCase):
    def test_remove_agents_and_clients(self):
        m = Migration014(
            {
                "workspace": {
                    "name": "Workspace",
                    "language": "en",
                    "theme": "#FFFFFF",
                    "logo_url": "./dundler-mifflin-logo.png",
                    "favicon_url": "./favicon.ico",
                    "brand_name": "Test Project",
                    "main_color": "#FF8CDA",
                    "font_family": None,
                    "font_color": None,
                },
                "home": {"access_control": {"is_public": False, "required_roles": []}},
                "jobs": [],
                "hooks": [],
                "forms": [],
                "scripts": [],
                "agents": [
                    {
                        "id": "test_id",
                        "title": "Test Agent",
                        "project_id": "test_project_id",
                        "workflow_position": [315, 30],
                        "transitions": [],
                        "client_stage_id": "test_client_stage_id",
                    }
                ],
                "clients": [],
                "version": "13.0",
            }
        )

        m.set_as_test()
        m.apply()

        self.assertEqual(
            m.data,
            {
                "workspace": {
                    "name": "Workspace",
                    "language": "en",
                    "theme": "#FFFFFF",
                    "logo_url": "./dundler-mifflin-logo.png",
                    "favicon_url": "./favicon.ico",
                    "brand_name": "Test Project",
                    "main_color": "#FF8CDA",
                    "font_family": None,
                    "font_color": None,
                },
                "home": {"access_control": {"is_public": False, "required_roles": []}},
                "jobs": [],
                "hooks": [],
                "forms": [],
                "scripts": [],
                "version": "14.0",
            },
        )

    def test_remove_transitions_properly(self):
        self.maxDiff = None
        m = Migration014(
            {
                "forms": [
                    {
                        "id": "test_form_id",
                        "title": "Test Form",
                        "transitions": [
                            {
                                "id": "test_transition_id_1",
                                "target_id": "test_agent_id",
                                "target_type": "agents",
                                "type": "task",
                            },
                            {
                                "id": "test_transition_id_2",
                                "target_id": "test_script_id",
                                "target_type": "scripts",
                                "type": "task",
                            },
                        ],
                    },
                ],
                "scripts": [
                    {
                        "id": "test_script_id",
                        "title": "Test Script",
                        "workflow_position": [195, 240],
                        "transitions": [
                            {
                                "id": "test_transition_id_3",
                                "target_id": "test_client_id",
                                "target_type": "clients",
                                "type": "task",
                            }
                        ],
                    },
                ],
                "agents": [
                    {
                        "id": "test_agent_id",
                        "title": "Test agent",
                        "project_id": "2d25dd11-faa7-47f1-a8f8-7050c5bec5d7",
                        "workflow_position": [315, 30],
                        "transitions": [
                            {
                                "id": "test_transition_id_4",
                                "target_id": "test_form_id",
                                "target_type": "forms",
                                "type": "task",
                            }
                        ],
                        "client_stage_id": "f74070ec-eba8-4f3d-8ea0-9631d14bc3e4",
                    }
                ],
                "clients": [
                    {
                        "id": "test_client_id",
                        "title": "Test Client",
                        "project_id": "2d25dd11-faa7-47f1-a8f8-7050c5bec5d7",
                        "workflow_position": [315, 30],
                        "transitions": [],
                        "client_stage_id": "f74070ec-eba8-4f3d-8ea0-9631d14bc3e4",
                    }
                ],
                "version": "13.0",
            },
        )

        m.set_as_test()
        m.apply()

        self.assertEqual(
            m.data,
            {
                "forms": [
                    {
                        "id": "test_form_id",
                        "title": "Test Form",
                        "transitions": [
                            {
                                "id": "test_transition_id_2",
                                "target_id": "test_script_id",
                                "target_type": "scripts",
                                "type": "task",
                            },
                        ],
                    },
                ],
                "scripts": [
                    {
                        "id": "test_script_id",
                        "title": "Test Script",
                        "workflow_position": [195, 240],
                        "transitions": [],
                    },
                ],
                "version": "14.0",
            },
        )
