@echo off
setlocal enabledelayedexpansion

REM Navigate to your repo folder
cd /d "C:\Users\ZiloTech\Desktop\uwami_v2\test.txt"

REM Define commit messages (like an array)
set messages[1]=Fixed line number counting logic
set messages[2]=Improved timestamp formatting
set messages[3]=Refactored loop structure
set messages[4]=Optimized file append operation
set messages[5]=Updated progress output format

REM Total number of messages
set total=5

REM Loop 500 times
for /l %%i in (1,1,847) do (
    REM Generate timestamp
    for /f "tokens=1-4 delims=:. " %%a in ("%time%") do (
        set hh=%%a
        set mm=%%b
        set ss=%%c
    )
    set timestamp=%date% %hh%:%mm%:%ss%

    REM Append to test.txt
    echo Commit %%i at %timestamp% >> test.txt

    REM Pick a message based on commit number (cycling through)
    set /a msgIndex=%%i %% total + 1
    set commitMsg=!messages[%msgIndex%]!

    REM Stage and commit with chosen message
    git add test.txt
    git commit -m "Commit %%i: !commitMsg!"

    REM Show progress
    echo [Brelinx] Commit %%i/847 created at %timestamp% with message: !commitMsg!
)

REM Push all commits at once
git push origin main

pause