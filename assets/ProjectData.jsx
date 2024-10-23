import Sticky_Cover from "../assets/Sticky_Notes_CapScreen/Cover.gif"
import Sticky_Fn1 from "../assets/Sticky_Notes_CapScreen/view.gif"
import Sticky_Fn2 from "../assets/Sticky_Notes_CapScreen/add.gif"
import Sticky_Fn3 from "../assets/Sticky_Notes_CapScreen/edit.gif"
import Sticky_Fn4 from "../assets/Sticky_Notes_CapScreen/delete.gif"
import Sticky_Fn5 from "../assets/Sticky_Notes_CapScreen/filter.gif"


import Asset_Cover from "../assets/Asset_Calculation_CapScreen/used.gif"
import Asset_Fn1 from "../assets/Asset_Calculation_CapScreen/used.gif"
import Asset_Fn2 from "../assets/Asset_Calculation_CapScreen/newrecord.gif"
import Asset_Fn3 from "../assets/Asset_Calculation_CapScreen/delete.gif"
import Asset_Fn4 from "../assets/Asset_Calculation_CapScreen/display_delete.gif"
import Asset_Fn5 from "../assets/Asset_Calculation_CapScreen/graph.gif"
import Asset_Fn6 from "../assets/Asset_Calculation_CapScreen/filter.gif"
import Asset_Fn7 from "../assets/Asset_Calculation_CapScreen/calculate.gif"
import Asset_Fn8 from "../assets/Asset_Calculation_CapScreen/color.gif"


import Listen_Cover from "../assets/Listening_SplitWin_CapScreen/pause.gif"
import Listen_Fn1 from "../assets/Listening_SplitWin_CapScreen/open.gif"
import Listen_Fn2 from "../assets/Listening_SplitWin_CapScreen/pause.gif"
import Listen_Fn3 from "../assets/Listening_SplitWin_CapScreen/switch.gif"
import Listen_Fn4 from "../assets/Listening_SplitWin_CapScreen/key.gif"

import Compare_Cover from "../assets/Media_Compare_CapScreen/submit.gif"
import Compare_Fn1 from "../assets/Media_Compare_CapScreen/UI.gif"
import Compare_Fn2 from "../assets/Media_Compare_CapScreen/showFolder.gif"
import Compare_Fn3 from "../assets/Media_Compare_CapScreen/submit.gif"
import Compare_Fn4 from "../assets/Media_Compare_CapScreen/copy.gif"
import Compare_Fn5 from "../assets/Media_Compare_CapScreen/check.gif"


import Ins_Cover from "../assets/IG_Multi_Media_CapScreen/Preview.gif"
import Ins_Fn1 from "../assets/IG_Multi_Media_CapScreen/sessionLogin.gif"
import Ins_Fn2 from "../assets/IG_Multi_Media_CapScreen/usepwLogin.gif"
import Ins_Fn3 from "../assets/IG_Multi_Media_CapScreen/inputcontent.gif"
import Ins_Fn4 from "../assets/IG_Multi_Media_CapScreen/tagUser.gif"
import Ins_Fn5 from "../assets/IG_Multi_Media_CapScreen/Preview.gif"
import Ins_Fn6 from "../assets/IG_Multi_Media_CapScreen/order.gif"
import Ins_Fn7 from "../assets/IG_Multi_Media_CapScreen/post.gif"
import Ins_Fn8 from "../assets/IG_Multi_Media_CapScreen/ins.gif"



