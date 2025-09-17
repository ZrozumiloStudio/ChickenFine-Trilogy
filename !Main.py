import os
import sys
import webview
import logging
import atexit
from pathlib import Path

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
