import os
import sys
import webview
from pathlib import Path

HERE = Path(__file__).resolve().parent
INDEX = HERE / "launcher" / "index.html"     
if not INDEX.exists():
    raise FileNotFoundError(
        f"{INDEX} not found. Ты чё даун файл удалил?"
    )

url = INDEX.as_uri()

os.environ["WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS"] = \
    "--autoplay-policy=no-user-gesture-required"

window = webview.create_window(
    title="ChickenFine",   
    url=url,               # локальный файл
    fullscreen=True,       # полноэкранная хуета
    frameless=True,        
    resizable=True,        
    confirm_close=False    # а нахуя?
)

# edgechromium
webview.start(gui="edgechromium", debug=False)
