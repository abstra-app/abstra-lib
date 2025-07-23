import json
import os
import shutil
import subprocess
import unicodedata
from pathlib import Path


def sanitize_openapi_json():
    print("🔧 Sanitizando o arquivo OpenAPI JSON...")

    with open("totalbank_openapi.json", "r", encoding="utf-8") as f:
        openapi_spec = json.load(f)

    def normalize_text(text):
        if not isinstance(text, str):
            return text
        normalized = unicodedata.normalize("NFKD", text)
        ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
        return ascii_text

    def is_path_parameter_context(obj, parent_key, grandparent_obj):
        if (
            parent_key == "parameters"
            and isinstance(grandparent_obj, dict)
            and isinstance(obj, dict)
            and obj.get("in") == "path"
        ):
            return True
        return False

    def sanitize_tags_recursive(obj, parent_key=None):
        if isinstance(obj, dict):
            if parent_key == "tags" and isinstance(obj, list):
                return [normalize_text(tag) for tag in obj]
            elif "tags" in obj and isinstance(obj["tags"], list):
                obj["tags"] = [normalize_text(tag) for tag in obj["tags"]]

            for key, value in obj.items():
                if isinstance(value, list) and key == "tags":
                    obj[key] = [normalize_text(tag) for tag in value]
                else:
                    sanitize_tags_recursive(value, key)

        elif isinstance(obj, list):
            if parent_key == "tags":
                return [normalize_text(item) for item in obj]
            for item in obj:
                sanitize_tags_recursive(item, parent_key)

    def remove_constraints_recursive(obj, parent_key=None, grandparent_obj=None):
        if isinstance(obj, dict):
            obj.pop("maxLength", None)
            obj.pop("enum", None)

            if "required" in obj and not is_path_parameter_context(
                obj, parent_key, grandparent_obj
            ):
                obj.pop("required", None)

            for key, value in obj.items():
                remove_constraints_recursive(value, key, obj)

        elif isinstance(obj, list):
            for item in obj:
                remove_constraints_recursive(item, parent_key, grandparent_obj)

    sanitize_tags_recursive(openapi_spec)

    remove_constraints_recursive(openapi_spec)

    sanitized_file = "totalbank_openapi_sanitized.json"
    with open(sanitized_file, "w", encoding="utf-8") as f:
        json.dump(openapi_spec, f, indent=2, ensure_ascii=False)

    print(f"✅ Arquivo sanitizado salvo como: {sanitized_file}")
    print("   - Removidos: maxLength, enum e required")
    print("   - Tags sanitizadas: caracteres especiais removidos (ç→c, ã→a, etc.)")
    return sanitized_file


