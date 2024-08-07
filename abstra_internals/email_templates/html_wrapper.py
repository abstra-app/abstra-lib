from abstra_internals.repositories.project.project import StyleSettings

html_template = """
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
        @media (max-width: 1024px) {{

            .button-left,
            .button-right {{
                display: block;
                float: none !important;
                margin-bottom: 10px;
            }}
        }}
    </style>
</head>

<body style="font-family: 'DM Sans', sans-serif, Arial;text-align:center">
    <div style="text-align:center">
        <table style="width: 100%;" role="presentation" cellpadding="0" cellspacing="0" class="body">
            <tr style="text-align: center;">
                <td class="container" style="text-align:left; padding: 30px; background: #F3F4F6;">
                    <div class="content" style="text-align:center; padding: 30px; background: #FFFFFF; width: 80%; max-width: 600px; margin: 0 auto;">
                        <table role="presentation" class="main" style="margin: 0 auto; width: 80%">
                            <tr style="height: 20px;">
                                <td style="font-size: 12px; color: #252525; text-align: bottom;">
                                    <img src="{logo_url}" style="height: 80px;" />
                                </td>
                            </tr>
                            <tr>
                                <td class="wrapper">
                                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%">
                                        <tr>
                                            <td>
                                                <!-- START MAIN CONTENT AREA -->
                                                {content}
                                                <!-- END MAIN CONTENT AREA -->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="footer">
        <div style="text-align:center">
            <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="content-block powered-by"
                        style="font-style: normal; font-weight: 700; font-size: 12px; line-height: 20px; color:#414A58; text-align: center;">
                    </td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>
"""


def style_wrap(content: str, style: StyleSettings):
    return html_template.format(
        content=content,
        logo_url=style.email_logo_url,
    )
