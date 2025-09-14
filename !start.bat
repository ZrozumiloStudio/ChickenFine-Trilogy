@echo off
set "EXE_PATH=%~dp0Trilogy/!ChickenFine Trilogy.exe"

if exist "%EXE_PATH%" (
    start "" "%EXE_PATH%"
) else (
    echo Ты чё даун нахуя ты файл удалил
    pause
)
exit
