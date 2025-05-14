from typing import List

from abstra_internals.constants import get_project_url
from abstra_internals.email_templates.html_wrapper import style_wrap
from abstra_internals.email_templates.i18n import get_translation
from abstra_internals.repositories.email import EmailParams
from abstra_internals.repositories.project.project import (
    FormStage,
    LocalProjectRepository,
)

template = """
<p style="font-style: normal; font-weight: 700; font-size: 30px; line-height: 36px; color:#181818; margin-top:30px;">
    {a_form_is_waiting}
</p>
<p style="margin-bottom: 40px; font-size: 16px;">New task</p>
<a href="{stage_link}" style="text-decoration: none; padding: 8px 20px; border-radius: 6px; border: 1px solid transparent; background-color: #d14056; color: #FFF; box-shadow: 0 2px 0 rgba(255, 5, 5, 0.06); width: fit-content; font-size: 16px; font-family: system-ui;">
    {waiting_cta}
</a>
"""


def generate_email(recipient_emails: List[str], form: FormStage) -> EmailParams:
    project = LocalProjectRepository().load()
    translations = get_translation(project.workspace.language or "en")
    stage_link = f"{get_project_url()}/{form.path}"

    content = template.format(
        a_form_is_waiting=translations.form_is_waiting(form.title),
        stage_link=stage_link,
        waiting_cta=translations.waiting_cta(),
    )

    html = style_wrap(content, project.workspace)

    return EmailParams(
        kind="task-waiting",
        to=recipient_emails,
        subject=translations.form_is_waiting(form.title),
        body=html,
        is_html=True,
        attachments=[],
    )