const ProjectDetail = [
    {
        "id": 1,
        "Name": "Sticky Notes Editor",
        "Introduction": "This is Sticky Notes Editor, The main function of this Project is to Create New Notes, Edit Current Notes, Delete unused Notes, Filter Notes by Category and Sub-Category.",
        "GithubURL": "https://github.com/Adalaupy/Sticky_note_v2",
        "TryMe": "/project/try/stickynote",
        "CoverPhoto": Sticky_Cover,
        "tags": [
            "React",
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "Python"
        ],
        "detail": {
            "function": [
                {
                    "fn_ID": 1,
                    "Fn_Text": "Sticky Notes Display",
                    "Fn_Img": Sticky_Fn1,
                },
                {
                    "fn_ID": 2,
                    "Fn_Text": "Add New Sticky Notes",
                    "Fn_Img": Sticky_Fn2
                },
                {
                    "fn_ID": 3,
                    "Fn_Text": "Double Click and Edit current existing Sticky Notes",
                    "Fn_Img": Sticky_Fn3
                },
                {
                    "fn_ID": 4,
                    "Fn_Text": "Delete unused Sticky Notes",
                    "Fn_Img": Sticky_Fn4
                },
                {
                    "fn_ID": 5,
                    "Fn_Text": "Filter Sticky Notes by Category and Sub-Category",
                    "Fn_Img": Sticky_Fn5
                }
            ],
            "packages": [
                "react-rte",
                "react-html-parser",
                "react-icons",
                "FastAPI",
                "uvicorn"
            ],
            "challenge_improvement": [
                "UI design",
                "More Text Editor Function, e.g. highlight, bold font",
                "Storage Method of Sticky Notes Content (Currently using Json file in Local Storage)"
            ]
        }
    },
    {
        "id": 2,
        "Name": "Asset Calculation",
        "Introduction": "This is Asset Calculation, This Project is created in hope of providing a general overview of my asset as well as keeping a historical financial record, the data and the corresponding charts can be displayed in an HTML page, which also allows us to input some new records, of course you can update and delete records as well",
        "TryMe": "/project/try/assetcalculation",
        "GithubURL": "https://github.com/Adalaupy/Asset_Calculation_v2/tree/v2",
        "CoverPhoto": Asset_Cover,
        "tags": [
            "React",
            "HTML",
            "CSS",
            "JAVASCRIPT"
        ],
        "detail": {
            "function": [
                {
                    "fn_ID": 1,
                    "Fn_Text": "Hide unused element",
                    "Fn_Img": Asset_Fn1
                },
                {
                    "fn_ID": 2,
                    "Fn_Text": "Create New Record and exchange other currency to HKD",
                    "Fn_Img": Asset_Fn2
                },
                {
                    "fn_ID": 3,
                    "Fn_Text": "Delete Record",
                    "Fn_Img": Asset_Fn3
                },
                {
                    "fn_ID": 4,
                    "Fn_Text": "Display all Record",
                    "Fn_Img": Asset_Fn4
                },
                {
                    "fn_ID": 5,
                    "Fn_Text": "Observe the change of your finanical status by Chart",
                    "Fn_Img": Asset_Fn5
                },
                {
                    "fn_ID": 6,
                    "Fn_Text": "Filter out record by YearMonth, Source and Asset Type",
                    "Fn_Img": Asset_Fn6
                },
                {
                    "fn_ID": 7,
                    "Fn_Text": "Calculate your Asset, Liability and Capital",
                    "Fn_Img": Asset_Fn7
                },
                {
                    "fn_ID": 8,
                    "Fn_Text": "Pick Theme Color by color picker",
                    "Fn_Img": Asset_Fn8
                }
            ],
            "packages": [
                "@mui/material @emotion/react @emotion/styled",
                "dayjs",
                "@mui/x-date-pickers",
                "@mui/x-data-grid",
                "@mui/x-charts",
                "mui-color-input",
                "@mui/icons-material",
                "@mui/x-data-grid-generator"
            ],
            "challenge_improvement": [
                "Export to Excel Function",
                "UI design",
                "More Filter Options",
                "Exchange for other currency",
                "Only Single Selection accepted for Filters",
                "More Columns for eact Record"
            ]
        }
    },
    {
        "id": 3,
        "Name": "Listening Practice Tool",
        "Introduction": "Listening is important for learning a new language, personally speaking, I like to practice it by my playing video on Youtube and use notepad to mark down what I have listened. But in most case, it's quite hard to follow the speed of the video and forced to drag the mouse pointer from notepad to my browser to press a 'stop' button or seek backward, and vice versa to continue. This program is designed for consolidating these several actions into just one step and enhancing your listening practicing efficiency.",
        "GithubURL": "https://github.com/Adalaupy/listening_practice_split",
        "CoverPhoto": Listen_Cover,
        "tags": [
            "Python"
        ],
        "detail": {
            "function": [
                {
                    "fn_ID": 1,
                    "Fn_Text": "In case you have multiple monitors, you can click on it and a browser and notepad file will automatically pop up on the selected screen",
                    "Fn_Img": Listen_Fn1
                },
                {
                    "fn_ID": 2,
                    "Fn_Text": "Press 'pause' on the keyboard and the video will be paused, the pointer is still on the notepad file, so you can continue to type , press 'pause' again to resume.",
                    "Fn_Img": Listen_Fn2
                },
                {
                    "fn_ID": 3,
                    "Fn_Text": "Press 'PrtSc' on the keyboard to switch the window among browser and notepad file, so you can seek backward without dragging the mouse pointer.",
                    "Fn_Img": Listen_Fn3
                },
                {
                    "fn_ID": 4,
                    "Fn_Text": "You can choose other keys to 'pause' and 'switch' the window.",
                    "Fn_Img": Listen_Fn4
                }
            ],
            "packages": [
                "keyboard",
                "win32gui",
                "win32com.client",
                "win32con",
                "win32api",
                "pynput",
                "subprocess",
                "screeninfo",
                "time"
            ],
            "challenge_improvement": [
                "You can only choose another keys through the code, not through the GUI",
                "The video player must accept 'space' to pause like Youtube, otherwise the pause function may not work",
                "Only accept Google Chrome and Notepad, other browser and text editor may not work"
            ]
        }
    },
    {
        "id": 4,
        "Name": "Folder Media Comparison",
        "Introduction": "This project is created for media transfer across different folders, despite the change of the file name, this program can identify whether the items from source folders are already migrated to destination folder by comparing the content inside, if not exists, the files will be automatically transfer to source folder. Multiple Source path and destination path is allowed for each run.",
        "GithubURL": "https://github.com/Adalaupy/folder_media_compare",
        "CoverPhoto": Compare_Cover,
        "tags": [
            "Python"
        ],
        "detail": {
            "function": [
                {
                    "fn_ID": 1,
                    "Fn_Text": "Tkinter UI to submit the source and destination path, Multiple Source path and destination path is allowed.",
                    "Fn_Img": Compare_Fn1
                },
                {
                    "fn_ID": 2,
                    "Fn_Text": "We got 2 source folders and 2 destination folders, which some of files already exists in destination folder.",
                    "Fn_Img": Compare_Fn2
                },
                {
                    "fn_ID": 3,
                    "Fn_Text": "Press 'submit' in the Tkinter UI once ready and the program start.",
                    "Fn_Img": Compare_Fn3
                },
                {
                    "fn_ID": 4,
                    "Fn_Text": "the program start to compare the files inside the source folders and destination folders, and identity the duplications even with different file name, and copy the new files to the 1st Destination folder, and the 2nd Destination folder by default",
                    "Fn_Img": Compare_Fn4
                },
                {
                    "fn_ID": 5,
                    "Fn_Text": "the program will not re-copy the files that already exists in the destination folders.",
                    "Fn_Img": Compare_Fn5
                }
            ],
            "packages": [
                "tkinter",
                "glob",
                "os",
                "PIL",
                "moviepy.editor",
                "shutil",
                "io"
            ],
            "challenge_improvement": [
                "Performance and speed of the program is uncertain when the number of files is large.",
                "Tkinter UI is not responsive when the size changed.",
                "Limited file types",
                "Accepted Image Types - '.jpg', '.jpeg', '.png', '.bmp' , '*.gif'",
                "Accepted Video Types - ''.mp4', '.avi', '.mkv', '.mov' ",
                "Folder path have to input manually"
            ]
        }
    },
    {
        "id": 5,
        "Name": "Instagram Media Resize",
        "Introduction": "Instagram allow users to upload multiple media at once for each post, however, the photos are automatically cropped if the aspect ratio of them are not consistent. To advoid cropping on Instagram, users have to make sure that all the media that they upload are in the union aspect ratio, or they may resize the photo by using some thrid-party app which take some times to do it. The main purpose of this project is to facilitate the resizing and uploading process. After login, user can choose the photos/video that they need to upload for the same post, this application will automatically resize the photos and video and post them without any cropping.",
        "TryMe": "/project/try/igmultimedia",
        "GithubURL": "https://github.com/Adalaupy/IG_multi_Media_v2",
        "CoverPhoto": Ins_Cover,
        "tags": [
            "React",
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "Python"
        ],
        "detail": {
            "function": [
                {
                    "fn_ID": 1,
                    "Fn_Text": "Find your previous login record and login automatically",
                    "Fn_Img": Ins_Fn1
                },
                {
                    "fn_ID": 2,
                    "Fn_Text": "If no login session history record, you can login manually",
                    "Fn_Img": Ins_Fn2
                },
                {
                    "fn_ID": 3,
                    "Fn_Text": "Input Captins, Hashtags, and Media for the post",
                    "Fn_Img": Ins_Fn3
                },
                {
                    "fn_ID": 4,
                    "Fn_Text": "Tag Other Users on specific position of the photo (Only the 1st one)",
                    "Fn_Img": Ins_Fn4
                },
                {
                    "fn_ID": 5,
                    "Fn_Text": "When Press 'Preview', the photos will be resized and shown in the preview area with the caption and hashtags",
                    "Fn_Img": Ins_Fn5
                },
                {
                    "fn_ID": 6,
                    "Fn_Text": "You can re-arrage the order of the photos by drag and drop",
                    "Fn_Img": Ins_Fn6
                },
                {
                    "fn_ID": 7,
                    "Fn_Text": "Once ready, press 'Post' to post the photos and video to Instagram",
                    "Fn_Img": Ins_Fn7
                },
                {
                    "fn_ID": 8,
                    "Fn_Text": "Result as shown",
                    "Fn_Img": Ins_Fn8
                }
            ],
            "packages": [
                "fastapi",
                "uvicorn",
                "Pillow",
                "moviepy",
                "python-multipart"
            ],
            "challenge_improvement": [
                "Limited file types, e.g. svg is not supported",
                "UI design",
                "Only Support Posting but not Story",
                "Tagged Users are not shown in Preview",
                "If one Vertical orientation photo exists, all the photos will be resized to Vertical orientation"
            ]
        }
    }
]


export default ProjectDetail