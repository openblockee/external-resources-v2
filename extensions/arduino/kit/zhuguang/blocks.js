/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color_c02_sensor = '#E06C78';
    const QH_Actuator_color = '#5874DC';
    const QH_COMMUNICATE_color1 = '#6c91ac';

    const QH_UltraSonicDistanceSensor_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzc0NDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjY3IDM3MC4xNnYyODMuNjhoODk0LjY2VjM3MC4xNnogbTgyOS4wOCAyMTguMTJoLTc2My41VjQzNS43MmgxMjguMTN2NTQuNDdIMzI0di01NC40N2g4MS42djk4LjA5aDY1LjU4di05OC4wOWg4MS42NHY1NC40N2g2NS41OHYtNTQuNDdINzAwdjk4LjA5aDY1LjU4di05OC4wOWgxMjguMTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2MzQ1Ij48L3BhdGg+PC9zdmc+';
    const QH_Line_follower_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxOTEzNjY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyOTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgzNC40IDc0MWMtNDAuNCAwLTc0LjkgMjUuNi04OCA2MS41SDMzMy4zYy00Ni43IDAtOTAuNS0xNC4zLTEyMy4yLTQwLjMtMzAuNi0yNC4yLTQ3LjQtNTUuNy00Ny40LTg4LjRzMTYuOC02NC4yIDQ3LjQtODguNGMzMi44LTI2IDc2LjUtNDAuMyAxMjMuMi00MC4zaDguMXYwLjFoMzUyLjFjMTI5LjQgMCAyMzQuNy04Ni41IDIzNC43LTE5Mi43IDAtMTA2LjMtMTA1LjMtMTkyLjctMjM0LjctMTkyLjdIMjc5LjZjLTEzLjEtMzYtNDcuNS02MS42LTg4LTYxLjYtNTEuNyAwLTkzLjYgNDEuOS05My42IDkzLjZzNDEuOSA5My42IDkzLjYgOTMuNmM0MC41IDAgNzQuOS0yNS43IDg4LTYxLjZoNDEzLjljNDYuNyAwIDkwLjUgMTQuMyAxMjMuMiA0MC4zIDMwLjYgMjQuMiA0Ny40IDU1LjcgNDcuNCA4OC40cy0xNi44IDY0LjItNDcuNCA4OC40Yy0zMi44IDI2LTc2LjUgNDAuMy0xMjMuMiA0MC4zaC04LjF2LTAuMUgzMzMuM2MtMTI5LjQgMC0yMzQuNyA4Ni41LTIzNC43IDE5Mi43czEwNS4zIDE5Mi43IDIzNC43IDE5Mi43aDQxM2MxMyAzNiA0Ny41IDYxLjcgODggNjEuNyA1MS43IDAgOTMuNi00MS45IDkzLjYtOTMuNlM4ODYuMSA3NDEgODM0LjQgNzQxeiIgcC1pZD0iOTI5NSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==';
    const QH_lightSensor_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDAzMTc4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNTEybS0yOTkuNTIgMGEyOTkuNTIgMjk5LjUyIDAgMSAwIDU5OS4wNCAwIDI5OS41MiAyOTkuNTIgMCAxIDAtNTk5LjA0IDBaIiBwLWlkPSIxMDQxNiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik00ODYuNCAwaDQ4LjY0djEyNS40NEg0ODYuNHpNMjM0Ljg1NDQgNzguOTUwNGw0Mi4xMTItMjQuMzIgNjIuNzIgMTA4LjY0NjQtNDIuMTEyIDI0LjMyek01OC4wNjA4IDI3NS44MTQ0bDI0LjMyLTQyLjEzNzYgMTA4LjY0NjQgNjIuNzItMjQuMzIgNDIuMTM3NnpNMCA0ODYuNGgxMjUuNDR2NDguNjRIMHpNNTUuODU5MiA3NDYuNzI2NGwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NDY0IDYyLjcyek0yMzUuNjczNiA5NDAuNDE2bDYyLjcyLTEwOC42MjA4IDQyLjEzNzYgMjQuMzItNjIuNzIgMTA4LjYyMDh6TTQ4Ni40IDg5Nmg0OC42NHYxMjUuNDRINDg2LjR6TTY4My44NTI4IDg1Ny4wMTEybDQyLjEzNzYtMjQuMzIgNjIuNzIgMTA4LjYyMDgtNDIuMTM3NiAyNC4zMnpNODMzLjg2ODggNzI0LjM3NzZsMjQuMzItNDIuMTM3NiAxMDguNjIwOCA2Mi43NDU2LTI0LjMyIDQyLjEzNzZ6TTg5NiA0ODYuNGgxMjUuNDR2NDguNjRIODk2ek04MzMuODk0NCAyOTcuNjUxMmwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NzIgNjIuNzJ6TTY4NC4yODggMTY0LjYwOGw2Mi43Mi0xMDguNjIwOCA0Mi4xMTIgMjQuMzItNjIuNzIgMTA4LjY0NjR6IiBwLWlkPSIxMDQxNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";
    const QH_sound_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDU0NDgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMzQ1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01ODguNzgwNzYyIDMuMTAwMjM3Yy04LjUzMTE5Ni01LjY4NzQ2NC0xOS45MDYxMjQtMi44NDM3MzItMjguNDM3MzE5IDIuODQzNzMxbC0zNDEuMjQ3ODMyIDIzOC44NzM0ODNINTEuMzE1NDI3Yy0xNC4yMTg2NiAwLTI1LjU5MzU4NyAxMS4zNzQ5MjgtMjUuNTkzNTg3IDIyLjc0OTg1NXY0ODkuMTIxODkyYzAgMTQuMjE4NjYgMTEuMzc0OTI4IDIyLjc0OTg1NSAyNS41OTM1ODcgMjIuNzQ5ODU2aDE2Ny43ODAxODRsMzQ0LjA5MTU2NCAyMzguODczNDgyYzUuNjg3NDY0IDIuODQzNzMyIDguNTMxMTk2IDUuNjg3NDY0IDE0LjIxODY1OSA1LjY4NzQ2NCAyLjg0MzczMiAwIDguNTMxMTk2IDAgMTEuMzc0OTI4LTIuODQzNzMyIDguNTMxMTk2LTIuODQzNzMyIDE0LjIxODY2LTExLjM3NDkyOCAxNC4yMTg2Ni0xOS45MDYxMjNWMjMuMDA2MzZjMC04LjUzMTE5Ni01LjY4NzQ2NC0xNy4wNjIzOTItMTQuMjE4NjYtMTkuOTA2MTIzek04OTUuOTAzODExIDIyNy43NTUwNTljLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDMgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA3YzQ4LjM0MzQ0MyA1NC4wMzA5MDcgNzkuNjI0NDk0IDEzMC44MTE2NjkgNzkuNjI0NDk0IDIxOC45NjczNTlzLTMxLjI4MTA1MSAxNjIuMDkyNzItNzkuNjI0NDk0IDIxOC45NjczNThjLTE0LjIxODY2IDE0LjIxODY2LTE0LjIxODY2IDM2Ljk2ODUxNSAwIDU0LjAzMDkwNyAxNC4yMTg2NiAxNC4yMTg2NiAzNC4xMjQ3ODMgMTQuMjE4NjYgNDguMzQzNDQzIDAgNjIuNTYyMTAyLTY4LjI0OTU2NiAxMDIuMzc0MzUtMTY0LjkzNjQ1MiAxMDIuMzc0MzQ5LTI3Mi45OTgyNjVzLTM5LjgxMjI0Ny0yMDQuNzQ4Njk5LTEwMi4zNzQzNDktMjcyLjk5ODI2NnogbS0xMDguMDYxODE0IDEwOC4wNjE4MTRjLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDIgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA2YzI1LjU5MzU4NyAyNS41OTM1ODcgNDIuNjU1OTc5IDY1LjQwNTgzNCA0Mi42NTU5NzkgMTA4LjA2MTgxNHMtMTQuMjE4NjYgNzkuNjI0NDk0LTQyLjY1NTk3OSAxMDguMDYxODEzYy0xNC4yMTg2NiAxNC4yMTg2Ni0xNC4yMTg2NiAzNi45Njg1MTUgMCA1NC4wMzA5MDcgMTQuMjE4NjYgMTQuMjE4NjYgMzQuMTI0NzgzIDE0LjIxODY2IDQ4LjM0MzQ0MiAwIDM5LjgxMjI0Ny00Mi42NTU5NzkgNjIuNTYyMTAyLTk5LjUzMDYxOCA2Mi41NjIxMDMtMTYyLjA5Mjcycy0yMi43NDk4NTUtMTI1LjEyNDIwNS02Mi41NjIxMDMtMTYyLjA5MjcyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTEzNDYiPjwvcGF0aD48L3N2Zz4=";
    const QH_RGB_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMTY4MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMDUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgMTAyNGEyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzM0wyNzcuMzMzMzMzIDkyNi4xNjUzMzNWMTAwMi42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS00Mi42NjY2NjYgMHYtMTI3Ljg3MlY3NDYuNjY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjU2IDcyNS4zMzMzMzNoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0cy0zOC4yNzIgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNoLTEyLjUwMTMzM2w5MS41NjI2NjYgOTEuNTYyNjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzg0IDEwMjR6IG0tMTA2LjY2NjY2Ny0xNzAuNjY2NjY3aDQyLjY2NjY2N2E0Mi43MDkzMzMgNDIuNzA5MzMzIDAgMCAwIDAtODUuMzMzMzMzaC00Mi42NjY2Njd2ODUuMzMzMzMzek03NDYuNjY2NjY3IDEwMjRINjgyLjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTI1NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDIxLjMzMzMzNC0yMS4zMzMzMzRoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0IDAgMjUuNDcyLTExLjIyMTMzMyA0OC4zNDEzMzMtMjguOTcwNjY3IDY0IDE3Ljc0OTMzMyAxNS42NTg2NjcgMjguOTcwNjY3IDM4LjUyOCAyOC45NzA2NjcgNjQgMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzMgODUuMzMzMzMzeiBtLTQyLjY2NjY2Ny00Mi42NjY2NjdoNDIuNjY2NjY3YTQyLjcwOTMzMyA0Mi43MDkzMzMgMCAwIDAgMC04NS4zMzMzMzNoLTQyLjY2NjY2N3Y4NS4zMzMzMzN6IG0wLTEyOGg0Mi42NjY2NjdhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCAwLTg1LjMzMzMzM2gtNDIuNjY2NjY3djg1LjMzMzMzM3pNNTMzLjMzMzMzMyAxMDI0Yy00Ny4wNjEzMzMgMC04NS4zMzMzMzMtMzguMjcyLTg1LjMzMzMzMy04NS4zMzMzMzN2LTEyOGMwLTQ3LjA2MTMzMyAzOC4yNzItODUuMzMzMzMzIDg1LjMzMzMzMy04NS4zMzMzMzRzODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzQgODUuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtNDIuNjY2NjY3IDAgNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMC04NS4zMzMzMzMgMHYxMjhhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCA4NS4zMzMzMzMgMEg1NTQuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjdoNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzM0IDIxLjMzMzMzM3YyMS4zMzMzMzRjMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzQgODUuMzMzMzMzek0zODQgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTMjU0LjYzNDY2NyAyMTMuMzMzMzMzIDM4NCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNTEzLjM2NTMzMyA2ODIuNjY2NjY3IDM4NCA2ODIuNjY2NjY3ek0zODQgMjU2Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzI3OC4xNDQgNjQwIDM4NCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzQ4OS44NTYgMjU2IDM4NCAyNTZ6IiBwLWlkPSIyMDA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDAgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTNTEwLjYzNDY2NyAyMTMuMzMzMzMzIDY0MCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNzY5LjM2NTMzMyA2ODIuNjY2NjY3IDY0MCA2ODIuNjY2NjY3eiBtMC00MjYuNjY2NjY3Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzUzNC4xNDQgNjQwIDY0MCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzc0NS44NTYgMjU2IDY0MCAyNTZ6IiBwLWlkPSIyMDA1MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDY5LjMzMzMzM2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjZTMzgyLjYzNDY2NyAwIDUxMiAwczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNjQxLjM2NTMzMyA0NjkuMzMzMzMzIDUxMiA0NjkuMzMzMzMzeiBtMC00MjYuNjY2NjY2QzQwNi4xNDQgNDIuNjY2NjY3IDMyMCAxMjguODEwNjY3IDMyMCAyMzQuNjY2NjY3UzQwNi4xNDQgNDI2LjY2NjY2NyA1MTIgNDI2LjY2NjY2N3MxOTItODYuMTQ0IDE5Mi0xOTJTNjE3Ljg1NiA0Mi42NjY2NjcgNTEyIDQyLjY2NjY2N3oiIHAtaWQ9IjIwMDU0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";
    const QH_MOTOR_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMzA1NDE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MjEuNiAzMzIuOGgtNTEuMmMtNi42IDAtMTMgMC42LTE5LjMgMS44LTIwLjctMjguNy01NC41LTUzLTgzLjEtNTNINTEyVjEyOGMwLTI4LjMtMjIuOS01MS4yLTUxLjItNTEuMmgtMjU2Yy0yOC4zIDAtNTEuMiAyMi45LTUxLjIgNTEuMnYxNTMuNmMtMjcuNSAwLTU5LjggMjIuNC04MC42IDQ5LjctNS4xLTEuNS0xMC41LTIuMy0xNi4xLTIuM0MyNS41IDMyOC45IDAgMzU0LjQgMCAzODUuOHYzNDkuOWMwIDMxLjQgMjUuNSA1Ni45IDU2LjkgNTYuOSAzLjUgMCA2LjgtMC4yIDkuOC0wLjcgMTguMyAzMi42IDUwLjEgNjIuNSA3OS42IDYyLjVoMi41bC00Ni40IDkyLjdoNzY4bC01MS4yLTEwMi40aC0yLjFjNC40LTIuNCA4LjYtNS4yIDEyLjctOC40IDEyLjUgNS40IDI2LjIgOC40IDQwLjYgOC40aDUxLjJjNTYuNiAwIDEwMi40LTQ1LjggMTAyLjQtMTAyLjRWNDM1LjJjMC01Ni42LTQ1LjgtMTAyLjQtMTAyLjQtMTAyLjR6TTQwOS42IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yIDIyLjktNTEuMiA1MS4yLTUxLjJ6TTI1NiAxMjhjMjguMyAwIDUxLjIgMjIuOSA1MS4yIDUxLjJzLTIyLjkgNTEuMi01MS4yIDUxLjItNTEuMi0yMi45LTUxLjItNTEuMlMyMjcuNyAxMjggMjU2IDEyOHogbTUxMiA2NjUuNkgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZWNjQwSDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OFYzODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjkyOCI+PC9wYXRoPjwvc3ZnPg==";
    const QH_CAR_ICO = "data:image/png;base64,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";
    const QH_REMOTE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNTY5MTIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNzc5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yNzkuNDg3IDI2Mi44NjNjMTIuMjQ5LTguNDY2IDI5LjA0OS01LjM3OCAzNy41MDEgNi44NzEgOC40NjUgMTIuMjQ5IDUuMzkzIDI5LjAzNC02Ljg1NiAzNy41MDEtMTIuMjQ5IDguNDUxLTI5LjA1MSA1LjM3OC0zNy41MDEtNi44NzFzLTUuMzc4LTI5LjA1MSA2Ljg1Ni0zNy41MDF6IG02Ni41NTEtNDUuOTUyYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNTAxIDYuODcxIDguNDUxIDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjI0OSA4LjQ2NS0yOS4wMzYgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUxLTEyLjI0OS01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtLTkwLjE3OSAxNTUuN2MxMi4yNDktOC40NTIgMjkuMDM2LTUuMzc5IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUtMTIuMjUtNS4zNzgtMjkuMDM1IDYuODcxLTM3LjV6IG02Ny4zMTktNDYuNDc0YzEyLjI0OS04LjQ2NSAyOS4wMzQtNS4zNzggMzcuNSA2Ljg1NyA4LjQ2NSAxMi4yNDkgNS4zNzggMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM0IDUuMzc4LTM3LjUtNi44NzEtOC40NTItMTIuMjM1LTUuMzc4LTI5LjAzNyA2Ljg3MS0zNy40ODd6IG02Ni41MzYtNDUuOTUyYzEyLjI0OS04LjQ2NiAyOS4wNDktNS4zNzggMzcuNTAxIDYuODU2IDguNDY1IDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjIzNiA4LjQ2NS0yOS4wMzYgNS4zOTMtMzcuNTAxLTYuODcxLTguNDM3LTEyLjIzNC01LjM3OC0yOS4wMzUgNi44NzEtMzcuNDg2eiBtLTkxLjU1NiAxNTMuNzE0Yy0xMi4yNDkgOC40NTEtMTUuMzIyIDI1LjIzNy02Ljg1NiAzNy41IDguNDUxIDEyLjIzNCAyNS4yMzcgMTUuMzA4IDM3LjQ4NiA2Ljg1NiAxMi4yNDktOC40NSAxNS4zMzctMjUuMjUgNi44NzEtMzcuNDg2LTguNDUxLTEyLjI2My0yNS4yNTItMTUuMzM3LTM3LjUwMS02Ljg3eiBtNjcuMzM0LTQ2LjQ4OWMxMi4yNDgtOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjQ5IDUuMzc4IDI5LjAzNi02Ljg3MSAzNy41MDEtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM3OC0zNy41LTYuODU2LTguNDY2LTEyLjI2NC01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtNjYuNTM1LTQ1LjkzN2MxMi4yNDktOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjM0IDUuMzc4IDI5LjA0OS02Ljg3IDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM2IDUuMzYzLTM3LjQ4Ni02Ljg1Ni04LjQ2Ny0xMi4yNjMtNS4zOTMtMjkuMDUgNi44NTYtMzcuNTAxek0zNDMuODIgNTAwLjAxNGMxMi4yNDktOC40NTIgMjkuMDM0LTUuMzc4IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjIzNSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNDg2LTEyLjI0OSA4LjQ2Ny0yOS4wNTEgNS4zNzgtMzcuNTAxLTYuODU2LTguNDUxLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44NzEtMzcuNXogbTY3LjMxOC00Ni40ODljMTIuMjQ5LTguNDY1IDI5LjAzNi01LjM3OCAzNy41MDEgNi44NzEgOC40NTIgMTIuMjM0IDUuMzkzIDI5LjAzNi02Ljg3MSAzNy40ODYtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM5My0zNy41LTYuODU2LTguNDUyLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44Ny0zNy41MDF6IG02Ni41MzYtNDUuOTUxYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNSA2Ljg3MSA4LjQ2NyAxMi4yNDkgNS4zOTMgMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDggOC40NjUtMjkuMDM0IDUuMzc4LTM3LjQ4NS02Ljg3MS04LjQ2Ny0xMi4yNDktNS4zNzgtMjkuMDM2IDYuODU2LTM3LjUwMXogbTIzLjk2MSAzMjMuOTA4Yy0yMy41MjYtNi40MzYtNDUuMDI0LTIwLjg3My01OS45ODMtNDIuNTMtMTUuMjM2LTIyLjA5Mi0yMS4wNzctNDcuODY1LTE4LjM4MS03Mi41OTZsOTYuMjI0IDE3LjYxNC0xNy44NiA5Ny41MTJ6TTIxMi4xNyAzMDkuMzVjMTIuMjQ4LTguNDUxIDI5LjA0OS01LjM3OCAzNy41IDYuODcxIDguNDUyIDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDY2LTEyLjI0OS01LjM5Mi0yOS4wNDkgNi44NTctMzcuNTAxeiBtLTk5LjU0My0xNDAuMTNjLTMwLjgxOCAyMS4yNjUtMzguNjAzIDYzLjg2OC0xNy4zMzcgOTQuNjU4bDQ2MS41MDIgNjY4LjQxNGMyMS4yOCAzMC44MDQgNjMuODU1IDM4LjYwMiA5NC42NTggMTcuMzM3bDQ5LjI4Ni0zNC4wMjJjLTMxLjI1My0yMi4zNTMtMzIuMjM5LTQzLjY5MS01My4wODQtMTAwLjY1OC0zNC40NTUtMjcuMDkzLTY3LjY1Mi03NS42MzktNzYuNDIxLTg3Ljg2LTE1LjQ4MiA2LjQ2Ni0zMS45NjMgOS4wNDYtNDguMTExIDcuOTg3bDEyLjU2OC02OC42MjRjLTguOTg4LTE4LjM5NC0xNy4wNDgtMzcuMjk2LTI0LjcxNi01Ni4xODVsLTgzLjE0Ny0xNS4yMjFjNi45ODctMjEuNzQzIDIwLjkzMS00MS40NTggNDEuMTY3LTU1LjQ0NiAxOC43MTUtMTIuOTE3IDQwLjA5Ni0xOS4wNDkgNjEuMjMtMTguOTlsNjkuNjY3LTQ3LjkxLTUxLjkyNS03NS4yMzIgMS40NzkgMC4yNDZMMzQwLjI1NSA5NC43NGMtMjEuMjY3LTMwLjc4OS02My44NTUtMzguNjAzLTk0LjY1OC0xNy4zMzZsLTEzMi45NyA5MS44MTZ6TTgzNS4wMSA0OTguNTM0YzI1LjkwNCA5LjQ5NiA0Mi45NjUgMjcuMzM5IDQ5LjM0MyA1NS4zMDIgMzAuOTA2IDExMy43NjQgMjcuNDEyIDE3MC4yNTQgNTguMzQ2IDI4NC4wMzFsLTEzMS40NjIgOTMuODAyYy03MC4zMDYtMjcuMzI0LTExMC4xNC03MC4wNDMtMTIyLjQ5LTE0NC4xMDMtODEuNDk1LTgwLjY2OC05Ny4yNTMtOTkuMzgzLTE0NS4wMTUtMjIwLjExOWw0Ni43OTItMzEuOTYzYzQ4LjkwOSAzOC4yMTEgNjMuNzA5IDUwLjkwOSA5OC4wNSAxMDMuNDg2bDU1Ljc5NC0zOC41My05Ni41NTctMTM5Ljg1NmM2My4wMTMgMTAuMjQ5IDEyNC43MzYgMjQuNDY5IDE4Ny4xOTkgMzcuOTV6IiBwLWlkPSI0Mzc4MCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";

    var qdprobotESP32_BOTH_PIN_Output_Dropdown = [
        ['.P3-21-22（IIC）','3'],
        ['.P4-16-17','4'],
        ['.P5-18-5','5'],
        ['.P6-23-19','6'],
        ['.P7-15-2','7'],
        ['.P8-27-14','8'],
        ['.P9-12-13','9'],
        ['.P10-25-26','10']
    ];

    var qdprobotESP32_BOTH_PIN_Input_Dropdown = [
        ['.P1-36-39','1'],
        ['.P2-34-35','2'],
        ['.P3-21-22（IIC）','3'],
        ['.P4-16-17','4'],
        ['.P5-18-5','5'],
        ['.P6-23-19','6'],
        ['.P7-15-2','7'],
        ['.P8-27-14','8'],
        ['.P9-12-13','9'],
        ['.P10-25-26','10']
    ];

    var qdprobotESP32_L2_PIN_Input_Dropdown = [
        ['.P1-L-36','P1L'],
        ['.P2-L-34','P2L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P1-R-39','P1R'],
        ['P2-R-35','P2R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R']
    ];

    var qdprobotESP32_R2_PIN_Input_Dropdown = [
        ['.P1-R-39','P1R'],
        ['.P2-R-35','P2R'],
        ['.P7-R-2','P7R'],
        ['.P8-R-14','P8R'],
        ['.P9-R-13','P9R'],
        ['.P10-R-26','P10R'],
        ['P1-L-36','P1L'],
        ['P2-L-34','P2L'],
        ['P7-L-15','P7L'],
        ['P8-L-27','P8L'],
        ['P9-L-12','P9L'],
        ['P10-L-25','P10L']
    ];

    var qdprobotESP32_R_PIN_Output_Dropdown = [
        ['.P3-L-21（SDA）','P3L'],
        ['.P4-L-16','P4L'],
        ['.P5-L-18','P5L'],
        ['.P6-L-23','P6L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P3-R-22（SCL）','P3R'],
        ['P4-R-17','P4R'],
        ['P5-R-5','P5R'],
        ['P6-R-19','P6R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R'],
    ];

    var qdprobotESP32_L_PIN_Output_Dropdown = [
        ['.P3-L-21（SDA）','P3L'],
        ['.P4-L-16','P4L'],
        ['.P5-L-18','P5L'],
        ['.P6-L-23','P6L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P1-R-39','P1R'],
        ['P2-R-35','P2R'],
        ['P3-R-22（SCL）','P3R'],
        ['P4-R-17','P4R'],
        ['P5-R-5','P5R'],
        ['P6-R-19','P6R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R']
    ];

    var qdprobotESP32_L_PIN_Input_Dropdown = [
        ['.P1-L-36','P1L'],
        ['.P2-L-34','P2L'],
        ['.P3-L-21（SDA）','P3L'],
        ['.P4-L-16','P4L'],
        ['.P5-L-18','P5L'],
        ['.P6-L-23','P6L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P1-R-39','P1R'],
        ['P2-R-35','P2R'],
        ['P3-R-22（SCL）','P3R'],
        ['P4-R-17','P4R'],
        ['P5-R-5','P5R'],
        ['P6-R-19','P6R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R']
    ];

    Blockly.Blocks.qdp_esp32_chaoshengboSerial = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_chaoshengboSerial,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_UltraSonicDistanceSensor_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [["IO", "1"],["UART", "0"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_BOTH_PIN_Output_Dropdown
                    }                    
                ],
                "tooltip": "超声波测距(串口模式/IO模式)，返回单位为mm,传感器盲区2CM\n串口模式拨码开关状态:IIC=OFF,UART=ON\nIO模式拨码开关状态:IIC=OFF,UART=OFF 切换模式后要断电重启模块！",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //巡线
    Blockly.Blocks.qdp_esp32_grayscale = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_grayscale,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Line_follower_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_BOTH_PIN_Input_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LOCATION',
                        options: [[Blockly.Msg.gray_left,'1'],[Blockly.Msg.gray_right,'2']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [["ON", "1"],["OFF", "0"]]
                    }
                ],
                "tooltip": "左右感应器对白色物体约2CM时有输入(亮灯),\n相反对黑色物体不作反应，通常用来区分白黑",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //舵机360
    Blockly.Blocks.qdp_esp32_servomotor360 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_servomotor360,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin2',
                        options: [[Blockly.Msg.QH_CW,'1'],[Blockly.Msg.QH_CCW,'0']]
                    },
                    {
                        type: 'input_value',
                        name: 'num1'
                    }
                ],
                "tooltip": "舵机,注意选择对应的舵机类型0~360度,不建议长时间运行！\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.qdp_esp32_carInitial = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_carInitial,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinLeft',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pinRight',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "初始化小车两个轮胎对应的引脚\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
            this.setFieldValue("P3L","pinLeft");
            this.setFieldValue("P4L","pinRight");
        }
    }

    Blockly.Blocks.qdp_esp32_carMove = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_carMove,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'tire',
                        options: [
                            [Blockly.Msg.tire_all, '1'],
                            [Blockly.Msg.tire_left, '2'],
                            [Blockly.Msg.tire_right, '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'action',
                        options: [
                            [Blockly.Msg.Car_Forward, '1'],
                            [Blockly.Msg.Car_Backward, '2'],
                            [Blockly.Msg.Car_Stop, '3']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                "tooltip": "",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    }

    //红外遥控器接收
    Blockly.Blocks.qdp_esp32_ir_re2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_ir_re2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_L_PIN_Input_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [["电源Power", "1"],["Menu", "2"],["静音NOSound", "3"],["Mode", "4"],["+", "5"],["返回Back", "6"],["上一Prev", "7"],["启/停Start/stop", "8"],["下一Next", "9"],["0", "10"],["-", "11"],["OK", "12"],
["1", "13"],["2", "14"],["3", "15"],["4", "16"],["5", "17"],["6", "18"],["7", "19"],["8", "20"],["9","21"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [[Blockly.Msg.QH_IrPress,'0'],[Blockly.Msg.QH_IrPressOn,'1']]
                    }                    
                ],
                "tooltip": "对应摇控器的按键输入，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //红外接收解码
    Blockly.Blocks.qdp_ESP32_ir_recv_raw = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_ESP32_ir_recv_raw,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_L_PIN_Input_Dropdown
                    }                 
                ],
                "tooltip": "红外解码对应遥控键值,并打印在串口(115200)，请复制保存数组和长度值，用在发射数组中！",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //红外遥控器接收
    Blockly.Blocks.qdp_esp32_ir_send_nec = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_ir_send_nec,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [['RC5', 'RC5'],['NEC', 'NEC'],['Whynter', 'Whynter'],['Sony', 'Sony'],['RC6', 'RC6'],['DISH', 'DISH'],['SharpRaw', 'SharpRaw'],['SAMSUNG', 'SAMSUNG']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:qdprobotESP32_R_PIN_Output_Dropdown
                    },    
                    {
                        type: 'input_value',
                        name: 'data'
                    }                                 
                ],
                "tooltip": "发送指定类型的红外数据，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //红外发射数组
    Blockly.Blocks.QDP_esp32_ir_send_raw = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_ir_send_raw,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options: [["#1", "1"],["#2", "2"],["#3", "3"],["#4", "4"],["#5", "5"],["#6", "6"],["#7", "7"],["#8", "8"],["#9", "9"],["#10", "10"],["#11", "11"],["#12", "12"],["#13", "13"],["#14", "14"],["#15", "15"],["#16", "16"]]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                    {
                        type: 'input_value',
                        name: 'length'
                    },
                    {
                        type: 'input_value',
                        name: 'freq'
                    }                                     
                ],
                "tooltip": "将读取到的红外数组放入这里发送，注意数组长度要对应长度，不同数组时要改变编号！",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;


