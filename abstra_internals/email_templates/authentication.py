from abstra_internals.email_templates.html_wrapper import style_wrap
from abstra_internals.email_templates.i18n import get_translation
from abstra_internals.repositories.email import EmailParams
from abstra_internals.repositories.project.project import ProjectRepository

template = """
<p
    style="font-style: normal; font-weight: 700; font-size: 30px; line-height: 36px; color:#181818; margin-bottom:20px; margin-top:30px;">
    {authenticate_with}
</p>
<p style="font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px; color:#252525; margin:0">
    {enter_confirmation_code}
</p>
<p
    style="font-style: normal; font-weight: 700; font-size: 30px; line-height: 36px; color:#181818; margin-bottom:20px; margin-top:30px;">
    {code}
</p>
<div>
    <img style="height: 21px; display:inline; vertical-align:middle;"
        src="https://abstra-cloud-assets.s3.amazonaws.com/bi_hourglass-split+(1).png" />
    <p
        style="font-style: normal; font-weight: 700; font-size: 16px; line-height:21px; color:#707070; margin:0; display:inline; vertical-align:middle;">
        {this_code_expires}
    </p>
</div>
"""


def generate_email(email: str, code: str) -> EmailParams:
    project = ProjectRepository.load()
    translations = get_translation(project.workspace.language or "en")

    content = template.format(
        authenticate_with=translations.confirm_login_at(project.workspace.project_name),
        enter_confirmation_code=translations.enter_verification_code(),
        code=code,
        this_code_expires=translations.this_code_expires(),
    )

    html = style_wrap(content, project.workspace)

    return EmailParams(
        kind="passwordless",
        to=[email],
        subject=translations.confirm_login_at(project.workspace.project_name),
        body=html,
        is_html=True,
    )
