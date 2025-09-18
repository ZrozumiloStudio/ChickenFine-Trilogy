import os
import sys
import webview
import logging
import atexit
from pathlib import Path
import io
import requests
import zipfile

HERE = Path(__file__).resolve().parent
CURRENT_VERSION = "18092025X"  

GITHUB_USER = "ZrozumiloStudio"
GITHUB_REPO = "ChickenFine-Trilogy"
REPO_URL = f"https://api.github.com/repos/{GITHUB_USER}/{GITHUB_REPO}/releases/latest"

def check_for_update():
    try:
        response = requests.get(REPO_URL)
        response.raise_for_status()
        latest_release = response.json()
        latest_version = latest_release['tag_name']

        if latest_version != CURRENT_VERSION:
            print(f"A new version is available: {latest_version}. Do you want to install it? [Y/N]")
            choice = input().strip().lower()
            if choice == 'y':
                download_and_install(latest_release['zipball_url'])
                print("Update completed. Please restart the program.")
                sys.exit()
        else:
            print("You are using the latest version.")
    except Exception as e:
        print(f"Error while checking for updates: {e}")

def download_and_install(zip_url):
    try:
        r = requests.get(zip_url, stream=True)
        r.raise_for_status()
        total_size = int(r.headers.get('content-length', 0))
        downloaded = 0
        buffer = io.BytesIO()

        print("Downloading update...")
        for chunk in r.iter_content(chunk_size=8192):
            if chunk:
                buffer.write(chunk)
                downloaded += len(chunk)
                percent = downloaded * 100 // total_size if total_size else 0
                print(f"\rDownloaded {downloaded}/{total_size} bytes ({percent}%)", end="")
        print("\nDownload complete.")

        buffer.seek(0)
        z = zipfile.ZipFile(buffer)
        root_folder = z.namelist()[0].split('/')[0]
        file_count = len([m for m in z.namelist() if not m.endswith('/')])
        print(f"Extracting {file_count} files...")

        extracted = 0
        for member in z.namelist():
            if member.startswith(root_folder + '/'):
                target_path = HERE / Path(member).relative_to(root_folder)
                if member.endswith('/'):
                    target_path.mkdir(parents=True, exist_ok=True)
                else:
                    target_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(target_path, 'wb') as f:
                        f.write(z.read(member))
                    extracted += 1
                    print(f"\rExtracted {extracted}/{file_count} files", end="")
        print("\nUpdate completed successfully.")

    except Exception as e:
        print(f"Error while downloading or extracting: {e}")

if __name__ == "__main__":
    check_for_update()
HERE = Path(__file__).resolve().parent
INDEX = HERE / "Trilogy" / "index.html"
LOG_FILE = HERE / "logs.txt"

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)

logging.info("Program started")

if not INDEX.exists():
    logging.error(f"{INDEX} not found.")
    raise FileNotFoundError(f"{INDEX} not found.")

url = INDEX.as_uri()

os.environ["WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS"] = \
    "--autoplay-policy=no-user-gesture-required"

window = webview.create_window(
    title="ChickenFine",
    url=url,
    fullscreen=True,
    frameless=True,
    resizable=True,
    confirm_close=False
)

def on_exit():
    logging.info("Program closed")

atexit.register(on_exit)

try:
    webview.start(gui="edgechromium", debug=False)
except Exception as e:
    logging.exception(f"Error: {e}")
    raise
