import abc

from abstra_internals.repositories.project.project import Languages


class BaseTranslation(abc.ABC):
    @abc.abstractmethod
    def confirm_login_at(self, project_name: str) -> str:
        raise NotImplementedError()

    @abc.abstractmethod
    def enter_verification_code(self) -> str:
        raise NotImplementedError()

    @abc.abstractmethod
    def this_code_expires(self) -> str:
        raise NotImplementedError()

    @abc.abstractmethod
    def form_is_waiting(self, stage_name: str) -> str:
        raise NotImplementedError()

    @abc.abstractmethod
    def waiting_cta(self) -> str:
        raise NotImplementedError()

    @abc.abstractmethod
    def message_from(self, project_name: str) -> str:
        raise NotImplementedError()


class EnglishTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"Confirm login at {project_name}"

    def enter_verification_code(self) -> str:
        return "Enter the verification code below in your login screen."

    def this_code_expires(self) -> str:
        return "This verification code expires in 15 minutes."

    def form_is_waiting(self, stage_name: str) -> str:
        return f"{stage_name} is waiting for your input"

    def waiting_cta(self) -> str:
        return "Fill this form"

    def message_from(self, project_name: str) -> str:
        return f"Message from {project_name}"


class PortugueseTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"Confirmar login em {project_name}"

    def enter_verification_code(self) -> str:
        return "Digite o código de verificação abaixo na sua tela de login."

    def this_code_expires(self) -> str:
        return "Este código de verificação expira em 15 minutos."

    def form_is_waiting(self, stage_name: str) -> str:
        return f"{stage_name} está esperando seu preenchimento"

    def waiting_cta(self) -> str:
        return "Preencha este formulário"

    def message_from(self, project_name: str) -> str:
        return f"Mensagem de {project_name}"


class GermanTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"Anmeldung bestätigen bei {project_name}"

    def enter_verification_code(self) -> str:
        return "Geben Sie den Bestätigungscode unten auf Ihrem Anmeldebildschirm ein."

    def this_code_expires(self) -> str:
        return "Dieser Bestätigungscode läuft in 15 Minuten ab."

    def form_is_waiting(self, stage_name: str) -> str:
        return f"Ein Formular wartet auf Ihre Eingabe in {stage_name}"

    def waiting_cta(self) -> str:
        return "Füllen Sie dieses Formular aus"

    def message_from(self, project_name: str) -> str:
        return f"Nachricht von {project_name}"


class SpanishTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"Confirmar inicio de sesión en {project_name}"

    def enter_verification_code(self) -> str:
        return "Ingrese el código de verificación a continuación en su pantalla de inicio de sesión."

    def this_code_expires(self) -> str:
        return "Este código de verificación caduca en 15 minutos."

    def form_is_waiting(self, stage_name: str) -> str:
        return f"{stage_name} está esperando su entrada"

    def waiting_cta(self) -> str:
        return "Complete este formulario"

    def message_from(self, project_name: str) -> str:
        return f"Mensaje de {project_name}"


class FrenchTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"Confirmez la connexion à {project_name}"

    def enter_verification_code(self) -> str:
        return "Entrez le code de vérification ci-dessous sur votre écran de connexion."

    def this_code_expires(self) -> str:
        return "Ce code de vérification expire dans 15 minutes."

    def form_is_waiting(self, stage_name: str) -> str:
        return f"{stage_name} attend votre entrée"

    def waiting_cta(self) -> str:
        return "Remplissez ce formulaire"

    def message_from(self, project_name: str) -> str:
        return f"Message de {project_name}"


class HindiTranslation(BaseTranslation):
    def confirm_login_at(self, project_name: str) -> str:
        return f"{project_name} में लॉगिन की पुष्टि करें"

    def enter_verification_code(self) -> str:
        return "अपने लॉगिन स्क्रीन पर नीचे सत्यापन कोड दर्ज करें।"

    def this_code_expires(self) -> str:
        return "यह सत्यापन कोड 15 मिनट में समाप्त हो जाता है।"

    def form_is_waiting(self, stage_name: str) -> str:
        return f"{stage_name} आपकी इनपुट का इंतजार कर रहा है"

    def waiting_cta(self) -> str:
        return "इस फॉर्म को भरें"

    def message_from(self, project_name: str) -> str:
        return f"{project_name} से संदेश"


translations = {
    "en": EnglishTranslation(),
    "pt": PortugueseTranslation(),
    "de": GermanTranslation(),
    "es": SpanishTranslation(),
    "fr": FrenchTranslation(),
    "hi": HindiTranslation(),
}


def get_translation(lang: Languages) -> BaseTranslation:
    return translations[lang]