def generate_api_client(sanitized_file: str):
    print("🚀 Gerando cliente da API usando openapi-generator...")

    output_dir = "totalbank_generated_sdk"

    if os.path.exists(output_dir):
        print(f"🗑️  Removendo diretório existente: {output_dir}")
        shutil.rmtree(output_dir)

    cmd = [
        "openapi-generator",
        "generate",
        "-i",
        sanitized_file,
        "-g",
        "python",
        "-o",
        output_dir,
        "--package-name",
        "totalbank_client",
        "--additional-properties",
        "setEnsureAsciiToFalse=true",
    ]

    try:
        print(f"📦 Executando: {' '.join(cmd)}")
        subprocess.run(cmd, check=True, capture_output=True, text=True)
        print("✅ Cliente da API gerado com sucesso!")

        if os.path.exists(output_dir):
            files = list(Path(output_dir).rglob("*.py"))
            print(f"📁 Gerados {len(files)} arquivos Python em {output_dir}/")

    except subprocess.CalledProcessError as e:
        print("❌ Erro ao gerar cliente da API:")
        print(f"Código de saída: {e.returncode}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        raise
    except FileNotFoundError:
        print("❌ openapi-generator não encontrado!")
        print("Instale com: npm install -g @openapitools/openapi-generator-cli")
        print("Ou baixe de: https://openapi-generator.tech/docs/installation")
        raise


def fix_imports_in_file(file_path: Path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        modified = False

        if "from totalbank_client." in content:
            content = content.replace(
                "from totalbank_client.",
                "from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.",
            )
            modified = True

        if "import totalbank_client.models" in content:
            content = content.replace(
                "import totalbank_client.models",
                "import abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models",
            )
            modified = True

        if "from totalbank_client import" in content:
            content = content.replace(
                "from totalbank_client import",
                "from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import",
            )
            modified = True

        import re

        pattern = r"\btotalbank_client\.models\."
        if re.search(pattern, content):
            content = re.sub(
                pattern,
                "abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.",
                content,
            )
            modified = True

        if "import totalbank_client\n" in content:
            content = content.replace(
                "import totalbank_client\n",
                "import abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client\n",
            )
            modified = True

        full_models_import = "import abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models"
        if (
            full_models_import in content
            and "getattr(totalbank_client.models" in content
        ):
            content = content.replace(
                full_models_import, f"{full_models_import} as totalbank_client_models"
            )
            content = content.replace(
                "getattr(totalbank_client.models,", "getattr(totalbank_client_models,"
            )
            modified = True

        if (
            "abstra_internals.services.banking.sdk.totalbank_generated_sdk.abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client"
            in content
        ):
            content = content.replace(
                "abstra_internals.services.banking.sdk.totalbank_generated_sdk.abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client",
                "abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client",
            )
            modified = True

        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)

            print(f"  ✅ Imports corrigidos em: {file_path.name}")
            return True

        return False

    except Exception as e:
        print(f"  ❌ Erro ao corrigir imports em {file_path.name}: {e}")
        return False


def apply_custom_modifications():
    print("🔨 Aplicando modificações customizadas...")

    output_dir = Path("totalbank_generated_sdk")

    if not output_dir.exists():
        print("⚠️  Diretório do SDK não encontrado, pulando modificações.")
        return

    def cleanup_unnecessary_files():
        print("🧹 Removendo arquivos desnecessários do SDK...")

        keep_items = {"totalbank_client"}  # Will add docs and tests later

        removed_count = 0
        for item in output_dir.iterdir():
            if item.name not in keep_items:
                try:
                    if item.is_file():
                        item.unlink()
                        print(f"  🗑️  Removido arquivo: {item.name}")
                        removed_count += 1
                    elif item.is_dir():
                        shutil.rmtree(item)
                        print(f"  🗑️  Removido diretório: {item.name}/")
                        removed_count += 1
                except Exception as e:
                    print(f"  ⚠️  Erro ao remover {item.name}: {e}")

        print(f"📦 Removidos {removed_count} itens desnecessários")

    def fix_imports_in_generated_files():
        print("🔧 Corrigindo imports nos arquivos gerados...")

        python_files = list(output_dir.rglob("*.py"))
        modified_files = 0

        for py_file in python_files:
            if fix_imports_in_file(py_file):
                modified_files += 1

        print(
            f"📝 Imports corrigidos em {modified_files} de {len(python_files)} arquivos."
        )

    def format_code_with_ruff():
        print("🎨 Formatando código com ruff...")

        # Find the project root (abstra-lib directory)
        current_dir = Path.cwd()
        project_root = None

        # Navigate up the directory tree to find the project root
        check_dir = current_dir
        while check_dir.parent != check_dir:  # While not at filesystem root
            if (check_dir / "ruff.toml").exists() or (
                check_dir / "pyproject.toml"
            ).exists():
                project_root = check_dir
                break
            check_dir = check_dir.parent

        if not project_root:
            # Fallback: assume we're in the banking directory and go up to abstra-lib
            banking_dir = Path(__file__).parent
            project_root = banking_dir.parent.parent.parent  # Go up to abstra-lib

        print(f"📍 Projeto root detectado: {project_root}")

        try:
            # Change to project root and run ruff commands
            original_cwd = os.getcwd()

            try:
                os.chdir(project_root)

                print("  🔍 Executando ruff format...")
                result = subprocess.run(
                    ["ruff", "format", "."], capture_output=True, text=True, check=False
                )
                if result.returncode != 0:
                    print(f"  ⚠️  ruff format retornou código {result.returncode}")
                    if result.stderr:
                        print(f"  Erro: {result.stderr}")

                print("  🔍 Executando ruff check --select I --fix...")
                result = subprocess.run(
                    ["ruff", "check", ".", "--select", "I", "--fix"],
                    capture_output=True,
                    text=True,
                    check=False,
                )
                if result.returncode != 0:
                    print(f"  ⚠️  ruff check I retornou código {result.returncode}")
                    if result.stderr:
                        print(f"  Erro: {result.stderr}")

                print("  🔍 Executando ruff check --fix --unsafe-fixes...")
                result = subprocess.run(
                    ["ruff", "check", ".", "--fix", "--unsafe-fixes"],
                    capture_output=True,
                    text=True,
                    check=False,
                )
                if result.returncode != 0:
                    print(f"  ⚠️  ruff check retornou código {result.returncode}")
                    if result.stderr:
                        print(f"  Erro: {result.stderr}")

                print("✅ Formatação com ruff concluída")

            finally:
                # Restore original working directory
                os.chdir(original_cwd)

        except FileNotFoundError:
            print("  ⚠️  ruff não encontrado. Certifique-se de que está instalado.")
            print("  Para instalar: pip install ruff")
        except Exception as e:
            print(f"  ❌ Erro ao executar ruff: {e}")

    cleanup_unnecessary_files()
    fix_imports_in_generated_files()
    format_code_with_ruff()

    print("✅ Modificações customizadas aplicadas com sucesso!")


def cleanup_temporary_files():
    print("🧹 Limpando arquivos temporários...")

    temp_files = ["totalbank_openapi_sanitized.json"]
    for temp_file in temp_files:
        if os.path.exists(temp_file):
            os.remove(temp_file)
            print(f"🗑️  Removido: {temp_file}")


def main():
    print("🎯 Iniciando geração da API TotalBank")
    print("=" * 50)

    try:
        if not os.path.exists("totalbank_openapi.json"):
            print("❌ Arquivo totalbank_openapi.json não encontrado!")
            print("Certifique-se de estar no diretório correto.")
            print(
                "Se o arquivo não estiver baixado, crie-o a partir de: https://api.totalbank.com.br/rest/openapi.json"
            )
            return 1

        sanitized_file = sanitize_openapi_json()

        generate_api_client(sanitized_file)

        apply_custom_modifications()

        cleanup_temporary_files()

        print("=" * 50)
        print("🎉 Geração da API TotalBank concluída com sucesso!")
        print("📁 Cliente gerado em: totalbank_generated_sdk/")

        return 0

    except Exception as e:
        print(f"❌ Erro durante a geração: {e}")
        cleanup_temporary_files()
        return 1


if __name__ == "__main__":
    exit(main())
