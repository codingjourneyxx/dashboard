@echo off
setlocal enabledelayedexpansion

REM === Set the folder to read ===
set "SOURCE_FOLDER=C:\path\to\your\folder"

REM === Set the file where all text will be exported ===
set "OUTPUT_FILE=all_text_export.txt"

REM === Clear old output if exists ===
if exist "%OUTPUT_FILE%" del "%OUTPUT_FILE%"

echo Exporting text from files in: %SOURCE_FOLDER%
echo.

for %%F in ("%SOURCE_FOLDER%\*") do (
    echo ==== FILE: %%~nxF ==== >> "%OUTPUT_FILE%"
    type "%%F" >> "%OUTPUT_FILE%"
    echo. >> "%OUTPUT_FILE%"
)

echo Done! Export saved to: %OUTPUT_FILE%
pause
