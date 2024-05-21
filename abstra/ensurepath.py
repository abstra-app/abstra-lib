import userpath
from pip._internal.locations import get_bin_prefix, get_bin_user


def main():
    bin_prefix = get_bin_prefix()
    bin_user = get_bin_user()

    if not userpath.in_current_path(bin_user):
        print(f"Adding {bin_user} to PATH")
        userpath.append(bin_user)

    if not userpath.in_current_path(bin_prefix):
        print(f"Adding {bin_prefix} to PATH")
        userpath.append(bin_prefix)

    if userpath.need_shell_restart(bin_user) or userpath.need_shell_restart(bin_prefix):
        print("Please restart your shell to apply changes")
    else:
        print("PATH is already up-to-date")


if __name__ == "__main__":
    main()
